import type { StorybookConfig } from "@storybook/react-vite";

import { join, dirname, resolve } from "path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}

const config: StorybookConfig = {
  stories: [
    "../packages/**/src/**/*.mdx",
    "../packages/**/src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],

  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-viewport"),
    getAbsolutePath("@storybook/addon-controls"),
    getAbsolutePath("@storybook/addon-backgrounds"),
    getAbsolutePath("@storybook/addon-toolbars"),
    getAbsolutePath("@storybook/addon-measure"),
    getAbsolutePath("@storybook/addon-outline"),
  ],

  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },

  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript",
  },

  /**
   * Points the workspace package names at their sources.
   *
   * `@valence-ui/core` and `@valence-ui/utils` resolve through the workspace
   * symlink to a `package.json` whose `main` is `dist/`, so without these
   * aliases Storybook could only start after a full `npm run build` — and
   * would then show whatever was in `dist` rather than the working tree, so a
   * story would keep rendering stale code until the package was rebuilt.
   * Aliasing to `src` makes the story of a cross-package component (the
   * carousel, which consumes core) reload with the source like every other.
   */
  viteFinal: async (viteConfig) => ({
    ...viteConfig,
    resolve: {
      ...viteConfig.resolve,
      alias: {
        ...viteConfig.resolve?.alias,
        // The story kit, before the bare package name: these are prefix
        // matches, so `@valence-ui/core` would otherwise swallow this and
        // rewrite it to a `storybook` directory inside `src` that is not there.
        "@valence-ui/core/storybook": resolve(
          __dirname,
          "../packages/core/storybook",
        ),
        "@valence-ui/utils": resolve(__dirname, "../packages/utils/src"),
        "@valence-ui/core": resolve(__dirname, "../packages/core/src"),
      },
    },
  }),
};
export default config;
