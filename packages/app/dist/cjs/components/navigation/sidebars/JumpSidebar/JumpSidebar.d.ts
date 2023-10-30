import { CSSProperties } from "react";
import { ButtonWithIconProps } from "@valence-ui/core";
import { GenericReactiveLayoutProps, ReactiveProp } from "@valence-ui/utils";
export type JumpSidebarButtonProps = ButtonWithIconProps & {
    /** Specifies if this button is highlighted */
    highlighted?: boolean;
    /** The ID of a page anchor this button should scroll to when clicked. Requires the `jumpToSection` function to be provided to the parent `Sidebar` element */
    jumpTo?: string;
};
export type JumpSidebarProps = GenericReactiveLayoutProps & {
    /** Buttons to display on the sidebar */
    buttons: JumpSidebarButtonProps[];
    /** An optional function to facilitate scrolling to a desired section of the page */
    jumpToSection?: (section: string) => void;
    /** Sets `gap` css property */
    gap?: ReactiveProp<CSSProperties["gap"]>;
};
/** The App Sidebar is a page used for navigation and high-level actions within the context of an individual page. This particular sidebar is designed for navigation, and will automatically adapt between desktop and mobile-class devices.  */
export declare function JumpSidebar(props: JumpSidebarProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=JumpSidebar.d.ts.map