/** @jsxImportSource @emotion/react */
import { Dispatch, SetStateAction } from "react";
import { GenericInputEventHandlerProps, GenericInputProps } from "../InputContainer";
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
    };
};
export declare function NumberInput(props: NumberInputProps): import("@emotion/react/jsx-runtime").JSX.Element;
//# sourceMappingURL=NumberInput.d.ts.map