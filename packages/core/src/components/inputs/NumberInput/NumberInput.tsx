/** @jsxImportSource @emotion/react */
import { Dispatch, SetStateAction, useContext } from "react";
import { GenericInputEventHandlerProps, GenericInputProps, InputContainer } from "../InputContainer";
import { ValenceContext, useDefaultIconProps } from "../../..";
import { Flex } from "../../layout";
import { IconButton } from "../../buttons";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { css } from "@emotion/react";

export type NumberInputProps = GenericInputProps & GenericInputEventHandlerProps & {
  /** The value of this input */
  value: number;
  /** Sets the value of this input */
  setValue: Dispatch<SetStateAction<number>>;

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
}


export function NumberInput(props: NumberInputProps) {
  const theme = useContext(ValenceContext);
  const defaultIconProps = useDefaultIconProps();


  // Defaults
  const {
    value,
    setValue,

    icon,
    placeholder = "",

    min,
    max,
    step = 1,
    controlIcons = {
      up: <IconChevronUp {...defaultIconProps.get()} opacity={0.5} />,
      down: <IconChevronDown {...defaultIconProps.get()} opacity={0.5} />
    },

    showControls = true,

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

    color = "black",
    backgroundColor = color,
    
    onEnterPress,
    onKeyPress,

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

    "&::placeholder": {
      color: `${theme.getColor(color)?.base}${theme.getColor(color)?.opacity.medium}`
    },

    // Remove awful autofill color
    "&:-webkit-autofill": { transition: `background-color 5000s ease-in-out 0s` },
    "&:-webkit-autofill:focus": { transition: `background-color 5000s ease-in-out 0s` },
    "&:-webkit-autofill:hover": { transition: `background-color 5000s ease-in-out 0s` },
    "&:-webkit-autofill:active": { transition: `background-color 5000s ease-in-out 0s` },

    // Remove default arrows
    "&::-webkit-outer-spin-button": { appearance: "none", margin: 0 },
    "&::-webkit-inner-spin-button": { appearance: "none", margin: 0 },
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
      grow={grow}

      loading={loading}
      disabled={disabled}
      color={color}
      backgroundColor={backgroundColor}

      {...rest}
    >
      <input
        css={InputStyle}
        type="number"
        value={value}
        onChange={e => setValue(parseFloat(e.target.value))}

        placeholder={placeholder}
        min={min}
        max={max}
        step={step}

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

      {showControls &&
        <Flex gap={0}>
          <IconButton
            color={color}
            variant="subtle"
            size={size}
            radius={radius}
            onClick={() => setValue(value - step)}
            disabled={disabled || readOnly}
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
          >
            {controlIcons.up}
          </IconButton>
        </Flex>
      }
    </InputContainer>
  )
}