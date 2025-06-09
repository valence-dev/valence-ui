/** @jsxImportSource @emotion/react */
import { CSSObject } from "@emotion/react";
import { IValenceContext } from "../../ValenceProvider";
import { Material, MaterialProps } from "./Material";
import { UseColorsReturn } from "..";

export type GlassMaterialBlur = "weak" | "strong" | number;
export type GlassMaterialProps = MaterialProps & {
  backgroundColor?: string;
  blur?: GlassMaterialBlur;
};

export class GlassMaterial extends Material {
  backgroundColor?: string;
  blur?: GlassMaterialBlur;

  constructor(props?: GlassMaterialProps) {
    super(props ?? {});
    this.backgroundColor = props?.backgroundColor;
    this.blur = props?.blur;
  }

  copy(): GlassMaterial {
    return new GlassMaterial({
      interactive: this.interactive,
      color: this.color,
      overrides: this.overrides,
      childrenOverrides: this.childrenOverrides,
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
      border: "1px solid transparent",

      ...(this.interactive && {
        transitionDuration: valence.defaults.transitionDuration,
        transitionProperty: "background-color, border",

        "&:hover": {
          backgroundColor: colors.getHex(backgroundColor, "medium"),
        },
        "&:focus, &:focus-within": {
          outline: "none",
          border: `1px solid ${colors.getHex(color)}`,
        },
      }),

      ...this.getScrollbarStyles(valence, colors),

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
