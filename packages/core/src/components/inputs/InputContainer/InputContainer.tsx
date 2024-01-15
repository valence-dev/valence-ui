/** @jsxImportSource @emotion/react */
import { CSSProperties, ReactNode, forwardRef } from "react";
import { useValence } from "../../..";
import { getBackgroundColor, getTextColor } from "../../buttons";
import { Icon, Loader } from "../../display";
import { ComponentSize, FillVariant, GenericLayoutProps, MouseClickEvents, MouseEvents, PointerEvents, SizeClasses } from "@valence-ui/utils";
import { css } from "@emotion/react";


export type InputContainerProps =
  GenericLayoutProps
  & MouseClickEvents
  & MouseEvents
  & PointerEvents
  & {
    /** An icon to display at the left side of this input */
    icon?: ReactNode;
    /** A button to display to the right of this input */
    button?: ReactNode;

    /** Sets the size class. Defaults to theme default */
    size?: ComponentSize;
    /** Sets the radius size class. Defaults to theme default */
    radius?: ComponentSize;
    /** Sets the styling variant. Defaults to theme default */
    variant?: FillVariant;
    /** Shorthand for `flex-grow = 1` */
    grow?: boolean;

    /** Whether this input is disabled */
    disabled?: boolean;
    /** Whether this input is required */
    required?: boolean;
    /** Whether this input is loading */
    loading?: boolean;

    /** A `ref` of the input component */
    inputRef?: any;

    /** Optional styles for the icon container component */
    iconContainerStyle?: CSSProperties;
    /** Optional styles for the require indicator component */
    requireIndicatorStyle?: CSSProperties;
    /** Optional styles for the button container component */
    buttonContainerStyle?: CSSProperties;
  };


export const INPUT_SIZES: SizeClasses<{
  padding: CSSProperties["padding"],
}> = { 
  xs: { padding: 4 },
  sm: { padding: 6 },
  md: { padding: 8 },
  lg: { padding: 10 },
  xl: { padding: 12 },
}


export const InputContainer = forwardRef(function InputContainer(
  props: InputContainerProps,
  ref: any,
) {
  const theme = useValence();


  // Defaults
  const {
    icon,
    button,
    size = theme.defaults.size,
    radius = theme.defaults.radius,
    variant = theme.defaults.variant,
    grow,

    disabled = false,
    required = false,
    loading = false,

    color = "black",
    backgroundColor = color,
    width = "100%",
    height = theme.sizeClasses.height[size],
    padding = INPUT_SIZES[size].padding,
    margin,

    inputRef,
    onClick,

    iconContainerStyle,
    requireIndicatorStyle,
    buttonContainerStyle,

    children,
    style,
    ...rest
  } = props;


  // Functions
  const handleClick = (e: MouseEvent) => {
    if (disabled) {
      e.preventDefault();
      e.stopPropagation();
    }

    if (inputRef && inputRef.current)
      inputRef.current.focus();
    onClick?.(e as any);
  }


  // Styles
  const ContainerStyle = css({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    boxSizing: "border-box",
    flexGrow: grow ? 1 : "unset",

    width: width,
    height: height,
    borderRadius: theme.sizeClasses.radius[radius],

    padding: padding,
    gap: padding,

    opacity: disabled ? 0.5 : 1,
    cursor: disabled ? "not-allowed" : "text",

    transition: `background-color ${theme.defaults.transitionDuration} linear 0s`,
    backgroundColor: getBackgroundColor(backgroundColor, variant, false, theme),
    color: getTextColor(color, variant, theme),

    outline: "none",
    border: "none",
    textDecoration: "none",

    "&:hover": {
      backgroundColor: !disabled ? getBackgroundColor(backgroundColor, variant, true, theme) : undefined,
    },
    "&:focus-within": {
      outline: `1px solid ${getTextColor(color, variant, theme)}`,
    },

    ...style
  });
  const IconContainerStyle = css({
    height: "100%",
    opacity: 0.5,
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",

    ...iconContainerStyle,
  });
  const ButtonContainerStyle = css({
    height: "100%",
    opacity: 0.5,
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",

    ...buttonContainerStyle,
  });
  const RequireIndicatorStyle = css({
    width: 3,
    height: "calc(100% - 10px)",
    minHeight: 20,
    borderRadius: 3,
    backgroundColor: getTextColor(color === "black" ? "red" : color, "light", theme),
    cursor: disabled ? "not-allowed" : "text",

    ...requireIndicatorStyle,
  });


  return (
    <div
      css={ContainerStyle}
      ref={ref}

      onClick={(event) => handleClick(event as any)}
      {...rest}
    >
      {required && <div css={RequireIndicatorStyle} />}

      {(icon || loading) &&
        <div css={IconContainerStyle}>
          {loading ?
            <Loader color={variant === "filled" ? "white" : color } /> :
            <Icon>{icon}</Icon>
          }
        </div>
      }

      {children}

      {button &&
        <div css={ButtonContainerStyle}>
          <Icon>{button}</Icon>
        </div>
      }
    </div>
  )
});