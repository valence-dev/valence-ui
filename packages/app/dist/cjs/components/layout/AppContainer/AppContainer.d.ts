import React, { ReactNode } from "react";
import { GenericLayoutProps, PolymorphicLayoutProps } from "@valence-ui/utils";
import { MakeResponsive } from "@valence-ui/core";
export type AppContainerProps = GenericLayoutProps & PolymorphicLayoutProps & {
    /** The primary root navigation element. This element should be consistent across pages; its recommended to be based off the `<Nav />` component. */
    nav?: ReactNode;
    /** The  header containing the `<h1>` for this page. */
    header: ReactNode;
    /** An optional sidebar element used for navigation or page-level actions. */
    sidebar?: ReactNode;
    /** Properties to apply to the page container element */
    pageProps?: Omit<GenericLayoutProps, "children">;
    /** The maximum width of this page's content */
    contentWidth?: number;
    /** Whether to show the nav element. Defaults to `true`. */
    showNav?: boolean;
};
/**
 * The `AppContainer` component is a layout component that provides a consistent layout for pages in the application. It includes a navigation element, a header element, and an optional sidebar element. The `AppContainer` component is responsive and adjusts its layout based on the screen size.
 */
export declare const AppContainer: React.ForwardRefExoticComponent<MakeResponsive<AppContainerProps> & React.RefAttributes<unknown>>;
//# sourceMappingURL=AppContainer.d.ts.map