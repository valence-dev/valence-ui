/** @jsxImportSource @emotion/react */
import { CSSProperties, ReactNode, createRef, forwardRef } from "react";
import { InputContainer } from "../InputContainer";
import { GenericInputProps, GenericTextInputEventProps, useValence } from "../../..";
import { IconButton, getTextColor } from "../../buttons";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { css } from "@emotion/react";

export type NumberInputProps =
  GenericInputProps<number>
  & GenericTextInputEventProps
  & {
    /** An icon to display at the left side of this input */
    icon?: ReactNode;
    /** Text that appears in this input when it has no value */
    placeholder?: string;

    /** The minimum value of this input */
    min?: number;
    /** The maximum value of this input */
    max?: number;
    /** The step value of this input. Defaults to 1 */
    step?: number;

    /** Whether the stepper controls are shown */
    showControls?: boolean;
    /** Sets custom icons for the stepper control buttons */
    controlIcons?: {
      up?: React.ReactNode;
      down?: React.ReactNode;
    }

    /** Shorthand for `flex-grow = 1` */
    grow?: boolean;

    /** Optional styles to apply to the input component */
    inputStyle?: CSSProperties;
    children?: never;
  }


export const NumberInput = forwardRef(function NumberInput(
  props: NumberInputProps,
  ref: any
) {
  const theme = useValence();
  const inputRef = ref ?? createRef<HTMLInputElement>();


  // Defaults
  const {
    value,
    setValue,

    icon,

    min,
    max,
    step = 1,
    controlIcons = {
      up: <IconChevronUp opacity={0.5} />,
      down: <IconChevronDown opacity={0.5} />,
    },
    showControls = true,

    size = theme.defaults.size,
    radius = theme.defaults.radius,
    variant = theme.defaults.variant,
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

    // Remove default arrows
    "&::-webkit-outer-spin-button": { appearance: "none", margin: 0 },
    "&::-webkit-inner-spin-button": { appearance: "none", margin: 0 },

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

      button={showControls &&
        <>
          <IconButton
            color={color}
            variant="subtle"
            size={size}
            radius={radius}
            onClick={() => setValue(value - step)}
            disabled={disabled || readOnly}
            height={25}
          >
            {controlIcons.down}
          </IconButton>
          <IconButton
            color={color}
            variant="subtle"
            size={size}
            radius={radius}
            onClick={() => setValue(value + step)}
            disabled={disabled || readOnly}
            height={25}
          >
            {controlIcons.up}
          </IconButton>
        </>
      }
      buttonContainerStyle={{
        gap: 0,
        width: 55,
      }}
    >
      <input
        css={InputStyle}
        value={value}
        onChange={e => setValue(parseFloat(e.target.value))}
        onBlur={e => setValue(Math.min(Math.max(parseFloat(e.target.value), min ?? -Infinity), max ?? Infinity))}

        type="number"
        min={min}
        max={max}
        step={step}

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