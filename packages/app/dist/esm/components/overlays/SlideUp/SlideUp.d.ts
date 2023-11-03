import { FlexProps, ModalOverlayProps } from "@valence-ui/core";
import { ComponentSize, GenericReactiveLayoutProps, ReactiveProp } from "@valence-ui/utils";
import { CSSProperties } from "react";
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
export declare const SlideUp: import("react").ForwardRefExoticComponent<import("@valence-ui/utils").GenericProps & {
    style?: ReactiveProp<CSSProperties> | undefined;
    tabIndex?: ReactiveProp<number> | undefined;
} & {
    backgroundColor?: ReactiveProp<import("csstype").Property.BackgroundColor | undefined>;
    color?: ReactiveProp<import("csstype").Property.Color | undefined>;
    padding?: ReactiveProp<import("csstype").Property.Padding<string | number> | undefined>;
    margin?: ReactiveProp<import("csstype").Property.Margin<string | number> | undefined>;
    width?: ReactiveProp<import("csstype").Property.Width<string | number> | undefined>;
    height?: ReactiveProp<import("csstype").Property.Height<string | number> | undefined>;
} & {
    /** Specifies if this slideup is opened */
    opened: boolean;
    /** Function to call when this slideup is closed */
    close: () => void;
    /** Whether to close this slideup when the overlay is clicked */
    closeOnOverlayClick?: boolean | undefined;
    /** Whether to close this slideup when the escape key is pressed */
    closeOnEscape?: boolean | undefined;
    /** Whether to lock scrolling when this slideup is open */
    lockScroll?: boolean | undefined;
    /** Sets the size class of the border */
    radius?: ReactiveProp<ComponentSize> | undefined;
    /** Specifies if a shadow will be shown */
    shadow?: ReactiveProp<boolean> | undefined;
    /** Props to pass to the overlay component */
    overlayProps?: ModalOverlayProps | undefined;
    /** Props to apply to the flex component */
    flexProps?: FlexProps | undefined;
} & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=SlideUp.d.ts.map