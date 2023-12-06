import { ReactNode } from "react";
import { GenericSheetProps } from "../Generics";
import { Disclosure } from "@valence-ui/core";
import { GenericOverlayBackgroundProps, GenericOverlayHeaderProps, ReactiveProp } from "@valence-ui/utils";
export type SideSheetType = "standard" | "overlay";
export type SideSheetProps = GenericSheetProps & {
    type?: ReactiveProp<SideSheetType>;
};
export declare const SideSheet: import("react").ForwardRefExoticComponent<import("@valence-ui/utils").GenericProps & {
    color?: import("csstype").Property.Color | undefined;
    backgroundColor?: import("csstype").Property.BackgroundColor | undefined;
    padding?: import("csstype").Property.Padding<string | number> | undefined;
    margin?: import("csstype").Property.Margin<string | number> | undefined;
    width?: import("csstype").Property.Width<string | number> | undefined;
    height?: import("csstype").Property.Height<string | number> | undefined;
} & import("@valence-ui/utils").PolymorphicElementProps & {
    css?: any;
} & {
    title: string;
    header?: ((props: GenericOverlayHeaderProps) => ReactNode) | undefined;
    closeOnOverlayClick?: boolean | undefined;
    closeOnEscape?: boolean | undefined;
    lockScroll?: boolean | undefined;
    withShadow?: boolean | undefined;
    radius?: import("@valence-ui/utils").ComponentSize | undefined;
    overlayBackgroundProps?: GenericOverlayBackgroundProps | undefined;
} & {
    disclosure: Disclosure;
    flexProps?: import("@valence-ui/core").FlexProps | undefined;
} & {
    type?: ReactiveProp<SideSheetType> | undefined;
} & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=SideSheet.d.ts.map