import { Dispatch, SetStateAction, useContext } from "react";
import { ValenceContext } from "../../..";
import styled from "styled-components";
import { GenericInputEventHandlerProps, GenericInputProps, InputContainer } from "../InputContainer";


/** Defines the type of input that will be rendered */
export type TextInputType = "text" | "password" | "email" | "number" | "tel" | "url" | "search";

/** Defines the type of autocomplete behaviour that will be used */
export type AutoCompleteBehaviour = "off" | "on" | "name" | "honorific-prefix" | "given-name" | "addtional-name" | "family-name" | "honorific-suffix" | "nickname" | "email" | "email" | "username" | "new-password" | "current-password" | "one-time-code" | "organization-title" | "organization" | "street-address" | "shipping" | "billing" | "address-line1" | "address-line2" | "address-line3" | "address-level4" | "address-level3" | "address-level2" | "address-level1" | "country" | "country-name" | "postal-code" | "cc-name" | "cc-given-name" | "cc-additional-name" | "cc-family-name" | "cc-number" | "cc-exp" | "cc-exp-month" | "cc-exp-year" | "cc-csc" | "cc-type" | "transaction-currency" | "transaction-amount" | "language" | "bday" | "bday-day" | "bday-month" | "bday-year" | "sex" | "tel" | "tel-country-code" | "tel-national" | "tel-area-code" | "tel-local" | "tel-extension" | "impp" | "url" | "photo" | "webauthn";


export type TextInputProps = GenericInputProps & GenericInputEventHandlerProps & {
  /** The value of the input */
  value: string;
  /** Sets the value of the input */
  setValue: Dispatch<SetStateAction<string>>;

  /** The type of input to render. Defaults to `text` */
  type?: TextInputType;
  /** The autocomplete behaviour to use. Defaults to `off` */
  autoComplete?: AutoCompleteBehaviour;

  /** A regex pattern to use for validation */
  pattern?: string;
  /** The minimum length of the input */
  minLength?: number;
  /** The maximum length of the input */
  maxLength?: number;

  /** For `type=email`, this specifies if this input accepts multiple values */
  multiple?: boolean;
}


export function TextInput(props: TextInputProps) {
  const theme = useContext(ValenceContext);


  // Defaults
  const {
    value,
    setValue,

    icon,
    placeholder = "",
    type = "text",
    autoComplete = "off",

    pattern,
    minLength,
    maxLength,

    size = theme.defaultSize,
    radius = theme.defaultRadius,
    grow,

    loading,
    autoFocus,
    disabled,
    readOnly = loading,
    required,
    multiple,

    form,
    name,
    tabIndex,

    color = "black",
    backgroundColor = color,

    style,
    ...rest
  } = props;


  // Styles
  const StyledInput = styled.input({
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

    "&::placeholder": {
      color: `${theme.getColor(color)?.base}${theme.getColor(color)?.opacity.medium}`
    },

    // Remove awful autofill color
    "&:-webkit-autofill": { transition: `background-color 5000s ease-in-out 0s` },
    "&:-webkit-autofill:focus": { transition: `background-color 5000s ease-in-out 0s` },
    "&:-webkit-autofill:hover": { transition: `background-color 5000s ease-in-out 0s` },
    "&:-webkit-autofill:active": { transition: `background-color 5000s ease-in-out 0s` },
  });


  // Functions
  const handleKeyDown = (e: any) => {
    // Blur on "Escape" key
    if (e.key === "Escape") e.currentTarget.blur();
    // Call onEnterPress on "Enter" key
    if (e.key === "Enter") rest.onEnterPress?.(e);
    // Call onKeyPress on any key
    rest.onKeyPress?.(e);
  }


  return (
    <InputContainer
      icon={icon}

      size={size}
      radius={radius}
      grow={grow}

      disabled={disabled}
      required={required}
      loading={loading}

      color={color}
      backgroundColor={backgroundColor}

      style={style}
      {...rest}
    >
      <StyledInput
        value={value ?? ""}
        onChange={e => setValue(e.currentTarget.value)}

        placeholder={placeholder}
        type={type}
        autoComplete={autoComplete}

        pattern={pattern}
        minLength={minLength}
        maxLength={maxLength}

        autoFocus={autoFocus}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        multiple={multiple}

        form={form}
        name={name}
        tabIndex={tabIndex}

        onKeyDown={handleKeyDown}
        {...rest}
      />
    </InputContainer>
  )
}