import { CSSObject } from "@emotion/react";
import { Material, MaterialProps } from "./Material";
import { IValenceContext } from "../../ValenceProvider";
import { UseColorsReturn } from "..";

export type PaperMaterialElevation = 1 | 2 | 3 | 4 | 5;
export type PaperMaterialBlur = "weak" | "strong" | number;
export type PaperMaterialProps = MaterialProps & {
  backgroundColor?: string;
  elevation?: PaperMaterialElevation;
  blur?: PaperMaterialBlur;
};

export class PaperMaterial extends Material {
  backgroundColor?: string;
  elevation?: PaperMaterialElevation;
  blur?: PaperMaterialBlur;

  constructor(props?: PaperMaterialProps) {
    super(props ?? {});
    this.backgroundColor = props?.backgroundColor;
    this.elevation = props?.elevation;
    this.blur = props?.blur;
  }

  copy(): PaperMaterial {
    return new PaperMaterial({
      interactive: this.interactive,
      color: this.color,
      overrides: this.overrides,
      childrenOverrides: this.childrenOverrides,
      backgroundColor: this.backgroundColor,
      elevation: this.elevation,
      blur: this.blur,
    });
  }

  private getElevationShadow(
    elevation: PaperMaterialElevation | undefined,
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

  private getBlurValue(): string {
    if (typeof this.blur === "number") return `blur(${this.blur}px)`;
    if (this.blur === "weak") return "blur(5px)";
    if (this.blur === "strong") return "blur(15px)";
    return "none";
  }

  getStyles(valence: IValenceContext, colors: UseColorsReturn): CSSObject {
    const color = this.color ?? "black";
    const backgroundColor = this.backgroundColor ?? "brighterWhite";

    return {
      backgroundColor: !this.blur
        ? colors.getHex(backgroundColor)
        : `${colors.getHex(backgroundColor)}A0`,
      outline: "none",
      border: `1px solid ${colors.getHex(color, (this.elevation ?? 0) >= 3 ? "medium" : "weak")}`,
      boxShadow: this.getElevationShadow(this.elevation),

      backdropFilter: this.getBlurValue(),

      ...(this.interactive && {
        transitionDuration: valence.defaults.transitionDuration,
        transitionProperty: "border, box-shadow",

        "&:hover": {
          boxShadow: this.getElevationShadow(
            Math.min((this.elevation ?? 0) + 1, 5) as PaperMaterialElevation,
          ),
          border: `1px solid ${colors.getHex(color, "strong")}`,
        },
        "&:focus, &:focus-within": {
          outline: "none",
          border: `1px solid ${colors.getHex(color)}`,
        },
        "&:disabled": {
          cursor: "not-allowed",
          opacity: 0.75,
        },
      }),

      "& > *": {
        ...this.getChildrenStyles(valence, colors),
      },

      ...this.getScrollbarStyles(valence, colors),
      ...this.overrides,
    };
  }
  getChildrenStyles(
    valence: IValenceContext,
    colors: UseColorsReturn,
  ): CSSObject {
    const color = this.color ?? "black";

    return {
      color: colors.getHex(color),

      "&::placeholder": {
        color: colors.getHex(color, "strong"),
      },
      ...this.getScrollbarStyles(valence, colors),
      ...this.childrenOverrides,
    };
  }
  getScrollbarStyles(
    valence: IValenceContext,
    colors: UseColorsReturn,
  ): CSSObject {
    const color = this.color ?? valence.primaryColor;
    return {
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: colors.getHex(color, "medium"),
        cursor: "pointer",

        "&:hover": {
          backgroundColor: colors.getHex(color, "strong"),
        },
      },
    };
  }

  // SETTERS
  setColor(color: string): PaperMaterial {
    const copy = this.copy();
    copy.color = color;
    return copy;
  }
  setBackgroundColor(backgroundColor: string): PaperMaterial {
    const copy = this.copy();
    copy.backgroundColor = backgroundColor;
    return copy;
  }
  setElevation(elevation: PaperMaterialElevation): PaperMaterial {
    const copy = this.copy();
    copy.elevation = elevation;
    return copy;
  }
}
