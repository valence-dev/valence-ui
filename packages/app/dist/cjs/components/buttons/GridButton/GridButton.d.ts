import { TextButtonProps } from "@valence-ui/core";
import { ReactNode } from "react";
export type GridButtonProps = TextButtonProps & {
    /** The icon to include with this button */
    icon: ReactNode;
    /** The position of the icon relative to the text. Defaults to `"top"` */
    iconPosition?: "top" | "bottom";
};
export declare const GridButton: import("react").ForwardRefExoticComponent<import("@valence-ui/utils/src/generics/Clickable").GenericClickableProps & import("@valence-ui/utils/src/generics/Events").MouseClickEvents & import("@valence-ui/utils/src/generics/Events").MouseEvents & import("@valence-ui/utils/src/generics/Events").PointerEvents & import("@valence-ui/utils/src/generics/Events").FocusEvents & import("@valence-ui/utils").PolymorphicElementProps & {
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
    motion?: import("@valence-ui/core").MotionBehaviourProps | undefined;
} & {
    children?: string | undefined;
    textProps?: import("@valence-ui/core").TextProps | undefined;
} & {
    /** The icon to include with this button */
    icon: ReactNode;
    /** The position of the icon relative to the text. Defaults to `"top"` */
    iconPosition?: "top" | "bottom" | undefined;
} & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=GridButton.d.ts.map