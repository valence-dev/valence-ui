import { FlexProps, IconButtonProps, MakeResponsive, PrimitiveButtonProps, Responsive } from "@valence-ui/core";
import { CSSProperties, ReactNode } from "react";
export type NavButtonPosition = "top" | "bottom";
export type NavButtonProps = IconButtonProps & {
    /** The position of this button. `top` by default. */
    position?: NavButtonPosition;
    /** Whether this button is highlighted. `false` by default. */
    highlighted?: boolean;
    /** Whether this button should be shown at this breakpoint. `true` by default. */
    show?: Responsive<boolean>;
};
export type NavRailProps = Omit<FlexProps, "children"> & {
    /** Buttons to display on the navigation rail. */
    buttons: NavButtonProps[];
    /** A favicon to display on the nav rail. */
    favicon?: string | ReactNode;
    /** Whether to show the favicon. `true` on tablet and larger; `false` on mobile. */
    showFavicon?: boolean;
    /** Optional props to pass to the favicon component. */
    faviconProps?: Omit<PrimitiveButtonProps, "children"> & {
        /** The alt text for the favicon. */
        alt?: string;
    };
    /** Sets `gap` css property. */
    gap?: CSSProperties["gap"];
};
export declare const NavRail: import("react").ForwardRefExoticComponent<MakeResponsive<NavRailProps> & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=NavRail.d.ts.map