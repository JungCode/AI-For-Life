import { execSync } from "child_process";
import fs from "fs";
import path from "path";

console.log("🚀 Running GraphQL Codegen...");
execSync("pnpm codegen", { stdio: "inherit" });

const SCHEMAS = path.resolve("shared/generated/schemas.ts");
const HOOKS = path.resolve("shared/generated/hooks.ts");

const schemasContent = fs.readFileSync(SCHEMAS, "utf8");

// --- STEP 1: tìm tất cả document ---
const documentRegex =
  /export const (\w+)Document\s*=\s*.*DocumentNode<(\w+),\s*(\w+)>/g;

let match;
const items: Array<{
  doc: string;
  type: string;
  vars: string;
}> = [];

while ((match = documentRegex.exec(schemasContent)) !== null) {
  items.push({
    doc: match[1], // LogIn
    type: match[2], // LogInMutation
    vars: match[3], // LogInMutationVariables
  });
}

// --- STEP 2: generate import section ---
const imports = items
  .map((i) => `${i.doc}Document, type ${i.type}, type ${i.vars}`)
  .join(",\n  ");

// --- STEP 3: generate hook for mỗi mutation ---
const hookFunctions = items
  .map((i) => {
    const hookName = `use${i.doc}`;
    return `
export function ${hookName}(
  options?: MutationHookOptions<${i.type}, ${i.vars}>
): MutationTuple<${i.type}, ${i.vars}> {
  return useMutation(${i.doc}Document, options);
}
    `;
  })
  .join("\n");

// --- STEP 4: full file ---
const output = `/* AUTO-GENERATED — DO NOT EDIT */

import {
  useMutation,
  type MutationTuple,
  type MutationHookOptions
} from "@apollo/client";

import {
  ${imports}
} from "./schemas";

${hookFunctions}
`;

fs.writeFileSync(HOOKS, output);

console.log("✨ Auto-hooks generated → shared/generated/hooks.ts");
