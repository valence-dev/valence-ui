import { FlexProps, MakeResponsive } from "@valence-ui/core";
import { ReactNode } from "react";
import { DragSizingProps } from "react-drag-sizing/dist/types";
import { CSSProperties } from "styled-components";
export type ResizeDirection = "left" | "right" | "top" | "bottom" | "none";
export type DrawerType = "inline" | "overlay";
export type DrawerProps = {
    /** The direction to resize the drawer. `"right"` by default. */
    resizeDirection?: ResizeDirection;
    /** The minimum width of the drawer. `250` by default. */
    minWidth?: CSSProperties["minWidth"];
    /** The maximum width of the drawer. `400` by default. */
    maxWidth?: CSSProperties["maxWidth"];
    /** The initial width of the drawer. Defaults to the minimum width. */
    initialWidth?: number;
    /** The type of the drawer. By default, this is `"inline"` by on tablet and larger; `"overlay"` on mobile. */
    type?: DrawerType;
    /** The background color of the drawer. */
    backgroundColor?: CSSProperties["backgroundColor"];
    dragResizeProps?: DragSizingProps;
    flexProps?: Omit<FlexProps, "children">;
    children: ReactNode;
};
export declare const Drawer: import("react").ForwardRefExoticComponent<MakeResponsive<DrawerProps> & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=Drawer.d.ts.map