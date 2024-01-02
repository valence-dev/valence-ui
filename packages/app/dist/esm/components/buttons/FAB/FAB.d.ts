import { IconButtonProps } from "@valence-ui/core";
import { CSSProperties } from "react";
export type FABProps = IconButtonProps & {
    /** Vertical position of this button on the page. Defaults to `"bottom"` */
    vPosition?: "top" | "bottom";
    /** Horizontal position of this button on the page. Defaults to `"right"` */
    hPosition?: "left" | "right";
    /** The distance in `px` this button sits from the edge of the page. Defaults to `20` */
    offset?: number;
    /** Sets `z-index` css property. Defaults to `100` */
    zIndex?: CSSProperties["zIndex"];
};
export declare const FAB: import("react").ForwardRefExoticComponent<import("@valence-ui/utils/src/generics/Clickable").GenericClickableProps & import("@valence-ui/utils/src/generics/Events").MouseClickEvents & import("@valence-ui/utils/src/generics/Events").MouseEvents & import("@valence-ui/utils/src/generics/Events").PointerEvents & import("@valence-ui/utils/src/generics/Events").FocusEvents & import("@valence-ui/utils").PolymorphicElementProps & {
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
    tooltip?: string | undefined;
    tooltipProps?: Omit<import("@valence-ui/core").TooltipProps, "children"> | undefined;
    tooltipContentProps?: Omit<import("@valence-ui/core").TooltipContentProps, "children"> | undefined;
} & {
    /** Vertical position of this button on the page. Defaults to `"bottom"` */
    vPosition?: "top" | "bottom" | undefined;
    /** Horizontal position of this button on the page. Defaults to `"right"` */
    hPosition?: "left" | "right" | undefined;
    /** The distance in `px` this button sits from the edge of the page. Defaults to `20` */
    offset?: number | undefined;
    /** Sets `z-index` css property. Defaults to `100` */
    zIndex?: CSSProperties["zIndex"];
} & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=FAB.d.ts.map