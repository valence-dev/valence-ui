import { forwardRef } from "react";
import { GenericClickableEventProps, GenericClickableProps, GenericProps, PolymorphicElementProps, PolymorphicElementType } from "..";
import { Link } from "react-router-dom";

export type PolymorphicTextProps =
  PolymorphicElementProps
  & {
    /** Sets Emotion styling content on the component */
    css?: any;
  };

type Props = PolymorphicTextProps
  & GenericProps
  & GenericClickableEventProps
  & GenericClickableProps;

export const PolymorphicText = forwardRef(function Input(
  props: Props,
  ref: any
) {
  const { component = "p", children, ...rest } = props;

  let Component: any = component;
  if (component === "link") Component = Link;

  return (
    <Component ref={ref} {...rest}>
      {children}
    </Component>
  )
});