/// <reference types="react" />
import { Disclosure } from "../../..";
import { FlexProps } from "../../layout";
import { GenericOverlayHeaderProps, GenericOverlayProps } from "@valence-ui/utils";
export type ModalProps = GenericOverlayProps & {
    /** A disclosure to handle state information about this modal */
    disclosure: Disclosure;
    /** Optional props to pass to the flex component */
    flexProps?: FlexProps;
};
export declare const Modal: import("react").ForwardRefExoticComponent<import("@valence-ui/utils").GenericProps & {
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
    /** A disclosure to handle state information about this modal */
    disclosure: Disclosure;
    /** Optional props to pass to the flex component */
    flexProps?: FlexProps | undefined;
} & import("react").RefAttributes<unknown>>;
export type DefaultModalHeaderProps = GenericOverlayHeaderProps & {
    /** A disclosure to handle state information about this modal */
    disclosure: Disclosure;
};
export declare const DefaultModalHeader: import("react").ForwardRefExoticComponent<GenericOverlayHeaderProps & {
    /** A disclosure to handle state information about this modal */
    disclosure: Disclosure;
} & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=Modal.d.ts.map