import tseslint from "typescript-eslint";
import importPlugin from "eslint-plugin-import";

/**
 * Lint rules that exist to keep the package's module graph acyclic.
 *
 * The library is built out of barrel files (`index.ts` re-exporting a folder).
 * When a module inside a barrel imports back through that barrel, the resulting
 * cycle leaves bindings uninitialised at evaluation time — under Vite's module
 * runner that surfaced as `Card` and `ButtonWithIcon` rendering `undefined`.
 * See docs/V4-RELEASE-FIXES.md (ISSUE-01).
 */
export default tseslint.config(
  {
    ignores: ["**/dist/**", "**/node_modules/**", "**/storybook-static/**"],
  },
  {
    files: ["packages/*/src/**/*.{ts,tsx}"],
    plugins: { import: importPlugin },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    settings: {
      // Without this, eslint-plugin-import cannot build an export map for
      // TypeScript files and `import/no-cycle` silently passes everything.
      "import/parsers": { "@typescript-eslint/parser": [".ts", ".tsx"] },
      "import/resolver": {
        typescript: { project: ["tsconfig.json"] },
      },
    },
    rules: {
      // A module must never depend on itself, however long the chain.
      "import/no-cycle": ["error", { ignoreExternal: true }],
      // The cheap, fast version of the same rule: a module must never import
      // from an ancestor barrel, because every ancestor barrel re-exports it.
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              // Exactly `..`, `../..`, `../../..`, … and nothing below them.
              regex: "^\\.\\.(/\\.\\.)*$",
              message:
                "Import the defining module directly (e.g. `../Flex`) instead of an ancestor barrel — a barrel that re-exports this file creates a require cycle. See docs/V4-RELEASE-FIXES.md (ISSUE-01).",
            },
          ],
        },
      ],
    },
  },
  {
    // Stories are consumers of the public API, not part of it: nothing
    // re-exports them, so importing the package barrel cannot create a cycle
    // and is exactly how a real application imports these components.
    files: [
      "packages/*/src/**/*.stories.tsx",
      "packages/*/src/**/*.Stories.tsx",
    ],
    rules: {
      "no-restricted-imports": "off",
      "import/no-cycle": "off",
    },
  },
);
