/** @jsxImportSource @emotion/react */
import { CSSProperties } from "react";
import { GenericProps, PolymorphicLayoutProps } from "@valence-ui/utils";
export type ModalOverlayProps = GenericProps & PolymorphicLayoutProps & {
    /** Whether this overlay is open */
    opened: boolean;
    /** A function to call when this overlay is closed */
    close?: () => void;
    /** Whether to close this overlay when it is clicked */
    closeOnClick?: boolean;
    /** Whether the contents of the page behind the overlay should be blurred */
    blurBackground?: boolean;
    /** Sets `background-color` css property. Defaults to `permaBlack` */
    backgroundColor?: CSSProperties["backgroundColor"];
    /** Sets `padding` css property. Defaults to theme default */
    padding?: CSSProperties["padding"];
    /** Sets `z-index` css property. Defaults to `200` */
    zIndex?: CSSProperties["zIndex"];
};
export declare const ModalOverlay: import("react").ForwardRefExoticComponent<GenericProps & import("@valence-ui/utils").PolymorphicElementProps & {
    css?: any;
} & {
    /** Whether this overlay is open */
    opened: boolean;
    /** A function to call when this overlay is closed */
    close?: (() => void) | undefined;
    /** Whether to close this overlay when it is clicked */
    closeOnClick?: boolean | undefined;
    /** Whether the contents of the page behind the overlay should be blurred */
    blurBackground?: boolean | undefined;
    /** Sets `background-color` css property. Defaults to `permaBlack` */
    backgroundColor?: CSSProperties["backgroundColor"];
    /** Sets `padding` css property. Defaults to theme default */
    padding?: CSSProperties["padding"];
    /** Sets `z-index` css property. Defaults to `200` */
    zIndex?: CSSProperties["zIndex"];
} & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=ModalOverlay.d.ts.map