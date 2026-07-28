import type { Decorator } from "@storybook/react";
import { ValenceProvider } from "../src/ValenceProvider/ValenceProvider";
import { Flex } from "../src/components/layout/Flex";

/**
 * The decorators that used to be copied into the body of every story.
 *
 * Before these existed, each story opened with the same
 * `<ValenceProvider><Flex center height="100vh">` wrapper, which meant the
 * provider was configured identically everywhere and could not be varied — a
 * story could not be viewed in dark mode, or against a different primary
 * colour, without editing its source.
 */

/**
 * Wraps every story in a `ValenceProvider` driven by the toolbar globals.
 *
 * `preferredColorScheme` and `primaryColor` come from the toolbar, so the same
 * story renders in light and dark, and against any palette colour, without a
 * story-level opt-in. The provider is keyed on both so that the components
 * below it — several of which read the scheme once on mount — remount when the
 * toolbar changes rather than keeping the values they were first given.
 */
export const withValence: Decorator = (Story, context) => {
  const colorScheme = (context.globals.colorScheme ?? "light") as
    | "light"
    | "dark"
    | "system";
  const primaryColor = (context.globals.primaryColor ?? "pink") as string;

  return (
    <ValenceProvider
      key={`${colorScheme}-${primaryColor}`}
      preferredColorScheme={colorScheme}
      primaryColor={primaryColor}
    >
      <Story />
    </ValenceProvider>
  );
};

/** How a story is positioned in the frame. */
export type ValenceLayout =
  /** Centred in a full-height viewport. The default, for single instances. */
  | "centered"
  /** Top-aligned and free to grow. The default for matrix stories. */
  | "flow"
  /** Untouched — for stories that manage their own full-bleed layout. */
  | "fullscreen";

/**
 * Positions a story according to `parameters.valence.layout`.
 *
 * Every story used to hard-code `<Flex center height="100vh">`, which is
 * correct for one component in the middle of the frame and wrong for a page of
 * cases: at a fixed viewport height a matrix taller than the frame is clipped
 * rather than scrolled. Making it a parameter lets the single-instance stories
 * keep the centred framing while the matrix stories flow down the page.
 */
export const withLayout: Decorator = (Story, context) => {
  const layout: ValenceLayout = context.parameters.valence?.layout ?? "centered";

  if (layout === "fullscreen") return <Story />;

  if (layout === "centered")
    return (
      <Flex center width="100%" height="100vh">
        <Story />
      </Flex>
    );

  return (
    <Flex direction="column" width="100%" gap={0}>
      <Story />
    </Flex>
  );
};
