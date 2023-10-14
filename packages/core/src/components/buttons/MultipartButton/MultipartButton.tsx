import { CSSProperties, ReactNode, useContext } from "react";
import styled from "styled-components";
import { PrimitiveButton, PrimitiveButtonProps } from "../PrimitiveButton";
import { IconChevronRight } from "@tabler/icons-react";
import { getTextColor } from "../Helpers";
import { Flex } from "../../layout";
import { Text, TextProps } from "../../display";
import { ValenceContext } from "../../../ValenceProvider";
import { useDefaultIconProps } from "../../../hooks";
import { SizeClasses } from "@valence-ui/utils";

export type MultipartButtonProps = PrimitiveButtonProps & {
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
}

const SIZES: SizeClasses<{ height: number }> = {
  xs: { height: 50 },
  sm: { height: 60 },
  md: { height: 70 },
  lg: { height: 80 },
  xl: { height: 90 },
}


export function MultipartButton(props: MultipartButtonProps) {
  const theme = useContext(ValenceContext);


  // Hooks
  const defaultIconProps = useDefaultIconProps();


  // Defaults
  const {
    size = theme.defaultSize,
    variant = theme.defaultVariant,
    color = theme.primaryColor,

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
    height: SIZES[size].height,
    ...style
  }
  const IconContainer = styled.div({
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
      height="fit-content"
      width="100%"
      {...rest}
    >
      {leftIcon && <IconContainer>{leftIcon}</IconContainer>}

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

      <IconContainer>{rightIcon}</IconContainer>
    </PrimitiveButton>
  )
}