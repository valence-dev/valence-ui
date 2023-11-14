import { CSSProperties } from "react";
import { GenericReactiveProps } from "./Global";
import { ReactiveProp } from "../props";

/** Reactive props to be consumed by every grid container component. */
export type GenericGridProps =
  GenericReactiveProps
  & {
    /** Sets `grid` css property */
    grid?: ReactiveProp<CSSProperties["grid"]>;

    /** Sets `gap` css property */
    gap?: ReactiveProp<CSSProperties["gap"]>;
    /** Sets `row-gap` css property */
    rowGap?: ReactiveProp<CSSProperties["rowGap"]>;
    /** Sets `column-gap` css property */
    columnGap?: ReactiveProp<CSSProperties["columnGap"]>;

    /** Sets `grid-template` css property */
    template?: ReactiveProp<CSSProperties["gridTemplate"]>;
    /** Sets `grid-template-rows` css property */
    templateRows?: ReactiveProp<CSSProperties["gridTemplateRows"]>;
    /** Sets `grid-template-columns` css property */
    templateColumns?: ReactiveProp<CSSProperties["gridTemplateColumns"]>;
    /** Sets `grid-template-areas` css property */
    templateAreas?: ReactiveProp<CSSProperties["gridTemplateAreas"]>;

    /** Sets `grid-auto-rows` css property */
    autoRows?: ReactiveProp<CSSProperties["gridAutoRows"]>;
    /** Sets `grid-auto-columns` css property */
    autoColumns?: ReactiveProp<CSSProperties["gridAutoColumns"]>;
    /** Sets `grid-auto-flow` css property */
    autoFlow?: ReactiveProp<CSSProperties["gridAutoFlow"]>;

    /** Sets `justify-items` css property */
    justifyItems?: ReactiveProp<CSSProperties["justifyItems"]>;
    /** Sets `justify-content` css property */
    justifyContent?: ReactiveProp<CSSProperties["justifyContent"]>;
    /** Sets `align-items` css property */
    alignItems?: ReactiveProp<CSSProperties["alignItems"]>;
    /** Sets `align-content` css property */
    alignContent?: ReactiveProp<CSSProperties["alignContent"]>;
  }

/** Reactive props to be consumed by every grid item component. */
export type GenericGridItemProps =
  GenericReactiveProps
  & {
    /** Sets `grid-area` css property */
    area?: ReactiveProp<CSSProperties["gridArea"]>;

    /** Sets `grid-column` css property */
    column?: ReactiveProp<CSSProperties["gridColumn"]>;
    /** Sets `grid-column-start` css property */
    columnStart?: ReactiveProp<CSSProperties["gridColumnStart"]>;
    /** Sets `grid-column-end` css property */
    columnEnd?: ReactiveProp<CSSProperties["gridColumnEnd"]>;

    /** Sets `grid-row` css property */
    row?: ReactiveProp<CSSProperties["gridRow"]>;
    /** Sets `grid-row-start` css property */
    rowStart?: ReactiveProp<CSSProperties["gridRowStart"]>;
    /** Sets `grid-row-end` css property */
    rowEnd?: ReactiveProp<CSSProperties["gridRowEnd"]>;

    /** Sets `justify-self` css property */
    justify?: ReactiveProp<CSSProperties["justifySelf"]>;
    /** Sets `align-self` css property */
    align?: ReactiveProp<CSSProperties["alignSelf"]>;
    /** Sets `place-self` css property */
    place?: ReactiveProp<CSSProperties["placeSelf"]>;

    /** Sets `order` css property */
    order?: ReactiveProp<CSSProperties["order"]>;
  }