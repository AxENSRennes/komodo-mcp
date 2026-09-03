import path from "node:path";
import { fileURLToPath } from "node:url";
import { Client } from "@modelcontextprotocol/client";
import { StdioClientTransport } from "@modelcontextprotocol/client/stdio";
import { afterEach, describe, expect, it } from "vitest";

const directory = path.dirname(fileURLToPath(import.meta.url));
const entrypoint = path.resolve(directory, "../dist/index.js");
let client: Client | undefined;

afterEach(async () => {
  await client?.close();
  client = undefined;
});

describe("MCP 2026 transport", () => {
  it("negotiates 2026-07-28 and exposes the curated tool list", async () => {
    const transport = new StdioClientTransport({
      command: process.execPath,
      args: [entrypoint],
      env: {
        PATH: process.env.PATH || "",
        KOMODO_ADDRESS: "https://komodo.invalid",
        KOMODO_API_KEY: "K-test",
        KOMODO_API_SECRET: "S-test",
        KOMODO_MCP_MODE: "readonly",
      },
      stderr: "pipe",
    });
    client = new Client(
      { name: "komodo-mcp-test", version: "1.0.0" },
      { versionNegotiation: { mode: { pin: "2026-07-28" } } },
    );

    await client.connect(transport);
    expect(client.getProtocolEra()).toBe("modern");

    const result = await client.listTools();
    const names = result.tools.map((tool) => tool.name);
    expect(names).toContain("komodo_read");
    expect(names).not.toContain("komodo_write");
    expect(result.cacheScope).toBe("private");
    expect(result.ttlMs).toBe(300_000);
  });
});
