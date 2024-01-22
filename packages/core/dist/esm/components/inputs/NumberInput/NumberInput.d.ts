/** @jsxImportSource @emotion/react */
import { CSSProperties, ReactNode } from "react";
import { GenericInputProps, GenericTextInputEventProps, MakeResponsive } from "../../..";
export type NumberInputProps = GenericInputProps<number> & GenericTextInputEventProps & {
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
export declare const NumberInput: import("react").ForwardRefExoticComponent<MakeResponsive<NumberInputProps> & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=NumberInput.d.ts.map