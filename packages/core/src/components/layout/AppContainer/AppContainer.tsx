import { CSSProperties, ReactNode, forwardRef, useContext } from "react";
import { GenericLayoutProps, PolymorphicLayoutProps } from "@valence-ui/utils";
import { useElementSize } from "usehooks-ts";
import { Flex } from "../Flex";
import { MakeResponsive, Responsive, useColors, useResponsiveProps } from "../../../utilities";
import { ValenceContext } from "../../../ValenceProvider";

export type AppContainerProps =
  GenericLayoutProps
  & PolymorphicLayoutProps
  & {
    /** The primary root navigation element. This element should be consistent across pages; its recommended to be based off the `<AppNav />` component. */
    nav?: ReactNode;
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
    showNav = true,

    children,
    style,
    ...rest
  } = useResponsiveProps<AppContainerProps>(props);

  const radius = theme.sizeClasses.radius[theme.defaults.radius] as number + 5;


  // Hooks
  const [leftRef, { width: leftWidth, height: leftHeight }] = useElementSize();


  // Styles
  const pageContainerStyle: Responsive<CSSProperties> = {
    default: {
      transition: `padding-right 0.3s ease-in-out`,
      paddingLeft: leftWidth ?? 0,
      height: "100vh",
      position: "relative",
    },
    mobile: {
      height: `calc(100vh - ${leftHeight}px)`,
    }
  }

  const navContainerStyle: Responsive<CSSProperties> = {
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
  const cornerStyle: Responsive<CSSProperties> = {
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
    height: "100%",
    width: "100%",
    position: "relative",
  }


  return (
    <>
      <div
        id="root-content"
        style={useResponsiveProps(pageContainerStyle)}
      >
        {/* Nav */}
        <Flex
          direction={{ default: "row", mobile: "column-reverse" }}
          backgroundColor="primary"
          style={navContainerStyle}
          gap={0}

          ref={leftRef}
          {...rest}
        >
          {/* Nav */}
          {showNav && nav}

          <Flex style={cornerStyle} />
        </Flex>

        {/* Content */}
        <Flex style={contentContainerStyle}>
          {children}
        </Flex>
      </div>
    </>
  )
});