/** @jsxImportSource @emotion/react */
import { ReactNode, forwardRef, useContext } from "react";
import { ValenceContext } from "../../..";
import { getBackgroundColor, getTextColor } from "../../buttons";
import { Loader } from "../../display";
import { ComponentSize, FillVariant, GenericLayoutProps, MouseClickEvents, MouseEvents, PointerEvents } from "@valence-ui/utils";
import { css } from "@emotion/react";


export type InputContainerProps =
  GenericLayoutProps
  & MouseClickEvents
  & MouseEvents
  & PointerEvents
  & {
    /** An icon to display at the left side of this input */
    icon?: ReactNode;
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
  };


export const InputContainer = forwardRef(function InputContainer(
  props: InputContainerProps,
  ref: any,
) {
  const theme = useContext(ValenceContext);


  // Defaults
  const {
    icon,
    size = theme.defaultSize,
    radius = theme.defaultRadius,
    variant = theme.defaultVariant,
    grow,

    disabled = false,
    required = false,
    loading = false,

    color = "black",
    backgroundColor = color,

    inputRef,
    onClick,

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

    width: "100%",
    height: theme.sizeClasses.height[size],
    borderRadius: `${theme.sizeClasses.radius[radius]}px`,

    padding: `0px ${theme.sizeClasses.padding[size]}px`,
    paddingLeft: props.icon
      ? theme.sizeClasses.padding[size] as number / 2
      : undefined,
    gap: theme.sizeClasses.padding[size] as number / 2,

    opacity: disabled ? 0.5 : 1,
    cursor: disabled ? "not-allowed" : "text",

    transition: `background-color ${theme.defaultTransitionDuration} linear 0s`,
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
  const IconStyle = css({
    height: "100%",
    aspectRatio: "1/1",
    opacity: 0.5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: disabled ? "not-allowed" : "text",
  });
  const RequireIndicatorStyle = css({
    width: 3,
    height: "calc(100% - 10px)",
    borderRadius: 3,
    backgroundColor: getTextColor(color === "black" ? "red" : color, "light", theme),
    cursor: disabled ? "not-allowed" : "text",
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
        <div css={IconStyle}>
          {loading ?
            <Loader color={variant === "filled" ? "white" : color } /> :
            icon
          }
        </div>
      }

      {children}
    </div>
  )
});