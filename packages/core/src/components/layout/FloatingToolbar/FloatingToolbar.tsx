import { ComponentSize, FillVariant, GenericFloatingLayoutProps } from "@valence-ui/utils";
import { Flex, FlexProps, StyledFlex } from "../Flex";
import { Text, TextProps } from "../../display";
import { CSSProperties, forwardRef } from "react";
import { MakeResponsive, useColors, useResponsiveProps } from "../../../utilities";
import { useValence } from "../../../ValenceProvider";
import { PositionHorizontal, PositionVertical, useFloating } from "../../../hooks/";

export type FloatingToolbarProps =
  & GenericFloatingLayoutProps
  & FlexProps
  & {
    /** The horizontal position of this toolbar. Defaults to `"left"`. */
    positionHorizontal?: PositionHorizontal;
    /** The vertical position of this toolbar. Defaults to `"top"`. */
    positionVertical?: PositionVertical;
    /** The offset of the toolbar. Defaults to `5`. */
    offset?: number;

    /** A label to display below the toolbar */
    label?: string;
    /** Optional props to pass to the label component */
    labelProps?: Omit<TextProps, "children">;

    /** The fill variant of the component. Defaults to `"outlined"`. */
    variant?: FillVariant;
    /** Size class of the component's radius. Defaults to theme default. */
    radius?: ComponentSize;
    /** Whether to render a shadow underneath the component. Defaults to `false`. */
    shadow?: boolean;
  }

export const FloatingToolbar = forwardRef(function FloatingToolbar(
  props: MakeResponsive<FloatingToolbarProps>,
  ref: any,
) {
  const theme = useValence();
  const { getHex } = useColors();

  // Defaults
  const {
    positionHorizontal = "left",
    positionVertical = "top",
    offset = 5,

    label, labelProps,
    variant = "outlined",
    radius = theme.defaults.radius,
    shadow = false,

    position = "fixed",
    zIndex = 151,
    top = useResponsiveProps<CSSProperties["top"]>({ default: offset * 2, mobile: 75 }),
    left = offset * 2,
    right = offset * 2,
    bottom = offset * 2,

    width = "fit-content", height,
    color = "black",

    children, style, ...rest
  } = useResponsiveProps<FloatingToolbarProps>(props);
  const {
    style: labelStyle,
    ...labelRest
  } = labelProps || {};


  // Hooks
  const floating = useFloating({
    positionHorizontal, positionVertical, offset: {
      top, bottom, left, right
    }
  });


  // Styles
  const OuterFlexStyle: CSSProperties = {
    position: position,
    zIndex: zIndex,
    ...floating.style,
  }
  const ToolbarStyle: CSSProperties = {
    backgroundColor: getHex("white", "strong"),
    backdropFilter: "blur(10px)",
    padding: offset,
    borderRadius: theme.getSize("radius", radius) as number + offset,
    boxShadow: shadow ? theme.defaults.shadow : undefined,
    ...style
  }
  const LabelStyle: CSSProperties = {
    backgroundColor: getHex("white", "strong"),
    backdropFilter: "blur(10px)",
    padding: `${offset / 2}px ${offset * 2}px`,
    borderRadius: 20,
    ...labelStyle
  }


  return (
    <Flex
      direction="column"
      width={width} height={height} gap={offset / 2}
      style={OuterFlexStyle} ref={ref}
    >
      <StyledFlex
        direction="row" gap={offset}
        width="100%" height="100%"
        variant={variant} color={color}
        style={ToolbarStyle}
        {...rest}
      >
        {children}
      </StyledFlex>

      {label && (
        <Flex
          alignSelf="stretch"
          align="center" justify="center"
        >
          <Text
            size="xs" color={getHex(color, "strong")}
            align="center" style={LabelStyle}
            {...labelRest}
          >
            {label}
          </Text>
        </Flex>
      )}
    </Flex>
  )
});