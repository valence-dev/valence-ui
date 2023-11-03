/** @jsxImportSource @emotion/react */
import { ValenceContext } from "../../../ValenceProvider";
import { CSSProperties, Dispatch, SetStateAction, createRef, forwardRef, useContext } from "react";
import { getBackgroundColor, getTextColor } from "../../buttons";
import { css } from "@emotion/react";
import { Flex } from "../../layout";
import { Loader } from "../../display";
import { GenericTextInputEventProps, GenericTextInputProps } from "../../../generics";

export type LineWrapBehaviour = "soft" | "hard" | "off";
export type ResizeBehaviour = "none" | "both" | "horizontal" | "vertical";

export type TextareaProps =
  GenericTextInputProps
  & GenericTextInputEventProps
  & {
    /** Whether the value of the input can be automatically completed by the browser/OS. Defaults to `false`. */
    autoComplete?: boolean;
    /** Whether the input is subject to spell checking by the browser/OS. Defaults to `true`. */
    spellCheck?: boolean;

    /** Specifies the visible width of the input. */
    cols?: number;
    /** Specifies the visible number of lines in the input. */
    rows?: number;
    /** Specifies how the text in the input is to be wrapped. */
    wrap?: LineWrapBehaviour;

    /** Specifies how the input can be resized. Defaults to `"none"`. */
    resize?: ResizeBehaviour;
    /** The minimum height of the input */
    minHeight?: CSSProperties["minHeight"];
    /** The maximum height of the input */
    maxHeight?: CSSProperties["maxHeight"];
    /** The minimum width of the input */
    minWidth?: CSSProperties["minWidth"];
    /** The maximum width of the input */
    maxWidth?: CSSProperties["maxWidth"];
    /** Shorthand for `flex-grow = 1` */
    grow?: boolean;
  }


export const Textarea = forwardRef(function Textarea(
  props: TextareaProps,
  ref: any
) {
  const theme = useContext(ValenceContext);
  const inputRef = ref ?? createRef<HTMLTextAreaElement>();


  // Defaults
  const {
    value,
    setValue,

    placeholder = "",

    autoComplete = false,
    spellCheck = true,

    resize = "none",
    minHeight,
    maxHeight,
    minWidth,
    maxWidth,

    size = theme.defaultSize,
    radius = theme.defaultRadius,
    variant = theme.defaultVariant,
    grow,

    loading,
    disabled,
    readOnly = loading,
    required,

    color = "black",
    backgroundColor = color,
    padding = theme.sizeClasses.padding[size],
    margin,
    width = "100%",
    height = "auto",

    onEnterPress,
    onKeyPress,

    style,
    ...rest
  } = props;


  // Styles
  const ContainerStyle = css({
    display: "flex",

    boxSizing: "border-box",
    flexGrow: grow ? 1 : "unset",

    width: width,
    height: height,
    borderRadius: theme.sizeClasses.radius[radius],

    padding: padding,
    gap: padding as number / 2,
    margin: margin,

    opacity: disabled ? 0.5 : 1,
    cursor: disabled ? "not-allowed" : "text",

    transition: `background-color ${theme.defaultTransitionDuration} linear 0s`,
    backgroundColor: getBackgroundColor(backgroundColor, variant, false, theme),
    color: getTextColor(color, variant, theme),

    outline: "none",
    border: "none",
    textDecoration: "none",

    fontSize: theme.sizeClasses.fontSize[size],
    fontFamily: theme.getFont("default"),

    resize: resize,
    overflowY: "hidden",
    minHeight: minHeight,
    maxHeight: maxHeight,
    minWidth: minWidth,
    maxWidth: maxWidth,

    "&:hover": {
      backgroundColor: !disabled ? getBackgroundColor(backgroundColor, variant, true, theme) : undefined,
    },
    "&:focus-within": {
      outline: `1px solid ${getTextColor(color, variant, theme)}`,
    },

    ...style,
  });
  const TextareaStyle = css({
    outline: "none",
    border: "none",
    textDecoration: "none",
    resize: "none",
    padding: 0,

    width: "100%",
    height: "100%",

    overflowY: "auto",
    background: "none",
    color: getTextColor(color, variant, theme),

    fontSize: theme.sizeClasses.fontSize[size],
    fontFamily: theme.getFont("default"),

    "&::-webkit-scrollbar": {
      width: 10,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#11181C20",
      borderRadius: 5,
    },
    "&::placeholder": {
      color: `${getTextColor(color, variant, theme)}80`,
    },

    // Remove awful autofill color
    "&:-webkit-autofill": { transition: `background-color 5000s ease-in-out 0s` },
    "&:-webkit-autofill:focus": { transition: `background-color 5000s ease-in-out 0s` },
    "&:-webkit-autofill:hover": { transition: `background-color 5000s ease-in-out 0s` },
    "&:-webkit-autofill:active": { transition: `background-color 5000s ease-in-out 0s` },
  });
  const RequireIndicatorStyle = css({
    width: 3,
    borderRadius: 3,
    backgroundColor: getTextColor(color === "black" ? "red" : color, "light", theme),
    cursor: disabled ? "not-allowed" : "text",
  });



  // Handlers
  const handleKeyDown = (e: any) => {
    // Blur on "Escape" key
    if (e.key === "Escape") e.currentTarget.blur();
    // Call onEnterPress on "Enter" key
    if (e.key === "Enter") onEnterPress?.(e);
    // Call onKeyPress on any key
    onKeyPress?.(e);
  }


  return (
    <div
      css={ContainerStyle}
      onClick={() => inputRef.current?.focus()}
    >
      {required && <div css={RequireIndicatorStyle} />}

      {loading ?
        <Flex
          justify="center"
          align="center"
          width="100%"
        >
          <Loader
            color={variant === "filled" ? "white" : color}
            size={size}
          />
        </Flex>
        :
        <textarea
          css={TextareaStyle}

          value={value ?? ""}
          onChange={e => setValue(e.currentTarget.value)}

          placeholder={placeholder}

          autoComplete={autoComplete ? "on" : "off"}
          spellCheck={spellCheck}

          disabled={disabled}
          readOnly={readOnly}
          required={required}

          onKeyDown={handleKeyDown}

          ref={inputRef}
          {...rest}
        />
      }
    </div>
  )
});