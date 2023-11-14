/** @jsxImportSource @emotion/react */
import { FocusEvents } from "@valence-ui/utils";
import { forwardRef, useContext } from "react";
import { ValenceContext } from "../../../ValenceProvider";
import { PrimitiveButton, PrimitiveButtonProps, getBackgroundColor } from "../../buttons";
import { Loader, Text, TextProps } from "../../display";
import { motion } from "framer-motion";
import { Flex } from "../../layout";
import { css } from "@emotion/react";
import { GenericInputProps } from "../../../generics";

export type SwitchProps =
  GenericInputProps<boolean>
  & FocusEvents
  & {
    /** The label associated with this input */
    label?: string;

    /** Shorthand for `flex-grow = 1` */
    grow?: boolean;

    /** Optional props to pass to the `Button` container component */
    buttonProps?: PrimitiveButtonProps;
    /** Optional props to pass to the `Text` label component */
    labelProps?: TextProps;
  }


export const Switch = forwardRef(function Switch(
  props: SwitchProps,
  ref: any,
) {
  const theme = useContext(ValenceContext);


  // Defaults
  const {
    value,
    setValue,
    label,

    size = theme.defaultSize,
    radius = "xl",
    variant = theme.defaultVariant,
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
  } = props;


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

    width: width ?? theme.sizeClasses.height[size] as number * 1.75,
    height: height ?? theme.sizeClasses.height[size] as number * 0.75,
    borderRadius: `${theme.sizeClasses.radius[radius]}px`,
    padding: padding,
    margin: margin,

    opacity: disabled ? 0.5 : 1,
    cursor: disabled ? "not-allowed" : "pointer",

    transition: `background-color ${theme.defaultTransitionDuration} linear 0s`,
    backgroundColor: value ?
      getBackgroundColor(backgroundColor, variant, false, theme) :
      getBackgroundColor("black", variant, false, theme),

    outline: variant === "subtle" ?
      value ?
        `1px solid ${theme.getColorHex(backgroundColor, "medium")}` :
        `1px solid ${theme.getColorHex("black", "medium")}`
      : "none",
    border: "none",

    "&:hover": {
      backgroundColor: value ?
        getBackgroundColor(backgroundColor, variant, true, theme) :
        getBackgroundColor("black", variant, true, theme),
    },

    ...style
  });
  const HandleStyle = css({
    width: "50%",
    height: "100%",

    borderRadius: `${theme.sizeClasses.radius[radius]}px`,
    backgroundColor: value ?
      getBackgroundColor(variant === "filled" ? "white" : color, "filled", false, theme) :
      getBackgroundColor(variant === "filled" ? "white" : "black", "filled", false, theme),

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
        gap: theme.sizeClasses.padding[size] as number / 2,
      }}

      onFocus={onFocus}
      onBlur={onBlur}

      ref={ref}
      {...buttonProps}
    >
      {label &&
        <Text
          size={size}
          {...labelProps}
          tabIndex={-1}
        >
          {label}
        </Text>
      }

      <div
        tabIndex={0}
        css={SwitchStyle}
        {...rest}
      >
        {loading ?
          <Flex
            width="100%"
            height="100%"
            align="center"
            justify="center"
          >
            <Loader
              size={size}
              color={value ? "white" : "black"}
            />
          </Flex>
          :
          <motion.div
            css={HandleStyle}
            initial={{ x: value ? "0%" : "100%" }}
            animate={{ x: value ? "100%" : "0%" }}
            transition={{ ease: "backOut" }}
          />
        }
      </div>
    </PrimitiveButton>
  )
});