import { describe, expect, it } from "vitest";
import { redactSecrets, toSafeJson } from "../src/redact.js";

describe("redactSecrets", () => {
  it("redacts nested credentials while preserving ordinary data", () => {
    expect(
      redactSecrets({
        name: "example-app",
        config: { api_key: "secret", nested: { password: "secret", port: 5432 } },
      }),
    ).toEqual({
      name: "example-app",
      config: { api_key: "[REDACTED]", nested: { password: "[REDACTED]", port: 5432 } },
    });
  });

  it("turns bigint values into JSON strings", () => {
    expect(toSafeJson({ bytes: 123n })).toEqual({ bytes: "123" });
  });

  it("redacts values explicitly marked as secret by Komodo", () => {
    expect(redactSecrets({ name: "DATABASE_URL", value: "mongodb://secret", is_secret: true })).toEqual({
      name: "DATABASE_URL",
      value: "[REDACTED]",
      is_secret: true,
    });
  });

  it("redacts both halves of an API credential pair", () => {
    expect(redactSecrets({ key: "K-live", secret: "S-live" })).toEqual({
      key: "[REDACTED]",
      secret: "[REDACTED]",
    });
  });
});
