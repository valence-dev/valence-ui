import React, { CSSProperties } from "react";
import { MakeResponsive } from "../../../utilities";
import { ComponentSize, FillVariant, GenericProps } from "@valence-ui/utils";
import { FlexProps } from "../../layout";
export type StepperProps = GenericProps & {
    /** The current step to display. */
    currentStep: number;
    /** The fill variant to use for this stepper. */
    variant?: FillVariant;
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
    /** The fill variant to use for this indicator. */
    variant?: FillVariant;
    /** The size of this indicator. */
    size?: ComponentSize;
    /** The color of this indicator. */
    color?: CSSProperties["color"];
};
export type StepperStepProps = FlexProps;
declare const StepperNamespace: React.ForwardRefExoticComponent<MakeResponsive<StepperProps> & React.RefAttributes<unknown>> & {
    Indicator: React.ForwardRefExoticComponent<MakeResponsive<StepperIndicatorProps> & React.RefAttributes<unknown>>;
    Step: React.ForwardRefExoticComponent<MakeResponsive<FlexProps> & React.RefAttributes<unknown>>;
};
export { StepperNamespace as Stepper };
//# sourceMappingURL=Stepper.d.ts.map