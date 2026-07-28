import type { Meta } from "@storybook/react";
import { Storybook } from "./constants";

/**
 * Reusable `argTypes` fragments.
 *
 * Every component in the library shares the same handful of prop shapes — a
 * `ComponentSize`, a palette colour, a boolean flag — and before these existed
 * each story file re-declared the same `{ options, control }` object by hand.
 * The copies drifted: some listed four sizes, some five, and a story whose
 * options were stale silently stopped exercising the value it had dropped.
 */

type ArgTypes = NonNullable<Meta["argTypes"]>;
type ArgType = ArgTypes[string];

/** A `select` over the five component sizes. */
export const sizeControl: ArgType = {
  options: Storybook.componentSizes,
  control: { type: "select" },
  table: { category: "Appearance" },
};

/** A `select` over the five radius sizes. */
export const radiusControl: ArgType = {
  options: Storybook.componentSizes,
  control: { type: "select" },
  table: { category: "Appearance" },
};

/** A `select` over the palette. */
export const colorControl: ArgType = {
  options: Storybook.colors,
  control: { type: "select" },
  table: { category: "Appearance" },
};

/** A `select` over the material names, for stories that build the material. */
export const materialControl: ArgType = {
  options: Storybook.materialNames,
  control: { type: "select" },
  table: { category: "Appearance" },
};

/** A boolean, in the "State" group. */
export function stateControl(description?: string): ArgType {
  return {
    control: { type: "boolean" },
    description,
    table: { category: "State" },
  };
}

/** A number, in the "Layout" group. */
export function numberControl(description?: string): ArgType {
  return {
    control: { type: "number" },
    description,
    table: { category: "Layout" },
  };
}

/** A free-text control, in the "Content" group. */
export function textControl(description?: string): ArgType {
  return {
    control: { type: "text" },
    description,
    table: { category: "Content" },
  };
}

/**
 * The `argTypes` shared by every sized component: `size` and `radius`.
 *
 * Spread this into a `meta.argTypes` and add only the props specific to the
 * component being documented.
 */
export const sizingControls: ArgTypes = {
  size: sizeControl,
  radius: radiusControl,
};

/** The `argTypes` shared by every component that can be disabled or busy. */
export const stateControls: ArgTypes = {
  disabled: stateControl("Blocks interaction and dims the component."),
  loading: stateControl("Replaces the content with a loader."),
};
