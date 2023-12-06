/** @jsxImportSource @emotion/react */
import React, { ReactElement, ReactNode } from "react";
import { TooltipOptions } from "../../../hooks";
import { StyledFlexProps } from "../../layout";
export type TooltipProps = TooltipOptions & {
    children: ReactNode;
};
declare function Tooltip(props: TooltipProps): import("@emotion/react/jsx-runtime").JSX.Element;
export type TooltipTriggerProps = {
    children: ReactElement<any>;
};
export type TooltipContentProps = StyledFlexProps & {
    /** Whether to display a shadow underneath the tooltip */
    withShadow?: boolean;
};
declare const TooltipNamespace: typeof Tooltip & {
    Trigger: React.ForwardRefExoticComponent<TooltipTriggerProps & React.RefAttributes<unknown>>;
    Content: React.ForwardRefExoticComponent<import("@valence-ui/utils").GenericProps & {
        style?: import("@valence-ui/utils").ReactiveProp<React.CSSProperties> | undefined;
        tabIndex?: import("@valence-ui/utils").ReactiveProp<number> | undefined;
    } & {
        backgroundColor?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.BackgroundColor | undefined>;
        color?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Color | undefined>;
        padding?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Padding<string | number> | undefined>;
        margin?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Margin<string | number> | undefined>;
        width?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Width<string | number> | undefined>;
        height?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Height<string | number> | undefined>;
    } & import("@valence-ui/utils").PolymorphicElementProps & {
        css?: any;
    } & {
        direction?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.FlexDirection | undefined>;
        align?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.AlignItems | undefined>;
        justify?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.JustifyContent | undefined>;
        alignSelf?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.AlignSelf | undefined>;
        gap?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.Gap<string | number> | undefined>;
        grow?: import("@valence-ui/utils").ReactiveProp<boolean> | undefined;
        wrap?: import("@valence-ui/utils").ReactiveProp<import("csstype").Property.FlexWrap | undefined>;
    } & {
        variant?: import("@valence-ui/utils").ReactiveProp<import("@valence-ui/utils").FillVariant> | undefined;
        size?: import("@valence-ui/utils").ReactiveProp<import("@valence-ui/utils").ComponentSize> | undefined;
        radius?: import("@valence-ui/utils").ReactiveProp<import("@valence-ui/utils").ComponentSize> | undefined;
        shadow?: import("@valence-ui/utils").ReactiveProp<boolean> | undefined;
    } & {
        /** Whether to display a shadow underneath the tooltip */
        withShadow?: boolean | undefined;
    } & React.RefAttributes<unknown>>;
};
export { TooltipNamespace as Tooltip };
//# sourceMappingURL=Tooltip.d.ts.map