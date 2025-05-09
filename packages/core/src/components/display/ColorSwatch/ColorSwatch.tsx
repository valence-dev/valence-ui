/** @jsxImportSource @emotion/react */
import { CSSProperties, forwardRef } from "react";
import {
  MakeResponsive,
  SwatchOpacity,
  useColors,
  useResponsiveProps,
} from "../../../utilities";
import { ComponentSize } from "@valence-ui/utils";
import { useValence } from "../../../ValenceProvider";
import { css } from "@emotion/react";

export type ColorSwatchProps = {
  /** The color to display. Will default to the theme default color. */
  color: CSSProperties["color"];
  /** The opacity of the color to display. Will default to completely filled. */
  opacity?: SwatchOpacity;

  /** The size of the swatch. Defaults to theme default. */
  size?: ComponentSize;
  /** The radius of the swatch. Defaults to `"xl"` */
  radius?: ComponentSize;

  /** Whether to display the swatch with an outline. Defaults to `true`. */
  withOutline?: boolean;
};

export const ColorSwatch = forwardRef(function ColorSwatch(
  props: MakeResponsive<ColorSwatchProps>,
  ref: any
) {
  const theme = useValence();
  const { getHex } = useColors();

  // Defaults
  const {
    color = theme.primaryColor,
    opacity,
    size = theme.defaults.size,
    radius = "xl",
    withOutline = true,
    ...rest
  } = useResponsiveProps<ColorSwatchProps>(props);

  // Styles
  const SwatchStyle = css({
    width: theme.sizeClasses.height[size],
    height: theme.sizeClasses.height[size],
    borderRadius: theme.sizeClasses.radius[radius],

    backgroundColor: getHex(color, opacity),
    border: withOutline ? `1px solid ${getHex("black", "medium")}` : "none",
  });

  return <div ref={ref} css={SwatchStyle} {...rest} />;
});
