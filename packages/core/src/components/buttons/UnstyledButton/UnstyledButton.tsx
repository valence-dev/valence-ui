/** @jsxImportSource @emotion/react */
import { GenericClickableEventProps, GenericClickableProps, GenericProps, PolymorphicButton, PolymorphicButtonProps } from "@valence-ui/utils";
import { css } from "@emotion/react";
import { forwardRef } from "react";

export type UnstyledButtonProps =
  PolymorphicButtonProps
  & GenericClickableEventProps
  & GenericClickableProps
  & GenericProps

export const UnstyledButton = forwardRef(function UnstyledButton(
  props: UnstyledButtonProps,
  ref: any
) {

  // Defaults
  const {
    style,
    children,
    ...rest
  } = props;


  // Styles
  const UnstyledButtonStyle = css({
    outline: "none",
    border: "none",
    textDecoration: "none",
    background: "none",
    padding: 0,
    margin: 0,
    ...style,
  })


  return (
    <PolymorphicButton
      css={UnstyledButtonStyle}
      ref={ref}
      {...rest}
    >
      {children}
    </PolymorphicButton>
  )
});