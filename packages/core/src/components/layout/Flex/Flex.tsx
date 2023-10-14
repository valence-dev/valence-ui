import { CSSProperties, useContext } from "react";
import { ValenceContext, useBreakpoint } from "../../..";
import styled from "styled-components";
import { GenericReactiveLayoutProps, PolymorphicLayout, ReactiveProp, getReactiveProp } from "@valence-ui/utils";

export type FlexProps = GenericReactiveLayoutProps & {
  /** **[REACTIVE]** Sets `flex-direction` css property */
  direction?: ReactiveProp<CSSProperties["flexDirection"]>;
  /** **[REACTIVE]** Sets `align-items` css property */
  align?: ReactiveProp<CSSProperties["alignItems"]>;
  /** **[REACTIVE]** Sets `justify-content` css property */
  justify?: ReactiveProp<CSSProperties["justifyContent"]>;

  /** **[REACTIVE]** Sets `align-self` css property */
  alignSelf?: ReactiveProp<CSSProperties["alignSelf"]>;
  /** **[REACTIVE]** Sets `gap` css property */
  gap?: ReactiveProp<CSSProperties["gap"]>;

  /** **[REACTIVE]** Shorthand for `flex-grow = 1` */
  grow?: ReactiveProp<boolean>;
  /** **[REACTIVE]** Shorthand for `flex-wrap = "nowrap"` */
  noWrap?: ReactiveProp<boolean>;
}


/** A basic formattable flexbox component that accepts many common flexbox properties. This component is also reactive, thus it will accept both a single value and an object of values that will be applied at different breakpoints. */
export function Flex(props: FlexProps) {
  const theme = useContext(ValenceContext);
  const breakpoint = useBreakpoint();


  // Defaults
  const {
    direction = { default: "row" },
    align = { default: "flex-start" },
    justify = { default: "flex-start" },

    alignSelf = { default: "stretch" },
    gap = theme.sizeClasses.padding[theme.defaultSize],

    grow = { default: false },
    noWrap = { default: false },

    backgroundColor,
    color,
    padding,
    margin,
    width,
    height,
    style,

    children,
    ...rest
  } = props;


  // Styles
  const StyledFlex = styled.div({
    display: "flex",
    flexDirection: getReactiveProp(direction, breakpoint),
    alignItems: getReactiveProp(align, breakpoint),
    justifyContent: getReactiveProp(justify, breakpoint),

    alignSelf: getReactiveProp(alignSelf, breakpoint),
    gap: getReactiveProp(gap, breakpoint),

    flexGrow: getReactiveProp(grow, breakpoint) ? 1 : undefined,
    flexWrap: getReactiveProp(noWrap, breakpoint) ? "nowrap" : undefined,

    backgroundColor: theme.getColor(getReactiveProp(backgroundColor, breakpoint))?.base,
    color: theme.getColor(getReactiveProp(color, breakpoint))?.base,
    padding: getReactiveProp(padding, breakpoint),
    margin: getReactiveProp(margin, breakpoint),
    width: getReactiveProp(width, breakpoint),
    height: getReactiveProp(height, breakpoint),

    ...getReactiveProp(style, breakpoint)
  });


  return (
    <StyledFlex
      as={PolymorphicLayout}
      {...rest}
    >
      {children}
    </StyledFlex>
  )
}