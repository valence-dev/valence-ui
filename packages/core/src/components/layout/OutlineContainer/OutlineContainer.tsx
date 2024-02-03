import { CSSProperties, forwardRef } from "react";
import { Text, TextProps } from "../../display";
import { Flex, FlexProps } from "../Flex";
import { useValence } from "../../../ValenceProvider";
import { ComponentSize, GenericFloatingLayoutProps } from "@valence-ui/utils";
import { MakeResponsive, useResponsiveProps } from "../../../utilities/responsive";
import { useColors } from "../../../utilities/color";

export type OutlineContainerProps =
  GenericFloatingLayoutProps
  & FlexProps
  & {
    /** Determines if this container will stick to the window, or simply be a part of it. `true` by default. */
    sticky?: boolean;

    /** A label to display below the container */
    label?: string;
    /** Optional props to pass to the label component */
    labelProps?: Omit<TextProps, "children">;

    /** Spacing around the container. `5px` by default */
    spacing?: number;
    /** Size class of the component's radius. Defaults to theme default. */
    radius?: ComponentSize;
  }


export const OutlineContainer = forwardRef(function OutlineContainer(
  props: MakeResponsive<OutlineContainerProps>,
  ref: any,
) {
  const theme = useValence();
  const { getHex } = useColors();


  // Defaults
  const {
    sticky = true,

    label, labelProps,
    spacing = 5,
    radius = theme.defaults.radius,

    position = sticky ? "sticky" : "relative",
    zIndex = sticky ? 151 : undefined,
    top = useResponsiveProps(sticky ? { default: spacing * 2, mobile: 75 } : undefined),
    left = sticky ? spacing * 2 : undefined,
    right = sticky ? spacing * 2 : undefined,
    bottom,

    width = "100%",
    height,
    color = "black",

    children, style, ...rest
  } = useResponsiveProps<OutlineContainerProps>(props);
  const {
    style: labelStyle,
    ...labelRest
  } = labelProps || {};


  // Styles
  const OuterFlexStyle: CSSProperties = {
    position: position,
    zIndex: zIndex,
    top: top,
    left: left,
    right: right,
    bottom: bottom,
  }
  const OutlineContainerStyle: CSSProperties = {
    backgroundColor: getHex("white", "strong"),
    backdropFilter: "blur(5px)",
    border: `1px solid ${getHex(color, "medium")}`,
    padding: spacing,
    borderRadius: theme.sizeClasses.radius[radius] as number + spacing,

    ...style
  }
  const LabelStyle: CSSProperties = {
    backgroundColor: getHex("white", "strong"),
    backdropFilter: "blur(5px)",
    padding: `${spacing / 2}px ${spacing * 2}px`,
    borderRadius: 20,
    ...labelStyle
  }


  return (
    <Flex
      direction="column"
      width={width}
      height={height}
      style={OuterFlexStyle}
      gap={spacing / 2}
      ref={ref}
    >
      <Flex
        direction="row"
        width="100%"
        height="100%"
        style={OutlineContainerStyle}
        gap={spacing}
        {...rest}
      >
        {children}
      </Flex>

      {label && (
        <Flex
          alignSelf="stretch"
          align="center"
          justify="center"
        >
          <Text
            size="xs"
            color={getHex(color, "strong")}
            align="center"
            style={LabelStyle}
            {...labelRest}
          >
            {label}
          </Text>
        </Flex>
      )}
    </Flex>
  )
});