/** @jsxImportSource @emotion/react */
import { CSSProperties, forwardRef, useContext } from "react";
import { ValenceContext, useBreakpoint } from "../../..";
import { GenericReactiveLayoutProps, PolymorphicLayout, PolymorphicLayoutProps, ReactiveProp, getReactiveProp } from "@valence-ui/utils";
import { css } from "@emotion/react";

export type FlexProps =
  GenericReactiveLayoutProps
  & PolymorphicLayoutProps
  & {
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
    /** **[REACTIVE]** Sets the `flex-wrap` property */
    wrap?: ReactiveProp<CSSProperties["flexWrap"]>;
  }


/** A basic formattable flexbox component that accepts many common flexbox properties. This component is also reactive, thus it will accept both a single value and an object of values that will be applied at different breakpoints. */
export const Flex = forwardRef(function Flex(
  props: FlexProps,
  ref: any
) {
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
    wrap = { default: "nowrap" },

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
  const FlexStyle = css({
    display: "flex",
    flexDirection: getReactiveProp(direction, breakpoint),
    alignItems: getReactiveProp(align, breakpoint),
    justifyContent: getReactiveProp(justify, breakpoint),
    boxSizing: "border-box",

    alignSelf: getReactiveProp(alignSelf, breakpoint),
    gap: getReactiveProp(gap, breakpoint),

    flexGrow: getReactiveProp(grow, breakpoint) ? 1 : undefined,
    flexWrap: getReactiveProp(wrap, breakpoint),

    backgroundColor: theme.getColorHex(getReactiveProp(backgroundColor, breakpoint)),
    color: theme.getColorHex(getReactiveProp(color, breakpoint)),
    padding: getReactiveProp(padding, breakpoint),
    margin: getReactiveProp(margin, breakpoint),
    width: getReactiveProp(width, breakpoint),
    height: getReactiveProp(height, breakpoint),

    ...getReactiveProp(style, breakpoint)
  });


  return (
    <PolymorphicLayout
      css={FlexStyle}

      ref={ref}
      {...rest}
    >
      {children}
    </PolymorphicLayout>
  )
});