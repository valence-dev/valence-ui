/** @jsxImportSource @emotion/react */
import { CSSProperties, ReactNode } from "react";
import { MakeResponsive } from "../../..";
import { ComponentSize, FillVariant, GenericLayoutProps, MouseClickEvents, MouseEvents, PointerEvents, SizeClasses } from "@valence-ui/utils";
export type InputContainerProps = GenericLayoutProps & MouseClickEvents & MouseEvents & PointerEvents & {
    /** An icon to display at the left side of this input */
    icon?: ReactNode;
    /** A button to display to the right of this input */
    button?: ReactNode;
    /** Sets the size class. Defaults to theme default */
    size?: ComponentSize;
    /** Sets the radius size class. Defaults to theme default */
    radius?: ComponentSize;
    /** Sets the styling variant. Defaults to theme default */
    variant?: FillVariant;
    /** Shorthand for `flex-grow = 1` */
    grow?: boolean;
    /** Whether this input is disabled */
    disabled?: boolean;
    /** Whether this input is required */
    required?: boolean;
    /** Whether this input is loading */
    loading?: boolean;
    /** A `ref` of the input component */
    inputRef?: any;
    /** Optional styles for the icon container component */
    iconContainerStyle?: CSSProperties;
    /** Optional styles for the require indicator component */
    requireIndicatorStyle?: CSSProperties;
    /** Optional styles for the button container component */
    buttonContainerStyle?: CSSProperties;
};
export declare const INPUT_SIZES: SizeClasses<{
    padding: CSSProperties["padding"];
}>;
export declare const InputContainer: import("react").ForwardRefExoticComponent<MakeResponsive<InputContainerProps> & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=InputContainer.d.ts.map