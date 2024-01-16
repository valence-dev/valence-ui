import { Flex, FlexProps, MakeResponsive, Responsive, useResponsiveProp, useResponsiveProps, useValence } from "@valence-ui/core";
import { CSSProperties, forwardRef } from "react";
import { SideSheet, SideSheetProps } from "../../overlays";

export type SidebarDisplay = "inline" | "overlay" | "hidden";

export type SidebarProps =
  FlexProps
  & {
    /** The display option for the sidebar. Defaults to `inline` on tablet 
     * and bigger, and `overlay` on mobile and smaller. 
     */
    display?: SidebarDisplay;

    /** Optional props to pass to the SideSheet component used when `display="inline"`. */
    sideSheetProps?: MakeResponsive<SideSheetProps>;
  }

export const Sidebar = forwardRef(function Sidebar(
  props: MakeResponsive<SidebarProps>,
  ref: any
) {
  const {
    display = useResponsiveProp<SidebarDisplay>({
      default: "inline",
      mobile: "overlay"
    }),
    width = 250,
    height = "100%",
    backgroundColor = "white",
    padding = 10,

    sideSheetProps,

    style,
    children,
    ...rest
  } = useResponsiveProps<SidebarProps>(props);


  // Contexts
  const theme = useValence();


  // Styles
  const borderRadius = theme.sizeClasses.radius[theme.defaults.radius] as number + 5;
  const sidebarStyle: CSSProperties = {
    width: width,
    height: height,
    padding: padding,

    borderRadius: `${borderRadius}px 0px 0px ${borderRadius}px`,
    backgroundColor: `${theme.getColorHex(backgroundColor)}E8`,

    ...style
  }
  const sidebarReplacementStyle: Responsive<CSSProperties> = {
    default: {
      width: borderRadius,
      borderRadius: `${borderRadius}px 0px 0px ${borderRadius}px`,
      backgroundColor: theme.getColorHex("white"),
    },
    mobile: {
      height: borderRadius,
      borderRadius: `0px 0px ${borderRadius}px ${borderRadius}px`,
      backgroundColor: theme.getColorHex("white"),
    }
  }


  return (
    display === "inline" ?
      <Flex
        direction="column"
        style={sidebarStyle}

        ref={ref}
        {...rest}
      >
        {children}
      </Flex>
      :
      <>
        <Flex style={sidebarReplacementStyle} />

        {display === "overlay" && sideSheetProps &&
          <SideSheet
            display="overlay"
            direction="left"
            {...sideSheetProps}
          >
            {children}
          </SideSheet>
        }
      </>
  )
});