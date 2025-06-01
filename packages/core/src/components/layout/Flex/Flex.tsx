/** @jsxImportSource @emotion/react */
import { CSSProperties, forwardRef } from "react";
import {
  MakeResponsive,
  Material,
  useColors,
  useResponsiveProps,
  useValence,
} from "../../..";
import {
  GenericLayoutProps,
  PolymorphicLayout,
  PolymorphicLayoutProps,
} from "@valence-ui/utils";
import { css } from "@emotion/react";

export type FlexProps = GenericLayoutProps &
  PolymorphicLayoutProps & {
    material?: Material;

    /** Sets `flex-direction` css property */
    direction?: CSSProperties["flexDirection"];
    /** Sets `align-items` css property */
    align?: CSSProperties["alignItems"];
    /** Sets `justify-content` css property */
    justify?: CSSProperties["justifyContent"];

    /** Sets `align-self` css property */
    alignSelf?: CSSProperties["alignSelf"];
    /** Sets `gap` css property */
    gap?: CSSProperties["gap"];
    /** Sets the `flex-wrap` property */
    wrap?: CSSProperties["flexWrap"];

    /** Shorthand for `flex-grow = 1` */
    grow?: boolean;
    /** A shorthand property that sets both `align` and `justify` to `center`. */
    center?: boolean;
  };

/** A basic formattable flexbox component that accepts many common flexbox properties. This component is also reactive, thus it will accept both a single value and an object of values that will be applied at different breakpoints. */
export const Flex = forwardRef(function Flex(
  props: MakeResponsive<FlexProps>,
  ref: any,
) {
  const theme = useValence();
  const colors = useColors();

  // Defaults
  const {
    material,
    center = false,
    direction = "row",
    align = center ? "center" : "flex-start",
    justify = center ? "center" : "flex-start",

    alignSelf,
    gap = theme.sizeClasses.padding[theme.defaults.size],

    grow = false,
    wrap = "nowrap",

    padding,
    margin,
    width,
    height,
    style,

    children,
    ...rest
  } = useResponsiveProps<FlexProps>(props);

  // Styles
  const FlexStyle = css({
    ...material?.getStyles(theme, colors),

    display: "flex",
    flexDirection: direction,
    alignItems: align,
    justifyContent: justify,
    boxSizing: "border-box",

    alignSelf: alignSelf,
    gap: gap,

    flexGrow: grow ? 1 : undefined,
    flexWrap: wrap,

    padding: padding,
    margin: margin,
    width: width,
    height: height,

    ...style,
  });

  return (
    <PolymorphicLayout css={FlexStyle} ref={ref} {...rest}>
      {children}
    </PolymorphicLayout>
  );
});
