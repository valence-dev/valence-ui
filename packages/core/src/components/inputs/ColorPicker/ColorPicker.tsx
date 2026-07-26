import {
  Color,
  MakeResponsive,
  Material,
  useColors,
  useResponsiveProps,
} from "../../../utilities";
import { CSSProperties, forwardRef } from "react";
import { useValence } from "../../../ValenceProvider";
import { GenericInputProps } from "../../../generics";
import { OverflowContainer } from "../../layout/OverflowContainer";
import { IconButton, IconButtonProps } from "../../buttons/IconButton";
import { CSSObject } from "@emotion/react";
import { IconCheck } from "@tabler/icons-react";

export type ColorPickerEventProps = {
  onSelect?: (color: string) => void;
};

export type ColorPickerProps = GenericInputProps<string> &
  ColorPickerEventProps & {
    /** A list of colors to choose from. If left unset, will use the theme default color list. */
    colors?: Color[];
    /** The material to use for the color picker. Defaults to theme default for buttons. */
    material?: Material;

    /** A list of colors to exclude from the picker. */
    excludeColors?: string[];

    /** Sets the gap between colors. `5` by default. */
    gap?: number;
    /** How the colors will wrap within the container. Defaults to `"nowrap". */
    wrap?: CSSProperties["flexWrap"];

    /** Optional props to pass to the child buttons */
    buttonProps?: Omit<
      IconButtonProps,
      "children" | "onClick" | "material" | "style" | "loading" | "disabled"
    >;
  };

export const ColorPicker = forwardRef(function ColorPicker(
  props: MakeResponsive<ColorPickerProps>,
  ref: any,
) {
  const theme = useValence();
  const { getHex } = useColors();

  // Defaults
  const {
    excludeColors = [
      "permaBlack",
      "permaWhite",
      "white",
      "brighterWhite",
      "darkerBlack",
    ],
    colors = theme.colors,
    material = theme.materials.button,

    value,
    setValue,
    onSelect,
    loading,
    disabled,
    readOnly,

    gap = 5,
    wrap = "nowrap",

    width,
    height,
    padding = 5,
    margin,
    size = theme.defaults.size,
    radius = "xl",

    buttonProps,

    style,
    ...rest
  } = useResponsiveProps<ColorPickerProps>(props);
  const usableColors = colors.filter((c) => !excludeColors.includes(c.key));

  // Styles
  const ContainerStyle: CSSObject = {
    padding: padding,
    margin: margin,
    ...style,
  };
  const ButtonStyle: CSSObject = {
    cursor: "pointer",
    borderRadius: theme.getSize("radius", radius),
  };

  return (
    // Everything the picker does not name itself — `id`, `className`,
    // `aria-*`, `data-*`, event handlers, etc. — belongs on the rendered
    // container. It is spread first so the picker's own wiring cannot be
    // clobbered.
    <OverflowContainer
      {...rest}
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
      {usableColors.map((color, i) => (
        <IconButton
          key={i}
          style={{
            outline:
              value === color.key
                ? `1px solid ${getHex(color.key)}`
                : `1px solid transparent`,
            transition: "outline 0.2s ease-in-out",
            ...ButtonStyle,
          }}
          onClick={() => {
            if (loading || disabled || readOnly) return;
            setValue?.(color.key);
            onSelect?.(color.key);
          }}
          material={material.setColor(color.key)}
          size={size}
          radius={radius}
          loading={loading}
          disabled={disabled || readOnly}
          {...buttonProps}
        >
          {value === color.key && <IconCheck />}
        </IconButton>
      ))}
    </OverflowContainer>
  );
});
