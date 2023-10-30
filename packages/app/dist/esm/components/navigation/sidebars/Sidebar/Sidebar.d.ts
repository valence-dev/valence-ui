import { GenericReactiveLayoutProps, ReactiveProp } from "@valence-ui/utils";
import { CSSProperties, ReactNode } from "react";
import { FABProps } from "../../../buttons";
export type SidebarProps = GenericReactiveLayoutProps & {
    /** Sets `gap` css property */
    gap?: ReactiveProp<CSSProperties["gap"]>;
    /** An icon to display on the mobile FAB */
    mobileFabIcon?: ReactNode;
    /** Props to pass to the mobile FAB */
    mobileFabProps?: FABProps;
};
export declare function Sidebar(props: SidebarProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Sidebar.d.ts.map