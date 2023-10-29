import { Flex, ValenceContext, useBreakpoint } from "@valence-ui/core";
import { GenericReactiveLayoutProps, ReactiveProp, getReactiveProp } from "@valence-ui/utils";
import { CSSProperties, ReactNode, useContext, useState } from "react";
import { FAB, FABProps } from "../../../buttons";
import { SlideUp } from "../../../overlays";

export type SidebarProps = GenericReactiveLayoutProps & {
  /** Sets `gap` css property */
  gap?: ReactiveProp<CSSProperties["gap"]>;

  /** An icon to display on the mobile Fab */
  mobileFabIcon: ReactNode;
  /** Props to pass to the mobile Fab */
  mobileFabProps?: FABProps;
}


export function Sidebar(props: SidebarProps) {
  const theme = useContext(ValenceContext);
  const breakpoint = useBreakpoint();


  // Defaults 
  const {
    gap = theme.sizeClasses.padding[theme.defaultSize],
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

    ...getReactiveProp(style, breakpoint)
  }


  // States
  const [slideUpOpened, setSlideUpOpened] = useState(false);


  return (
    breakpoint.isMobile ?
      <>
        <FAB
          color="black"
          onClick={() => setSlideUpOpened(true)}
          {...props.mobileFabProps}
        >
          {props.mobileFabIcon}
        </FAB>

        <SlideUp
          opened={slideUpOpened}
          close={() => setSlideUpOpened(false)}
        >
          {children}
        </SlideUp>
      </>
      :
      <Flex
        direction="column"
        gap={gap}
        grow={true}
        style={DesktopStyle}
        {...rest}
      >
        {children}
      </Flex>
  )
}