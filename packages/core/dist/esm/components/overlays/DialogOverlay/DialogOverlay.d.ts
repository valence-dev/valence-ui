/** @jsxImportSource @emotion/react */
import { CSSProperties } from "react";
import { Disclosure } from "../../..";
import { GenericProps, PolymorphicLayoutProps } from "@valence-ui/utils";
export type DialogOverlay = GenericProps & PolymorphicLayoutProps & {
    /** A disclosure to specify state information about the modal */
    disclosure: Disclosure;
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
export declare const DialogOverlay: import("react").ForwardRefExoticComponent<GenericProps & import("@valence-ui/utils").PolymorphicElementProps & {
    css?: any;
} & {
    /** A disclosure to specify state information about the modal */
    disclosure: Disclosure;
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
//# sourceMappingURL=DialogOverlay.d.ts.map