import { CSSProperties, forwardRef, useContext } from "react";
import { Text, TextProps } from "../../display";
import { Flex, FlexProps } from "../Flex";
import { ValenceContext } from "../../../ValenceProvider";
import { useBreakpoint } from "../../../hooks";
import { ComponentSize, GenericFloatingLayoutProps, getReactiveProp } from "@valence-ui/utils";

export type OutlineContainerProps =
  GenericFloatingLayoutProps
  & FlexProps
  & {
    /** A label to display below the container */
    label?: string;
    /** Optional props to pass to the label component */
    labelProps?: TextProps & { children?: never };

    /** Spacing around the container. `5px` by default */
    spacing?: number;
    /** Size class of the component's radius. Defaults to theme default. */
    radius?: ComponentSize;
  }


export const OutlineContainer = forwardRef(function OutlineContainer(
  props: OutlineContainerProps,
  ref: any,
) {
  const theme = useContext(ValenceContext);
  const breakpoint = useBreakpoint();


  // Defaults
  const {
    label, labelProps,
    spacing = 5,
    radius = theme.defaultRadius,

    position = "sticky",
    zIndex = 151,
    top = spacing,
    left = spacing,
    right = spacing,
    bottom,

    width = "100%",
    height,
    color = "black",

    children, style, ...rest
  } = props;
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
    outlineColor: theme.getColorHex(getReactiveProp(color, breakpoint), "medium"),
    outlineWidth: 1,
    outlineStyle: "solid",
    padding: spacing,
    borderRadius: theme.sizeClasses.radius[radius] as number + spacing,

    ...style
  }
  const LabelStyle: CSSProperties = {
    width: "100%",
    ...labelStyle
  }


  return (
    <Flex
      direction="column"
      width={width}
      height={height}
      style={OuterFlexStyle}
      gap={spacing}
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
        <Text
          size="xs"
          color={theme.getColorHex(getReactiveProp(color, breakpoint), "strong")}
          style={LabelStyle}
          align="center"
          {...labelRest}
        >
          {label}
        </Text>
      )}
    </Flex>
  )
});