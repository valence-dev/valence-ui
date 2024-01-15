import { CSSProperties, forwardRef, useContext } from "react";
import { ButtonWithIcon, ButtonWithIconProps, Flex, IconButton, MakeResponsive, Responsive, ValenceContext, useBreakpoint, useResponsiveProps } from "@valence-ui/core";
import { GenericLayoutProps, PolymorphicLayoutProps } from "@valence-ui/utils";

export type JumpSidebarButtonProps = ButtonWithIconProps & {
  /** Specifies if this button is highlighted */
  highlighted?: boolean;
  /** The ID of a page anchor this button should scroll to when clicked. Requires the `jumpToSection` function to be provided to the parent `Sidebar` element */
  jumpTo?: string;
}

export type JumpSidebarProps =
  GenericLayoutProps
  & PolymorphicLayoutProps
  & {
    /** Buttons to display on the sidebar */
    buttons: JumpSidebarButtonProps[];
    /** An optional function to facilitate scrolling to a desired section of the page */
    jumpToSection?: (section: string) => void;

    /** Sets `gap` css property */
    gap?: CSSProperties["gap"];
  }


/** The App Sidebar is a page used for navigation and high-level actions within the context of an individual page. This particular sidebar is designed for navigation, and will automatically adapt between desktop and mobile-class devices.  */
export const JumpSidebar = forwardRef(function JumpSidebar(
  props: MakeResponsive<JumpSidebarProps>,
  ref: any
) {
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
  } = useResponsiveProps<JumpSidebarProps>(props);


  // Styles
  const containerStyle: Responsive<CSSProperties> = {
    default: {
      width: width,
      borderRight: `1px solid ${theme.getColorHex("black") as string
        + theme.getColorHex("black", "weak")}`,

      paddingRight: 10,
      position: "sticky",
      top: 0,

      overflowX: "hidden",
      overflowY: "auto",

      ...style
    },
    mobile: {
      width: width,
      borderTop: `1px solid ${theme.getColorHex("black") as string
        + theme.getColorHex("black", "weak")}`,

      padding: "10px 0px 10px 0px",
      backgroundColor: theme.getColorHex("white"),

      position: "sticky",
      top: 0,
      zIndex: 999,

      ...style
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

            icon={b.icon}
          >
            {b.children}
          </ButtonWithIcon>
      )}
    </Flex>
  )
});