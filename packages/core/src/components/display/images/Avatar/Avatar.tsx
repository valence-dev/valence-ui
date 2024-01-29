import { CSSProperties, ReactNode, forwardRef } from "react";
import { Image, ImageProps } from "../Image";
import { ComponentSize, FillVariant } from "@valence-ui/utils";
import { useValence } from "../../../../ValenceProvider";
import { IconUserCircle } from "@tabler/icons-react";
import { Flex } from "../../../layout";
import { Icon, IconProps } from "../../Icon";
import { MakeResponsive, useResponsiveProps } from "../../../../utilities/responsive";
import { useColors } from "../../../../utilities/color";

export type AvatarProps = ImageProps & {
  /** Defines the fill variant for this avatar. Defaults to theme default. */
  variant?: FillVariant;
  /** Defines the size of this avatar. Defaults to theme default. */
  size?: ComponentSize;

  /** Whether to render an outline in the placeholder. */
  outline?: boolean;

  /** An optional secondary icon to display near the avatar. */
  secondaryIcon?: ReactNode;
  /** Props to apply to the secondary icon, if it exists. */
  secondaryIconProps?: IconProps;
}


export const Avatar = forwardRef(function Avatar(
  props: MakeResponsive<AvatarProps>,
  ref: any
) {
  const theme = useValence();
  const colors = useColors();


  // Defaults
  const {
    color = theme.primaryColor,
    variant = theme.defaults.variant,
    placeholder = <IconUserCircle />,

    square = true,
    size = theme.defaults.size,

    outline,
    secondaryIcon,
    secondaryIconProps,

    width = theme.sizeClasses.height[size],
    height = theme.sizeClasses.height[size],

    style,
    ...rest
  } = useResponsiveProps<AvatarProps>(props);


  // Styles
  const imageStyle: CSSProperties = {
    backgroundColor: colors.getBgHex(color, variant, false),
    color: colors.getFgHex(color, variant),
    borderRadius: "50%",

    border: outline ? `1px solid ${colors.getFgHex(color, variant)}` : undefined,
    ...style
  }
  const secondaryIconContainerStyle: CSSProperties = {
    backgroundColor: colors.getHex(color),

    borderRadius: "50%",
    aspectRatio: 1,

    position: "absolute",
    right: 0,
    bottom: 0,
    padding: theme.sizeClasses.padding[size] as number / 8,
  }


  return (
    <span
      style={{ position: "relative" }}
    >
      <Image
        placeholder={
          <Flex
            align="center"
            justify="center"
            height="100%"
            width="100%"
          >
            <Icon
              size={theme.sizeClasses.iconSize[size] as any}
            >
              {placeholder}
            </Icon>
          </Flex>
        }

        style={imageStyle}
        square={square}
        color={color}
        width={width}
        height={height}

        ref={ref}
        {...rest}
      />

      {/* Secondary Icon */}
      {secondaryIcon && (
        <Flex
          align="center"
          justify="center"

          style={secondaryIconContainerStyle}
        >
          <Icon
            size={theme.sizeClasses.iconSize[size] as any * 0.65}
            color={color === "white" ? "black" : "white"}
            {...secondaryIconProps}
          >
            {secondaryIcon}
          </Icon>
        </Flex>
      )}
    </span>
  )
});