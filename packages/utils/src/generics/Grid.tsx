import { CSSProperties } from "react";
import { GenericLayoutProps } from "./Layout";

/** Basic props to be handled by every component that is laid
 * out using the CSS grid system.
 */
export type GenericGridProps = GenericLayoutProps & {
  /** Defines the number of rows, or sets `grid-template-rows` css property */
  rows?: number | CSSProperties["gridTemplateRows"];
  /** Defines the number of columns, or sets `grid-template-columns` css property */
  columns?: number | CSSProperties["gridTemplateColumns"];

  /** Sets `grid` css property */
  grid?: CSSProperties["grid"];

  /** Sets `gap` css property */
  gap?: CSSProperties["gap"];
  /** Sets `row-gap` css property */
  rowGap?: CSSProperties["rowGap"];
  /** Sets `column-gap` css property */
  columnGap?: CSSProperties["columnGap"];

  /** Sets `grid-template` css property */
  template?: CSSProperties["gridTemplate"];
  /** Sets `grid-template-areas` css property */
  templateAreas?: CSSProperties["gridTemplateAreas"];

  /** Sets `grid-auto-rows` css property */
  autoRows?: CSSProperties["gridAutoRows"];
  /** Sets `grid-auto-columns` css property */
  autoColumns?: CSSProperties["gridAutoColumns"];
  /** Sets `grid-auto-flow` css property */
  autoFlow?: CSSProperties["gridAutoFlow"];

  /** Sets `justify-items` css property */
  justifyItems?: CSSProperties["justifyItems"];
  /** Sets `justify-content` css property */
  justifyContent?: CSSProperties["justifyContent"];
  /** Sets `align-items` css property */
  alignItems?: CSSProperties["alignItems"];
  /** Sets `align-content` css property */
  alignContent?: CSSProperties["alignContent"];
};

/** Basic props to be handled by every component that is
 * a direct child of a CSS grid or component that consumes
 * the `GenericGridProps` type.
 */
export type GenericGridItemProps = GenericLayoutProps & {
  /** Sets `grid-area` css property */
  area?: CSSProperties["gridArea"];

  /** Sets `grid-column` css property */
  column?: CSSProperties["gridColumn"];
  /** Sets `grid-column-start` css property */
  columnStart?: CSSProperties["gridColumnStart"];
  /** Sets `grid-column-end` css property */
  columnEnd?: CSSProperties["gridColumnEnd"];

  /** Sets `grid-row` css property */
  row?: CSSProperties["gridRow"];
  /** Sets `grid-row-start` css property */
  rowStart?: CSSProperties["gridRowStart"];
  /** Sets `grid-row-end` css property */
  rowEnd?: CSSProperties["gridRowEnd"];

  /** Sets `justify-self` css property */
  justify?: CSSProperties["justifySelf"];
  /** Sets `align-self` css property */
  align?: CSSProperties["alignSelf"];
  /** Sets `place-self` css property */
  place?: CSSProperties["placeSelf"];

  /** Sets `order` css property */
  order?: CSSProperties["order"];
};
