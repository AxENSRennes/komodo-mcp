import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const typesPath = path.join(root, "node_modules/komodo_client/dist/types.d.ts");
const responsesPath = path.join(root, "node_modules/komodo_client/dist/responses.d.ts");
const outputPath = path.join(root, "src/generated/catalog.ts");

const typeText = fs.readFileSync(typesPath, "utf8");
const responseText = fs.readFileSync(responsesPath, "utf8");
const source = ts.createSourceFile(typesPath, typeText, ts.ScriptTarget.Latest, true);

const declarations = new Map();
for (const statement of source.statements) {
  if ((ts.isInterfaceDeclaration(statement) || ts.isTypeAliasDeclaration(statement)) && statement.name) {
    declarations.set(statement.name.text, statement.getFullText(source).trim());
  }
}

function responseNames(channel) {
  const pattern = new RegExp(
    `export type ${channel}Responses = \\{([\\s\\S]*?)\\n\\};`,
  );
  const body = responseText.match(pattern)?.[1];
  if (!body) throw new Error(`Unable to locate ${channel}Responses`);
  return [...body.matchAll(/^\s{4}([A-Za-z0-9_]+):/gm)].map((match) => match[1]);
}

function summary(schema) {
  const comment = schema.match(/^\/\*\*([\s\S]*?)\*\//)?.[1];
  if (!comment) return "";
  return comment
    .split("\n")
    .map((line) => line.replace(/^\s*\*\s?/, "").trim())
    .filter((line) => line && !line.startsWith("Response:"))
    .join(" ")
    .replace(/\[([^\]]+)\]/g, "$1")
    .slice(0, 500);
}

const catalog = {};
for (const channel of ["Read", "Write", "Execute"]) {
  catalog[channel.toLowerCase()] = responseNames(channel).map((name) => {
    const schema = declarations.get(name) ?? `export interface ${name} {}`;
    return { name, summary: summary(schema), schema };
  });
}

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(
  outputPath,
  `// Generated from komodo_client. Do not edit by hand.\n` +
    `export const operationCatalog = ${JSON.stringify(catalog, null, 2)} as const;\n` +
    `export type NativeChannel = keyof typeof operationCatalog;\n`,
);
