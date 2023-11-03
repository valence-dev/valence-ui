import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GenericClickableEventProps, GenericClickableProps, GenericProps, PolymorphicElementProps } from "..";

export type PolymorphicButtonProps =
  PolymorphicElementProps
  & {
    /** Sets Emotion styling content on the component */
    css?: any;
  };

type Props = PolymorphicButtonProps
  & GenericProps
  & GenericClickableEventProps
  & GenericClickableProps;




export const PolymorphicButton = motion(forwardRef(function Input(
  props: Props,
  ref: any
) {

  const { component = "button", children, ...rest } = props;

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
})
)