/// <reference types="react" />
import { MotionBehaviourProps } from "../Helpers";
import { GenericButtonProps } from "../../../generics";
export type PrimitiveButtonProps = GenericButtonProps & {
    /** Defines motion behavior for this button. This will automatically be overridden if the user has reduced motion enabled on their device. */
    motion?: MotionBehaviourProps;
};
export declare const PrimitiveButton: import("react").ForwardRefExoticComponent<import("@valence-ui/utils/src/generics/Clickable").GenericClickableProps & import("@valence-ui/utils/src/generics/Events").MouseClickEvents & import("@valence-ui/utils/src/generics/Events").MouseEvents & import("@valence-ui/utils/src/generics/Events").PointerEvents & import("@valence-ui/utils/src/generics/Events").FocusEvents & import("@valence-ui/utils").PolymorphicElementProps & {
    css?: any;
} & import("@valence-ui/utils/src/generics/Global").GenericProps & {
    color?: import("csstype").Property.Color | undefined;
    backgroundColor?: import("csstype").Property.BackgroundColor | undefined;
    padding?: import("csstype").Property.Padding<string | number> | undefined;
    margin?: import("csstype").Property.Margin<string | number> | undefined;
    width?: import("csstype").Property.Width<string | number> | undefined;
    height?: import("csstype").Property.Height<string | number> | undefined;
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
    /** Defines motion behavior for this button. This will automatically be overridden if the user has reduced motion enabled on their device. */
    motion?: MotionBehaviourProps | undefined;
} & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=PrimitiveButton.d.ts.map