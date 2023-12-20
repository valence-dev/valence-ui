import { ComponentSize, FillVariant, GenericLayoutProps } from "@valence-ui/utils";
import { IconButtonProps, UnstyledButtonProps } from "../../buttons";
import { ReactNode } from "react";
import { TextProps } from "../Text";
export type PillProps = GenericLayoutProps & UnstyledButtonProps & {
    /** Fill variant of this pill. Defaults to theme default. */
    variant?: FillVariant;
    /** Size class of this pill. Defaults to theme default.  */
    size?: ComponentSize;
    /** Border radius of this pill. Defaults to theme default. */
    radius?: ComponentSize;
    /** Whether to include a remove button. `false` by default. */
    withRemoveButton?: boolean;
    /** Icon to use for the remove button. Defaults to `IconX`. */
    removeButtonIcon?: ReactNode;
    /** Optional props to pass to the remove button. */
    removeButtonProps?: IconButtonProps & {
        children?: never;
    };
    /** Callback to be called when the remove button is clicked. */
    onRemove?: () => void;
    /** Optional props to pass to the `Text` component */
    textProps?: TextProps & {
        children?: never;
    };
    children?: string;
};
export declare const Pill: import("react").ForwardRefExoticComponent<import("@valence-ui/utils").GenericProps & {
    color?: import("csstype").Property.Color | undefined;
    backgroundColor?: import("csstype").Property.BackgroundColor | undefined;
    padding?: import("csstype").Property.Padding<string | number> | undefined;
    margin?: import("csstype").Property.Margin<string | number> | undefined;
    width?: import("csstype").Property.Width<string | number> | undefined;
    height?: import("csstype").Property.Height<string | number> | undefined; /** Border radius of this pill. Defaults to theme default. */
} & import("@valence-ui/utils").PolymorphicElementProps & {
    css?: any;
} & import("@valence-ui/utils").MouseClickEvents & import("@valence-ui/utils").MouseEvents & import("@valence-ui/utils").PointerEvents & import("@valence-ui/utils").FocusEvents & import("@valence-ui/utils").GenericClickableProps & {
    /** Fill variant of this pill. Defaults to theme default. */
    variant?: FillVariant | undefined;
    /** Size class of this pill. Defaults to theme default.  */
    size?: ComponentSize | undefined;
    /** Border radius of this pill. Defaults to theme default. */
    radius?: ComponentSize | undefined;
    /** Whether to include a remove button. `false` by default. */
    withRemoveButton?: boolean | undefined;
    /** Icon to use for the remove button. Defaults to `IconX`. */
    removeButtonIcon?: ReactNode;
    /** Optional props to pass to the remove button. */
    removeButtonProps?: (import("@valence-ui/utils/src/generics/Clickable").GenericClickableProps & import("@valence-ui/utils/src/generics/Events").MouseClickEvents & import("@valence-ui/utils/src/generics/Events").MouseEvents & import("@valence-ui/utils/src/generics/Events").PointerEvents & import("@valence-ui/utils/src/generics/Events").FocusEvents & import("@valence-ui/utils").PolymorphicElementProps & {
        css?: any;
    } & import("@valence-ui/utils/src/generics/Global").GenericProps & {
        color?: import("csstype").Property.Color | undefined;
        backgroundColor?: import("csstype").Property.BackgroundColor | undefined;
        padding?: import("csstype").Property.Padding<string | number> | undefined;
        margin?: import("csstype").Property.Margin<string | number> | undefined;
        width?: import("csstype").Property.Width<string | number> | undefined;
        height?: import("csstype").Property.Height<string | number> | undefined; /** Border radius of this pill. Defaults to theme default. */
    } & {
        variant?: import("@valence-ui/utils/src/generics/Global").FillVariant | undefined;
        size?: import("@valence-ui/utils/src/generics/Global").ComponentSize | undefined;
        radius?: import("@valence-ui/utils/src/generics/Global").ComponentSize | undefined;
        square?: boolean | undefined;
        shadow?: boolean | undefined;
        grow?: boolean | undefined;
        disabled?: boolean | undefined;
        loading?: boolean | undefined;
    } & {
        motion?: import("../../buttons").MotionBehaviourProps | undefined;
    } & {
        children?: undefined;
    }) | undefined;
    /** Callback to be called when the remove button is clicked. */
    onRemove?: (() => void) | undefined;
    /** Optional props to pass to the `Text` component */
    textProps?: (import("@valence-ui/utils").GenericProps & import("@valence-ui/utils").GenericClickableProps & import("@valence-ui/utils").PolymorphicElementProps & {
        css?: any;
    } & {
        family?: import("csstype").Property.FontFamily | undefined;
        weight?: import("csstype").Property.FontWeight | undefined;
        /** Whether to include a remove button. `false` by default. */
        fontSize?: import("csstype").Property.FontSize<string | number> | undefined;
        align?: import("csstype").Property.TextAlign | undefined;
        transform?: import("csstype").Property.TextTransform | undefined;
        size?: ComponentSize | undefined;
        color?: import("csstype").Property.Color | undefined;
        italic?: boolean | undefined;
        bold?: boolean | undefined;
        monospace?: boolean | undefined;
    } & {
        children?: undefined;
    }) | undefined;
    children?: string | undefined;
} & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=Pill.d.ts.map