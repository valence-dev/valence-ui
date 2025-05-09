import { CSSProperties, ReactNode } from "react";
import { PolymorphicLayoutProps } from "../polymorphism";
import { ComponentSize, GenericProps } from "./Global";
import { GenericLayoutProps } from "./Layout";

export type BackdropFilter = "blur" | "dot-blur" | "none";

export type GenericOverlayBackgroundProps = GenericProps &
  PolymorphicLayoutProps & {
    /** Whether to close this overlay when it is clicked */
    closeOnClick?: boolean;
    /** A filter to apply to the page contents behind the overlay */
    backdropFilter?: BackdropFilter;

    /** Sets `background-color` css property */
    backgroundColor?: CSSProperties["backgroundColor"];
    /** Sets `padding` css property */
    padding?: CSSProperties["padding"];
    /** Sets `z-index` css property */
    zIndex?: CSSProperties["zIndex"];
  };

export type GenericOverlayHeaderProps = {
  /** The title of this overlay */
  title: string;
};

export type GenericOverlayProps = GenericLayoutProps &
  PolymorphicLayoutProps & {
    /** The title of this overlay */
    title: string;
    /** Optionally replace the default header with a custom component */
    header?: (props: GenericOverlayHeaderProps) => ReactNode;

    /** Whether to close this overlay when the overlay is clicked */
    closeOnOverlayClick?: boolean;
    /** Whether to close this overlay when the escape key is pressed */
    closeOnEscape?: boolean;
    /** Whether to lock scrolling when this overlay is open */
    lockScroll?: boolean;

    /** Whether to include a shadow underneath the overlay */
    withShadow?: boolean;
    /** Sets the `border-radius` css property */
    radius?: ComponentSize;

    /** Optional props to pass to the overlay background component */
    overlayBackgroundProps?: GenericOverlayBackgroundProps;
  };
