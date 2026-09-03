import { McpServer, type CallToolResult } from "@modelcontextprotocol/server";
import type { Config } from "./config.js";
import { loadConfig } from "./config.js";
import { createKomodoClient, normalizeKomodoError } from "./komodo.js";
import { InvocationLimiter } from "./limiter.js";
import { invokeOperation, selectOperations, type Operation } from "./operations.js";
import { toSafeJson } from "./redact.js";

function success(value: unknown): CallToolResult {
  const data = toSafeJson(value);
  return {
    content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
    structuredContent: data,
  };
}

function failure(error: unknown): CallToolResult {
  const data = toSafeJson(normalizeKomodoError(error));
  return {
    isError: true,
    content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
  };
}

function registerOperation(
  server: McpServer,
  operation: Operation,
  config: Config,
  limiter: InvocationLimiter,
) {
  const client = createKomodoClient(config);
  server.registerTool(
    operation.name,
    {
      title: operation.title,
      description: operation.description,
      inputSchema: operation.input,
      annotations: operation.annotations,
      _meta: { category: operation.category },
    },
    async (args, context) => {
      const timeout = AbortSignal.timeout(operation.timeoutMs ?? config.requestTimeoutMs);
      const combinedSignal = AbortSignal.any([context.mcpReq.signal, timeout]);
      try {
        return success(
          await limiter.run(() =>
            invokeOperation(client, operation, args, {
              signal: combinedSignal,
            }),
          ),
        );
      } catch (error) {
        console.error(`[${operation.name}]`, toSafeJson(normalizeKomodoError(error)));
        return failure(error);
      }
    },
  );
}

export function buildServer(config: Config = loadConfig()): McpServer {
  const limiter = new InvocationLimiter(config.maxConcurrency, config.rateLimitPerMinute);
  const server = new McpServer(
    { name: "komodo-mcp", version: "0.1.0" },
    {
      capabilities: { tools: {} },
      instructions:
        "Complete native Komodo API. Use komodo_discover to inspect operation parameters, prefer komodo_read before mutations, and use wait=true or komodo_update_wait for executions.",
      cacheHints: {
        "server/discover": { ttlMs: 300_000, cacheScope: "private" },
        "tools/list": { ttlMs: 300_000, cacheScope: "private" },
      },
    },
  );

  for (const operation of selectOperations(config.mode)) {
    registerOperation(server, operation, config, limiter);
  }
  return server;
}
