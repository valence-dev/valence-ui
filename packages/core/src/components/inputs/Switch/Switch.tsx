/** @jsxImportSource @emotion/react */
import { FocusEvents } from "@valence-ui/utils";
import { forwardRef } from "react";
import { useValence } from "../../../ValenceProvider";
import { PrimitiveButton, PrimitiveButtonProps } from "../../buttons";
import { Loader, Text, TextProps } from "../../display";
import { motion } from "framer-motion";
import { Flex } from "../../layout";
import { css } from "@emotion/react";
import { GenericInputProps } from "../../../generics";
import {
  MakeResponsive,
  useResponsiveProps,
} from "../../../utilities/responsive";
import { useColors } from "../../../utilities/color";

export type SwitchProps = GenericInputProps<boolean> &
  FocusEvents & {
    /** The label associated with this input */
    label?: string;

    /** Shorthand for `flex-grow = 1` */
    grow?: boolean;

    /** Optional props to pass to the `Button` container component */
    buttonProps?: PrimitiveButtonProps;
    /** Optional props to pass to the `Text` label component */
    labelProps?: TextProps;
  };

export const Switch = forwardRef(function Switch(
  props: MakeResponsive<SwitchProps>,
  ref: any
) {
  const theme = useValence();
  const { getBgHex, getHex } = useColors();

  // Defaults
  const {
    value,
    setValue,
    label,

    size = theme.defaults.size,
    radius = "xl",
    variant = theme.defaults.variant,
    grow = false,

    disabled = false,
    readOnly = false,
    loading = false,

    onFocus,
    onBlur,

    buttonProps,
    labelProps,

    color = theme.primaryColor,
    backgroundColor = color,
    padding = 4,
    margin = 0,
    width,
    height,

    style,
    ...rest
  } = useResponsiveProps<SwitchProps>(props);

  // Handlers
  function handleClick() {
    if (disabled || readOnly || loading) return;

    setValue(!value);
  }

  // Styles
  const SwitchStyle = css({
    display: "flex",
    flexDirection: "row",

    boxSizing: "border-box",
    flexGrow: grow ? 1 : "unset",

    width: width ?? (theme.sizeClasses.height[size] as number) * 1.75,
    height: height ?? (theme.sizeClasses.height[size] as number) * 0.75,
    borderRadius: `${theme.sizeClasses.radius[radius]}px`,
    padding: padding,
    margin: margin,

    opacity: disabled ? 0.5 : 1,
    cursor: disabled ? "not-allowed" : "pointer",

    transition: `background-color ${theme.defaults.transitionDuration} linear 0s`,
    backgroundColor: value
      ? getBgHex(backgroundColor, variant, false)
      : getBgHex("black", variant, false),

    outline:
      variant === "subtle"
        ? value
          ? `1px solid ${getHex(backgroundColor, "medium")}`
          : `1px solid ${getHex("black", "medium")}`
        : "none",
    border: "none",

    "&:hover": {
      backgroundColor: value
        ? getBgHex(backgroundColor, variant, true)
        : getBgHex("black", variant, true),
    },

    ...style,
  });
  const HandleStyle = css({
    width: "50%",
    height: "100%",

    borderRadius: `${theme.sizeClasses.radius[radius]}px`,
    backgroundColor: value
      ? getBgHex(variant === "filled" ? "white" : color, "filled", false)
      : getBgHex(variant === "filled" ? "white" : "black", "filled", false),

    outline: "none",
    border: "none",
  });

  return (
    <PrimitiveButton
      id={rest.id}
      onClick={handleClick}
      padding={0}
      height="fit-content"
      color={color}
      backgroundColor="#00000000"
      variant="subtle"
      size={size}
      grow={grow}
      style={{
        gap: (theme.sizeClasses.padding[size] as number) / 2,
      }}
      onFocus={onFocus}
      onBlur={onBlur}
      ref={ref}
      {...buttonProps}
    >
      {label && (
        <Text size={size} {...labelProps} tabIndex={-1}>
          {label}
        </Text>
      )}

      <div tabIndex={0} css={SwitchStyle} {...rest}>
        {loading ? (
          <Flex width="100%" height="100%" align="center" justify="center">
            <Loader size={size} color={value ? "white" : "black"} />
          </Flex>
        ) : (
          <motion.div
            // @ts-ignore
            css={HandleStyle}
            initial={{ x: value ? "0%" : "100%" }}
            animate={{ x: value ? "100%" : "0%" }}
            transition={{ ease: "backOut" }}
          />
        )}
      </div>
    </PrimitiveButton>
  );
});
