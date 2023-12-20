import { CSSProperties, ReactNode, forwardRef } from "react";
import { Image, ImageProps } from "../Image";
import { FillVariant } from "@valence-ui/utils";
import { useValence } from "../../../../ValenceProvider";
import { IconUserCircle } from "@tabler/icons-react";
import { useDefaultIconProps } from "../../../../hooks";
import { getBackgroundColor, getTextColor } from "../../../buttons";
import { Flex } from "../../../layout";

export type AvatarProps = ImageProps & {
  /** Placeholder icon for this avatar */
  placeholderIcon?: ReactNode;
  /** Placeholder color for this avatar */
  placeholderColor?: CSSProperties["color"];
  /** Defines the fill variant for this avatar. Defaults to theme default fill variant */
  fillVariant?: FillVariant;
}


export const Avatar = forwardRef(function Avatar(
  props: AvatarProps,
  ref: any
) {
  const theme = useValence();
  const defaultIconProps = useDefaultIconProps();


  // Defaults
  const {
    placeholderIcon,
    placeholderColor = theme.primaryColor,
    fillVariant = theme.defaultVariant,
    placeholder =
    <Flex align="center" justify="center" height="100%" width="100%">
      <IconUserCircle {...defaultIconProps.get()} />
    </Flex>,

    square = true,
    radius = "xl",

    style,
    ...rest
  } = props;


  // Styles
  const imageStyle: CSSProperties = {
    backgroundColor: getBackgroundColor(placeholderColor, fillVariant, false, theme),
    color: getTextColor(placeholderColor, fillVariant, theme),
    ...style
  }


  return (
    <Image
      style={imageStyle}
      radius={radius}
      square={square}
      placeholder={placeholder}

      ref={ref}
      {...rest}
    />
  )
});