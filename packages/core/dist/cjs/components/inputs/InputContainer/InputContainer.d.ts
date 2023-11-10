/** @jsxImportSource @emotion/react */
import { CSSProperties, ReactNode } from "react";
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
export declare const InputContainer: import("react").ForwardRefExoticComponent<import("@valence-ui/utils").GenericProps & {
    color?: import("csstype").Property.Color | undefined;
    backgroundColor?: import("csstype").Property.BackgroundColor | undefined;
    padding?: import("csstype").Property.Padding<string | number> | undefined;
    margin?: import("csstype").Property.Margin<string | number> | undefined;
    width?: import("csstype").Property.Width<string | number> | undefined;
    height?: import("csstype").Property.Height<string | number> | undefined;
} & MouseClickEvents & MouseEvents & PointerEvents & {
    /** An icon to display at the left side of this input */
    icon?: ReactNode;
    /** A button to display to the right of this input */
    button?: ReactNode;
    /** Sets the size class. Defaults to theme default */
    size?: ComponentSize | undefined;
    /** Sets the radius size class. Defaults to theme default */
    radius?: ComponentSize | undefined;
    /** Sets the styling variant. Defaults to theme default */
    variant?: FillVariant | undefined;
    /** Shorthand for `flex-grow = 1` */
    grow?: boolean | undefined;
    /** Whether this input is disabled */
    disabled?: boolean | undefined;
    /** Whether this input is required */
    required?: boolean | undefined;
    /** Whether this input is loading */
    loading?: boolean | undefined;
    /** A `ref` of the input component */
    inputRef?: any;
    /** Optional styles for the icon container component */
    iconContainerStyle?: CSSProperties | undefined;
    /** Optional styles for the require indicator component */
    requireIndicatorStyle?: CSSProperties | undefined;
    /** Optional styles for the button container component */
    buttonContainerStyle?: CSSProperties | undefined;
} & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=InputContainer.d.ts.map