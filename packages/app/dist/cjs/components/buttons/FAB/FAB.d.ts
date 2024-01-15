import { IconButtonProps, MakeResponsive } from "@valence-ui/core";
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
export declare const FAB: import("react").ForwardRefExoticComponent<MakeResponsive<FABProps> & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=FAB.d.ts.map