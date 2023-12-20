/// <reference types="react" />
import { PrimitiveButtonProps } from "../PrimitiveButton";
import { TextProps } from "../../display";
export type TextButtonProps = PrimitiveButtonProps & {
    /** Children of this component. */
    children?: string;
    /** Properties to apply to the `Text` component. */
    textProps?: TextProps;
};
export declare const Button: import("react").ForwardRefExoticComponent<import("@valence-ui/utils/src/generics/Clickable").GenericClickableProps & import("@valence-ui/utils/src/generics/Events").MouseClickEvents & import("@valence-ui/utils/src/generics/Events").MouseEvents & import("@valence-ui/utils/src/generics/Events").PointerEvents & import("@valence-ui/utils/src/generics/Events").FocusEvents & import("@valence-ui/utils").PolymorphicElementProps & {
    css?: any;
} & import("@valence-ui/utils/src/generics/Global").GenericProps & {
    color?: import("csstype").Property.Color | undefined;
    backgroundColor?: import("csstype").Property.BackgroundColor | undefined; /** Properties to apply to the `Text` component. */
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
    motion?: import("../Helpers").MotionBehaviourProps | undefined;
} & {
    /** Children of this component. */
    children?: string | undefined;
    /** Properties to apply to the `Text` component. */
    textProps?: TextProps | undefined;
} & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=TextButton.d.ts.map