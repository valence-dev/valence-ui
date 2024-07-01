import React, { CSSProperties, ReactNode, forwardRef, useContext } from "react";
import { GenericLayoutProps, PolymorphicLayoutProps } from "@valence-ui/utils";
import { Flex, MakeResponsive, Responsive, ValenceContext, useColors, useDisclosure, useResponsiveProps } from "@valence-ui/core";
import { useElementSize } from "usehooks-ts";

export type AppContainerProps =
  GenericLayoutProps
  & PolymorphicLayoutProps
  & {
    /** The primary root navigation element. This element should be consistent across pages; its recommended to be based off the `<Nav />` component. */
    nav?: ReactNode;
    /** The  header containing the `<h1>` for this page. */
    header: ReactNode;

    /** Properties to apply to the page container element */
    pageProps?: Omit<GenericLayoutProps, "children">;

    /** The maximum width of this page's content */
    contentWidth?: number;

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
  const { getHex } = useColors();


  // Defaults
  const {
    nav,
    header,
    pageProps,

    contentWidth = 700,

    showNav = true,

    children,
    style,
    ...rest
  } = useResponsiveProps<AppContainerProps>(props);

  const radius = theme.sizeClasses.radius[theme.defaults.radius] as number + 5;


  // Hooks
  const [leftRef, { width: leftWidth }] = useElementSize();


  // States
  const sidebarDisclosure = useDisclosure();


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
  const sidebarReplacementStyle: Responsive<CSSProperties> = {
    default: {
      width: radius,
      height: "100%",
      borderRadius: `${radius}px 0px 0px ${radius}px`,
      backgroundColor: getHex("white"),
    },
    mobile: {
      height: radius,
      width: "100%",
      borderRadius: showNav ? `0px 0px ${radius}px ${radius}px` : 0,
      backgroundColor: getHex("white"),
    }
  }
  const contentContainerStyle: Responsive<CSSProperties> = {
    default: {
      backgroundColor: getHex("white"),
      paddingLeft: leftWidth + 10,
      paddingRight: 0,
      width: "100vw",

      transition: "padding-right 0.3s ease-in-out",
    }, mobile: {
      backgroundColor: getHex("white"),
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

        ref={leftRef}
        {...rest}
      >
        {/* Nav */}
        {showNav && nav}
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
          {header}

          {children}
        </Flex>
      </Flex>
    </>
  )
});