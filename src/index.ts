#!/usr/bin/env node
import { serveStdio } from "@modelcontextprotocol/server/stdio";
import { loadConfig } from "./config.js";
import { buildServer } from "./server.js";

try {
  const config = loadConfig();
  const handle = serveStdio(() => buildServer(config), {
    legacy: "reject",
    onerror: (error) => console.error("[komodo-mcp]", error),
  });

  for (const signal of ["SIGINT", "SIGTERM"] as const) {
    process.once(signal, () => {
      void handle.close().finally(() => process.exit(0));
    });
  }
} catch (error) {
  console.error(`[komodo-mcp] ${error instanceof Error ? error.message : String(error)}`);
  process.exitCode = 1;
}

