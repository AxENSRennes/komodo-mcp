import type { ToolAnnotations } from "@modelcontextprotocol/server";
import { z } from "zod";
import { operationCatalog, type NativeChannel } from "./generated/catalog.js";
import type { KomodoApi } from "./komodo.js";

export type Category = "discovery" | "read" | "write" | "execute" | "terminal" | "update";

export interface OperationContext {
  signal?: AbortSignal;
}

export interface Operation {
  name: string;
  title: string;
  description: string;
  category: Category;
  input: z.ZodTypeAny;
  annotations: ToolAnnotations;
  timeoutMs?: number;
  run: (client: KomodoApi, args: any, context: OperationContext) => Promise<unknown>;
}

type NativeCall = (operation: string, params: Record<string, unknown>) => Promise<unknown>;

const readNames = operationCatalog.read.map(({ name }) => name) as [string, ...string[]];
const writeNames = operationCatalog.write.map(({ name }) => name) as [string, ...string[]];
const executeNames = operationCatalog.execute.map(({ name }) => name) as [string, ...string[]];
const params = z.record(z.string(), z.unknown()).default({});
const identifier = z.string().trim().min(1).max(300);

const readOnly: ToolAnnotations = {
  readOnlyHint: true,
  idempotentHint: true,
  openWorldHint: true,
};
const mutating: ToolAnnotations = {
  readOnlyHint: false,
  destructiveHint: true,
  idempotentHint: false,
  openWorldHint: true,
};

function operation(definition: Operation): Operation {
  return definition;
}

function callNative(
  client: KomodoApi,
  channel: "read" | "write" | "execute",
  nativeOperation: string,
  nativeParams: Record<string, unknown>,
) {
  return (client[channel] as unknown as NativeCall)(nativeOperation, nativeParams);
}

function assertNotAborted(context: OperationContext) {
  if (context.signal?.aborted) throw new Error("Operation cancelled by MCP client");
}

async function pause(ms: number, context: OperationContext) {
  assertNotAborted(context);
  await new Promise<void>((resolve, reject) => {
    const timer = setTimeout(resolve, ms);
    context.signal?.addEventListener(
      "abort",
      () => {
        clearTimeout(timer);
        reject(new Error("Operation cancelled by MCP client"));
      },
      { once: true },
    );
  });
}

async function waitForUpdate(
  client: KomodoApi,
  id: string,
  deadline: number,
  pollIntervalMs: number,
  context: OperationContext,
) {
  while (true) {
    assertNotAborted(context);
    const update = await client.read("GetUpdate", { id });
    if (update.status === "Complete") return update;
    if (Date.now() >= deadline) throw new Error(`Timed out waiting for Komodo update ${id}`);
    await pause(pollIntervalMs, context);
  }
}

function updateIds(result: unknown): string[] {
  const candidates = Array.isArray(result) ? result : [result];
  const ids: string[] = [];
  for (const candidate of candidates) {
    if (!candidate || typeof candidate !== "object") continue;
    const record = candidate as Record<string, unknown>;
    const value = record.status === "Ok" && record.data ? record.data : record;
    if (!value || typeof value !== "object") continue;
    const id = (value as { _id?: { $oid?: unknown } })._id?.$oid;
    if (typeof id === "string") ids.push(id);
  }
  return ids;
}

function catalogEntries(channel?: NativeChannel) {
  const channels: NativeChannel[] = channel ? [channel] : ["read", "write", "execute"];
  return channels.flatMap((item) =>
    operationCatalog[item].map((entry) => ({ channel: item, ...entry })),
  );
}

const terminalTarget = z.discriminatedUnion("type", [
  z.object({ type: z.literal("server"), server: identifier }),
  z.object({ type: z.literal("container"), server: identifier, container: identifier }),
  z.object({ type: z.literal("stack"), stack: identifier, service: identifier }),
  z.object({ type: z.literal("deployment"), deployment: identifier }),
]);

