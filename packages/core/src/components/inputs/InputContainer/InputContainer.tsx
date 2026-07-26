/** @jsxImportSource @emotion/react */
import { CSSProperties, ReactNode, forwardRef } from "react";
import {
  MakeResponsive,
  useResponsiveProps,
} from "../../../utilities/responsive";
import { Material } from "../../../utilities/materials";
import { useColors } from "../../../utilities/color";
import { TransitionAnimation } from "../../../hooks/UseAnimation";
import { useValence } from "../../../ValenceProvider";
import { Icon, IconProps } from "../../display/Icon";
import { Loader } from "../../display/Loader";
import {
  ComponentSize,
  GenericLayoutProps,
  MouseClickEvents,
  MouseEvents,
  PointerEvents,
  SizeClasses,
} from "@valence-ui/utils";
import { css } from "@emotion/react";

export type InputContainerProps = GenericLayoutProps &
  MouseClickEvents &
  MouseEvents &
  PointerEvents & {
    /** An icon to display at the left side of this input */
    icon?: ReactNode;
    /** A button to display to the right of this input */
    button?: ReactNode;

    /** The material of this input */
    material?: Material;
    /** Sets the size class. Defaults to theme default */
    size?: ComponentSize;
    /** Sets the radius size class. Defaults to theme default */
    radius?: ComponentSize;
    /** Shorthand for `flex-grow = 1` */
    grow?: boolean;

    /** Whether this input is disabled */
    disabled?: boolean;
    /** Whether this input is required */
    required?: boolean;
    /** Whether this input is loading */
    loading?: boolean;

    /** A `ref` of the input component */
    inputRef?: any;

    /** Optional styles for the icon container component */
    iconContainerStyle?: CSSProperties;
    /** Optional styles for the require indicator component */
    requireIndicatorStyle?: CSSProperties;
    /** Optional styles for the button container component */
    buttonContainerStyle?: CSSProperties;

    /** Optional props to apply to the icon component, if it is rendered */
    iconProps?: IconProps;
  };

export const INPUT_SIZES: SizeClasses<{
  padding: CSSProperties["padding"];
}> = {
  xs: { padding: 4 },
  sm: { padding: 6 },
  md: { padding: 8 },
  lg: { padding: 10 },
  xl: { padding: 12 },
};

export const InputContainer = forwardRef(function InputContainer(
  props: MakeResponsive<InputContainerProps>,
  ref: any,
) {
  const theme = useValence();
  const colors = useColors();

  // Defaults
  const {
    icon,
    button,
    material = theme.materials.input,
    size = theme.defaults.size,
    radius = theme.defaults.radius,
    grow,

    disabled = false,
    required = false,
    loading = false,

    width = "100%",
    height = theme.sizeClasses.height[size],
    padding = INPUT_SIZES[size].padding,
    margin,

    inputRef,
    onClick,

    iconContainerStyle,
    requireIndicatorStyle,
    buttonContainerStyle,

    iconProps,

    children,
    style,
    ...rest
  } = useResponsiveProps<InputContainerProps>(props);

  // Functions
  const handleClick = (e: MouseEvent) => {
    if (disabled) {
      e.preventDefault();
      e.stopPropagation();
    }

    if (inputRef && inputRef.current) inputRef.current.focus();
    onClick?.(e as any);
  };

  // Styles
  const ContainerStyle = css({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    boxSizing: "border-box",
    flexGrow: grow ? 1 : "unset",

    width: width,
    height: height,
    borderRadius: theme.sizeClasses.radius[radius],

    padding: padding,
    gap: padding,

    opacity: disabled ? 0.5 : 1,
    cursor: disabled ? "not-allowed" : "text",

    transitionProperty: "background-color, border",
    transitionDuration: "0.1s",
    transitionTimingFunction: "linear",
    textDecoration: "none",

    ...material.setInteractive(true).getStyles(theme, colors),
    ...style,
  });
  const IconContainerStyle = css({
    height: "100%",
    opacity: 0.5,
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",

    ...iconContainerStyle,
  });
  const ButtonContainerStyle = css({
    height: "100%",
    opacity: 0.5,
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",

    ...buttonContainerStyle,
  });
  const RequireIndicatorStyle = css({
    width: 2,
    height: "calc(100% - 10px)",
    minHeight: 20,
    borderRadius: 3,
    cursor: disabled ? "not-allowed" : "text",
    backgroundColor: material.getChildrenStyles(theme, colors).color,

    ...requireIndicatorStyle,
  });

  const iconAnimations: TransitionAnimation[] = ["blur", "fade", "slide-left"];

  return (
    <div
      css={ContainerStyle}
      ref={ref}
      onClick={(event) => handleClick(event as any)}
      {...rest}
    >
      {required && <div css={RequireIndicatorStyle} />}

      {(icon || loading) && (
        <div css={IconContainerStyle}>
          {loading ? (
            <Loader animation={iconAnimations} />
          ) : (
            <Icon animation={iconAnimations} {...iconProps}>
              {icon}
            </Icon>
          )}
        </div>
      )}

      {children}

      {button && (
        <div css={ButtonContainerStyle}>
          <Icon>{button}</Icon>
        </div>
      )}
    </div>
  );
});
