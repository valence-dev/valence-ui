import { ComponentSize, GenericLayoutProps } from "@valence-ui/utils";
import { Dispatch, SetStateAction, SyntheticEvent, useContext } from "react";
import { ValenceContext } from "../../../ValenceProvider";
import styled from "styled-components";
import { PrimitiveButton, PrimitiveButtonProps, getBackgroundColor } from "../../buttons";
import { Text, TextProps } from "../../display";
import { motion } from "framer-motion";

export type SwitchInputProps = GenericLayoutProps & {
  /** The value of the input */
  checked: boolean;
  /** Sets the value of the input */
  setChecked: Dispatch<SetStateAction<boolean>>;
  /** The label associated with this input */
  label?: string;

  /** Sets the size class. Defaults to theme default */
  size?: ComponentSize;
  /** Sets the radius size class. Defaults to `"xl"` */
  radius?: ComponentSize;
  /** Shorthand for `flex-grow = 1` */
  grow?: boolean;

  /** Specifies if this input is disabled */
  disabled?: boolean;
  /** Specifies if this input is read only */
  readOnly?: boolean;
  /** If set, this input will be replaced with a loader */
  loading?: boolean;

  /** Called when this input is focused */
  onFocus?: (e: SyntheticEvent<HTMLInputElement, Event>) => void;
  /** Called when this input is blurred */
  onBlur?: (e: SyntheticEvent<HTMLInputElement, Event>) => void;

  /** Optional props to pass to the `Button` container component */
  buttonProps: PrimitiveButtonProps;
  /** Optional props to pass to the `Text` label component */
  labelProps: TextProps;
}


export function SwitchInput(props: SwitchInputProps) {
  const theme = useContext(ValenceContext);


  // Defaults
  const {
    checked = true,
    setChecked,
    label,

    size = theme.defaultSize,
    radius = "xl",
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


  // Styles
  const StyledSwitch = styled.div({
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
    backgroundColor: checked ?
      getBackgroundColor(backgroundColor, "filled", false, theme) :
      getBackgroundColor("black", "light", false, theme),

    outline: "none",
    border: "none",

    "&:hover": {
      backgroundColor: checked ?
        getBackgroundColor(backgroundColor, "filled", true, theme) :
        getBackgroundColor("black", "light", true, theme),
    },

    ...style
  });
  const StyledSwitchIndicator = styled.div({
    width: "50%",
    height: "100%",

    borderRadius: `${theme.sizeClasses.radius[radius]}px`,
    backgroundColor: checked ?
      getBackgroundColor("white", "filled", false, theme) :
      getBackgroundColor("black", "filled", false, theme),

    outline: "none",
    border: "none",
  });


  return (
    <PrimitiveButton
      id={rest.id}
      onClick={() => setChecked(!checked)}

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

      {...buttonProps}
    >
      <Text
        size={size}
        {...labelProps}
      >
        {label}
      </Text>

      <StyledSwitch
        tabIndex={0}        
        {...rest}
      >
        <StyledSwitchIndicator
          as={motion.div}
          initial={{ x: checked ? "0%" : "100%" }}
          animate={{ x: checked ? "100%" : "0%" }}
          transition={{ ease: "backOut" }}
        />
      </StyledSwitch>
    </PrimitiveButton>
  )
}