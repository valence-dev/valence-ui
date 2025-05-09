/** @jsxImportSource @emotion/react */
import { CSSProperties, ReactNode, forwardRef } from "react";
import {
  MakeResponsive,
  useColors,
  useResponsiveProps,
  useValence,
} from "../../..";
import { Icon, Loader } from "../../display";
import {
  ComponentSize,
  FillVariant,
  GenericLayoutProps,
  MouseClickEvents,
  MouseEvents,
  PointerEvents,
  SizeClasses,
} from "@valence-ui/utils";
import { css } from "@emotion/react";

export type InputContainerProps = GenericLayoutProps &
  MouseClickEvents &
  MouseEvents &
  PointerEvents & {
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
  padding: CSSProperties["padding"];
}> = {
  xs: { padding: 4 },
  sm: { padding: 6 },
  md: { padding: 8 },
  lg: { padding: 10 },
  xl: { padding: 12 },
};

export const InputContainer = forwardRef(function InputContainer(
  props: MakeResponsive<InputContainerProps>,
  ref: any
) {
  const theme = useValence();
  const { getBgHex, getBorderHex, getFgHex } = useColors();

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
  } = useResponsiveProps<InputContainerProps>(props);

  // Functions
  const handleClick = (e: MouseEvent) => {
    if (disabled) {
      e.preventDefault();
      e.stopPropagation();
    }

    if (inputRef && inputRef.current) inputRef.current.focus();
    onClick?.(e as any);
  };

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

    transitionProperty: "background-color, border",
    transitionDuration: theme.defaults.transitionDuration,
    transitionTimingFunction: "linear",
    backgroundColor: getBgHex(backgroundColor, variant, false),
    color: getFgHex(color, variant),

    outline: "none",
    border: getBorderHex(color, variant),
    textDecoration: "none",

    "&:hover": {
      backgroundColor: !disabled
        ? getBgHex(backgroundColor, variant, true)
        : undefined,
    },
    "&:focus-within": {
      outline: "none",
      border: getBorderHex(color, variant, true),
    },

    ...style,
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
    backgroundColor: getFgHex(color === "black" ? "red" : color, "light"),
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

      {(icon || loading) && (
        <div css={IconContainerStyle}>
          {loading ? (
            <Loader color={variant === "filled" ? "white" : color} />
          ) : (
            <Icon>{icon}</Icon>
          )}
        </div>
      )}

      {children}

      {button && (
        <div css={ButtonContainerStyle}>
          <Icon>{button}</Icon>
        </div>
      )}
    </div>
  );
});
