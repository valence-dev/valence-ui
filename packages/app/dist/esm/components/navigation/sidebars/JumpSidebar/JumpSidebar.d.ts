import { CSSProperties } from "react";
import { ButtonWithIconProps } from "@valence-ui/core";
import { GenericReactiveLayoutProps, PolymorphicLayoutProps, ReactiveProp } from "@valence-ui/utils";
export type JumpSidebarButtonProps = ButtonWithIconProps & {
    /** Specifies if this button is highlighted */
    highlighted?: boolean;
    /** The ID of a page anchor this button should scroll to when clicked. Requires the `jumpToSection` function to be provided to the parent `Sidebar` element */
    jumpTo?: string;
};
export type JumpSidebarProps = GenericReactiveLayoutProps & PolymorphicLayoutProps & {
    /** Buttons to display on the sidebar */
    buttons: JumpSidebarButtonProps[];
    /** An optional function to facilitate scrolling to a desired section of the page */
    jumpToSection?: (section: string) => void;
    /** Sets `gap` css property */
    gap?: ReactiveProp<CSSProperties["gap"]>;
};
/** The App Sidebar is a page used for navigation and high-level actions within the context of an individual page. This particular sidebar is designed for navigation, and will automatically adapt between desktop and mobile-class devices.  */
export declare const JumpSidebar: import("react").ForwardRefExoticComponent<import("@valence-ui/utils").GenericProps & {
    style?: ReactiveProp<CSSProperties> | undefined;
    tabIndex?: ReactiveProp<number> | undefined;
} & {
    backgroundColor?: ReactiveProp<import("csstype").Property.BackgroundColor | undefined>;
    color?: ReactiveProp<import("csstype").Property.Color | undefined>;
    padding?: ReactiveProp<import("csstype").Property.Padding<string | number> | undefined>;
    margin?: ReactiveProp<import("csstype").Property.Margin<string | number> | undefined>;
    width?: ReactiveProp<import("csstype").Property.Width<string | number> | undefined>;
    height?: ReactiveProp<import("csstype").Property.Height<string | number> | undefined>;
} & import("@valence-ui/utils").PolymorphicElementProps & {
    css?: any;
} & {
    /** Buttons to display on the sidebar */
    buttons: JumpSidebarButtonProps[];
    /** An optional function to facilitate scrolling to a desired section of the page */
    jumpToSection?: ((section: string) => void) | undefined;
    /** Sets `gap` css property */
    gap?: ReactiveProp<CSSProperties["gap"]>;
} & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=JumpSidebar.d.ts.map