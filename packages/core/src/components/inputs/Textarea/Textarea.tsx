/** @jsxImportSource @emotion/react */
import { useValence } from "../../../ValenceProvider";
import { CSSProperties, createRef, forwardRef } from "react";
import { css } from "@emotion/react";
import { GenericTextInputEventProps, GenericTextInputProps } from "../../../generics";
import { InputContainer } from "../InputContainer";
import { MakeResponsive, useResponsiveProps } from "../../../utilities/responsive";
import { useColors } from "../../../utilities/color";

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
  props: MakeResponsive<TextareaProps>,
  ref: any
) {
  const theme = useValence();
  const { getFgHex } = useColors();
  const inputRef = ref ?? createRef<HTMLTextAreaElement>();


  // Defaults
  const {
    value,
    setValue,

    icon,
    placeholder = "",

    autoComplete = false,
    spellCheck = true,

    size = theme.defaults.size,
    radius = theme.defaults.radius,
    variant = theme.defaults.variant,
    grow,

    resize = "none",
    minHeight = theme.sizeClasses.height[size],
    maxHeight,
    minWidth,
    maxWidth,

    autoFocus,
    loading,
    disabled,
    readOnly = loading,
    required,

    color = "black",
    backgroundColor = color,
    padding = 10,
    margin,
    width = "100%",
    height = "auto",

    onEnterPress,
    onKeyPress,

    style,
    inputStyle,
    ...rest
  } = useResponsiveProps<TextareaProps>(props);


  // Styles
  const TextareaStyle = css({
    outline: "none",
    border: "none",
    textDecoration: "none",
    padding: 0,

    resize: resize,
    minHeight: minHeight,
    maxHeight: maxHeight,
    minWidth: minWidth,
    maxWidth: maxWidth,

    verticalAlign: "center",

    width: "100%",
    height: "100%",

    overflowY: "auto",
    background: "none",
    color: getFgHex(color, variant),

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
      color: `${getFgHex(color, variant)}80`,
    },

    // Remove awful autofill color
    "&:-webkit-autofill": { transition: `background-color 5000s ease-in-out 0s` },
    "&:-webkit-autofill:focus": { transition: `background-color 5000s ease-in-out 0s` },
    "&:-webkit-autofill:hover": { transition: `background-color 5000s ease-in-out 0s` },
    "&:-webkit-autofill:active": { transition: `background-color 5000s ease-in-out 0s` },

    ...inputStyle
  });
  const ContainerStyle: CSSProperties = {
    minHeight: height,
    height: "fit-content",
    ...style
  }



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
    <InputContainer
      icon={icon}

      size={size}
      radius={radius}
      variant={variant}
      grow={grow}

      disabled={disabled}
      required={required}
      loading={loading}

      color={color}
      backgroundColor={backgroundColor}
      padding={padding}
      margin={margin}
      width={width}
      height={height}

      style={ContainerStyle}
      inputRef={inputRef}
    >
      <textarea
        css={TextareaStyle}
        value={value ?? ""}
        onChange={e => setValue(e.currentTarget.value)}

        placeholder={placeholder}
        autoComplete={autoComplete ? "on" : "off"}
        spellCheck={spellCheck}

        autoFocus={autoFocus}
        disabled={disabled}
        readOnly={readOnly}
        required={required}

        onKeyDown={handleKeyDown}
        ref={inputRef}
        {...rest}
      />
    </InputContainer>
  )
});