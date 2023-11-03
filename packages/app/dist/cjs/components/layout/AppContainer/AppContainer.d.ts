import { CSSProperties, ReactNode } from "react";
import { ComponentSize, GenericReactiveLayoutProps, PolymorphicLayoutProps, ReactiveProp } from "@valence-ui/utils";
export type AppContainerProps = GenericReactiveLayoutProps & PolymorphicLayoutProps & {
    /** The primary root navigation element. This element should be consistent across pages; its recommended to be based off the `<Nav />` component. */
    nav?: ReactNode;
    /** The  header containing the `<h1>` for this page. */
    header: ReactNode;
    /** An optional sidebar element used for navigation or page-level actions. */
    sidebar?: ReactNode;
    /** The border radius of the page container. Defaults to `5px` larger than the theme default. */
    radius?: ComponentSize;
    /** Properties to apply to the nav container element */
    navContainerProps?: GenericReactiveLayoutProps;
    /** Properties to apply to the page container element */
    pageProps?: GenericReactiveLayoutProps;
    /** The maximum width of this page's content */
    contentWidth?: number;
    /** The width of the sidebar element */
    sidebarWidth?: number;
    /** The width of the nav element */
    navWidth?: number;
};
/**
 * The `AppContainer` component is a layout component that provides a consistent layout for pages in the application. It includes a navigation element, a header element, and an optional sidebar element. The `AppContainer` component is responsive and adjusts its layout based on the screen size.
 */
export declare const AppContainer: import("react").ForwardRefExoticComponent<import("@valence-ui/utils").GenericProps & {
    style?: ReactiveProp<CSSProperties> | undefined;
    tabIndex?: ReactiveProp<number> | undefined;
} & {
    backgroundColor?: ReactiveProp<import("csstype").Property.BackgroundColor | undefined>;
    color?: ReactiveProp<import("csstype").Property.Color | undefined>;
    /** The width of the sidebar element */
    padding?: ReactiveProp<import("csstype").Property.Padding<string | number> | undefined>;
    margin?: ReactiveProp<import("csstype").Property.Margin<string | number> | undefined>;
    width?: ReactiveProp<import("csstype").Property.Width<string | number> | undefined>;
    height?: ReactiveProp<import("csstype").Property.Height<string | number> | undefined>;
} & import("@valence-ui/utils").PolymorphicElementProps & {
    css?: any;
} & {
    /** The primary root navigation element. This element should be consistent across pages; its recommended to be based off the `<Nav />` component. */
    nav?: ReactNode;
    /** The  header containing the `<h1>` for this page. */
    header: ReactNode;
    /** An optional sidebar element used for navigation or page-level actions. */
    sidebar?: ReactNode;
    /** The border radius of the page container. Defaults to `5px` larger than the theme default. */
    radius?: ComponentSize | undefined;
    /** Properties to apply to the nav container element */
    navContainerProps?: GenericReactiveLayoutProps | undefined;
    /** Properties to apply to the page container element */
    pageProps?: GenericReactiveLayoutProps | undefined;
    /** The maximum width of this page's content */
    contentWidth?: number | undefined;
    /** The width of the sidebar element */
    sidebarWidth?: number | undefined;
    /** The width of the nav element */
    navWidth?: number | undefined;
} & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=AppContainer.d.ts.map