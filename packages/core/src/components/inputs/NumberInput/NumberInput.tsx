/** @jsxImportSource @emotion/react */
import { CSSProperties, ReactNode, createRef, forwardRef } from "react";
import { InputContainer } from "../InputContainer";
import {
  GenericInputProps,
  GenericTextInputEventProps,
} from "../../../generics/Input";
import {
  MakeResponsive,
  useResponsiveProps,
} from "../../../utilities/responsive";
import { Material } from "../../../utilities/materials";
import { useValence } from "../../../ValenceProvider";
import { IconButton } from "../../buttons/IconButton";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { css } from "@emotion/react";

export type NumberInputProps = GenericInputProps<number> &
  GenericTextInputEventProps & {
    /** An icon to display at the left side of this input */
    icon?: ReactNode;
    /** Text that appears in this input when it has no value */
    placeholder?: string;

    /** The minimum value of this input */
    min?: number;
    /** The maximum value of this input */
    max?: number;
    /** The step value of this input. Defaults to `1` */
    step?: number;

    material?: Material;

    /** Whether the stepper controls are shown */
    showControls?: boolean;
    /** Sets custom icons for the stepper control buttons */
    controlIcons?: {
      up?: React.ReactNode;
      down?: React.ReactNode;
    };

    /** Shorthand for `flex-grow = 1` */
    grow?: boolean;

    /** Optional styles to apply to the input component */
    inputStyle?: CSSProperties;
  };

export const NumberInput = forwardRef(function NumberInput(
  props: MakeResponsive<NumberInputProps>,
  ref: any,
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
    grow,

    loading,
    autoFocus,
    disabled,
    readOnly = loading,
    required,

    material = theme.materials.input,
    padding,
    margin,
    width,
    height,

    onEnterPress,
    onKeyPress,
    onBlur,

    inputStyle,
    style,
    ...rest
  } = useResponsiveProps<NumberInputProps>(props);

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

    // Remove awful autofill color
    "&:-webkit-autofill": {
      transition: `background-color 5000s ease-in-out 0s`,
    },
    "&:-webkit-autofill:focus": {
      transition: `background-color 5000s ease-in-out 0s`,
    },
    "&:-webkit-autofill:hover": {
      transition: `background-color 5000s ease-in-out 0s`,
    },
    "&:-webkit-autofill:active": {
      transition: `background-color 5000s ease-in-out 0s`,
    },

    // Remove default arrows
    "&::-webkit-outer-spin-button": { appearance: "none", margin: 0 },
    "&::-webkit-inner-spin-button": { appearance: "none", margin: 0 },

    ...inputStyle,
  });

  // Functions
  const handleKeyDown = (e: any) => {
    // Blur on "Escape" key
    if (e.key === "Escape") e.currentTarget.blur();
    // Call onEnterPress on "Enter" key
    if (e.key === "Enter") onEnterPress?.(e);
    // Call onKeyPress on any key
    onKeyPress?.(e);
  };
  function handleBlur(e: any) {
    setValue(
      Math.min(
        Math.max(parseFloat(e.target.value), min ?? -Infinity),
        max ?? Infinity,
      ),
    );
    onBlur?.(e);
  }

  return (
    <InputContainer
      icon={icon}
      size={size}
      radius={radius}
      material={material}
      grow={grow}
      disabled={disabled}
      required={required}
      loading={loading}
      padding={padding}
      margin={margin}
      width={width}
      height={height}
      style={style}
      inputRef={inputRef}
      button={
        showControls && (
          <>
            <IconButton
              material={material}
              size={size}
              radius={radius}
              onClick={() => setValue(value - step)}
              disabled={disabled || readOnly}
              height={25}
            >
              {controlIcons.down}
            </IconButton>
            <IconButton
              material={material}
              size={size}
              radius={radius}
              onClick={() => setValue(value + step)}
              disabled={disabled || readOnly}
              height={25}
            >
              {controlIcons.up}
            </IconButton>
          </>
        )
      }
      buttonContainerStyle={{
        gap: 0,
        width: 55,
      }}
    >
      <input
        css={InputStyle}
        value={value}
        onChange={(e) => setValue(parseFloat(e.target.value))}
        onBlur={handleBlur}
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
  );
});
