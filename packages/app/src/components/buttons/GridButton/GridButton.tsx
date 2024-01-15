/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Icon, MakeResponsive, PrimitiveButton, Text, TextButtonProps, ValenceContext, getTextColor, useResponsiveProps } from "@valence-ui/core";
import { ReactNode, forwardRef, useContext } from "react";

export type GridButtonProps = TextButtonProps & {
  /** The icon to include with this button */
  icon: ReactNode;
  /** The position of the icon relative to the text. Defaults to `"top"` */
  iconPosition?: "top" | "bottom";
}

export const GridButton = forwardRef(function GridButton(
  props: MakeResponsive<GridButtonProps>,
  ref: any
) {
  const theme = useContext(ValenceContext);


  // Defaults
  const {
    icon,
    iconPosition = "top",
    size = theme.defaults.size,
    variant = theme.defaults.variant,
    color = theme.primaryColor,

    width = theme.sizeClasses.height[size] as number * 2.5,
    height = width,
    square = true,

    style,
    textProps,
    ...rest
  } = useResponsiveProps<GridButtonProps>(props);


  // Styles
  const styles: React.CSSProperties = {
    flexDirection: iconPosition === "top" ? "column" : "column-reverse",
    justifyContent: "flex-start",

    padding: theme.sizeClasses.padding[size],
    gap: theme.sizeClasses.padding[size] as number / 2,

    ...style
  }
  const IconContainerStyle = css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  })


  return (
    <PrimitiveButton
      size={size}
      variant={variant}
      color={color}
      height={height}
      width={width}
      square={square}
      style={styles}

      ref={ref}
      {...rest}
    >
      <div css={IconContainerStyle}>
        <Icon
          size={theme.getSize("iconSize", size) as number * 1.5}
        >
          {icon}
        </Icon>
      </div>

      <Text
        fontSize={theme.sizeClasses.fontSize[size] as number * 0.8}
        color={getTextColor(color, variant, theme)}
        align="center"
        {...textProps}
      >
        {props.children}
      </Text>
    </PrimitiveButton>
  )
});