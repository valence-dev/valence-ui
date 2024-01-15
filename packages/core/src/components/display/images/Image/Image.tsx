/** @jsxImportSource @emotion/react */
import { CSSProperties, ReactNode, forwardRef } from "react";
import { ComponentSize, GenericReactiveProps, ReactiveProp, getReactiveProp } from "@valence-ui/utils";
import { useValence } from "../../../../ValenceProvider";
import { useBreakpoint } from "../../../../hooks";
import { css } from "@emotion/react";

export type GenericImageProps = {
  /** Source URI of this image */
  src: string | ArrayBuffer | undefined;
  /** Alt text for this image */
  alt: string;

  /** **[REACTIVE]** Sets `object-fit` css property */
  fit?: ReactiveProp<CSSProperties["objectFit"]>;
  /** **[REACTIVE]** Sets `object-position` css property */
  position?: ReactiveProp<CSSProperties["objectPosition"]>;
}

export type ImageProps = GenericImageProps & GenericReactiveProps & {
  /** Placeholder content for this image */
  placeholder?: ReactNode;

  /** **[REACTIVE]** Defines the border radius size class of this image. Defaults to the theme default radius size class. */
  radius?: ReactiveProp<ComponentSize>;
  /** **[REACTIVE]** Sets `width` css property */
  width?: ReactiveProp<CSSProperties["width"]>;
  /** **[REACTIVE]** Sets `height` css property */
  height?: ReactiveProp<CSSProperties["height"]>;
  /** **[REACTIVE]** Shorthand for `aspect-ratio = "1/1"` */
  square?: ReactiveProp<boolean>;

  /** **[REACTIVE]** Specifies if a shadow will be shown */
  shadow?: ReactiveProp<boolean>;

  children?: never;
}


export const Image = forwardRef(function Image(
  props: ImageProps,
  ref: any
) {
  const theme = useValence();
  const breakpoint = useBreakpoint();


  // Defaults
  const {
    src,
    alt,
    placeholder,

    radius = theme.defaults.radius,
    fit = "cover",
    position = "center",
    square = false,
    height = "fit-content",
    width = square ? height : "auto",
    shadow = false,

    style,
    ...rest
  } = props;


  // Styles
  const ContainerStyle = css({
    height: getReactiveProp(height, breakpoint),
    width: getReactiveProp(width, breakpoint),
    minWidth: getReactiveProp(width, breakpoint),
    borderRadius: theme.sizeClasses.radius[getReactiveProp(radius, breakpoint)],
    aspectRatio: square ? "1/1" : undefined,
    overflow: "hidden",

    boxShadow: getReactiveProp(shadow, breakpoint) ? theme.defaults.shadow : "none",

    ...getReactiveProp(style, breakpoint)
  });
  const ImageStyle = css({
    width: "100%",
    height: "100%",

    objectFit: getReactiveProp(fit, breakpoint),
    objectPosition: getReactiveProp(position, breakpoint)
  });


  return (
    <div css={ContainerStyle}>
      {props.src ?
        <img
          css={ImageStyle}
          src={src as string}
          alt={alt}

          ref={ref}
          {...rest}
        />
        :
        placeholder
      }
    </div>
  )
});