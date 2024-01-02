import { CSSProperties, forwardRef, useState } from "react";
import { Flex, FlexProps } from "../Flex";
import { useBreakpoint, useValence } from "../../..";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { BreakpointCondition, ReactiveProp, getReactiveProp, meetsBreakpointCondition } from "@valence-ui/utils";

export type HeaderProps = Omit<FlexProps, "height"> & {
  /** **[REACTIVE]** Defines the height of this header. Defaults to `100` for regular devices, and `150` for `mobileTall` devices. */
  height?: ReactiveProp<number>;
  /** The height of this header when it has been compacted. Defaults to `75`. */
  compactHeight?: number;

  /** **[REACTIVE]** Defines the position of this header`. */
  position?: ReactiveProp<CSSProperties["position"]>;
  /** Defines the breakpoints at which the header should compact during scroll. Leave this list empty to By default this is `[ "mobile", "mobileTall" ]` */
  compact?: BreakpointCondition[];
}

function interpolateHeight(max: number, min: number, scrollY: number) {
  return Math.max(max + scrollY, min);
}


/** A layout component that helps position `Title` and similar components.
 * 
 * On desktop devices, the `Header` will act as a static container that can be placed anywhere and will scroll with the content. On mobile devices, however, the `Header` will become fixed tot he top of the screen and can shrink as the user scrolls.
 */
export const Header = forwardRef(function Header(
  props: HeaderProps,
  ref: any
) {
  const theme = useValence();


  // Defaults
  const {
    height: headerHeight = {
      default: 100,
      mobileTall: 150,
    },
    compactHeight = 75,

    position = { 
      default: "relative",
      mobile: "fixed",
    },
    compact = ["mobile", "mobileTall"],

    backgroundColor = "white",

    children,
    style,
    ...rest
  } = props;


  // Hooks & States
  const breakpoint = useBreakpoint();
  const [height, setHeight] = useState(
    getReactiveProp(headerHeight, breakpoint)
  );


  // Scroll listener
  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!meetsBreakpointCondition(breakpoint, compact)) return;
      setHeight(interpolateHeight(
        getReactiveProp(headerHeight, breakpoint),
        compactHeight,
        (prevPos.y + currPos.y) / 2,
      ));
    }
  )


  // Styles
  const HeaderStyle: CSSProperties = {
    backgroundColor: theme.getColorHex(
      getReactiveProp(backgroundColor, breakpoint),
      "strong"
    ),
    backdropFilter: "blur(10px)",
    position: getReactiveProp(position, breakpoint),
    top: 0,
    zIndex: 150,
    width: "100%",

    ...getReactiveProp(style, breakpoint)
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