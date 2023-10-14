import { CSSProperties, ReactNode, useContext } from "react";
import { ComponentSize, GenericReactiveProps, ReactiveProp, getReactiveProp } from "@valence-ui/utils";
import { ValenceContext } from "../../../../ValenceProvider";
import styled from "styled-components";
import { useBreakpoint } from "../../../../hooks";

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
}


export function Image(props: ImageProps) {
  const theme = useContext(ValenceContext);
  const breakpoint = useBreakpoint();


  // Defaults
  const {
    src,
    alt,
    placeholder,

    radius = theme.defaultRadius,
    fit = "cover",
    position = "center",
    square = false,
    height = "fit-content",
    width = square ? height : "auto",
    shadow = false,

    style,
    id,
  } = props;


  // Styles
  const StyledContainer = styled.div({
    height: getReactiveProp(height, breakpoint),
    width: getReactiveProp(width, breakpoint),
    minWidth: getReactiveProp(width, breakpoint),
    borderRadius: theme.sizeClasses.radius[getReactiveProp(radius, breakpoint)],
    aspectRatio: square ? "1/1" : undefined,
    overflow: "hidden",

    boxShadow: getReactiveProp(shadow, breakpoint) ? theme.defaultShadow : "none",

    ...style
  });
  const StyledImage = styled.img({
    width: "100%",
    height: "100%",

    objectFit: getReactiveProp(fit, breakpoint),
    objectPosition: getReactiveProp(position, breakpoint)
  });


  return (
    <StyledContainer>
      {props.src ?
        <StyledImage
          id={id}
          src={src as string}
          alt={alt}
        />
        :
        placeholder
      }
    </StyledContainer>
  )
}