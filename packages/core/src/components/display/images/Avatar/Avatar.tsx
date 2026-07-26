import { CSSProperties, ReactNode, forwardRef } from "react";
import { Image, ImageProps } from "../Image";
import { ComponentSize } from "@valence-ui/utils";
import { useValence } from "../../../../ValenceProvider";
import { IconUserCircle } from "@tabler/icons-react";
import { Flex } from "../../../layout/Flex";
import { Icon, IconProps } from "../../Icon";
import {
  MakeResponsive,
  useResponsiveProps,
} from "../../../../utilities/responsive";
import { useColors } from "../../../../utilities/color";
import { CSSObject } from "@emotion/react";

export type AvatarProps = ImageProps & {
  /** Defines the size of this avatar. Defaults to theme default. */
  size?: ComponentSize;

  /** An optional secondary icon to display near the avatar. */
  secondaryIcon?: ReactNode;
  /** Props to apply to the secondary icon, if it exists. */
  secondaryIconProps?: IconProps;

  /** Optional styles to pass to the containing span component. */
  spanStyle?: CSSProperties;
};

export const Avatar = forwardRef(function Avatar(
  props: MakeResponsive<AvatarProps>,
  ref: any,
) {
  const theme = useValence();
  const colors = useColors();

  // Defaults
  const {
    material = theme.materials.input,
    placeholder = <IconUserCircle />,

    square = true,
    size = theme.defaults.size,

    secondaryIcon,
    secondaryIconProps,

    spanStyle,

    width = theme.sizeClasses.height[size],
    height = theme.sizeClasses.height[size],

    style,
    ...rest
  } = useResponsiveProps<AvatarProps>(props);

  // Styles
  const imageStyle: CSSObject = {
    borderRadius: "50%",
    ...material.getStyles(theme, colors),
    ...style,
  };
  const secondaryIconContainerStyle: CSSObject = {
    borderRadius: "50%",
    aspectRatio: 1,

    position: "absolute",
    right: 0,
    bottom: 0,
    padding: (theme.sizeClasses.padding[size] as number) / 8,
  };

  return (
    <span
      style={{
        position: "relative",
        ...spanStyle,
      }}
    >
      <Image
        placeholder={
          <Flex align="center" justify="center" height="100%" width="100%">
            <Icon size={theme.sizeClasses.iconSize[size] as any}>
              {placeholder}
            </Icon>
          </Flex>
        }
        style={imageStyle}
        square={square}
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
          material={material}
        >
          <Icon
            size={(theme.sizeClasses.iconSize[size] as any) * 0.65}
            {...secondaryIconProps}
          >
            {secondaryIcon}
          </Icon>
        </Flex>
      )}
    </span>
  );
});
