/** @jsxImportSource @emotion/react */
import { CSSProperties } from "react"
import { GenericProps } from "@valence-ui/utils";
import { css } from "@emotion/react";

export type SpaceProps = GenericProps & {
  /** Sets the `width` css property. */
  width?: CSSProperties["width"];
  /** Sets the `height` css property. */
  height?: CSSProperties["height"];
  /** Shorthand for `flex-grow = 1` */
  grow?: boolean;
}

/** A basic, unstyled layout assistant that creates blank space between any two objects. */
export function Space(props: SpaceProps) {

  // Defaults
  const {
    height,
    width,
    grow,
    style,
    ...rest
  } = props;


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
      {...rest}
    />
  )
}