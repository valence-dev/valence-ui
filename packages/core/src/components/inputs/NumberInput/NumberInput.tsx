/** @jsxImportSource @emotion/react */
import {
  CSSProperties,
  ChangeEvent,
  ReactNode,
  forwardRef,
  useRef,
  useState,
} from "react";
import { useMergeRefs } from "@floating-ui/react";
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

/** Renders a value as the text the input should display. */
function toRawValue(value: number): string {
  if (value === undefined || value === null || Number.isNaN(value)) return "";
  return String(value);
}

/** Text the user has to type through on the way to a number. */
function isPartialNumber(raw: string): boolean {
  return raw === "" || raw === "-" || raw === "." || raw === "-.";
}

export const NumberInput = forwardRef(function NumberInput(
  props: MakeResponsive<NumberInputProps>,
  ref: any,
) {
  const theme = useValence();
  // `inputRef` stays an object ref so `InputContainer` can focus through it,
  // including when the caller forwarded a callback ref. `mergedRef` is what the
  // DOM node receives, so the caller's ref is populated too.
  const inputRef = useRef<HTMLInputElement>(null);
  const mergedRef = useMergeRefs([ref, inputRef]);

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
    onChange,
    onBlur,

    inputStyle,
    style,
    ...rest
  } = useResponsiveProps<NumberInputProps>(props);

  // The text the input actually displays. Kept separately from `value` so the
  // field can hold states that are not yet a number ("", "-", "1e") without
  // emitting `NaN` to the consumer.
  const [rawValue, setRawValue] = useState(() => toRawValue(value));
  const [lastValue, setLastValue] = useState(value);
  // Re-sync when `value` changes from anywhere other than this input.
  if (!Object.is(value, lastValue)) {
    setLastValue(value);
    setRawValue(toRawValue(value));
  }

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
  /** Emits `next` and records it, so the sync above does not undo it. */
  function emit(next: number) {
    setLastValue(next);
    setValue(next);
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const raw = e.target.value;
    setRawValue(raw);

    // Let the user type their way to a number without emitting anything.
    if (!isPartialNumber(raw)) {
      const parsed = Number(raw);
      if (!Number.isNaN(parsed)) emit(parsed);
    }

    onChange?.(e);
  }
  function handleBlur(e: any) {
    const parsed = Number(rawValue);
    // An empty or unparseable field settles on the lowest legal value rather
    // than clamping `NaN`, which would produce `NaN` again.
    const next =
      isPartialNumber(rawValue) || Number.isNaN(parsed)
        ? (min ?? 0)
        : Math.min(Math.max(parsed, min ?? -Infinity), max ?? Infinity);

    setRawValue(toRawValue(next));
    emit(next);
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
        value={rawValue}
        onChange={handleChange}
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
        ref={mergedRef}
        {...rest}
      />
    </InputContainer>
  );
});
