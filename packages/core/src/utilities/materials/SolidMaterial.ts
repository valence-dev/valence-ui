import { CSSObject } from "@emotion/react";
import { UseColorsReturn } from "..";
import { IValenceContext } from "../../ValenceProvider";
import { Material, MaterialProps } from "./Material";
import tinycolor from "tinycolor2";

export type SolidMaterialElevation = 1 | 2 | 3 | 4 | 5;
export type SolidMaterialProps = MaterialProps & {
  color?: string;
  elevation?: SolidMaterialElevation;
};

export class SolidMaterial extends Material {
  color?: string;
  elevation?: SolidMaterialElevation;

  constructor(props?: SolidMaterialProps) {
    super(props ?? {});
    this.color = props?.color;
    this.elevation = props?.elevation;
  }

  copy(): SolidMaterial {
    return new SolidMaterial({
      overrides: this.overrides,
      childrenOverrides: this.childrenOverrides,
      color: this.color,
      elevation: this.elevation,
    });
  }

  private getElevationShadow(
    elevation: SolidMaterialElevation | undefined,
  ): string {
    switch (elevation) {
      case 1:
        return "0px 3px 5px rgba(0, 0, 0, 0.05)";
      case 2:
        return "0px 6px 7px rgba(0, 0, 0, 0.075)";
      case 3:
        return "0px 8px 10px rgba(0, 0, 0, 0.1)";
      case 4:
        return "0px 8px 15px rgba(0, 0, 0, 0.15)";
      case 5:
        return "0px 10px 30px rgba(0, 0, 0, 0.2)";
      default:
        return "none";
    }
  }

  getStyles(valence: IValenceContext, colors: UseColorsReturn): CSSObject {
    const color = this.color ?? valence.primaryColor;

    return {
      backgroundColor: colors.getHex(color),
      outline: "none",
      border: "1px solid transparent",
      boxShadow: this.getElevationShadow(this.elevation),

      "& > *": {
        ...this.getChildrenStyles(valence, colors),
      },

      ...(this.interactive && {
        transitionDuration: valence.defaults.transitionDuration,
        transitionProperty: "background-color, border, box-shadow",

        "&:hover": {
          backgroundColor: tinycolor(colors.getHex(color))
            .darken(12)
            .toHexString(),
          boxShadow: this.getElevationShadow(
            Math.min((this.elevation ?? 0) + 1, 5) as SolidMaterialElevation,
          ),
        },
        "&:focus": {
          outline: "none",
          border: `1px solid ${tinycolor(colors.getHex(color))
            .darken(12)
            .toHexString()}`,
        },
      }),

      ...this.overrides,
    };
  }
  getChildrenStyles(
    valence: IValenceContext,
    colors: UseColorsReturn,
  ): CSSObject {
    const color = this.color ?? valence.primaryColor;

    let foregroundColor = "white";
    if (color === "brighterWhite" || color === "white")
      foregroundColor = "black";
    if (color === "permaWhite") foregroundColor = "permaBlack";
    if (color === "permaBlack") foregroundColor = "permaWhite";

    return {
      color: colors.getHex(foregroundColor),
      ...this.childrenOverrides,
    };
  }

  // SETTERS
  setColor(color: string): SolidMaterial {
    const copy = this.copy();
    copy.color = color;
    return copy;
  }
  setElevation(elevation: SolidMaterialElevation): SolidMaterial {
    const copy = this.copy();
    copy.elevation = elevation;
    return copy;
  }
}
