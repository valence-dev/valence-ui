/** @jsxImportSource @emotion/react */
import { ReactNode, forwardRef, useMemo } from "react";
import { Flex } from "../../layout";
import { Text } from "../Text";
import {
  CLICKABLE_ELEMENTS,
  ComponentSize,
  GenericClickableEventProps,
  GenericClickableProps,
  GenericLayoutProps,
  PolymorphicButton,
  PolymorphicButtonProps,
} from "@valence-ui/utils";
import { useValence } from "../../../ValenceProvider";
import { css } from "@emotion/react";
import { Icon } from "../Icon";
import {
  MakeResponsive,
  useResponsiveProps,
} from "../../../utilities/responsive";
import { useColors } from "../../../utilities/color";
import { AnimationProps, useAnimation } from "../../../hooks";
import { Material } from "../../../utilities";
import {
  IconAlertTriangle,
  IconCircleCheck,
  IconInfoCircle,
} from "@tabler/icons-react";

export type AlertType = "info" | "warning" | "error" | "success";

export type AlertContent = {
  /** The title of this alert */
  title: string;
  /** The type of this alert */
  type?: AlertType;
  /** The message of this alert */
  message?: string;
  /** The icon of this alert */
  icon?: ReactNode;
};

export type AlertProps = GenericClickableProps &
  GenericClickableEventProps &
  PolymorphicButtonProps &
  GenericLayoutProps & {
    /** The content of this alert */
    alert: AlertContent;
    /** Whether to mount and show this alert */
    show?: boolean;

    /** The material to use for this alert. Defaults to the theme default material. */
    material?: Material;

    /** The size of this alert. Defaults to the theme default size. */
    size?: ComponentSize;
    /** The border size of this alert. Defaults to the theme default radius size. */
    radius?: ComponentSize;

    /** Optional animation props to apply to this alert. */
    animation?: AnimationProps;
  };

const ALERT_TYPES: Record<AlertType, { icon: ReactNode; color: string }> = {
  info: {
    icon: <IconInfoCircle />,
    color: "cyan",
  },
  warning: {
    icon: <IconAlertTriangle />,
    color: "orange",
  },
  error: {
    icon: <IconAlertTriangle />,
    color: "red",
  },
  success: {
    icon: <IconCircleCheck />,
    color: "green",
  },
};

export const Alert = forwardRef(function Alert(
  props: MakeResponsive<AlertProps>,
  ref: any,
) {
  const theme = useValence();
  const colors = useColors();

  // Defaults
  const {
    alert,
    show,
    material = theme.materials.card,
    size = theme.defaults.size,
    radius = theme.defaults.radius,
    animation,

    padding = theme.sizeClasses.padding[size],
    margin = 0,
    width = "100%",
    height = "auto",

    component = "div",
    style,
    ...rest
  } = useResponsiveProps<AlertProps>(props);

  // Hooks & states
  const animations = useAnimation({
    transitionAnimation: ["blur", "fade", "grow"],
    ...animation,
  });

  const alertMaterial = useMemo(() => {
    if (alert.type && ALERT_TYPES[alert.type])
      return material.copy().setColor(ALERT_TYPES[alert.type].color);
    else return material;
  }, [material, alert]);
  const alertIcon = useMemo(() => {
    if (alert.type && ALERT_TYPES[alert.type])
      return ALERT_TYPES[alert.type].icon;
    else if (alert.icon) return alert.icon;
    return null;
  }, [alert.type, alert.icon]);

  const AlertStyle = css({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: padding,

    boxSizing: "border-box",

    width: width,
    height: height,
    padding: padding,
    borderRadius: theme.sizeClasses.radius[radius],

    textDecoration: "none",

    cursor: CLICKABLE_ELEMENTS.includes(component as string)
      ? "pointer"
      : "default",

    ...alertMaterial.getStyles(theme, colors),
    ...style,
  });

  return (
    show && (
      <PolymorphicButton
        css={AlertStyle}
        onMouseDown={(e: any) => e.preventDefault()}
        component={component}
        key={alert.title + alert.message}
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
        whileHover="whileHover"
        whileTap="whileTap"
        transition={{ ease: "backOut" }}
        ref={ref}
        {...rest}
      >
        <Icon size={theme.getSize("iconSize", size) as number}>
          {alertIcon}
        </Icon>

        <Flex
          direction="column"
          align="flex-start"
          gap={(padding as number) / 2}
        >
          <Text bold style={{ flexGrow: 1 }} size={size}>
            {alert.title}
          </Text>

          {alert.message && (
            <Text fontSize={(theme.sizeClasses.fontSize[size] as number) - 2}>
              {alert.message}
            </Text>
          )}
        </Flex>
      </PolymorphicButton>
    )
  );
});
