/** @jsxImportSource @emotion/react */
import { ReactNode, createRef, forwardRef, useContext } from "react";
import { GenericTextInputEventProps, GenericTextInputProps, ValenceContext, getTextColor } from "../../..";
import { InputContainer } from "../InputContainer";
import { css } from "@emotion/react";


/** Defines the type of input that will be rendered */
export type TextInputType = "text" | "password" | "email" | "number" | "tel" | "url" | "search";

/** Defines the type of autocomplete behaviour that will be used */
export type AutoCompleteBehaviour = "off" | "on" | "name" | "honorific-prefix" | "given-name" | "addtional-name" | "family-name" | "honorific-suffix" | "nickname" | "email" | "email" | "username" | "new-password" | "current-password" | "one-time-code" | "organization-title" | "organization" | "street-address" | "shipping" | "billing" | "address-line1" | "address-line2" | "address-line3" | "address-level4" | "address-level3" | "address-level2" | "address-level1" | "country" | "country-name" | "postal-code" | "cc-name" | "cc-given-name" | "cc-additional-name" | "cc-family-name" | "cc-number" | "cc-exp" | "cc-exp-month" | "cc-exp-year" | "cc-csc" | "cc-type" | "transaction-currency" | "transaction-amount" | "language" | "bday" | "bday-day" | "bday-month" | "bday-year" | "sex" | "tel" | "tel-country-code" | "tel-national" | "tel-area-code" | "tel-local" | "tel-extension" | "impp" | "url" | "photo" | "webauthn";


export type TextInputProps =
  GenericTextInputProps
  & GenericTextInputEventProps
  & {
    /** The type of input to render. Defaults to `text` */
    type?: TextInputType;
    /** The autocomplete behaviour to use. Defaults to `off` */
    autoComplete?: AutoCompleteBehaviour;
    /** For `type=email`, this specifies if this input accepts multiple values */
    multiple?: boolean;

    /** Shorthand for `flex-grow = 1` */
    grow?: boolean;
  }


export const TextInput = forwardRef(function TextInput(
  props: TextInputProps,
  ref: any,
) {
  const theme = useContext(ValenceContext);
  const inputRef = ref ?? createRef<HTMLInputElement>();


  // Defaults
  const {
    value,
    setValue,

    icon,
    type = "text",
    autoComplete = "off",

    size = theme.defaultSize,
    radius = theme.defaultRadius,
    variant = theme.defaultVariant,
    grow,

    loading,
    autoFocus,
    disabled,
    readOnly = loading,
    required,

    color = "black",
    backgroundColor = color,
    padding,
    margin,
    width,
    height,

    onEnterPress,
    onKeyPress,

    inputStyle,
    style,
    ...rest
  } = props;


  // Styles
  const InputStyle = css({
    border: "none",
    outline: "none",
    background: "none",
    flexGrow: 1,

    width: "100%",
    height: "100%",
    margin: 0,
    padding: 0,
    cursor: disabled ? "not-allowed" : "text",

    fontSize: theme.sizeClasses.fontSize[size],
    fontFamily: theme.getFont("default"),
    color: getTextColor(color, variant, theme),

    "&::placeholder": {
      color: `${getTextColor(color, variant, theme)}80`,
    },

    // Remove awful autofill color
    "&:-webkit-autofill": { transition: `background-color 5000s ease-in-out 0s` },
    "&:-webkit-autofill:focus": { transition: `background-color 5000s ease-in-out 0s` },
    "&:-webkit-autofill:hover": { transition: `background-color 5000s ease-in-out 0s` },
    "&:-webkit-autofill:active": { transition: `background-color 5000s ease-in-out 0s` },

    ...inputStyle
  });


  // Functions
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

      style={style}
      inputRef={inputRef}
    >
      <input
        css={InputStyle}
        value={value ?? ""}
        onChange={e => setValue(e.currentTarget.value)}

        type={type}
        autoComplete={autoComplete}

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