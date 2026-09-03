const SECRET_KEY_PARTS = [
  "password",
  "secret",
  "token",
  "api_key",
  "apikey",
  "private_key",
  "authorization",
  "jwt",
  "cookie",
  "environment",
  "env",
];

const REDACTED = "[REDACTED]";

function shouldRedact(key: string): boolean {
  const normalized = key.toLowerCase().replaceAll("-", "_");
  return SECRET_KEY_PARTS.some(
    (part) => normalized === part || normalized.endsWith(`_${part}`) || normalized.includes(part),
  );
}

export function redactSecrets(value: unknown, seen = new WeakSet<object>()): unknown {
  if (Array.isArray(value)) {
    if (seen.has(value)) return "[CIRCULAR]";
    seen.add(value);
    return value.map((item) => redactSecrets(item, seen));
  }

  if (value && typeof value === "object") {
    if (seen.has(value)) return "[CIRCULAR]";
    seen.add(value);
    const result: Record<string, unknown> = {};
    const record = value as Record<string, unknown>;
    const protectsValue = record.is_secret === true || record.secret === true;
    const protectsKey = typeof record.secret === "string" && "key" in record;
    for (const [key, child] of Object.entries(value)) {
      if (["__proto__", "constructor", "prototype"].includes(key)) continue;
      const isSecretMarker = ["is_secret", "secret"].includes(key.toLowerCase()) && typeof child === "boolean";
      result[key] = (!isSecretMarker && shouldRedact(key)) ||
        (protectsKey && key.toLowerCase() === "key") ||
        (protectsValue && key.toLowerCase() === "value")
        ? child === null || child === undefined
          ? child
          : REDACTED
        : redactSecrets(child, seen);
    }
    return result;
  }

  return typeof value === "bigint" ? value.toString() : value;
}

export type JsonValue =
  | null
  | boolean
  | number
  | string
  | JsonValue[]
  | { [key: string]: JsonValue };

export function toSafeJson(value: unknown): JsonValue {
  const redacted = redactSecrets(value);
  const serialized = JSON.stringify(redacted, (_key, child) =>
    typeof child === "bigint" ? child.toString() : child,
  );
  if (serialized === undefined) return null;
  return JSON.parse(serialized) as JsonValue;
}
