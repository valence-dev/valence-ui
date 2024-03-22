import { CSSProperties, forwardRef, useState } from "react";
import { Flex, FlexProps } from "../Flex";
import { MakeResponsive, useColors, useResponsiveProps } from "../../..";

export type HeaderProps = FlexProps & {
  /** Defines the position of this header. */
  position?: CSSProperties["position"];

  /** Properties to pass to the inner flex component. */
  innerProps?: FlexProps;
}


/** A layout component that helps position `Title` and similar components.
 * 
 * On desktop devices, the `Header` will act as a static container that can be placed anywhere and will scroll with the content. On mobile devices, however, the `Header` will become fixed tot he top of the screen and can shrink as the user scrolls.
 */
export const Header = forwardRef(function Header(
  props: MakeResponsive<HeaderProps>,
  ref: any
) {
  const { getHex } = useColors();


  // Defaults
  const {
    height = 75,
    position = "sticky",
    direction = "row",
    align = "center",
    justify = "space-between",
    
    margin = "30px 0",
    backgroundColor = "white",

    innerProps = { 
      height: height,
      width: "100%",
      direction: direction,
      align: align,
      justify: justify,
    },

    children,
    style,
    ...rest
  } = useResponsiveProps<HeaderProps>(props);


  // Styles
  const HeaderStyle: CSSProperties = {
    backgroundColor: getHex(backgroundColor, "strong"),
    backdropFilter: "blur(10px)",
    position: position,
    top: 0,
    zIndex: 150,
    width: "100%",
    margin: margin,

    ...style
  };


  return (
    <Flex
      style={HeaderStyle}
      height="fit-content"

      ref={ref}
      {...rest}
    >
      <Flex
        {...innerProps}
      >
        {children}
      </Flex>
    </Flex>
  )
});