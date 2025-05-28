import { ElementType } from "react";

export type PolymorphicElementType = ElementType | "link";
export type PolymorphicElementProps = {
  /** Sets the component type to render */
  component?: PolymorphicElementType;

  /** If true, this component will automatically animate to its new position when its layout changes.
   *
   * ```<motion.div layout />```
   *
   * This will perform a layout animation using performant transforms. Part of this technique
   * involved animating an element's scale. This can introduce visual distortions on children, `boxShadow` and `borderRadius`.
   *
   * To correct distortion on immediate children, add layout to those too.
   *
   * `boxShadow` and `borderRadius` will automatically be corrected if they are already being animated on this component.
   * Otherwise, set them directly via the initial prop.
   *
   * - If layout is set to "position", the size of the component will change instantly and only its position will animate.
   * - If layout is set to "size", the position of the component will change instantly and only its size will animate.
   * - If layout is set to "preserve-aspect", the component will animate size & position if the aspect ratio
   * remains the same between renders, and just position if the ratio changes.
   *
   * (from https://motion.dev/docs/react-motion-component#layout)
   */
  layout?: boolean | "size" | "position" | "preserve-aspect";
};
