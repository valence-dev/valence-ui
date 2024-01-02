/// <reference types="react" />
import { TooltipContentProps, TooltipProps } from "../../overlays";
import { PrimitiveButtonProps } from "../PrimitiveButton";
export type IconButtonProps = PrimitiveButtonProps & {
    /** An optional tooltip to include. The tooltip will inherit the button's color.*/
    tooltip?: string;
    /** Optional props to pass to the tooltip. */
    tooltipProps?: Omit<TooltipProps, "children">;
    tooltipContentProps?: Omit<TooltipContentProps, "children">;
};
export declare const IconButton: import("react").ForwardRefExoticComponent<import("@valence-ui/utils/src/generics/Clickable").GenericClickableProps & import("@valence-ui/utils/src/generics/Events").MouseClickEvents & import("@valence-ui/utils/src/generics/Events").MouseEvents & import("@valence-ui/utils/src/generics/Events").PointerEvents & import("@valence-ui/utils/src/generics/Events").FocusEvents & import("@valence-ui/utils").PolymorphicElementProps & {
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
    motion?: import("..").MotionBehaviourProps | undefined;
} & {
    /** An optional tooltip to include. The tooltip will inherit the button's color.*/
    tooltip?: string | undefined;
    /** Optional props to pass to the tooltip. */
    tooltipProps?: Omit<TooltipProps, "children"> | undefined;
    tooltipContentProps?: Omit<TooltipContentProps, "children"> | undefined;
} & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=IconButton.d.ts.map