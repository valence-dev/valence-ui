import { FlexProps } from "../../layout";
import { ModalOverlayProps } from "../ModalOverlay";
import { ComponentSize, GenericLayoutProps } from "@valence-ui/utils";
export type ModalProps = GenericLayoutProps & {
    /** The title of this modal */
    title: string;
    /** Specifies if this modal is opened */
    opened: boolean;
    /** Function to call when this modal is closed */
    close: () => void;
    /** Whether to close this modal when the overlay is clicked */
    closeOnOverlayClick?: boolean;
    /** Whether to close this modal when the escape key is pressed */
    closeOnEscape?: boolean;
    /** Whether to lock scrolling when this modal is open */
    lockScroll?: boolean;
    /** Whether to include a shadow underneath the modal */
    withShadow?: boolean;
    /** Sets the `border-radius` css property */
    radius?: ComponentSize;
    /** Props to pass to the overlay component */
    overlayProps?: ModalOverlayProps;
    /** Props to apply to the flex component */
    flexProps?: FlexProps;
};
export declare function Modal(props: ModalProps): import("@emotion/react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Modal.d.ts.map