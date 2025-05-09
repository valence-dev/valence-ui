/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactNode, forwardRef } from "react";
import { useValence } from "../../../ValenceProvider";
import { TextButtonProps } from "../TextButton";
import {
  MakeResponsive,
  useColors,
  useResponsiveProps,
} from "../../../utilities";
import { PrimitiveButton } from "../PrimitiveButton";
import { Icon, Text } from "../../display";

export type GridButtonProps = TextButtonProps & {
  /** The icon to include with this button. */
  icon: ReactNode;
  /** The position of the icon relative to the text. Defaults to `"top"`. */
  iconPosition?: "top" | "bottom";
};

export const GridButton = forwardRef(function GridButton(
  props: MakeResponsive<GridButtonProps>,
  ref: any
) {
  const theme = useValence();
  const { getFgHex } = useColors();

  // Defaults
  const {
    icon,
    iconPosition = "top",
    size = theme.defaults.size,
    variant = theme.defaults.variant,
    color = theme.primaryColor,

    width = (theme.getSize("height", size) as number) * 2.5,
    height = width,
    square = true,

    style,
    textProps,
    children,
    ...rest
  } = useResponsiveProps<GridButtonProps>(props);

  // Styles
  const styles: React.CSSProperties = {
    flexDirection: iconPosition === "top" ? "column" : "column-reverse",
    justifyContent: "flex-start",

    padding: theme.getSize("padding", size),
    gap: (theme.getSize("padding", size) as number) / 2,

    ...style,
  };
  const IconContainerStyle = css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  });

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
        <Icon size={(theme.getSize("iconSize", size) as number) * 1.5}>
          {icon}
        </Icon>
      </div>

      <Text
        fontSize={(theme.sizeClasses.fontSize[size] as number) * 0.8}
        color={getFgHex(color, variant)}
        align="center"
        maxLines={1}
        {...textProps}
      >
        {children}
      </Text>
    </PrimitiveButton>
  );
});
