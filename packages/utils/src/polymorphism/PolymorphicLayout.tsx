import { forwardRef } from "react";
import { GenericProps } from "..";

export type PolymorphicLayoutProps = GenericProps & {
  /** Sets the component type to render */
  component?: PolymorphicLayoutComponents;
}

export type PolymorphicLayoutComponents = "div" | "span" | "section" | "aside" | "form";

export const PolymorphicLayout = forwardRef((props: PolymorphicLayoutProps, ref: any) => {
  const { component = "div", children, ...rest } = props;

  let Component: any = component;

  return (
    <Component ref={ref} {...rest}>
      {children}
    </Component>
  )
});