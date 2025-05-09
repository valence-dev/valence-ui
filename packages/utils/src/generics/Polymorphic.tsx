import { ElementType } from "react";

export type PolymorphicElementType = ElementType | "link";
export type PolymorphicElementProps = {
  /** Sets the component type to render */
  component?: PolymorphicElementType;
};
