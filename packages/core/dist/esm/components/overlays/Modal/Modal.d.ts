/// <reference types="react" />
import { Disclosure, ModalOverlayProps } from "../../..";
import { FlexProps } from "../../layout";
import { ComponentSize, GenericLayoutProps, PolymorphicLayoutProps } from "@valence-ui/utils";
import { IconButtonProps } from "../../buttons";
export type ModalProps = GenericLayoutProps & PolymorphicLayoutProps & {
    /** The title of this modal */
    title: string;
    /** A disclosure to handle state information about this modal */
    disclosure: Disclosure;
    /** Whether to close this modal when the overlay is clicked */
    closeOnClickOutside?: boolean;
    /** Whether to close this modal when the escape key is pressed */
    closeOnEscape?: boolean;
    /** Whether to lock scrolling when this modal is open */
    lockScroll?: boolean;
    /** Whether to include a shadow underneath the modal */
    withShadow?: boolean;
    /** Sets the `border-radius` css property */
    radius?: ComponentSize;
    /** Optional props to pass to the overlay component */
    overlayProps?: ModalOverlayProps;
    /** Optional props to pass to the flex component */
    flexProps?: FlexProps;
    /** Optional props to pass to the close button */
    closeButtonProps?: IconButtonProps;
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
    /** The title of this modal */
    title: string;
    /** A disclosure to handle state information about this modal */
    disclosure: Disclosure;
    /** Whether to close this modal when the overlay is clicked */
    closeOnClickOutside?: boolean | undefined;
    /** Whether to close this modal when the escape key is pressed */
    closeOnEscape?: boolean | undefined;
    /** Whether to lock scrolling when this modal is open */
    lockScroll?: boolean | undefined;
    /** Whether to include a shadow underneath the modal */
    withShadow?: boolean | undefined;
    /** Sets the `border-radius` css property */
    radius?: ComponentSize | undefined;
    /** Optional props to pass to the overlay component */
    overlayProps?: ModalOverlayProps | undefined;
    /** Optional props to pass to the flex component */
    flexProps?: FlexProps | undefined;
    /** Optional props to pass to the close button */
    closeButtonProps?: import("../../..").PrimitiveButtonProps | undefined;
} & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=Modal.d.ts.map