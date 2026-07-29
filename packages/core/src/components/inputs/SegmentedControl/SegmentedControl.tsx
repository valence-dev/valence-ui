import { ReactNode, forwardRef } from "react";
import { GenericInputProps } from "../../../generics";
import { Flex, FlexProps } from "../../layout/Flex";
import {
  PrimitiveButton,
  PrimitiveButtonProps,
} from "../../buttons/PrimitiveButton";
import { Loader } from "../../display/Loader";
import { Text } from "../../display/Text";
import { useValence } from "../../../ValenceProvider";
import {
  MakeResponsive,
  useResponsiveProps,
} from "../../../utilities/responsive";
import { GlassMaterial } from "../../../utilities";
import { AirMaterial } from "../../../utilities/materials/AirMaterial";
import { CSSObject } from "@emotion/react";

export type SegmentedControlOption =
  | {
      /** The value of this option */
      value: string;
      /** The label to display for this option */
      label?: string | ReactNode;
    }
  | string;
function getOptionValue(option: SegmentedControlOption) {
  return typeof option === "string" ? option : option.value;
}
function getOptionLabel(option: SegmentedControlOption) {
  return typeof option === "string" ? option : (option.label ?? option.value);
}

export type SegmentedControlEventProps = {
  /** Callback to be called when an option is selected. */
  onSelect?: (value: SegmentedControlOption) => void;
};

export type SegmentedControlProps = GenericInputProps<string> &
  FlexProps &
  SegmentedControlEventProps & {
    /** A list of options to supply for the content of this input */
    options: SegmentedControlOption[];

    /**
     * Whether every option should be the same width as the widest option.
     * `true` by default.
     */
    equalWidth?: boolean;

    /** Do not supply children to this element */
    children?: never;

    /** Optional props to pass to the child button components */
    buttonProps?: PrimitiveButtonProps;
  };

export const SegmentedControl = forwardRef(function SegmentedControl(
  props: MakeResponsive<SegmentedControlProps>,
  ref: any,
) {
  // Hooks
  const theme = useValence();

  const {
    value,
    setValue,
    options,
    onSelect,

    equalWidth = true,
    buttonProps,

    size = theme.defaults.size,
    radius = theme.defaults.radius,

    material = new GlassMaterial(),
    margin,
    padding = 5,
    gap = padding,

    disabled,
    readOnly,
    required,
    autoFocus,
    loading,

    style,
    ...rest
  } = useResponsiveProps<SegmentedControlProps>(props);
  const { size: buttonSize = size, radius: buttonRadius = radius } =
    buttonProps ?? {};

  // Styles
  const containerStyle: CSSObject = {
    borderRadius: theme.getSize("radius", radius) + padding,

    // `equalWidth` lays the options out as equal grid tracks rather than
    // growing them. `flex-grow` only ever shares out a container's *surplus*
    // space, so it widens every segment by the same amount and preserves the
    // differences between them — a `minmax(0, 1fr)` track discards the content
    // width instead, which is what makes the segments actually equal.
    ...(equalWidth && {
      display: "grid",
      gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))`,
    }),

    ...style,
  };

  // Functions
  function handleSetOptionValue(option: SegmentedControlOption) {
    if (disabled || readOnly || loading) return;
    setValue(getOptionValue(option));
    onSelect?.(option);
  }

  // The control is a group of buttons rather than a single form element, so
  // `required` is exposed to assistive technology instead of to the DOM.
  const groupProps = required
    ? { role: "group", "aria-required": true }
    : undefined;
  // Only one option can hold focus, so `autoFocus` goes to the selected one —
  // or to the first, when nothing is selected yet.
  const autoFocusIndex = Math.max(
    options.findIndex((option) => getOptionValue(option) === value),
    0,
  );

  return (
    <Flex
      ref={ref}
      material={material}
      margin={margin}
      padding={padding}
      gap={gap}
      alignSelf="stretch"
      style={containerStyle}
      {...groupProps}
      {...rest}
    >
      {loading ? (
        <Flex
          grow
          justify="center"
          align="center"
          height={theme.getSize("height", buttonSize)}
          // The loader replaces the whole option row, so under `equalWidth`'s
          // grid it has to span every track rather than sit in the first one.
          style={equalWidth ? { gridColumn: "1 / -1" } : undefined}
        >
          <Loader color="black" />
        </Flex>
      ) : (
        options.map((option, index) => {
          const selected = getOptionValue(option) === value;
          const label = getOptionLabel(option);

          return (
            <PrimitiveButton
              key={index}
              onClick={() => handleSetOptionValue(option)}
              material={selected ? new GlassMaterial() : new AirMaterial()}
              // Fill the grid track rather than the button's own content width,
              // so a short label occupies the same box as a long one.
              width={equalWidth ? "100%" : undefined}
              size={buttonSize}
              radius={buttonRadius}
              disabled={disabled || readOnly || loading}
              autoFocus={autoFocus && index === autoFocusIndex}
              {...buttonProps}
            >
              {typeof label === "string" ? (
                <Text color="inherit">{label}</Text>
              ) : (
                label
              )}
            </PrimitiveButton>
          );
        })
      )}
    </Flex>
  );
});
