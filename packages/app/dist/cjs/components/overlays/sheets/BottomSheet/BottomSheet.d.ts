/// <reference types="react" />
import { GenericOverlayHeaderProps } from "@valence-ui/utils";
import { GenericSheetProps } from "../Generics";
export type BottomSheetProps = GenericSheetProps & {
    /** The offset the sheet must be from its original position before it will close. Defaults to 50% of the viewport height */
    releaseOffset?: number;
    /** The velocity the sheet must be moving at before it will close. Defaults to `500` */
    releaseVelocity?: number;
};
export declare const BottomSheet: import("react").ForwardRefExoticComponent<import("@valence-ui/utils").GenericProps & {
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
    header?: ((props: GenericOverlayHeaderProps) => import("react").ReactNode) | undefined;
    closeOnOverlayClick?: boolean | undefined;
    closeOnEscape?: boolean | undefined;
    lockScroll?: boolean | undefined;
    withShadow?: boolean | undefined;
    radius?: import("@valence-ui/utils").ComponentSize | undefined;
    overlayBackgroundProps?: import("@valence-ui/utils").GenericOverlayBackgroundProps | undefined;
} & {
    disclosure: import("@valence-ui/core").Disclosure;
    flexProps?: import("@valence-ui/core").FlexProps | undefined;
} & {
    /** The offset the sheet must be from its original position before it will close. Defaults to 50% of the viewport height */
    releaseOffset?: number | undefined;
    /** The velocity the sheet must be moving at before it will close. Defaults to `500` */
    releaseVelocity?: number | undefined;
} & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=BottomSheet.d.ts.map