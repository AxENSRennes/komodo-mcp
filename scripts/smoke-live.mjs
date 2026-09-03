import { Client } from "@modelcontextprotocol/client";
import { StdioClientTransport } from "@modelcontextprotocol/client/stdio";

const transport = new StdioClientTransport({
  command: new URL("../bin/komodo-mcp", import.meta.url).pathname,
  stderr: "pipe",
});
const client = new Client(
  { name: "komodo-mcp-live-smoke", version: "1.0.0" },
  { versionNegotiation: { mode: { pin: "2026-07-28" } } },
);

try {
  await client.connect(transport);
  const tools = await client.listTools();
  const discovery = await client.callTool({
    name: "komodo_discover",
    arguments: { operation: "CreateStack" },
  });
  const version = await client.callTool({
    name: "komodo_read",
    arguments: { operation: "GetVersion", params: {} },
  });
  const servers = await client.callTool({
    name: "komodo_read",
    arguments: { operation: "ListServers", params: {} },
  });
  process.stdout.write(
    `${JSON.stringify({
      protocolEra: client.getProtocolEra(),
      toolCount: tools.tools.length,
      discoveredOperation: discovery.structuredContent,
      version: version.structuredContent,
      servers: servers.structuredContent,
    }, null, 2)}\n`,
  );
} finally {
  await client.close();
}
