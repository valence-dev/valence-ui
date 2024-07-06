import { CSSProperties, forwardRef } from "react";
import { FlexCenter, FlexCenterProps } from "../Flex";
import { MakeResponsive, useColors, useResponsiveProps, useValence } from "../../..";

export type HeaderProps = FlexCenterProps & {
  /** Defines the position of this header. */
  position?: CSSProperties["position"];
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
  const theme = useValence();


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
      direction: direction,
      align: align,
      justify: justify,
      margin: "0 10px",
    },
    innerWidth = "min(100%, 700px)",

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
    paddingTop: "env(safe-area-inset-top)",

    borderRadius: theme.getSize("radius") as number + 10,

    ...style
  };


  return (
    <FlexCenter
      height="fit-content"
      innerWidth={innerWidth}
      style={HeaderStyle}
      ref={ref}
      {...rest}

      innerProps={innerProps}
    >
      {children}
    </FlexCenter>
  )
});