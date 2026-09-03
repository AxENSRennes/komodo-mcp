import { describe, expect, it } from "vitest";
import { operationCatalog } from "../src/generated/catalog.js";

describe("generated native operation catalog", () => {
  it("covers the complete Komodo 2.3 API surface", () => {
    expect(operationCatalog.read).toHaveLength(140);
    expect(operationCatalog.write).toHaveLength(114);
    expect(operationCatalog.execute).toHaveLength(79);
  });

  it("includes deployment, configuration, destructive, and administration operations", () => {
    const read = operationCatalog.read.map(({ name }) => name);
    const write = operationCatalog.write.map(({ name }) => name);
    const execute = operationCatalog.execute.map(({ name }) => name);

    expect(read).toEqual(expect.arrayContaining(["GetVersion", "ListStacks", "ListSecrets"]));
    expect(write).toEqual(
      expect.arrayContaining(["CreateStack", "UpdateStack", "DeleteStack", "CreateVariable"]),
    );
    expect(execute).toEqual(
      expect.arrayContaining(["DeployStack", "DestroyStack", "PruneSystem", "BackupCoreDatabase"]),
    );
  });

  it("ships parameter documentation for discovery", () => {
    const createStack = operationCatalog.write.find(({ name }) => name === "CreateStack");
    expect(createStack?.schema).toContain("interface CreateStack");
    expect(createStack?.schema).toContain("name: string");
  });
});
