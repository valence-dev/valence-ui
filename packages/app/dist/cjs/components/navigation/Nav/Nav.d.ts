import { CSSProperties } from "react";
import { IconButtonProps, PrimitiveButtonProps } from "@valence-ui/core";
import { GenericReactiveLayoutProps, PolymorphicLayoutProps, ReactiveProp } from "@valence-ui/utils";
export type NavButtonProps = IconButtonProps & {
    /** Specifies if this button is highlighted */
    highlighted?: boolean;
};
export type GenericNavProps = GenericReactiveLayoutProps & PolymorphicLayoutProps & {
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
export declare const Nav: import("react").ForwardRefExoticComponent<import("@valence-ui/utils").GenericProps & {
    style?: ReactiveProp<CSSProperties> | undefined;
    tabIndex?: ReactiveProp<number> | undefined;
} & {
    backgroundColor?: ReactiveProp<import("csstype").Property.BackgroundColor | undefined>;
    /** Props to pass to the favicon button */
    color?: ReactiveProp<import("csstype").Property.Color | undefined>;
    padding?: ReactiveProp<import("csstype").Property.Padding<string | number> | undefined>;
    margin?: ReactiveProp<import("csstype").Property.Margin<string | number> | undefined>;
    width?: ReactiveProp<import("csstype").Property.Width<string | number> | undefined>;
    height?: ReactiveProp<import("csstype").Property.Height<string | number> | undefined>;
} & import("@valence-ui/utils").PolymorphicElementProps & {
    css?: any;
} & {
    /** Buttons to display on the top of the navigation */
    buttons: NavButtonProps[];
    /** Buttons to display on the bottom of the navigation. On mobile devices these will be groups with `buttons` horizontally along the bottom of the screen */
    bottomButtons?: NavButtonProps[] | undefined;
    /** **[REACTIVE]** Sets `gap` css property */
    gap?: ReactiveProp<CSSProperties["gap"]>;
} & {
    /** A favicon or app logo to include at the top of the nav on desktop devices */
    favicon?: string | undefined;
    /** Props to pass to the favicon button */
    faviconProps?: PrimitiveButtonProps | undefined;
} & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=Nav.d.ts.map