import { IconButtonProps } from "@valence-ui/core";
import { CSSProperties } from "react";
export type FABProps = IconButtonProps & {
    /** Vertical position of this button on the page. Defaults to `"bottom"` */
    vPosition?: "top" | "bottom";
    /** Horizontal position of this button on the page. Defaults to `"right"` */
    hPosition?: "left" | "right";
    /** The distance in `px` this button sits from the edge of the page. Defaults to `20` */
    offset?: number;
    /** Sets `z-index` css property. Defaults to `100` */
    zIndex?: CSSProperties["zIndex"];
};
export declare function FAB(props: FABProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=FAB.d.ts.map