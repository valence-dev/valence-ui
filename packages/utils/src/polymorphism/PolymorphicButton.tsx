import { forwardRef } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  GenericClickableEventProps,
  GenericClickableProps,
  GenericProps,
  PolymorphicElementProps,
} from "..";

export type PolymorphicButtonProps = PolymorphicElementProps & {
  /** Sets Emotion styling content on the component */
  css?: any;

  /** Sets the native `disabled` attribute. Only valid on elements that support it (e.g. `button`) — ignored otherwise. */
  disabled?: boolean;
  /** Marks the element as disabled for assistive technology, independent of whether it supports the native `disabled` attribute. */
  "aria-disabled"?: boolean;
};

type Props = PolymorphicButtonProps &
  GenericProps &
  GenericClickableEventProps &
  GenericClickableProps;

export const PolymorphicButton = motion.create(
  forwardRef(function Element(props: Props, ref: any) {
    const { component = "button", children, ...rest } = props;

    let Component: any = component;
    if (component === "link") Component = Link;

    return (
      <Component ref={ref} {...rest}>
        {children}
      </Component>
    );
  }),
);
