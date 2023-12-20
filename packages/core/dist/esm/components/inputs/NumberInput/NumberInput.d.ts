/** @jsxImportSource @emotion/react */
import { CSSProperties, ReactNode } from "react";
import { GenericInputProps, GenericTextInputEventProps } from "../../..";
export type NumberInputProps = GenericInputProps<number> & GenericTextInputEventProps & {
    /** An icon to display at the left side of this input */
    icon?: ReactNode;
    /** Text that appears in this input when it has no value */
    placeholder?: string;
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
    /** Shorthand for `flex-grow = 1` */
    grow?: boolean;
    /** Optional styles to apply to the input component */
    inputStyle?: CSSProperties;
    children?: never;
};
export declare const NumberInput: import("react").ForwardRefExoticComponent<import("@valence-ui/utils").GenericProps & {
    color?: import("csstype").Property.Color | undefined;
    backgroundColor?: import("csstype").Property.BackgroundColor | undefined;
    padding?: import("csstype").Property.Padding<string | number> | undefined;
    margin?: import("csstype").Property.Margin<string | number> | undefined;
    width?: import("csstype").Property.Width<string | number> | undefined;
    height?: import("csstype").Property.Height<string | number> | undefined;
} & {
    value: number;
    setValue: import("react").Dispatch<import("react").SetStateAction<number>>;
    size?: import("@valence-ui/utils").ComponentSize | undefined;
    radius?: import("@valence-ui/utils").ComponentSize | undefined; /** The step value of this input. Defaults to 1 */
    variant?: import("@valence-ui/utils").FillVariant | undefined;
    disabled?: boolean | undefined;
    readOnly?: boolean | undefined;
    required?: boolean | undefined;
    autoFocus?: boolean | undefined; /** Optional styles to apply to the input component */
    loading?: boolean | undefined;
    form?: string | undefined;
    name?: string | undefined;
} & import("@valence-ui/utils/src/generics/Events").MouseClickEvents & import("@valence-ui/utils/src/generics/Events").MouseEvents & import("@valence-ui/utils/src/generics/Events").PointerEvents & import("@valence-ui/utils/src/generics/Events").FocusEvents & import("@valence-ui/utils/src/generics/Events").KeyboardEvents & {
    onInput?: ((event: import("react").FormEvent<Element>) => void) | undefined;
    onChange?: ((event: import("react").FormEvent<Element>) => void) | undefined;
    onInvalid?: ((event: import("react").FormEvent<Element>) => void) | undefined;
    onEnterPress?: ((e: import("react").KeyboardEvent<Element>) => void) | undefined;
} & {
    /** An icon to display at the left side of this input */
    icon?: ReactNode;
    /** Text that appears in this input when it has no value */
    placeholder?: string | undefined;
    /** The minimum value of this input */
    min?: number | undefined;
    /** The maximum value of this input */
    max?: number | undefined;
    /** The step value of this input. Defaults to 1 */
    step?: number | undefined;
    /** Whether the stepper controls are shown */
    showControls?: boolean | undefined;
    /** Sets custom icons for the stepper control buttons */
    controlIcons?: {
        up?: React.ReactNode;
        down?: React.ReactNode;
    } | undefined;
    /** Shorthand for `flex-grow = 1` */
    grow?: boolean | undefined;
    /** Optional styles to apply to the input component */
    inputStyle?: CSSProperties | undefined;
    children?: undefined;
} & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=NumberInput.d.ts.map