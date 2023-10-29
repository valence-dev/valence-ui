import { forwardRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GenericProps } from "..";

export type PolymorphicButtonProps = GenericProps & {
  /** Sets the component type to render */
  component?: PolymorphicButtonComponents;

  css?: any;
}

export type PolymorphicButtonComponents = "a" | "button" | "link" | "span" | "div" | "input";


export const PolymorphicButton = motion(
  forwardRef((props: PolymorphicButtonProps, ref: any) => {
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