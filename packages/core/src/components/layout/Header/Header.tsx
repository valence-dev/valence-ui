import { CSSProperties, forwardRef, useState } from "react";
import { Flex, FlexProps } from "../Flex";
import { MakeResponsive, useColors, useResponsiveProps } from "../../..";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

export type HeaderProps = Omit<FlexProps, "height"> & {
  /** Defines the height of this header. Defaults to `100` for regular devices, and `150` for `mobile` devices. */
  height?: number;
  /** The height of this header when it has been compacted. Defaults to `75`. */
  compactHeight?: number;

  /** Defines the position of this header. */
  position?: CSSProperties["position"];
  /** Defines the breakpoints in which the header is allowed to compact. By default this
   * is `true` for mobile devices, and `false` for all other devices.
   */
  compact?: boolean;
}

function interpolateHeight(max: number, min: number, scrollY: number) {
  return Math.max(max + scrollY, min);
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
    height: headerHeight = useResponsiveProps({ default: 100, mobile: 150 }),
    compactHeight = 75,

    position = useResponsiveProps({ default: "relative", mobile: "sticky" }),
    compact = useResponsiveProps({ default: false, mobile: true }),

    backgroundColor = "white",

    children,
    style,
    ...rest
  } = useResponsiveProps<HeaderProps>(props);


  // Hooks & States
  const [height, setHeight] = useState(headerHeight);


  // Scroll listener
  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!compact) return;
      setHeight(interpolateHeight(
        headerHeight,
        compactHeight,
        (prevPos.y + currPos.y) / 2,
      ));
    }
  )


  // Styles
  const HeaderStyle: CSSProperties = {
    backgroundColor: getHex(
      backgroundColor,
      "strong"
    ),
    backdropFilter: "blur(10px)",
    position: position,
    top: 0,
    zIndex: 150,
    width: "100%",

    ...style
  };


  return (
    <Flex
      style={HeaderStyle}
      direction="column"
      justify="center"
      height={height}

      ref={ref}
      {...rest}
    >
      {children}
    </Flex>
  )
});