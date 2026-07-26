import { forwardRef } from "react";
import {
  GenericClickableEventProps,
  GenericClickableProps,
} from "../generics/Clickable";
import { GenericProps } from "../generics/Global";
import { PolymorphicElementProps } from "../generics/Polymorphic";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export type PolymorphicTextProps = PolymorphicElementProps & {
  /** Sets Emotion styling content on the component */
  css?: any;
};

type Props = PolymorphicTextProps &
  GenericProps &
  GenericClickableEventProps &
  GenericClickableProps;

export const PolymorphicText = motion.create(
  forwardRef(function Element(props: Props, ref: any) {
    const { component = "p", children, ...rest } = props;

    let Component: any = component;
    if (component === "link") Component = Link;

    return (
      <Component ref={ref} {...rest}>
        {children}
      </Component>
    );
  }),
);
