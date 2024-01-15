import { CSSProperties, ReactNode, forwardRef, useContext } from "react";
import { ComponentSize, GenericLayoutProps, PolymorphicLayoutProps } from "@valence-ui/utils";
import { Flex, Header, MakeResponsive, Responsive, Space, ValenceContext, useBreakpoint, useResponsiveProps } from "@valence-ui/core";

export type AppContainerProps =
  GenericLayoutProps
  & PolymorphicLayoutProps
  & {
    /** The primary root navigation element. This element should be consistent across pages; its recommended to be based off the `<Nav />` component. */
    nav?: ReactNode;
    /** The  header containing the `<h1>` for this page. */
    header: ReactNode;
    /** An optional sidebar element used for navigation or page-level actions. */
    sidebar?: ReactNode;

    /** The border radius of the page container. Defaults to `5px` larger than the theme default. */
    radius?: ComponentSize;

    /** Properties to apply to the nav container element */
    navContainerProps?: GenericLayoutProps;
    /** Properties to apply to the page container element */
    pageProps?: GenericLayoutProps;

    /** The maximum width of this page's content */
    contentWidth?: number;
    /** The width of the sidebar element */
    sidebarWidth?: number;
    /** The width of the nav element */
    navWidth?: number;

    /** Whether to show a spacer element below the header. Defaults to `true`. */
    showHeaderSpacer?: boolean;
    /** Whether to show the nav element. Defaults to `true`. */
    showNav?: boolean;
  }


/**
 * The `AppContainer` component is a layout component that provides a consistent layout for pages in the application. It includes a navigation element, a header element, and an optional sidebar element. The `AppContainer` component is responsive and adjusts its layout based on the screen size.
 */
export const AppContainer = forwardRef(function AppContainer(
  props: MakeResponsive<AppContainerProps>,
  ref: any
) {
  const theme = useContext(ValenceContext);
  const breakpoint = useBreakpoint();


  // Defaults
  const {
    nav,
    header,
    sidebar,
    radius = theme.defaults.radius,
    navContainerProps,
    pageProps,

    contentWidth = 700,
    sidebarWidth = 270,
    navWidth = 65,

    showHeaderSpacer = true,
    showNav = true,

    children,
    style,
    ...rest
  } = useResponsiveProps<AppContainerProps>(props);

  const borderRadius = theme.sizeClasses.radius[radius] as number + 5;


  // Styles
  const pageContainerStyle: Responsive<CSSProperties> = {
    default: {
      position: "fixed",
      top: 0,
      left: 0,
      height: "100vh",
    }, mobile: {
      position: "fixed",
      bottom: 0,
      left: 0,
      right: 0,
      width: "100vw",
      zIndex: 999,
    },
    ...style,
  };
  const sidebarContainerStyle: Responsive<CSSProperties> = {
    default: {
      width: sidebar ? sidebarWidth : 0,
      backgroundColor: theme.getColorHex("white"),
      borderRadius: `${borderRadius}px 0px 0px ${borderRadius}px`,
      padding: 10,
    }, mobile: {
      backgroundColor: theme.getColorHex("white"),
      borderRadius: showNav ?
        `0px 0px ${borderRadius}px ${borderRadius}px`
        : 0,
      overflow: "auto",
      padding: `0px 10px`,
      minHeight: borderRadius,
    },

  };
  const contentContainerStyle: Responsive<CSSProperties> = {
    default: {
      backgroundColor: theme.getColorHex("white"),
      paddingLeft: sidebar ? sidebarWidth + navWidth : navWidth,
      paddingRight: 30,
      width: "100vw",

      transition: "padding-right 0.3s ease-in-out",
    }, mobile: {
      backgroundColor: theme.getColor("white")?.base,
      padding: 20,
    }
  };
  const contentStyle: CSSProperties = {
    width: `min(${contentWidth}px, 100%)`,
    minHeight: "100vh",
    paddingBottom: 200,
  }


  return (
    <>
      {/* Nav & sidebar */}
      <Flex
        direction={{ default: "row", mobile: "column-reverse" }}
        backgroundColor="primary"
        style={pageContainerStyle}
        gap={0}

        ref={ref}
        {...rest}
      >
        {/* Nav */}

        {showNav && <Flex
          direction="column"
          align="center"
          margin={10}
          {...navContainerProps}
        >
          {nav}
        </Flex>
        }

        {/* Sidebar */}
        <Flex
          direction="column"
          style={sidebarContainerStyle}
        >
          {sidebar &&
            <>
              {!breakpoint.isMobile && header}
              {sidebar}
            </>
          }
        </Flex>
      </Flex>


      {/* Page content */}
      <Flex
        id="root-content"
        align="center"
        justify="center"
        grow={true}
        style={contentContainerStyle}
      >
        <Flex
          direction="column"
          style={contentStyle}
          {...pageProps}
        >
          {!props.sidebar || breakpoint.isMobile ? header : <Header />}

          {breakpoint.isMobile && showHeaderSpacer && <Space height={120} />}

          {children}
        </Flex>
      </Flex>
    </>
  )
});