import { Color, MakeResponsive, useColors, useResponsiveProps } from "../../../utilities"
import { CSSProperties, forwardRef } from "react";
import { useValence } from "../../../ValenceProvider";
import { GenericInputProps } from "../../../generics";
import { OverflowContainer } from "../../layout";
import { MotionBehaviourProps, UnstyledButton } from "../../buttons";
import { ColorSwatch } from "../../display";

export type ColorPickerEventProps = {
  onSelect?: (color: string) => void;
}

export type ColorPickerProps =
  GenericInputProps<string>
  & ColorPickerEventProps
  & {
    /** A list of colors to choose from. If left unset, will use the theme default color list. */
    colors?: Color[];

    /** A list of colors to exclude from the picker. */
    excludeColors?: string[];

    /** Sets the gap between colors. `5` by default. */
    gap?: number;
    /** How the colors will wrap within the container. Defaults to `"nowrap". */
    wrap?: CSSProperties["flexWrap"];

    /** Motion props to apply to the swatch buttons. */
    swatchMotion?: MotionBehaviourProps;
  }

export const ColorPicker = forwardRef(function ColorPicker(
  props: MakeResponsive<ColorPickerProps>,
  ref: any,
) {
  const theme = useValence();
  const { getHex } = useColors();


  // Defaults
  const {
    excludeColors = ["permaBlack", "permaWhite", "white"],
    colors = theme.colors.filter(c => !excludeColors.includes(c.key)),

    value, setValue,
    onSelect,

    gap = 5,
    wrap = "nowrap",

    width, height, padding = 5, margin,
    size = theme.defaults.size,
    radius = "xl",

    swatchMotion = { onHover: "grow", onTap: "shrink" },

    style,
    ...rest
  } = useResponsiveProps<ColorPickerProps>(props);


  // Styles
  const ContainerStyle: CSSProperties = {
    padding: padding,
    margin: margin,
    ...style,
  }
  const ButtonStyle: CSSProperties = {
    cursor: "pointer",
    borderRadius: theme.sizeClasses.radius[radius],
  }


  return (
    <OverflowContainer
      ref={ref}
      direction="horizontal"
      width={width}
      height={height}
      innerProps={{
        gap: gap,
        direction: "row",
        wrap: wrap,
        style: ContainerStyle,
      }}
    >
      {colors.map((color, i) => (
        <UnstyledButton
          key={i}
          style={{
            outline: value === color.key ?
              `1px solid ${getHex("black")}` : undefined,
            ...ButtonStyle,
          }}
          motion={swatchMotion}
          onClick={() => {
            setValue?.(color.key);
            onSelect?.(color.key);
          }}
        >
          <ColorSwatch
            color={color.key}
            size={size}
            radius={radius}
          />
        </UnstyledButton>
      ))}
    </OverflowContainer>
  )
});