import { forwardRef } from "react";
import { GenericClickableEventProps, GenericClickableProps, GenericProps, MouseEvents, PolymorphicElementProps, PolymorphicElementType } from "..";
import { Link } from "react-router-dom";

export type PolymorphicLayoutProps =
  PolymorphicElementProps
  & {
    /** Sets Emotion styling content on the component */
    css?: any;
  };

type Props = PolymorphicLayoutProps
  & GenericProps
  & GenericClickableEventProps
  & GenericClickableProps;

export const PolymorphicLayout = forwardRef(function Input(
  props: Props,
  ref: any
) {
  const { component = "div", children, ...rest } = props;

  let Component: any = component;
  if (component === "link") Component = Link;

  return (
    <Component
      ref={ref}
      {...rest}
    >
      {children}
    </Component>
  )
});