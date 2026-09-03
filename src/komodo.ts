import "./polyfills.js";
import { KomodoClient } from "komodo_client";
import type { Config } from "./config.js";

export type KomodoApi = ReturnType<typeof KomodoClient>;

export function createKomodoClient(config: Config): KomodoApi {
  return KomodoClient(config.address, {
    type: "api-key",
    params: { key: config.apiKey, secret: config.apiSecret },
  });
}

export interface KomodoErrorPayload {
  status?: number;
  error: string;
  trace?: string[];
}

export function normalizeKomodoError(error: unknown): KomodoErrorPayload {
  if (error && typeof error === "object") {
    const record = error as Record<string, unknown>;
    const status = typeof record.status === "number" ? record.status : undefined;
    const result =
      record.result && typeof record.result === "object"
        ? (record.result as Record<string, unknown>)
        : undefined;
    const message =
      (typeof result?.error === "string" && result.error) ||
      (typeof record.message === "string" && record.message) ||
      "Komodo request failed";
    const trace = Array.isArray(result?.trace)
      ? result.trace.filter((item): item is string => typeof item === "string")
      : undefined;
    return { ...(status !== undefined ? { status } : {}), error: message, ...(trace ? { trace } : {}) };
  }
  return { error: error instanceof Error ? error.message : String(error) };
}
