import { CSSProperties, ReactNode } from "react";

/** Defines standard sizes for components */
export type ComponentSize = "xs" | "sm" | "md" | "lg" | "xl";
/** A type wrapper that helps define the values for a type used for each Component size */
export type SizeClasses<C> = {
  xs: C;
  sm: C;
  md: C;
  lg: C;
  xl: C
}

/** Defines standard variants for buttons and other components */
export type FillVariant = "subtle" | "light" | "filled";


/** Basic props that should be exposed to every component */
export type GenericProps = {
  /** Used to specify a unique identifier for an element */
  id?: string;
  /** Used to specify custom styling for an element. Unlike the native HTML `style` attribute, this will be passed into an Emotion `css` constructor before being added to the DOM. */
  style?: CSSProperties;
  /** Used to allow or prevent elements from being sequentially focusable. [See more](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) */
  tabIndex?: number;

  /** Children nodes */
  children?: ReactNode;
}