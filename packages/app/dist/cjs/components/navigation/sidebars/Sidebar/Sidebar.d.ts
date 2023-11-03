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
export declare const Sidebar: import("react").ForwardRefExoticComponent<import("@valence-ui/utils").GenericProps & {
    style?: ReactiveProp<CSSProperties> | undefined;
    tabIndex?: ReactiveProp<number> | undefined;
} & {
    backgroundColor?: ReactiveProp<import("csstype").Property.BackgroundColor | undefined>;
    color?: ReactiveProp<import("csstype").Property.Color | undefined>;
    padding?: ReactiveProp<import("csstype").Property.Padding<string | number> | undefined>;
    margin?: ReactiveProp<import("csstype").Property.Margin<string | number> | undefined>;
    width?: ReactiveProp<import("csstype").Property.Width<string | number> | undefined>;
    height?: ReactiveProp<import("csstype").Property.Height<string | number> | undefined>;
} & {
    /** Sets `gap` css property */
    gap?: ReactiveProp<CSSProperties["gap"]>;
    /** An icon to display on the mobile FAB */
    mobileFabIcon?: ReactNode;
    /** Props to pass to the mobile FAB */
    mobileFabProps?: FABProps | undefined;
} & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=Sidebar.d.ts.map