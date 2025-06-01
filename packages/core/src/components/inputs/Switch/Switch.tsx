/** @jsxImportSource @emotion/react */
import { FocusEvents } from "@valence-ui/utils";
import { forwardRef } from "react";
import { useValence } from "../../../ValenceProvider";
import { PrimitiveButton, PrimitiveButtonProps } from "../../buttons";
import { Loader, Text, TextProps } from "../../display";
import { motion } from "motion/react";
import { Flex } from "../../layout";
import { css } from "@emotion/react";
import { GenericInputProps } from "../../../generics";
import {
  MakeResponsive,
  useResponsiveProps,
} from "../../../utilities/responsive";
import { useColors } from "../../../utilities/color";
import { Material } from "../../../utilities";

export type SwitchProps = GenericInputProps<boolean> &
  FocusEvents & {
    /** The label associated with this input */
    label?: string;

    /** Shorthand for `flex-grow = 1` */
    grow?: boolean;

    /** The material of this input */
    material?: Material;

    /** Optional props to pass to the `Button` container component */
    buttonProps?: PrimitiveButtonProps;
    /** Optional props to pass to the `Text` label component */
    labelProps?: TextProps;
  };

export const Switch = forwardRef(function Switch(
  props: MakeResponsive<SwitchProps>,
  ref: any,
) {
  const theme = useValence();
  const colors = useColors();

  // Defaults
  const {
    value,
    setValue,
    label,

    material = theme.materials.input,
    size = theme.defaults.size,
    radius = "xl",
    grow = false,

    disabled = false,
    readOnly = false,
    loading = false,

    onFocus,
    onBlur,

    buttonProps,
    labelProps,

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

    ...material.getStyles(theme, colors),

    ...style,
  });
  const HandleStyle = css({
    width: "50%",
    height: "100%",

    borderRadius: `${theme.sizeClasses.radius[radius]}px`,
    ...material.getChildrenStyles(theme, colors),

    outline: "none",
    border: "none",
  });

  return (
    <PrimitiveButton
      id={rest.id}
      onClick={handleClick}
      padding={0}
      height="fit-content"
      style={{
        backgroundColor: "transparent !important",
        gap: (theme.sizeClasses.padding[size] as number) / 2,
      }}
      size={size}
      grow={grow}
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
