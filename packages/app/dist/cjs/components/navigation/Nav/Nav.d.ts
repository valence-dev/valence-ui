import { CSSProperties } from "react";
import { IconButtonProps, PrimitiveButtonProps } from "@valence-ui/core";
import { GenericReactiveLayoutProps, ReactiveProp } from "@valence-ui/utils";
export type NavButtonProps = IconButtonProps & {
    /** Specifies if this button is highlighted */
    highlighted?: boolean;
};
export type GenericNavProps = GenericReactiveLayoutProps & {
    /** Buttons to display on the top of the navigation */
    buttons: NavButtonProps[];
    /** Buttons to display on the bottom of the navigation. On mobile devices these will be groups with `buttons` horizontally along the bottom of the screen */
    bottomButtons?: NavButtonProps[];
    /** **[REACTIVE]** Sets `gap` css property */
    gap?: ReactiveProp<CSSProperties["gap"]>;
};
export type NavProps = GenericNavProps & {
    /** A favicon or app logo to include at the top of the nav on desktop devices */
    favicon?: string;
    /** Props to pass to the favicon button */
    faviconProps?: PrimitiveButtonProps;
};
/** The App Nav is designed to handle inter-page navigation and application-level actions, such as page navigation, signing out, etc. This particular navigator is presented as a vertical icon button strip down the left-hand side of the screen on desktop devices, and a horizontal icon button strip along the bottom of the screen on mobile devices. */
export declare function Nav(props: NavProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Nav.d.ts.map