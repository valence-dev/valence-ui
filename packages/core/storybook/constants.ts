import type { ComponentSize } from "@valence-ui/utils";

/**
 * The value sets that stories enumerate over.
 *
 * These are the axes of the component API that every component shares — size,
 * radius, colour, material — and a story that wants to show "all of them"
 * should map over the constant rather than hand-listing the values. When a new
 * size or material is added to the library, every matrix story picks it up
 * from here instead of silently continuing to test the old set.
 */
export namespace Storybook {
  export const componentSizes: ComponentSize[] = ["xs", "sm", "md", "lg", "xl"];
  export const buttonVariants = ["filled", "light", "subtle"];

  export const fontFamilies = ["system-ui, sans-serif", "monospace"];
  export const textAligns = ["left", "center", "right", "justify"];
  export const textTransforms = [
    "none",
    "uppercase",
    "lowercase",
    "capitalize",
  ];

  export const colors = [
    "white",
    "black",
    "permaWhite",
    "permaBlack",
    "pink",
    "red",
    "orange",
    "yellow",
    "lime",
    "green",
    "teal",
    "cyan",
    "blue",
    "violet",
    "grape",
  ];

  /** The materials a component can be given, by name. */
  export const materialNames = ["paper", "glass", "solid", "air"] as const;

  /** Elevations the elevated materials (`paper`, `solid`) accept. */
  export const elevations = [0, 1, 2, 3, 4, 5];

  /**
   * Text long enough to overflow any single-line component, used by the
   * "Overflow" cases to check truncation and wrapping rather than to read.
   */
  export const longText =
    "A label long enough that it cannot fit on one line in any reasonable container, which is the entire point of it";

  /** A short string containing the characters that most often break layout. */
  export const awkwardText = "Ω 漢字 🙂 <html> & \"quotes\" — em-dash";

  /** A stable remote image, for the components that take one. */
  export const imageSrc =
    "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80";

  /** A URL that will never resolve, for the image error cases. */
  export const brokenImageSrc = "https://example.invalid/does-not-exist.png";
}
