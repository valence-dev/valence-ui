/** @jsxImportSource @emotion/react */
import { ReactNode, SyntheticEvent, useContext } from "react";
import { ValenceContext } from "../../..";
import { getBackgroundColor, getTextColor } from "../../buttons";
import { Loader } from "../../display";
import { ComponentSize, GenericLayoutProps } from "@valence-ui/utils";
import { css } from "@emotion/react";

export type GenericInputEventHandlerProps = {
  /** Called when this input fails validation on form submission */
  onInvalid?: (e: SyntheticEvent<HTMLInputElement, Event>) => void;
  /** Called when this input is selected and edited */
  onSelect?: (e: SyntheticEvent<HTMLInputElement, Event>) => void;
  /** Called when the `Enter` key is pressed while focus is on this input */
  onEnterPress?: (e: SyntheticEvent<HTMLInputElement, Event>) => void;
  /** Called when any key is pressed while focus is on this input */
  onKeyPress?: (e: SyntheticEvent<HTMLInputElement, Event>) => void;
  /** Called when this input is focused */
  onFocus?: (e: SyntheticEvent<HTMLInputElement, Event>) => void;
  /** Called when this input is blurred */
  onBlur?: (e: SyntheticEvent<HTMLInputElement, Event>) => void;
}

export type GenericInputProps = GenericLayoutProps & {
  /** An icon to display at the left side of this input */
  icon?: ReactNode;
  /** Placeholder text for this input. Defaults to blank */
  placeholder?: string;

  /** Sets the size class. Defaults to theme default */
  size?: ComponentSize;
  /** Sets the radius size class. Defaults to theme default */
  radius?: ComponentSize;
  /** Shorthand for `flex-grow = 1` */
  grow?: boolean;

  /** Specifies if this input will be focused on mount */
  autoFocus?: boolean;
  /** Specifies if this input is disabled */
  disabled?: boolean;
  /** Specifies if this input is read only */
  readOnly?: boolean;
  /** Specifies if this input is required */
  required?: boolean;
  /** If set, this input will be `readOnly` and its icon replaced with a loader */
  loading?: boolean;

  /** The ID of the `<form>` element this input belongs to */
  form?: string;
  /** The name of this input when submitted within a form. */
  name?: string;
  /** The `tabIndex` html property of this input. Useful for keyboard-only navigation and accessibility. */
  tabIndex?: number;
}

export type InputContainerProps = GenericInputProps & {
  children: ReactNode;
};


export function InputContainer(props: InputContainerProps) {
  const theme = useContext(ValenceContext);


  // Defaults
  const {
    children,

    icon,

    size = theme.defaultSize,
    radius = theme.defaultRadius,
    grow,

    disabled = false,
    required = false,
    loading = false,

    color = "black",
    backgroundColor = color,
    style,
    ...rest
  } = props;


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
    backgroundColor: getBackgroundColor(backgroundColor, "light", false, theme),
    color: getTextColor(color, "light", theme),

    outline: "none",
    border: "none",
    textDecoration: "none",

    "&:hover": {
      backgroundColor: !disabled ? getBackgroundColor(backgroundColor, "light", true, theme) : undefined,
    },
    "&:focus-within": {
      outline: `1px solid ${getTextColor(color, "light", theme)}`,
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
      {...rest}
    >
      {required && <div css={RequireIndicatorStyle} />}

      {(icon || loading) &&
        <div css={IconStyle}>
          {loading ? <Loader /> : icon}
        </div>
      }

      {children}
    </div>
  )
}