import { describe, expect, it } from "vitest";
import { loadConfig } from "../src/config.js";

const base = {
  KOMODO_ADDRESS: "https://komodo.example.com/",
  KOMODO_API_KEY: "K-test",
  KOMODO_API_SECRET: "S-test",
};

describe("loadConfig", () => {
  it("loads a full configuration and normalizes the address", () => {
    const config = loadConfig(base);
    expect(config.address).toBe("https://komodo.example.com");
    expect(config.mode).toBe("full");
    expect(config.maxConcurrency).toBe(8);
    expect(config.rateLimitPerMinute).toBe(120);
  });

  it("rejects unsupported modes", () => {
    expect(() => loadConfig({ ...base, KOMODO_MCP_MODE: "legacy" })).toThrow(
      "Invalid KOMODO_MCP_MODE",
    );
  });

  it("requires credentials", () => {
    expect(() => loadConfig({ KOMODO_ADDRESS: base.KOMODO_ADDRESS })).toThrow(
      "KOMODO_API_KEY",
    );
  });
});
