import { CSSProperties, ReactNode, forwardRef, useContext } from "react";
import { GenericLayoutProps, PolymorphicLayoutProps } from "@valence-ui/utils";
import { Flex } from "../Flex";
import { MakeResponsive, Responsive, useColors, useResponsiveProps } from "../../../utilities";
import { ValenceContext } from "../../../ValenceProvider";
import { useElementSize } from "../../../hooks";

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

  const radius = theme.getSize("radius") as number + 10;


  // Hooks
  const { ref: leftRef, width: leftWidth, height: leftHeight } = useElementSize();


  // Styles
  const rootContentStyle: Responsive<CSSProperties> = {
    default: {
      transition: `padding-right 0.3s ease-in-out`,
      paddingLeft: leftWidth ?? 0,
      height: "100vh",
      position: "relative",
    },
    mobile: {
      height: `calc(100vh - ${leftHeight}px)`,
      position: "relative",
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
  }

  const contentContainerContainerStyle: CSSProperties = {   // Lmao
    height: "100%",
    width: "100%",
    backgroundColor: getHex("primary"),
  }
  const contentContainerStyle: Responsive<CSSProperties> = {
    default: {
      height: "100%",
      width: "100%",
      position: "relative",
      borderRadius: `${radius}px 0px 0px ${radius}px`,
      backgroundColor: getHex("white"),
      overflow: "hidden",
    },
    mobile: {
      height: "100%",
      width: "100%",
      position: "relative",
      backgroundColor: getHex("white"),
      borderRadius: showNav ? `0px 0px ${radius}px ${radius}px` : 0,
      overflow: "hidden",
    }
  }


  return (
    <>
      <div
        id="root-content"
        style={useResponsiveProps(rootContentStyle)}
      >
        {/* Nav */}
        <Flex
          direction={{ default: "row", mobile: "column-reverse" }}
          backgroundColor="primary"
          style={navContainerStyle}

          ref={leftRef}
          {...rest}
        >
          {/* Nav */}
          {showNav && nav}
        </Flex>

        {/* Content */}
        <Flex style={contentContainerContainerStyle}>
          <Flex direction="column" style={contentContainerStyle}>
            {children}
          </Flex>
        </Flex>
      </div>
    </>
  )
});