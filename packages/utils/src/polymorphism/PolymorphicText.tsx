import { forwardRef } from "react";
import { GenericProps } from "..";
import { Link } from "react-router-dom";

export type PolymorphicTextProps = GenericProps & {
  /** Sets the component type to render */
  component?: PolymorphicTextComponents;
}
export type PolymorphicTextComponents = "p" | "link" | "a" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "div";

export const PolymorphicText = forwardRef((props: PolymorphicTextProps, ref: any) => {
  const { component = "p", children, ...rest } = props;

  let Component: any = component;
  if (component === "link") Component = Link;

  return (
    <Component ref={ref} {...rest}>
      {children}
    </Component>
  )
});