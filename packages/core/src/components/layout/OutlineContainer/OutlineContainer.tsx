import { CSSProperties, forwardRef, useContext } from "react";
import { Text, TextProps } from "../../display";
import { Flex, FlexProps } from "../Flex";
import { ValenceContext } from "../../../ValenceProvider";
import { useBreakpoint } from "../../../hooks";
import { ComponentSize, GenericReactiveFloatingLayoutProps, getReactiveProp } from "@valence-ui/utils";

export type OutlineContainerProps =
  GenericReactiveFloatingLayoutProps
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
    top = { default: spacing * 2, mobile: 75 },
    left = spacing * 2,
    right = spacing * 2,
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
    position: getReactiveProp(position, breakpoint),
    zIndex: getReactiveProp(zIndex, breakpoint),
    top: getReactiveProp(top, breakpoint),
    left: getReactiveProp(left, breakpoint),
    right: getReactiveProp(right, breakpoint),
    bottom: getReactiveProp(bottom, breakpoint),
  }
  const OutlineContainerStyle: CSSProperties = {
    backgroundColor: theme.getColorHex("white", "strong"),
    backdropFilter: "blur(5px)",
    outlineColor: theme.getColorHex(getReactiveProp(color, breakpoint), "medium"),
    outlineWidth: 1,
    outlineStyle: "solid",
    padding: spacing,
    borderRadius: theme.sizeClasses.radius[radius] as number + spacing,

    ...style
  }
  const LabelStyle: CSSProperties = {
    backgroundColor: theme.getColorHex("white", "strong"),
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
          align="center"
          justify="center"
        >
          <Text
            size="xs"
            color={theme.getColorHex(getReactiveProp(color, breakpoint), "strong")}
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