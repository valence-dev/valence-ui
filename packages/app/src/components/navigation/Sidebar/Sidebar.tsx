import { CSSProperties, useContext } from "react";
import { ButtonWithIcon, ButtonWithIconProps, Flex, IconButton, ValenceContext, useBreakpoint } from "@valence-ui/core";
import { GenericReactiveLayoutProps, ReactiveProp, getReactiveProp } from "@valence-ui/utils";

export type SidebarButtonProps = ButtonWithIconProps & {
  /** Specifies if this button is highlighted */
  highlighted?: boolean;
  /** The ID of a page anchor this button should scroll to when clicked. Requires the `jumpToSection` function to be provided to the parent `Sidebar` element */
  jumpTo?: string;
}

export type SidebarProps = GenericReactiveLayoutProps & {
  /** Buttons to display on the sidebar */
  buttons: SidebarButtonProps[];
  /** An optional function to facilitate scrolling to a desired section of the page */
  jumpToSection?: (section: string) => void;

  /** Sets `gap` css property */
  gap?: ReactiveProp<CSSProperties["gap"]>;
}


/** The App Sidebar is a page used for navigation and high-level actions within the context of an individual page. This particular sidebar is designed for navigation, and will automatically adapt between desktop and mobile-class devices.  */
export function Sidebar(props: SidebarProps) {
  const theme = useContext(ValenceContext);
  const breakpoint = useBreakpoint();


  // Defaults
  const {
    buttons,
    jumpToSection,
    gap = 5,

    width = "100%",

    style,
    ...rest
  } = props;


  // Styles
  const containerStyle: ReactiveProp<CSSProperties> = {
    default: {
      width: getReactiveProp(width, breakpoint),
      borderRight: `1px solid ${theme.getColor("black")?.base as string
        + theme.getColor("black")?.opacity.weak}`,

      paddingRight: 10,
      position: "sticky",
      top: 0,

      ...getReactiveProp(style, breakpoint)
    },
    mobile: {
      width: getReactiveProp(width, breakpoint),
      borderTop: `1px solid ${theme.getColor("black")?.base as string
        + theme.getColor("black")?.opacity.weak}`,

      padding: "10px 0px 10px 0px",
      backgroundColor: theme.getColor("white")?.base,

      position: "sticky",
      top: 0,
      zIndex: 999,

      ...getReactiveProp(style, breakpoint)
    }
  }


  return (
    <Flex
      direction={{ default: "column", mobile: "row" }}
      justify={{ default: "unset", mobile: "stretch" }}
      gap={gap}
      grow={true}
      style={containerStyle}
      {...rest}
    >
      {buttons.map(b =>
        breakpoint.isMobile ?
          <IconButton
            key={b.id}
            square={false}
            color="black"
            variant={b.highlighted ? "light" : "subtle"}
            onClick={() => jumpToSection && b.jumpTo && jumpToSection(b.jumpTo)}
            grow

            {...b}
          >
            {b.icon}
          </IconButton>
          :
          <ButtonWithIcon
            key={b.id}
            color="black"
            variant={b.highlighted ? "light" : "subtle"}
            onClick={() => jumpToSection && b.jumpTo && jumpToSection(b.jumpTo)}
            width="100%"

            {...b}
          >
            {b.children}
          </ButtonWithIcon>
      )}
    </Flex>
  )
}