import { CSSProperties } from "react";
import { GenericProps } from "./Global";

/** Basic props for components that can handle layout changes */
export type GenericLayoutProps = GenericProps & {
  /** Sets `color` css property */
  color?: CSSProperties["color"];
  /** Sets `background-color` css property */
  backgroundColor?: CSSProperties["backgroundColor"];

  /** Sets `padding` css property */
  padding?: CSSProperties["padding"];
  /** Sets `margin` css property */
  margin?: CSSProperties["margin"];

  /** Sets `width` css property */
  width?: CSSProperties["width"];
  /** Sets `height` css property */
  height?: CSSProperties["height"];
}


/** Additional props for components that can "float" on the screen */
export type GenericFloatingLayoutProps = GenericLayoutProps & {
  /** Sets `position` css property */
  position?: CSSProperties["position"];
  /** Sets `zIndex` css property */
  zIndex?: CSSProperties["zIndex"];

  /** Sets `top` css property */
  top?: CSSProperties["top"];
  /** Sets `right` css property */
  right?: CSSProperties["right"];
  /** Sets `bottom` css property */
  bottom?: CSSProperties["bottom"];
  /** Sets `left` css property */
  left?: CSSProperties["left"];
}