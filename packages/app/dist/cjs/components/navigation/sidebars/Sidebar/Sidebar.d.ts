import { MakeResponsive } from "@valence-ui/core";
import { CSSProperties, ReactNode } from "react";
import { FABProps } from "../../../buttons";
import { GenericLayoutProps } from "@valence-ui/utils";
export type SidebarProps = GenericLayoutProps & {
    /** Sets `gap` css property */
    gap?: CSSProperties["gap"];
    /** An icon to display on the mobile FAB */
    mobileFabIcon?: ReactNode;
    /** Props to pass to the mobile FAB */
    mobileFabProps?: FABProps;
};
export declare const Sidebar: import("react").ForwardRefExoticComponent<MakeResponsive<SidebarProps> & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=Sidebar.d.ts.map