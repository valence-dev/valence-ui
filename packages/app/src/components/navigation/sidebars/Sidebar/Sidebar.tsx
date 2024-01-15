import { Flex, Icon, MakeResponsive, ValenceContext, useBreakpoint, useDisclosure, useResponsiveProps } from "@valence-ui/core";
import { CSSProperties, ReactNode, forwardRef, useContext } from "react";
import { FAB, FABProps } from "../../../buttons";
import { BottomSheet } from "../../../overlays";
import { IconMenu } from "@tabler/icons-react";
import { GenericLayoutProps } from "@valence-ui/utils";

export type SidebarProps =
  GenericLayoutProps
  & {
    /** Sets `gap` css property */
    gap?: CSSProperties["gap"];

    /** An icon to display on the mobile FAB */
    mobileFabIcon?: ReactNode;
    /** Props to pass to the mobile FAB */
    mobileFabProps?: FABProps;
  }


export const Sidebar = forwardRef(function Sidebar(
  props: MakeResponsive<SidebarProps>,
  ref: any
) {
  const theme = useContext(ValenceContext);
  const breakpoint = useBreakpoint();


  // Defaults 
  const {
    gap = theme.sizeClasses.padding[theme.defaults.size],
    mobileFabProps = {},
    mobileFabIcon = <Icon color="white"><IconMenu /></Icon>,

    width = "100%",
    height = "100%",

    children,
    style,
    ...rest
  } = useResponsiveProps<SidebarProps>(props);


  // Styles
  const DesktopStyle: CSSProperties = {
    width: width,
    height: height,

    borderRight: `1px solid ${theme.getColorHex("black") as string
      + theme.getColorHex("black", "weak")}`,

    paddingRight: 10,
    position: "sticky",
    top: 0,

    overflowX: "hidden",
    overflowY: "auto",

    ...style
  }


  // States
  const slideUp = useDisclosure();


  return (
    breakpoint.isMobile ?
      <>
        <FAB
          color="black"
          onClick={() => slideUp.open()}
          {...mobileFabProps}
        >
          {mobileFabIcon}
        </FAB>

        <BottomSheet
          disclosure={slideUp}
          title=""
          header={() => null}
        >
          {children}
        </BottomSheet>
      </>
      :
      <Flex
        direction="column"
        gap={gap}
        grow={true}
        style={DesktopStyle}

        ref={ref}
        {...rest}
      >
        {children}
      </Flex>
  )
});