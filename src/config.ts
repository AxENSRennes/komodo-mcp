export const MODES = ["readonly", "full"] as const;

export type Mode = (typeof MODES)[number];

export interface Config {
  address: string;
  apiKey: string;
  apiSecret: string;
  mode: Mode;
  requestTimeoutMs: number;
  maxConcurrency: number;
  rateLimitPerMinute: number;
}

function required(env: NodeJS.ProcessEnv, name: string): string {
  const value = env[name]?.trim();
  if (!value) throw new Error(`Missing required environment variable ${name}`);
  return value;
}

function parseMode(value: string | undefined): Mode {
  const mode = value?.trim().toLowerCase();
  if (mode && (MODES as readonly string[]).includes(mode)) return mode as Mode;
  if (mode) throw new Error(`Invalid KOMODO_MCP_MODE '${mode}'. Expected: ${MODES.join(", ")}`);
  return "full";
}

function parsePositiveInt(value: string | undefined, fallback: number): number {
  if (!value) return fallback;
  const parsed = Number.parseInt(value, 10);
  if (!Number.isSafeInteger(parsed) || parsed <= 0) {
    throw new Error(`Expected a positive integer, received '${value}'`);
  }
  return parsed;
}

export function loadConfig(env: NodeJS.ProcessEnv = process.env): Config {
  const address = required(env, "KOMODO_ADDRESS").replace(/\/+$/, "");
  let url: URL;
  try {
    url = new URL(address);
  } catch {
    throw new Error("KOMODO_ADDRESS must be a valid absolute URL");
  }
  if (!new Set(["http:", "https:"]).has(url.protocol)) {
    throw new Error("KOMODO_ADDRESS must use http or https");
  }

  return {
    address,
    apiKey: required(env, "KOMODO_API_KEY"),
    apiSecret: required(env, "KOMODO_API_SECRET"),
    mode: parseMode(env.KOMODO_MCP_MODE),
    requestTimeoutMs: parsePositiveInt(env.KOMODO_MCP_TIMEOUT_MS, 30_000),
    maxConcurrency: parsePositiveInt(env.KOMODO_MCP_MAX_CONCURRENCY, 8),
    rateLimitPerMinute: parsePositiveInt(env.KOMODO_MCP_RATE_LIMIT_PER_MINUTE, 120),
  };
}
