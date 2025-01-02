/** @jsxImportSource @emotion/react */
import { CSSProperties, ReactNode, forwardRef } from "react";
import { PrimitiveButton, PrimitiveButtonProps } from "../PrimitiveButton";
import { IconChevronRight } from "@tabler/icons-react";
import { Flex } from "../../layout";
import { Icon, Loader, Text, TextProps } from "../../display";
import { useValence } from "../../../ValenceProvider";
import { SizeClasses } from "@valence-ui/utils";
import { css } from "@emotion/react";
import { MakeResponsive, useResponsiveProps } from "../../../utilities/responsive";
import { useColors } from "../../../utilities/color";

export type MultipartButtonProps =
  Omit<PrimitiveButtonProps, "children">
  & {
    /** Title/main text content of this button  */
    title: string;
    /** Descriptive secondary text of this button */
    subtitle?: string;

    /** Icon to display on the left of the button */
    leftIcon?: ReactNode;
    /** Icon to display on the right of the button */
    rightIcon?: ReactNode;
    /** Styles to pass to the icon containers. */
    iconContainerStyle?: CSSProperties;

    /** Props to pass to the title text component */
    titleProps?: TextProps;
    /** Props to pass to the subtitle text component */
    subtitleProps?: TextProps;

  }

const SIZES: SizeClasses<{ height: number }> = {
  xs: { height: 50 },
  sm: { height: 60 },
  md: { height: 70 },
  lg: { height: 80 },
  xl: { height: 90 },
}


export const MultipartButton = forwardRef(function MultipartButton(
  props: MakeResponsive<MultipartButtonProps>,
  ref: any,
) {
  const theme = useValence();
  const colors = useColors();

  // Defaults
  const {
    size = theme.defaults.size,
    variant = theme.defaults.variant,
    color = theme.primaryColor,
    height = SIZES[size].height,
    width = "100%",
    padding = 0,

    title,
    subtitle,
    leftIcon,
    rightIcon = <IconChevronRight opacity={0.5} />,
    iconContainerStyle,

    loading,

    titleProps,
    subtitleProps,

    style,
    ...rest
  } = useResponsiveProps<MultipartButtonProps>(props);


  // Styles
  const buttonStyle: CSSProperties = {
    justifyContent: "flex-start",
    padding: padding,
    paddingLeft: !leftIcon ? theme.sizeClasses.padding[size] : undefined,
    ...style
  }
  const ContainerStyle = css({
    height: "100%",
    width: "fit-content",
    padding: theme.getSize("padding", size),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: colors.getFgHex(color, variant),

    ...iconContainerStyle
  });


  return (
    <PrimitiveButton
      size={size}
      variant={variant}
      color={color}
      style={buttonStyle}
      height={height}
      width={width}

      ref={ref}
      {...rest}
    >
      {leftIcon && (<div css={ContainerStyle}>
        {loading ?
          <Loader
            size={size}
            color={colors.getFgHex(color, variant)}
          />
          :
          <Icon
            size={theme.getSize("iconSize", size) as number}
            color={colors.getFgHex(color, variant)}
          >
            {leftIcon}
          </Icon>
        }
      </div>)}

      <Flex
        direction="column"
        align="flex-start"
        justify="center"
        grow
        gap={2}
      >
        <Text
          size={size}
          color={colors.getFgHex(color, variant)}
          bold
          maxLines={1}
          {...titleProps}
        >
          {title}
        </Text>
        {subtitle && (<Text
          fontSize={theme.sizeClasses.fontSize[size] as number - 2}
          color={colors.getFgHex(color, variant)}
          maxLines={1}
          {...subtitleProps}
        >
          {subtitle}
        </Text>)}
      </Flex>

      {rightIcon && (<div css={ContainerStyle}>
        <Icon
          size={theme.getSize("iconSize", size) as number}
          color={colors.getFgHex(color, variant)}
        >
          {rightIcon}
        </Icon>
      </div>)}
    </PrimitiveButton>
  )
});