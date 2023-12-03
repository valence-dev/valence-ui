import { Flex, ValenceContext, useBreakpoint, useDefaultIconProps, useDisclosure } from "@valence-ui/core";
import { GenericReactiveLayoutProps, ReactiveProp, getReactiveProp } from "@valence-ui/utils";
import { CSSProperties, ReactNode, forwardRef, useContext, useState } from "react";
import { FAB, FABProps } from "../../../buttons";
import { SlideUp } from "../../../overlays";
import { IconMenu } from "@tabler/icons-react";

export type SidebarProps = GenericReactiveLayoutProps & {
  /** Sets `gap` css property */
  gap?: ReactiveProp<CSSProperties["gap"]>;

  /** An icon to display on the mobile FAB */
  mobileFabIcon?: ReactNode;
  /** Props to pass to the mobile FAB */
  mobileFabProps?: FABProps;
}


export const Sidebar = forwardRef(function Sidebar(
  props: SidebarProps,
  ref: any
) {
  const theme = useContext(ValenceContext);
  const breakpoint = useBreakpoint();
  const defaultIconProps = useDefaultIconProps();


  // Defaults 
  const {
    gap = theme.sizeClasses.padding[theme.defaultSize],
    mobileFabProps = {},
    mobileFabIcon = <IconMenu {...defaultIconProps.get("white")} />,

    width = "100%",
    height = "100%",

    children,
    style,
    ...rest
  } = props;


  // Styles
  const DesktopStyle: CSSProperties = {
    width: getReactiveProp(width, breakpoint),
    height: getReactiveProp(height, breakpoint),

    borderRight: `1px solid ${theme.getColor("black")?.base as string
      + theme.getColor("black")?.opacity.weak}`,

    paddingRight: 10,
    position: "sticky",
    top: 0,

    overflowX: "hidden",
    overflowY: "auto",

    ...getReactiveProp(style, breakpoint)
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

        <SlideUp disclosure={slideUp}>
          {children}
        </SlideUp>
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