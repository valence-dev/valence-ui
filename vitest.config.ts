import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Test against source, not built output, so tests fail fast on
      // regressions without needing a build step first.
      "@valence-ui/utils": resolve(__dirname, "packages/utils/src"),
      "@valence-ui/core": resolve(__dirname, "packages/core/src"),
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./test/setup.ts"],
    include: ["packages/**/*.test.{ts,tsx}", "test/**/*.test.{ts,tsx}"],
    exclude: ["**/node_modules/**", "**/dist/**"],
    css: false,
    coverage: {
      provider: "v8",
      include: ["packages/*/src/**/*.{ts,tsx}"],
      exclude: ["**/*.stories.tsx", "**/index.ts", "**/index.tsx"],
    },
  },
});
