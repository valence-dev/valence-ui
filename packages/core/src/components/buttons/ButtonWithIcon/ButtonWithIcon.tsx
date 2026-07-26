import { ReactNode, forwardRef } from "react";
import { TextButtonProps } from "../TextButton";
import {
  MakeResponsive,
  useResponsiveProps,
} from "../../../utilities/responsive";
import { useColors } from "../../../utilities/color";
import { TransitionAnimation } from "../../../hooks/UseAnimation";
import { useValence } from "../../../ValenceProvider";
import { PrimitiveButton } from "../PrimitiveButton";
import { Icon } from "../../display/Icon";
import { Loader } from "../../display/Loader";
import { Text } from "../../display/Text";
import { CSSObject } from "@emotion/react";

export type ButtonWithIconProps = TextButtonProps & {
  /** The icon to include with this button. */
  icon: ReactNode;
  /** The position of the icon relative to the text. Defaults to `"left"`. */
  iconPosition?: "left" | "right";
};

export const ButtonWithIcon = forwardRef(function ButtonWithIcon(
  props: MakeResponsive<ButtonWithIconProps>,
  ref: any,
) {
  const theme = useValence();
  const colors = useColors();

  // Defaults
  const {
    icon,
    iconPosition = "left",
    size = theme.defaults.size,

    loading,

    style,
    textProps,
    children,
    ...rest
  } = useResponsiveProps<ButtonWithIconProps>(props);

  // Styles
  const padding = theme.getSize("padding", size) as number;
  const styles: CSSObject = {
    flexDirection: iconPosition === "left" ? "row" : "row-reverse",
    justifyContent: "flex-start",
    paddingLeft: iconPosition === "left" ? padding / 1.5 : undefined,
    paddingRight: iconPosition === "right" ? padding / 1.5 : undefined,
    gap: padding / 2,

    ...style,
  };
  const iconAnimations: TransitionAnimation[] = [
    "blur",
    "fade",
    iconPosition === "left" ? "slide-left" : "slide-right",
  ];

  return (
    <PrimitiveButton size={size} style={styles} ref={ref} {...rest}>
      {loading ? (
        <Loader size={size} animation={iconAnimations} />
      ) : (
        <Icon
          size={theme.getSize("iconSize", size) as number}
          animation={iconAnimations}
        >
          {icon}
        </Icon>
      )}

      <Text size={size} {...textProps}>
        {children}
      </Text>
    </PrimitiveButton>
  );
});
