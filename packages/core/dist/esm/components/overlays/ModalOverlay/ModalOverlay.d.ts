/** @jsxImportSource @emotion/react */
import { CSSProperties } from "react";
import { GenericProps } from "@valence-ui/utils";
export type ModalOverlayProps = GenericProps & {
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
export declare function ModalOverlay(props: ModalOverlayProps): import("@emotion/react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ModalOverlay.d.ts.map