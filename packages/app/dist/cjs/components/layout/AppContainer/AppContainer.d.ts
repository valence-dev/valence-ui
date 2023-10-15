import { ReactNode } from "react";
import { ComponentSize, GenericReactiveLayoutProps } from "@valence-ui/utils";
export type AppContainerProps = GenericReactiveLayoutProps & {
    /** The primary root navigation element. This element should be consistent across pages; its recommended to be based off the `<Nav />` component. */
    nav?: ReactNode;
    /** The header containing the `<h1>` for this page. */
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
export declare function AppContainer(props: AppContainerProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=AppContainer.d.ts.map