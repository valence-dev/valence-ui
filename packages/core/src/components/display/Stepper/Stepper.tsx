import React, { CSSProperties, forwardRef } from "react";
import { MakeResponsive, useColors, useResponsiveProps } from "../../../utilities";
import { ComponentSize, FillVariant, GenericProps } from "@valence-ui/utils";
import { Flex, FlexProps, Space } from "../../layout";
import { useValence } from "../../../ValenceProvider";
import { Text } from "../Text";
import { Icon } from "../Icon";
import { IconCheck } from "@tabler/icons-react";

export type StepperProps =
  GenericProps
  & {
    /** The current step to display. */
    currentStep: number;

    /** The fill variant to use for this stepper. */
    variant?: FillVariant;
    /** The size of this stepper. */
    size?: ComponentSize;
    /** The color of this stepper. */
    color?: CSSProperties["color"];
  }

export type StepperIndicatorState = "default" | "active" | "complete";
export type StepperIndicatorProps = {
  /** The step number for this indicator. */
  step: number;
  /** The current state of this indicator. */
  state: StepperIndicatorState;

  /** The fill variant to use for this indicator. */
  variant?: FillVariant;
  /** The size of this indicator. */
  size?: ComponentSize;
  /** The color of this indicator. */
  color?: CSSProperties["color"];
}

export type StepperStepProps =
  FlexProps;



const Stepper = forwardRef(function Stepper(
  props: MakeResponsive<StepperProps>,
  ref: any,
) {
  const theme = useValence();
  const colors = useColors();


  // Defaults
  const {
    variant = theme.defaults.variant,
    size = theme.defaults.size,
    color = "black",
    currentStep,

    children,
    ...rest
  } = useResponsiveProps<StepperProps>(props);


  return (
    <Flex
      direction="column"
      width="100%"
      ref={ref}
      {...rest}
    >
      {/* Stepper header */}
      <Flex
        direction="row"
        width="100%"
        justify="space-between"
        align="center"
      >
        {React.Children.toArray(children).map((_, index: number) => {
          return React.cloneElement((
            <>
              <StepperIndicator
                key={index}
                step={index}
                state={
                  index === currentStep ? "active"
                    : index < currentStep ? "complete"
                      : "default"
                }
                variant={variant}
                color={color}
                size={size}
              />

              {/* Line */}
              {index < React.Children.count(children) - 1 &&
                <Space
                  key={index + "line"}
                  grow
                  style={{
                    borderTop: `1px solid ${colors.getHex(color)}`,
                    opacity: index < currentStep ? 1 : 0.25,
                  }}
                />
              }
            </>
          ), { key: index })
        })}
      </Flex>

      {/* Stepper children */}
      {React.Children.toArray(children).map((child: any, index: number) =>
        index === currentStep && React.cloneElement(child, { ...child.props, key: index })
      )}
    </Flex>
  )
});


const StepperIndicator = forwardRef(function StepperIndicator(
  props: MakeResponsive<StepperIndicatorProps>,
  ref: any,
) {
  const theme = useValence();
  const colors = useColors();


  // Defaults
  const {
    step,
    state = "default",
    variant = theme.defaults.variant,
    size = theme.defaults.size,
    color = "primary",
  } = useResponsiveProps<StepperIndicatorProps>(props);


  // Styles
  const indicatorContainerStyle: CSSProperties = {
    borderRadius: "50%",

    width: theme.sizeClasses.height[size],
    height: theme.sizeClasses.height[size],

    border: "none",
    outline: variant === "subtle"
      ? `1px solid ${colors.getHex(color)}`
      : "none",

    backgroundColor: colors.getBgHex(color, variant, false),
    color: colors.getFgHex(color, variant),
    opacity: state === "default" ? 0.5 : 1,
  };


  return (
    <Flex
      ref={ref}
      style={indicatorContainerStyle}

      align="center"
      justify="center"
    >
      {state === "complete" ?
        <Icon
          color={colors.getFgHex(color, variant)}
          size={theme.sizeClasses.iconSize[size] as any}
        >
          <IconCheck />
        </Icon>
        :
        <Text
          align="center"
          color={colors.getFgHex(color, variant)}
          size={size}
        >
          {step + 1}
        </Text>
      }
    </Flex>
  )
});


const StepperStep = forwardRef(function StepperStep(
  props: MakeResponsive<StepperStepProps>,
  ref: any,
) {


  // Defaults
  const {
    children,
    ...rest
  } = useResponsiveProps<StepperStepProps>(props);


  return (
    <Flex
      direction="column"
      width="100%"
      ref={ref}
      {...rest}
    >
      {children}
    </Flex>
  )
});


const StepperNamespace = Object.assign(Stepper, {
  Indicator: StepperIndicator,
  Step: StepperStep
});
export { StepperNamespace as Stepper };