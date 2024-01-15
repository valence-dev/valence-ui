import { CSSProperties } from "react";
import { ButtonWithIconProps, MakeResponsive } from "@valence-ui/core";
import { GenericLayoutProps, PolymorphicLayoutProps } from "@valence-ui/utils";
export type JumpSidebarButtonProps = ButtonWithIconProps & {
    /** Specifies if this button is highlighted */
    highlighted?: boolean;
    /** The ID of a page anchor this button should scroll to when clicked. Requires the `jumpToSection` function to be provided to the parent `Sidebar` element */
    jumpTo?: string;
};
export type JumpSidebarProps = GenericLayoutProps & PolymorphicLayoutProps & {
    /** Buttons to display on the sidebar */
    buttons: JumpSidebarButtonProps[];
    /** An optional function to facilitate scrolling to a desired section of the page */
    jumpToSection?: (section: string) => void;
    /** Sets `gap` css property */
    gap?: CSSProperties["gap"];
};
/** The App Sidebar is a page used for navigation and high-level actions within the context of an individual page. This particular sidebar is designed for navigation, and will automatically adapt between desktop and mobile-class devices.  */
export declare const JumpSidebar: import("react").ForwardRefExoticComponent<MakeResponsive<JumpSidebarProps> & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=JumpSidebar.d.ts.map