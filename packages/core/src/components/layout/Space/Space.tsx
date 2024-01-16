/** @jsxImportSource @emotion/react */
import { CSSProperties, forwardRef } from "react"
import { GenericProps } from "@valence-ui/utils";
import { css } from "@emotion/react";
import { MakeResponsive, useResponsiveProps } from "../../../utilities/responsive";

export type SpaceProps = GenericProps & {
  /** Sets the `width` css property. */
  width?: CSSProperties["width"];
  /** Sets the `height` css property. */
  height?: CSSProperties["height"];
  /** Shorthand for `flex-grow = 1` */
  grow?: boolean;

  children?: never;
}

/** A basic, unstyled layout assistant that creates blank space between any two objects. */
export const Space = forwardRef(function Space(
  props: MakeResponsive<SpaceProps>,
  ref: any
) {

  // Defaults
  const {
    height,
    width,
    grow,
    style,
    ...rest
  } = useResponsiveProps<SpaceProps>(props);


  // Styles
  const SpaceStyle = css({
    width: width,
    height: height,
    flexGrow: grow ? 1 : undefined,
    ...style,
  });


  return (
    <span
      css={SpaceStyle}

      ref={ref}
      {...rest}
    />
  )
});