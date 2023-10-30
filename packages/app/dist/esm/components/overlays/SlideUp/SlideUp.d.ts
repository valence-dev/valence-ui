import { FlexProps, ModalOverlayProps } from "@valence-ui/core";
import { ComponentSize, GenericReactiveLayoutProps, ReactiveProp } from "@valence-ui/utils";
export type SlideUpProps = GenericReactiveLayoutProps & {
    /** Specifies if this slideup is opened */
    opened: boolean;
    /** Function to call when this slideup is closed */
    close: () => void;
    /** Whether to close this slideup when the overlay is clicked */
    closeOnOverlayClick?: boolean;
    /** Whether to close this slideup when the escape key is pressed */
    closeOnEscape?: boolean;
    /** Whether to lock scrolling when this slideup is open */
    lockScroll?: boolean;
    /** Sets the size class of the border */
    radius?: ReactiveProp<ComponentSize>;
    /** Specifies if a shadow will be shown */
    shadow?: ReactiveProp<boolean>;
    /** Props to pass to the overlay component */
    overlayProps?: ModalOverlayProps;
    /** Props to apply to the flex component */
    flexProps?: FlexProps;
};
export declare function SlideUp(props: SlideUpProps): import("@emotion/react/jsx-runtime").JSX.Element;
//# sourceMappingURL=SlideUp.d.ts.map