export const operations: Operation[] = [
  operation({
    name: "komodo_discover",
    title: "Discover Komodo Operations",
    description:
      "Discover every native read, write, and execute operation supported by the installed Komodo client. Pass an exact operation name to retrieve its parameter documentation before calling it.",
    category: "discovery",
    input: z.object({
      channel: z.enum(["read", "write", "execute"]).optional(),
      operation: z.string().trim().min(1).optional(),
      query: z.string().trim().min(1).optional(),
      limit: z.number().int().min(1).max(500).default(100),
    }),
    annotations: readOnly,
    run: async (_client, args) => {
      const entries = catalogEntries(args.channel);
      if (args.operation) {
        const found = entries.find(
          (entry) => entry.name.toLowerCase() === args.operation.toLowerCase(),
        );
        if (!found) throw new Error(`Unknown Komodo operation '${args.operation}'`);
        return found;
      }
      const query = args.query?.toLowerCase();
      const filtered = query
        ? entries.filter(
            (entry) =>
              entry.name.toLowerCase().includes(query) ||
              entry.summary.toLowerCase().includes(query),
          )
        : entries;
      return {
        counts: {
          read: operationCatalog.read.length,
          write: operationCatalog.write.length,
          execute: operationCatalog.execute.length,
          total:
            operationCatalog.read.length +
            operationCatalog.write.length +
            operationCatalog.execute.length,
        },
        returned: Math.min(filtered.length, args.limit),
        operations: filtered
          .slice(0, args.limit)
          .map(({ channel, name, summary }) => ({ channel, name, summary })),
      };
    },
  }),
  operation({
    name: "komodo_read",
    title: "Call Komodo Read API",
    description:
      "Call any native Komodo read operation. Use komodo_discover with the exact operation name first when its parameters are not already known.",
    category: "read",
    input: z.object({ operation: z.enum(readNames), params }),
    annotations: readOnly,
    run: (client, args) => callNative(client, "read", args.operation, args.params),
  }),
  operation({
    name: "komodo_write",
    title: "Call Komodo Write API",
    description:
      "Call any native Komodo write operation, including create, update, rename, permission, variable, secret, and delete operations. Some choices are destructive.",
    category: "write",
    input: z.object({ operation: z.enum(writeNames), params }),
    annotations: mutating,
    run: (client, args) => callNative(client, "write", args.operation, args.params),
  }),
  operation({
    name: "komodo_execute",
    title: "Call Komodo Execute API",
    description:
      "Call any native Komodo execution, including deploy, build, pull, lifecycle, backup, restore, prune, and destroy operations. Some choices are destructive. Set wait=true to return completed updates and logs.",
    category: "execute",
    input: z.object({
      operation: z.enum(executeNames),
      params,
      wait: z.boolean().default(false),
      timeout_seconds: z.number().int().min(1).max(1800).default(600),
      poll_interval_ms: z.number().int().min(250).max(10_000).default(1000),
    }),
    annotations: mutating,
    timeoutMs: 1_800_000,
    run: async (client, args, context) => {
      const initial = await callNative(client, "execute", args.operation, args.params);
      if (!args.wait) return initial;
      const ids = updateIds(initial);
      if (ids.length === 0) return initial;
      const deadline = Date.now() + args.timeout_seconds * 1000;
      const completed = await Promise.all(
        ids.map((id) => waitForUpdate(client, id, deadline, args.poll_interval_ms, context)),
      );
      return { initial, completed };
    },
  }),
  operation({
    name: "komodo_terminal",
    title: "Run Command Through Komodo Terminal",
    description:
      "Run a command through native Komodo terminals on a server, container, Stack service, or Deployment. This is unrestricted remote command execution and may be destructive.",
    category: "terminal",
    input: z.object({
      target: terminalTarget,
      command: z.string().min(1).max(100_000),
      mode: z.enum(["exec", "terminal"]).default("exec"),
      shell: z.string().trim().min(1).max(100).default("sh"),
      terminal: z.string().trim().min(1).max(200).default("mcp"),
      recreate: z.enum(["Never", "Always", "DifferentCommand"]).default("Always"),
      max_output_bytes: z.number().int().min(1024).max(10_000_000).default(1_000_000),
    }),
    annotations: mutating,
    timeoutMs: 1_800_000,
    run: async (client, args) => {
      let output = "";
      let outputBytes = 0;
      let truncated = false;
      let exitCode: string | undefined;
      const callbacks = {
        onLine: (line: string) => {
          if (truncated) return;
          const chunk = `${line}\n`;
          const remaining = args.max_output_bytes - outputBytes;
          if (remaining <= 0) {
            truncated = true;
            return;
          }
          const buffer = Buffer.from(chunk);
          const accepted = buffer.subarray(0, remaining).toString();
          output += accepted;
          outputBytes += Buffer.byteLength(accepted);
          if (buffer.byteLength > remaining) truncated = true;
        },
        onFinish: (code: string) => {
          exitCode = code;
        },
      };
      const common = {
        command: args.command,
        terminal: args.terminal,
        recreate: args.recreate,
      };
      switch (args.target.type) {
        case "server":
          await client.execute_server_terminal(
            {
              server: args.target.server,
              command: args.command,
              terminal: args.terminal,
              init: { command: args.shell, recreate: args.recreate },
            },
            callbacks,
          );
          break;
        case "container":
          if (args.mode === "exec") {
            await client.execute_container_exec(
              { ...common, server: args.target.server, container: args.target.container, shell: args.shell },
              callbacks,
            );
          } else {
            await client.execute_container_terminal(
              {
                server: args.target.server,
                container: args.target.container,
                command: args.command,
                terminal: args.terminal,
                init: { command: args.shell, recreate: args.recreate },
              },
              callbacks,
            );
          }
          break;
        case "stack":
          if (args.mode === "exec") {
            await client.execute_stack_exec(
              { ...common, stack: args.target.stack, service: args.target.service, shell: args.shell },
              callbacks,
            );
          } else {
            await client.execute_stack_service_terminal(
              {
                stack: args.target.stack,
                service: args.target.service,
                command: args.command,
                terminal: args.terminal,
                init: { command: args.shell, recreate: args.recreate },
              },
              callbacks,
            );
          }
          break;
        case "deployment":
          if (args.mode === "exec") {
            await client.execute_deployment_exec(
              { ...common, deployment: args.target.deployment, shell: args.shell },
              callbacks,
            );
          } else {
            await client.execute_deployment_terminal(
              {
                deployment: args.target.deployment,
                command: args.command,
                terminal: args.terminal,
                init: { command: args.shell, recreate: args.recreate },
              },
              callbacks,
            );
          }
          break;
      }
      return { exitCode: exitCode ?? null, output, truncated, outputBytes };
    },
  }),
  operation({
    name: "komodo_update_wait",
    title: "Wait for Komodo Update",
    description: "Resume waiting for an existing Komodo update and return its final status and logs.",
    category: "update",
    input: z.object({
      id: identifier,
      timeout_seconds: z.number().int().min(1).max(1800).default(600),
      poll_interval_ms: z.number().int().min(250).max(10_000).default(1000),
    }),
    annotations: readOnly,
    timeoutMs: 1_800_000,
    run: (client, args, context) =>
      waitForUpdate(
        client,
        args.id,
        Date.now() + args.timeout_seconds * 1000,
        args.poll_interval_ms,
        context,
      ),
  }),
];

const MUTATING_TOOLS = new Set(["komodo_write", "komodo_execute", "komodo_terminal"]);

export function selectOperations(mode: "readonly" | "full") {
  if (mode === "full") return operations;
  return operations.filter((item) => !MUTATING_TOOLS.has(item.name));
}

export async function invokeOperation(
  client: KomodoApi,
  definition: Operation,
  input: unknown,
  context: OperationContext = {},
) {
  const args = definition.input.parse(input);
  const pending = definition.run(client, args, context);
  if (!context.signal) return pending;
  if (context.signal.aborted) throw new Error("Operation cancelled");

  return new Promise<unknown>((resolve, reject) => {
    const onAbort = () => reject(new Error("Operation cancelled or timed out"));
    context.signal?.addEventListener("abort", onAbort, { once: true });
    pending.then(resolve, reject).finally(() => context.signal?.removeEventListener("abort", onAbort));
  });
}
