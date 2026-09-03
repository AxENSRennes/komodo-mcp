import { describe, expect, it } from "vitest";
import { operations, selectOperations } from "../src/operations.js";

describe("operation selection", () => {
  it("keeps mutation tools out of readonly", () => {
    const names = selectOperations("readonly").map((tool) => tool.name);
    expect(names).not.toContain("komodo_write");
    expect(names).not.toContain("komodo_execute");
    expect(names).not.toContain("komodo_terminal");
    expect(names).toContain("komodo_read");
  });

  it("exposes the complete compact gateway in full mode", () => {
    expect(selectOperations("full").map((tool) => tool.name)).toEqual([
      "komodo_discover",
      "komodo_read",
      "komodo_write",
      "komodo_execute",
      "komodo_terminal",
      "komodo_update_wait",
    ]);
  });

  it("uses unique deterministic tool names", () => {
    const names = operations.map((tool) => tool.name);
    expect(new Set(names).size).toBe(names.length);
    expect(selectOperations("full").map((tool) => tool.name)).toEqual(names);
  });
});
