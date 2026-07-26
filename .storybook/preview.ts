import type { Preview } from "@storybook/react";
import { Storybook, withLayout, withValence } from "../packages/core/storybook";

const preview: Preview = {
  // The provider and the framing are no longer each story's problem. Order
  // matters: the layout wrapper is a `Flex`, which reads the theme, so it has
  // to sit inside the provider — and a decorator listed later wraps one listed
  // earlier.
  decorators: [withLayout, withValence],

  globalTypes: {
    colorScheme: {
      description: "The colour scheme the ValenceProvider is told to prefer",
      toolbar: {
        title: "Scheme",
        icon: "contrast",
        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" },
          { value: "system", title: "System" },
        ],
        dynamicTitle: true,
      },
    },
    primaryColor: {
      description: "The ValenceProvider's primary colour",
      toolbar: {
        title: "Primary",
        icon: "paintbrush",
        items: Storybook.colors.map((color) => ({
          value: color,
          title: color,
        })),
        dynamicTitle: true,
      },
    },
  },

  initialGlobals: {
    colorScheme: "light",
    primaryColor: "pink",
  },

  parameters: {
    // Storybook's own padding would double up with the layout decorator's.
    layout: "fullscreen",

    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },

    options: {
      /**
       * Orders the sidebar: sections by hand, components alphabetically, and
       * the stories inside a component by the shared case order.
       *
       * Storybook's declarative `storySort.order` can only order the title
       * path, and the point of this layout is that a component holds many
       * cases — so the case order, which only a comparator can express, is the
       * part that matters. Everything the comparator needs is declared inside
       * it and it carries no type annotations, because Storybook extracts this
       * function from the file and `eval`s it on its own to build the static
       * index: a reference to anything in the module scope would be undefined
       * there, and a TypeScript annotation would not parse.
       */
      storySort: (a, b) => {
        const SECTIONS = ["Foundations", "Core", "Carousel"];
        const CASES = [
          "Playground",
          "Sizes",
          "Radii",
          "Variants",
          "Materials",
          "Elevations",
          "Colors",
          "States",
          "Content",
          "Composition",
          "Responsive",
          "Accessibility",
          "Edge Cases",
        ];
        const rank = (name, order) => {
          const index = order.indexOf(name);
          return index === -1 ? order.length : index;
        };

        const sectionDelta =
          rank(a.title.split("/")[0], SECTIONS) -
          rank(b.title.split("/")[0], SECTIONS);
        if (sectionDelta !== 0) return sectionDelta;

        if (a.title !== b.title) return a.title.localeCompare(b.title);

        const caseDelta = rank(a.name, CASES) - rank(b.name, CASES);
        return caseDelta !== 0 ? caseDelta : a.name.localeCompare(b.name);
      },
    },
  },
};

export default preview;
