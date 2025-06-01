/** @jsxImportSource @emotion/react */
import { CSSObject } from "@emotion/react";
import { IValenceContext } from "../../ValenceProvider";
import { Material, MaterialProps } from "./Material";
import { UseColorsReturn } from "..";

export type GlassMaterialBlur = "weak" | "strong" | number;
export type GlassMaterialProps = MaterialProps & {
  color?: string;
  backgroundColor?: string;
  blur?: GlassMaterialBlur;
};

export class GlassMaterial extends Material {
  color?: string;
  backgroundColor?: string;
  blur?: GlassMaterialBlur;

  constructor(props?: GlassMaterialProps) {
    super(props ?? {});
    this.color = props?.color;
    this.backgroundColor = props?.backgroundColor;
    this.blur = props?.blur;
  }

  copy(): GlassMaterial {
    return new GlassMaterial({
      overrides: this.overrides,
      childrenOverrides: this.childrenOverrides,
      color: this.color,
      backgroundColor: this.backgroundColor,
      blur: this.blur,
    });
  }

  private getBlurValue(): string {
    if (typeof this.blur === "number") return `blur(${this.blur}px)`;
    if (this.blur === "weak") return "blur(5px)";
    if (this.blur === "strong") return "blur(15px)";
    return "none";
  }

  getStyles(valence: IValenceContext, colors: UseColorsReturn): CSSObject {
    const color = this.color ?? valence.primaryColor;
    const backgroundColor = this.backgroundColor ?? color;

    return {
      backgroundColor: colors.getHex(backgroundColor, "weak"),
      backdropFilter: this.getBlurValue(),
      outline: "none",
      border: "none",

      ...(this.interactive && {
        transitionDuration: valence.defaults.transitionDuration,
        transitionProperty: "background-color, border",

        "&:hover": {
          backgroundColor: colors.getHex(backgroundColor, "medium"),
        },
        "&:focus": {
          outline: "none",
          border: `1px solid ${colors.getHex(color)}`,
        },
      }),

      "& > *": {
        ...this.getChildrenStyles(valence, colors),
      },

      ...this.overrides,
    };
  }
  getChildrenStyles(
    valence: IValenceContext,
    colors: UseColorsReturn,
  ): CSSObject {
    const color = this.color ?? valence.primaryColor;
    return {
      color: colors.getHex(color),
      ...this.childrenOverrides,
    };
  }

  // SETTERS
  setColor(color: string): GlassMaterial {
    const copy = this.copy();
    copy.color = color;
    return copy;
  }
  setBackgroundColor(backgroundColor: string): GlassMaterial {
    const copy = this.copy();
    copy.backgroundColor = backgroundColor;
    return copy;
  }
  setBlur(blur: GlassMaterialBlur): GlassMaterial {
    const copy = this.copy();
    copy.blur = blur;
    return copy;
  }
}
