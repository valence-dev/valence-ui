/** @jsxImportSource @emotion/react */
import { ValenceContext } from "../../../ValenceProvider";
import { GenericInputEventHandlerProps, GenericInputProps } from "../InputContainer";
import { CSSProperties, Dispatch, SetStateAction, useContext } from "react";
import { getBackgroundColor, getTextColor } from "../../buttons";
import { css } from "@emotion/react";
import { Flex } from "../../layout";
import { Loader } from "../../display";

export type LineWrapBehaviour = "soft" | "hard" | "off";
export type ResizeBehaviour = "none" | "both" | "horizontal" | "vertical";

export type TextareaProps = GenericInputProps & GenericInputEventHandlerProps & {
  /** The value of the input */
  value: string;
  /** Sets the value of the input */
  setValue: Dispatch<SetStateAction<string>>;

  /** Whether the value of the input can be automatically completed by the browser. Defaults to `false`. */
  autoComplete?: boolean;
  /** Whether the input is subject to spell checking by the browser/OS. Defaults to `true`. */
  spellCheck?: boolean;

  /** The minimum length of the input */
  minLength?: number;
  /** The maximum length of the input */
  maxLength?: number;

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
}


export function Textarea(props: TextareaProps) {
  const theme = useContext(ValenceContext);


  // Defaults
  const {
    value,
    setValue,

    icon,
    placeholder = "",

    autoComplete = false,
    spellCheck = true,

    minLength,
    maxLength,

    cols,
    rows,
    wrap,

    resize = "none",
    minHeight,
    maxHeight,
    minWidth,
    maxWidth,

    size = theme.defaultSize,
    radius = theme.defaultRadius,
    grow,

    loading,
    autoFocus,
    disabled,
    readOnly = loading,
    required,

    form,
    name,
    tabIndex,

    padding = theme.sizeClasses.padding[size],
    margin,
    width = "100%",
    height = "auto",
    color = "black",
    backgroundColor = color,
    style,

    onInvalid,
    onSelect,
    onEnterPress,
    onKeyPress,
    onFocus,
    onBlur,

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
    margin: margin,

    opacity: disabled ? 0.5 : 1,
    cursor: disabled ? "not-allowed" : "text",

    transition: `background-color ${theme.defaultTransitionDuration} linear 0s`,
    backgroundColor: getBackgroundColor(backgroundColor, "light", false, theme),
    color: getTextColor(color, "light", theme),

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
      backgroundColor: !disabled ? getBackgroundColor(backgroundColor, "light", true, theme) : undefined,
    },
    "&:focus-within": {
      outline: `1px solid ${getTextColor(color, "light", theme)}`,
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
    color: getTextColor(color, "light", theme),

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
      color: `${theme.getColor(color)?.base}${theme.getColor(color)?.opacity.medium}`
    },

    // Remove awful autofill color
    "&:-webkit-autofill": { transition: `background-color 5000s ease-in-out 0s` },
    "&:-webkit-autofill:focus": { transition: `background-color 5000s ease-in-out 0s` },
    "&:-webkit-autofill:hover": { transition: `background-color 5000s ease-in-out 0s` },
    "&:-webkit-autofill:active": { transition: `background-color 5000s ease-in-out 0s` },
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
    <div css={ContainerStyle}>
      {loading ?
        <Flex
          justify="center"
          align="center"
          width="100%"
        >
          <Loader
            color={color}
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

          minLength={minLength}
          maxLength={maxLength}

          cols={cols}
          rows={rows}
          wrap={wrap}

          autoFocus={autoFocus}
          disabled={disabled}
          readOnly={readOnly}
          required={required}

          form={form}
          name={name}
          tabIndex={tabIndex}

          onKeyDown={handleKeyDown}

          {...rest}
        />
      }
    </div>
  )
}