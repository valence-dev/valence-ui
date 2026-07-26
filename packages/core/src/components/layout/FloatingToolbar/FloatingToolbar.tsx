import { ComponentSize, GenericFloatingLayoutProps } from "@valence-ui/utils";
import { Flex, FlexProps } from "../Flex";
import { Text, TextProps } from "../../display/Text";
import { CSSProperties, forwardRef } from "react";
import {
  MakeResponsive,
  Material,
  PaperMaterial,
  useColors,
  useResponsiveProps,
} from "../../../utilities";
import { useValence } from "../../../ValenceProvider";
import {
  PositionHorizontal,
  PositionVertical,
  useFloating,
} from "../../../hooks/";
import { CSSObject } from "@emotion/react";

export type FloatingToolbarProps = GenericFloatingLayoutProps &
  FlexProps & {
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

    /** The material of the toolbar. "Paper" by default */
    material?: Material;
    /** Size class of the component's radius. Defaults to theme default. */
    radius?: ComponentSize;
    /** Whether to render a shadow underneath the component. Defaults to `false`. */
    shadow?: boolean;
  };

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
    offset = 10,

    label,
    labelProps,
    material = new PaperMaterial({ elevation: 2, blur: "strong" }),
    radius = theme.defaults.radius,
    shadow = false,

    position = "fixed",
    zIndex = 151,
    top = useResponsiveProps<CSSProperties["top"]>({
      default: offset,
      mobile: 75,
    }),
    left = offset,
    right = offset,
    bottom = offset,

    width = "fit-content",
    height,

    children,
    style,
    ...rest
  } = useResponsiveProps<FloatingToolbarProps>(props);
  const { style: labelStyle, ...labelRest } = labelProps || {};

  // Hooks
  const floating = useFloating({
    positionHorizontal,
    positionVertical,
    offset: {
      top,
      bottom,
      left,
      right,
    },
  });

  // Styles
  const OuterFlexStyle: CSSObject = {
    position: position,
    zIndex: zIndex,
    ...floating.style,
  };
  const ToolbarStyle: CSSObject = {
    padding: offset / 2,
    borderRadius: (theme.getSize("radius", radius) as number) + offset / 2,
    ...style,
  };
  const LabelStyle: CSSObject = {
    backgroundColor: getHex("white", "strong"),
    backdropFilter: "blur(10px)",
    padding: `${offset / 4}px ${offset}px`,
    borderRadius: 20,
    ...labelStyle,
  };

  return (
    <Flex
      direction="column"
      align="center"
      width={width}
      height={height}
      gap={offset / 4}
      style={OuterFlexStyle}
      ref={ref}
    >
      <Flex
        direction="row"
        gap={offset / 2}
        width="100%"
        height="100%"
        style={ToolbarStyle}
        material={material}
        {...rest}
      >
        {children}
      </Flex>

      {label && (
        <Text
          size="xs"
          align="center"
          style={LabelStyle}
          color="black"
          {...labelRest}
        >
          {label}
        </Text>
      )}
    </Flex>
  );
});
