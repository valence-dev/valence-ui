/// <reference types="react" />
import { FlexProps, MakeResponsive } from "@valence-ui/core";
import { SideSheetProps } from "../../overlays";
export type SidebarDisplay = "inline" | "overlay" | "hidden";
export type SidebarProps = FlexProps & {
    /** The display option for the sidebar. Defaults to `inline` on tablet
     * and bigger, and `overlay` on mobile and smaller.
     */
    display?: SidebarDisplay;
    /** Optional props to pass to the SideSheet component used when `display="inline"`. */
    sideSheetProps?: MakeResponsive<SideSheetProps>;
};
export declare const Sidebar: import("react").ForwardRefExoticComponent<MakeResponsive<SidebarProps> & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=Sidebar.d.ts.map