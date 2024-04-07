import { FlexProps, MakeResponsive } from "@valence-ui/core";
import { CSSProperties, ReactNode } from "react";
export type AppContainerProps = {
    /** The primary root navigation element. This element should be consistent across pages. */
    navRail?: ReactNode;
    /** A secondary navigation element used to modify content on this specific page. */
    drawer?: ReactNode;
    /** Whether to show the `navRail`, if it is provided. Defaults to `true`. */
    showNavRail?: boolean;
    /** Properties to apply to the outer main page container element */
    mainOuterProps?: Omit<FlexProps, "children">;
    /** Properties to apply to the main page container element */
    mainProps?: Omit<FlexProps, "children">;
    /** The background color of the navigation content. */
    navColor?: CSSProperties["backgroundColor"];
    /** The background color of the main page content. */
    backgroundColor?: CSSProperties["backgroundColor"];
    children: ReactNode;
};
export declare const AppContainer: import("react").ForwardRefExoticComponent<MakeResponsive<AppContainerProps> & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=AppContainer.d.ts.map