import { CSSProperties, ReactNode, forwardRef, lazy } from "react";
import { GenericInputProps } from "../../../generics";
import { Flex, StyledFlex, StyledFlexProps } from "../../layout";
import { PrimitiveButton, PrimitiveButtonProps } from "../../buttons";
import { Loader, Text } from "../../display";
import { useValence } from "../../../ValenceProvider";
import {
  MakeResponsive,
  useResponsiveProps,
} from "../../../utilities/responsive";

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
  return typeof option === "string" ? option : option.label ?? option.value;
}

export type SegmentedControlEventProps = {
  /** Callback to be called when an option is selected. */
  onSelect?: (value: SegmentedControlOption) => void;
};

export type SegmentedControlProps = GenericInputProps<string> &
  StyledFlexProps &
  SegmentedControlEventProps & {
    /** A list of options to supply for the content of this input */
    options: SegmentedControlOption[];

    /** Whether every option should have an equal width. `true` by default. */
    equalWidth?: boolean;

    /** Do not supply children to this element */
    children?: never;

    /** Optional props to pass to the child button components */
    buttonProps?: PrimitiveButtonProps;
  };

export const SegmentedControl = forwardRef(function SegmentedControl(
  props: MakeResponsive<SegmentedControlProps>,
  ref: any
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

    variant,
    size = theme.defaults.size,
    radius = theme.defaults.radius,

    color = "black",
    backgroundColor = color,
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
  const {
    color: buttonColor = variant === "filled" ? "white" : color,
    backgroundColor: buttonBackgroundColor = variant === "filled"
      ? "white"
      : backgroundColor,
    size: buttonSize = size,
    radius: buttonRadius = radius,
  } = buttonProps ?? {};

  // Styles
  const containerStyle: CSSProperties = {
    borderRadius: theme.getSize("radius", radius) + padding,

    ...style,
  };

  // Functions
  function handleSetOptionValue(option: SegmentedControlOption) {
    if (disabled || readOnly || loading) return;
    setValue(getOptionValue(option));
    onSelect?.(option);
  }

  return (
    <StyledFlex
      ref={ref}
      variant={variant}
      size={size}
      color={color}
      backgroundColor={backgroundColor}
      margin={margin}
      padding={padding}
      gap={gap}
      alignSelf="stretch"
      style={containerStyle}
      {...rest}
    >
      {loading ? (
        <Flex
          grow
          justify="center"
          align="center"
          height={theme.getSize("height", buttonSize)}
        >
          <Loader color={variant === "filled" ? "white" : color} />
        </Flex>
      ) : (
        options.map((option, index) => {
          const selected = getOptionValue(option) === value;
          const label = getOptionLabel(option);

          return (
            <PrimitiveButton
              key={index}
              onClick={() => handleSetOptionValue(option)}
              variant={selected ? "light" : "subtle"}
              grow={equalWidth}
              color={buttonColor}
              backgroundColor={buttonBackgroundColor}
              size={buttonSize}
              radius={buttonRadius}
              disabled={disabled || readOnly || loading}
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
    </StyledFlex>
  );
});
