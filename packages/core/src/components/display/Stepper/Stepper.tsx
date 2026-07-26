import React, { CSSProperties, forwardRef } from "react";
import {
  MakeResponsive,
  Material,
  useColors,
  useResponsiveProps,
} from "../../../utilities";
import { ComponentSize, GenericProps } from "@valence-ui/utils";
import { Flex, FlexProps } from "../../layout/Flex";
import { Space } from "../../layout/Space";
import { useValence } from "../../../ValenceProvider";
import { Text } from "../Text";
import { Icon } from "../Icon";
import { IconCheck } from "@tabler/icons-react";
import { CSSObject } from "@emotion/react";

export type StepperProps = GenericProps & {
  /** The current step to display. */
  currentStep: number;

  /** The material to apply to this stepper. */
  material?: Material;
  /** The size of this stepper. */
  size?: ComponentSize;
  /** The color of this stepper. */
  color?: CSSProperties["color"];
};

export type StepperIndicatorState = "default" | "active" | "complete";
export type StepperIndicatorProps = {
  /** The step number for this indicator. */
  step: number;
  /** The current state of this indicator. */
  state: StepperIndicatorState;

  /** The material to apply to this indicator. */
  material?: Material;
  /** The size of this indicator. */
  size?: ComponentSize;
};

export type StepperStepProps = FlexProps;

const Stepper = forwardRef(function Stepper(
  props: MakeResponsive<StepperProps>,
  ref: any,
) {
  const theme = useValence();
  const colors = useColors();

  // Defaults
  const {
    material = theme.materials.input,
    size = theme.defaults.size,
    color = "black",
    currentStep,

    children,
    ...rest
  } = useResponsiveProps<StepperProps>(props);

  return (
    <Flex direction="column" width="100%" ref={ref} {...rest}>
      {/* Stepper header */}
      <Flex direction="row" width="100%" justify="space-between" align="center">
        {React.Children.toArray(children).map((_, index) => (
          <React.Fragment key={index}>
            <StepperIndicator
              step={index}
              state={
                index === currentStep
                  ? "active"
                  : index < currentStep
                    ? "complete"
                    : "default"
              }
              material={material}
              size={size}
            />

            {/* Line */}
            {index < React.Children.count(children) - 1 && (
              <Space
                grow
                style={{
                  borderTop: `1px solid ${colors.getHex(color)}`,
                  opacity: index < currentStep ? 1 : 0.25,
                  transition: "opacity 0.2s ease-in-out",
                }}
              />
            )}
          </React.Fragment>
        ))}
      </Flex>

      {/* Stepper children */}
      {React.Children.toArray(children).map(
        (child: any, index: number) =>
          index === currentStep &&
          React.cloneElement(child, { ...child.props, key: index }),
      )}
    </Flex>
  );
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
    material = theme.materials.input,
    size = theme.defaults.size,
  } = useResponsiveProps<StepperIndicatorProps>(props);

  // Styles
  const indicatorContainerStyle: CSSObject = {
    borderRadius: "50%",
    width: theme.sizeClasses.height[size],
    height: theme.sizeClasses.height[size],
    opacity: state === "default" ? 0.5 : 1,
    transition: "opacity 0.2s ease-in-out",
  };

  return (
    <Flex
      ref={ref}
      style={indicatorContainerStyle}
      align="center"
      justify="center"
      material={material}
    >
      {state === "complete" ? (
        <Icon
          size={theme.sizeClasses.iconSize[size] as any}
          animation={["grow", "blur", "fade"]}
          key={step}
        >
          <IconCheck />
        </Icon>
      ) : (
        <Text align="center" size={size} animation={["grow", "blur", "fade"]}>
          {step + 1}
        </Text>
      )}
    </Flex>
  );
});

const StepperStep = forwardRef(function StepperStep(
  props: MakeResponsive<StepperStepProps>,
  ref: any,
) {
  // Defaults
  const { children, ...rest } = useResponsiveProps<StepperStepProps>(props);

  return (
    <Flex direction="column" width="100%" ref={ref} {...rest}>
      {children}
    </Flex>
  );
});

const StepperNamespace = Object.assign(Stepper, {
  Indicator: StepperIndicator,
  Step: StepperStep,
});
export { StepperNamespace as Stepper };
