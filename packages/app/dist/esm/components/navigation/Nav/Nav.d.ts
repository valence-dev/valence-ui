import { CSSProperties } from "react";
import { IconButtonProps, MakeResponsive, PrimitiveButtonProps, Responsive } from "@valence-ui/core";
import { GenericLayoutProps, PolymorphicLayoutProps } from "@valence-ui/utils";
export type NavButtonProps = IconButtonProps & {
    /** Whether this button is highlighted. `false` by default. */
    highlighted?: boolean;
    /** Whether this button should be shown at this breakpoint. `true` by default. */
    show?: Responsive<boolean>;
};
export type GenericNavProps = GenericLayoutProps & PolymorphicLayoutProps & {
    /** Buttons to display on the top of the navigation */
    buttons: NavButtonProps[];
    /** Buttons to display on the bottom of the navigation. On mobile devices these will be grouped
     * with `buttons` horizontally along the bottom of the screen
     */
    bottomButtons?: NavButtonProps[];
    /** Sets `gap` css property */
    gap?: CSSProperties["gap"];
};
export type NavProps = GenericNavProps & {
    /** A favicon or app logo to include at the top of the nav on desktop devices */
    favicon?: string;
    /** Props to pass to the favicon button */
    faviconProps?: PrimitiveButtonProps;
};
/** The App Nav is designed to handle inter-page navigation and application-level actions, such as page navigation, signing out, etc. This particular navigator is presented as a vertical icon button strip down the left-hand side of the screen on desktop devices, and a horizontal icon button strip along the bottom of the screen on mobile devices. */
export declare const Nav: import("react").ForwardRefExoticComponent<MakeResponsive<NavProps> & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=Nav.d.ts.map