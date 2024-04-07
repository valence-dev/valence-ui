import { Flex, FlexProps, MakeResponsive, Responsive, useColors, useResponsiveProps, useValence } from "@valence-ui/core";
import { CSSProperties, ReactNode, forwardRef } from "react";

export type AppContainerProps = {
  /** The primary root navigation element. This element should be consistent across pages. */
  navRail?: ReactNode;
  /** A secondary navigation element used to modify content on this specific page. */
  drawer?: ReactNode;

  /** Whether to show the `navRail`, if it is provided. Defaults to `true`. */
  showNavRail?: boolean;

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


  // Styles
  const ContainerStyle: CSSProperties = {
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    backgroundColor: getHex(navColor),
  }

  const radius = theme.sizeClasses.radius[theme.defaults.radius] as number + 5;
  const InnerContainerStyle: Responsive<CSSProperties> = {
    default: {
      backgroundColor: getHex(backgroundColor),
      borderRadius: `${radius}px 0px 0px ${radius}px`,
      overflow: "hidden",
      width: "100%",
      height: "100%",
    },
    mobile: {
      backgroundColor: getHex(backgroundColor),
      borderRadius: `0px 0px ${radius}px ${radius}px`,
      overflow: "hidden",
      width: "100%",
      height: 200,
      flexGrow: 1,
    }
  }

  const OuterMainStyle: CSSProperties = {
    width: 300,
    flexGrow: 1,
    // width: "100%",
    height: "100%",
    overflowY: "auto",
    ...outerMainStyle,
  }
  const MainStyle: CSSProperties = {
    padding: theme.getSize("padding"),
    height: "fit-content",
    minHeight: "100%",
    paddingBottom: 200,
    ...mainStyle,
  }


  return (
    <Flex
      direction={{ default: "row", mobile: "column-reverse" }}
      style={ContainerStyle}
      gap={0}
      ref={ref}
      {...rest}
    >
      {showNavRail && navRail}

      {/* Inner container */}
      <Flex
        direction="row"
        gap={0}
        style={InnerContainerStyle}
      >
        {drawer}

        {/* Main page content */}
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
      </Flex>
    </Flex>
  )
});