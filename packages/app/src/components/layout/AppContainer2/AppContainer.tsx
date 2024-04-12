import { Flex, FlexProps, MakeResponsive, Responsive, useColors, useDisclosure, useResponsiveProps, useValence } from "@valence-ui/core";
import { CSSProperties, ReactNode, forwardRef } from "react";
import { AppContainerContext } from "../../../contexts";
import { DrawerReveal } from "../DrawerReveal";

export type DrawerDisplayMode = "aside" | "underlay";


export type AppContainerProps = {
  /** The primary root navigation element. This element should be consistent across pages. */
  navRail?: ReactNode;
  /** A secondary navigation element used to modify content on this specific page. */
  drawer?: ReactNode;

  /** Whether to show the `navRail`, if it is provided. Defaults to `true`. */
  showNavRail?: boolean;
  /** The display mode of the drawer. Defaults to `aside` on tablet and larger, and "underlay" on mobile. */
  drawerDisplayMode?: DrawerDisplayMode;

  /** Properties to apply to the outer main page container element */
  mainOuterProps?: Omit<FlexProps, "children">;
  /** Properties to apply to the main page container element */
  mainProps?: Omit<FlexProps, "children">;

  /** The background color of the navigation content. */
  navColor?: CSSProperties["backgroundColor"];
  /** The background color of the main page content. */
  backgroundColor?: CSSProperties["backgroundColor"];

  children: ReactNode;
}


export const AppContainer = forwardRef(function AppContainer(
  props: MakeResponsive<AppContainerProps>,
  ref: any,
) {
  const theme = useValence();
  const { getHex } = useColors();

  // Defaults
  const {
    navRail,
    drawer,

    showNavRail = true,
    drawerDisplayMode = useResponsiveProps({ default: "aside", mobile: "underlay" }),

    mainOuterProps,
    mainProps,

    navColor = "primary",
    backgroundColor = "white",

    children,
    ...rest
  } = useResponsiveProps<AppContainerProps>(props);

  const {
    justify: mainJustify = "center",
    style: outerMainStyle,
    ...outerMainRest
  } = mainOuterProps ?? {};
  const {
    component: mainComponent = "main",
    width: mainWidth = "min(700px, 100%)",
    direction: mainDirection = "column",
    style: mainStyle,
    ...mainRest
  } = mainProps ?? {};


  // App Container context
  const drawerDisclosure = useDisclosure(true);


  // Styles
  const ContainerStyle: CSSProperties = {
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    backgroundColor: getHex(navColor),
  }

  const radius = theme.sizeClasses.radius[theme.defaults.radius] as number + 5;
  const OuterContentContainerStyle: Responsive<CSSProperties> = {
    default: {
      borderRadius: `${radius}px 0px 0px ${radius}px`,
      overflow: "hidden",
      width: "100%",
      height: "100%",
    },
    mobile: {
      borderRadius: 0,
      overflowX: "auto",
      width: "100%",
      height: 200,
      flexGrow: 1,

      // @ts-ignore
      "&::-webkit-scrollbar": {
        display: "none",
      },
      "-ms-overflow-style": "none",
      scrollbarWidth: "none",
    }
  }
  const OuterMainStyle: Responsive<CSSProperties> = {
    default: {
      width: 300,
      flexGrow: 1,
      height: "100%",
      overflowY: "auto",
      backgroundColor: getHex(backgroundColor),
      ...outerMainStyle,
    },
    mobile: {
      width: "100vw",
      height: "100%",
      overflowY: "auto",
      backgroundColor: getHex(backgroundColor),
      borderRadius: `0px 0px ${radius}px ${radius}px`,
    }
  }
  const MainStyle: CSSProperties = {
    padding: theme.getSize("padding"),
    height: "fit-content",
    minHeight: "100%",
    paddingBottom: 200,
    ...mainStyle,
  }


  // Subcomponents
  const MainContent = () => (
    <Flex
      justify={mainJustify}
      style={OuterMainStyle}
      {...outerMainRest}
    >
      <Flex
        component={mainComponent}
        width={mainWidth}
        direction={mainDirection}
        style={MainStyle}
        {...mainRest}
      >
        {children}
      </Flex>
    </Flex>
  );
  const AsideAndMainContent = () => (
    drawerDisplayMode === "aside" ? (
      <Flex
        direction="row"
        gap={0}
        style={OuterContentContainerStyle}
      >
        {drawer}

        <MainContent />
      </Flex>
    ) : (
      <DrawerReveal
        disclosure={drawerDisclosure}
        front={<MainContent />}
        behind={drawer}
      />
    )
  )


  return (
    <AppContainerContext.Provider
      value={{
        drawerDisclosure
      }}
    >
      <Flex
        direction={{ default: "row", mobile: "column-reverse" }}
        style={ContainerStyle}
        gap={0}
        ref={ref}
        {...rest}
      >
        {showNavRail && navRail}

        <AsideAndMainContent />
      </Flex>
    </AppContainerContext.Provider>
  )
});