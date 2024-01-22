/** @jsxImportSource @emotion/react */
import { CSSProperties, ReactNode, forwardRef } from "react";
import { ComponentSize, GenericProps } from "@valence-ui/utils";
import { useValence } from "../../../../ValenceProvider";
import { css } from "@emotion/react";
import { MakeResponsive, useResponsiveProps } from "../../../../utilities/responsive";
import { Flex } from "../../../layout";
import { Icon } from "../../Icon";
import { IconPhoto } from "@tabler/icons-react";
import { useColors } from "../../../../utilities";

export type GenericImageProps = {
  /** Source URI of this image */
  src: string | ArrayBuffer | undefined;
  /** Alt text for this image */
  alt: string;

  /** Sets `object-fit` css property */
  fit?: CSSProperties["objectFit"];
  /** Sets `object-position` css property */
  position?: CSSProperties["objectPosition"];
}

export type ImageProps = GenericImageProps & Omit<GenericProps, "children"> & {
  /** Placeholder content for this image */
  placeholder?: ReactNode;

  /** Defines the border radius size class of this image. Defaults to the theme default radius size class. */
  radius?: ComponentSize;
  /** Sets `width` css property */
  width?: CSSProperties["width"];
  /** Sets `height` css property */
  height?: CSSProperties["height"];
  /** Shorthand for `aspect-ratio = "1/1"` */
  square?: boolean;

  /** Sets `color` css property */
  color?: CSSProperties["color"];

  /** Specifies if a shadow will be shown */
  shadow?: boolean;
}


export const Image = forwardRef(function Image(
  props: MakeResponsive<ImageProps>,
  ref: any
) {
  const theme = useValence();
  const { getHex } = useColors();


  // Defaults
  const {
    src,
    alt,
    color = "black",
    placeholder = (
      <Flex
        align="center"
        justify="center"
        height="100%"
        width="100%"
      >
        <Icon color={color}><IconPhoto /></Icon>
      </Flex>
    ),

    radius = theme.defaults.radius,
    fit = "cover",
    position = "center",
    square = false,
    height = "fit-content",
    width = square ? height : "auto",
    shadow = false,

    style,
    ...rest
  } = useResponsiveProps<ImageProps>(props);


  // Styles
  const ContainerStyle = css({
    height: height,
    width: width,
    minWidth: width,
    borderRadius: theme.sizeClasses.radius[radius],
    aspectRatio: square ? "1/1" : undefined,
    overflow: "hidden",

    boxShadow: shadow ? theme.defaults.shadow : "none",
    backgroundColor: getHex(color, "weak"),

    ...style
  });
  const ImageStyle = css({
    width: "100%",
    height: "100%",

    objectFit: fit,
    objectPosition: position
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