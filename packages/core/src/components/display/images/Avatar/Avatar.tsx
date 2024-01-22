import { CSSProperties, ReactNode, forwardRef } from "react";
import { Image, ImageProps } from "../Image";
import { FillVariant } from "@valence-ui/utils";
import { useValence } from "../../../../ValenceProvider";
import { IconUserCircle } from "@tabler/icons-react";
import { Flex } from "../../../layout";
import { Icon } from "../../Icon";
import { MakeResponsive, useResponsiveProps } from "../../../../utilities/responsive";
import { useColors } from "../../../../utilities/color";

export type AvatarProps = ImageProps & {
  /** Placeholder color for this avatar */
  placeholderColor?: CSSProperties["color"];
  /** Defines the fill variant for this avatar. Defaults to theme default fill variant */
  variant?: FillVariant;
}


export const Avatar = forwardRef(function Avatar(
  props: MakeResponsive<AvatarProps>,
  ref: any
) {
  const theme = useValence();
  const colors = useColors();


  // Defaults
  const {
    placeholderColor = theme.primaryColor,
    variant = theme.defaults.variant,
    placeholder = <IconUserCircle />,

    square = true,
    radius = "xl",

    style,
    ...rest
  } = useResponsiveProps<AvatarProps>(props);


  // Styles
  const imageStyle: CSSProperties = {
    backgroundColor: colors.getBgHex(placeholderColor, variant, false),
    color: colors.getFgHex(placeholderColor, variant),
    ...style
  }


  return (
    <Image
      style={imageStyle}
      radius={radius}
      square={square}
      placeholder={
        <Flex
          align="center"
          justify="center"
          height="100%"
          width="100%"
        >
          <Icon>{placeholder}</Icon>
        </Flex>
      }

      ref={ref}
      {...rest}
    />
  )
});