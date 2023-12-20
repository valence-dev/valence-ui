/** @jsxImportSource @emotion/react */
import { CSSProperties, ReactNode, forwardRef } from "react";
import { PrimitiveButton, PrimitiveButtonProps } from "../PrimitiveButton";
import { IconChevronRight } from "@tabler/icons-react";
import { getTextColor } from "../Helpers";
import { Flex } from "../../layout";
import { Text, TextProps } from "../../display";
import { useValence } from "../../../ValenceProvider";
import { useDefaultIconProps } from "../../../hooks";
import { SizeClasses } from "@valence-ui/utils";
import { css } from "@emotion/react";

export type MultipartButtonProps =
  PrimitiveButtonProps
  & {
    /** Title/main text content of this button  */
    title: string;
    /** Descriptive secondary text of this button */
    subtitle?: string;

    /** Icon to display on the left of the button */
    leftIcon?: ReactNode;
    /** Icon to display on the right of the button */
    rightIcon?: ReactNode;

    /** Props to pass to the title text component */
    titleProps?: TextProps;
    /** Props to pass to the subtitle text component */
    subtitleProps?: TextProps;

    /** This button does not accept children */
    children?: never;
  }

const SIZES: SizeClasses<{ height: number }> = {
  xs: { height: 50 },
  sm: { height: 60 },
  md: { height: 70 },
  lg: { height: 80 },
  xl: { height: 90 },
}


export const MultipartButton = forwardRef(function MultipartButton(
  props: MultipartButtonProps,
  ref: any,
) {
  const theme = useValence();


  // Hooks
  const defaultIconProps = useDefaultIconProps();


  // Defaults
  const {
    size = theme.defaultSize,
    variant = theme.defaultVariant,
    color = theme.primaryColor,
    height = SIZES[size].height,
    width = "100%",

    title,
    subtitle,
    leftIcon,
    rightIcon = <IconChevronRight {...defaultIconProps.get()} opacity={0.5} />,

    titleProps,
    subtitleProps,

    style,
    ...rest
  } = props;


  // Styles
  const buttonStyle: CSSProperties = {
    justifyContent: "flex-start",
    padding: 0,
    paddingLeft: !leftIcon ? theme.sizeClasses.padding[size] : undefined,
    ...style
  }
  const ContainerStyle = css({
    height: "100%",
    aspectRatio: "1 / 1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: getTextColor(color, variant, theme),
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
      {leftIcon && <div css={ContainerStyle}>{leftIcon}</div>}

      <Flex
        direction="column"
        align="flex-start"
        justify="center"
        grow
        gap={2}
      >
        <Text
          size={size}
          color={getTextColor(color, variant, theme)}
          bold
          {...titleProps}
        >
          {title}
        </Text>
        <Text
          fontSize={theme.sizeClasses.fontSize[size] as number - 2}
          color={getTextColor(color, variant, theme)}
          {...subtitleProps}
        >
          {subtitle}
        </Text>
      </Flex>

      <div css={ContainerStyle}>{rightIcon}</div>
    </PrimitiveButton>
  )
});