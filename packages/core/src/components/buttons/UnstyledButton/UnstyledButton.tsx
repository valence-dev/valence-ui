/** @jsxImportSource @emotion/react */
import {
  GenericClickableEventProps,
  GenericClickableProps,
  GenericProps,
  PolymorphicButton,
  PolymorphicButtonProps,
} from "@valence-ui/utils";
import { css } from "@emotion/react";
import { forwardRef } from "react";
import {
  MakeResponsive,
  useResponsiveProps,
} from "../../../utilities/responsive";
import { AnimationProps, useAnimation } from "../../../hooks";

export type UnstyledButtonProps = PolymorphicButtonProps &
  GenericClickableEventProps &
  GenericClickableProps &
  GenericProps & {
    /** Optional animation properties for this button. */
    animation?: AnimationProps;
  };

export const UnstyledButton = forwardRef(function UnstyledButton(
  props: MakeResponsive<UnstyledButtonProps>,
  ref: any,
) {
  // Defaults
  const { style, children, animation, ...rest } =
    useResponsiveProps<UnstyledButtonProps>(props);

  // No default hover/tap animation, unlike `PrimitiveButton`: an unstyled
  // button should stay unopinionated, and the old `motion` prop was likewise
  // inert unless asked for. `useAnimation` handles reduced motion internally.
  //
  // `initial` is pulled out on its own because it may be `false`, which is
  // valid as the `initial` prop directly but not as a `variants` map entry
  // (Motion's `Variants` type only accepts real targets, never `false`).
  const { initial, ...variants } = useAnimation({ ...animation });

  // Styles
  const UnstyledButtonStyle = css({
    outline: "none",
    border: "none",
    textDecoration: "none",
    background: "none",
    padding: 0,
    margin: 0,
    ...style,
  });

  return (
    <PolymorphicButton
      css={UnstyledButtonStyle}
      ref={ref}
      variants={variants}
      initial={initial}
      animate="animate"
      exit="exit"
      whileHover="whileHover"
      whileTap="whileTap"
      {...rest}
    >
      {children}
    </PolymorphicButton>
  );
});
