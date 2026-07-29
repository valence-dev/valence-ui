/** @jsxImportSource @emotion/react */
import { css, CSSObject } from "@emotion/react";
import { ReactNode, forwardRef } from "react";
import { useValence } from "../../../ValenceProvider";
import { TextButtonProps } from "../TextButton";
import { MakeResponsive, useResponsiveProps } from "../../../utilities";
import { PrimitiveButton } from "../PrimitiveButton";
import { Icon } from "../../display/Icon";
import { Loader } from "../../display/Loader";
import { Text } from "../../display/Text";
import { TransitionAnimation } from "../../../hooks";

export type GridButtonProps = TextButtonProps & {
  /** The icon to include with this button. */
  icon: ReactNode;
  /** The position of the icon relative to the text. Defaults to `"top"`. */
  iconPosition?: "top" | "bottom";
};

export const GridButton = forwardRef(function GridButton(
  props: MakeResponsive<GridButtonProps>,
  ref: any,
) {
  const theme = useValence();

  // Defaults
  const {
    icon,
    iconPosition = "top",
    size = theme.defaults.size,

    width = (theme.getSize("height", size) as number) * 2.5,
    height = width,
    square = true,
    loading,

    style,
    textProps,
    children,
    ...rest
  } = useResponsiveProps<GridButtonProps>(props);

  // Styles
  const styles: CSSObject = {
    flexDirection: iconPosition === "top" ? "column" : "column-reverse",
    justifyContent: "space-between",
    padding: theme.getSize("padding", size),

    ...style,
  };
  const IconContainerStyle = css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  });
  const iconAnimations: TransitionAnimation[] = [
    "blur",
    "fade",
    iconPosition === "top" ? "slide-up" : "slide-down",
  ];

  return (
    <PrimitiveButton
      size={size}
      height={height}
      width={width}
      square={square}
      style={styles}
      ref={ref}
      {...rest}
    >
      <div css={IconContainerStyle}>
        {loading ? (
          <Loader size={size} animation={iconAnimations} />
        ) : (
          <Icon
            size={(theme.getSize("iconSize", size) as number) * 1.5}
            animation={iconAnimations}
          >
            {icon}
          </Icon>
        )}
      </div>

      <Text
        fontSize={(theme.sizeClasses.fontSize[size] as number) * 0.8}
        align="center"
        maxLines={1}
        style={{ overflowWrap: "anywhere" }}
        {...textProps}
      >
        {children}
      </Text>
    </PrimitiveButton>
  );
});
