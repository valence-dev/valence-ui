/** @jsxImportSource @emotion/react */
import { CSSObject } from "@emotion/react";
import type { IValenceContext } from "../../ValenceProvider/ValenceProvider.types";
import { Material, MaterialProps } from "./Material";
import { UseColorsReturn } from "../color";

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

  copy(): this {
    return new GlassMaterial({
      interactive: this.interactive,
      color: this.color,
      overrides: this.overrides,
      childrenOverrides: this.childrenOverrides,
      backgroundColor: this.backgroundColor,
      blur: this.blur,
    }) as this;
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
      color: colors.getHex(color),
      backdropFilter: this.getBlurValue(),
      outline: "none",
      border: "1px solid transparent",

      ...(this.interactive && {
        transitionDuration: "0.1s",
        transitionProperty: "background-color, border",

        "&:hover": {
          backgroundColor: colors.getHex(backgroundColor, "medium"),
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

      ...this.getScrollbarStyles(valence, colors),

      "& *": {
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
  setBackgroundColor(backgroundColor: string): this {
    const copy = this.copy();
    copy.backgroundColor = backgroundColor;
    return copy;
  }
  setBlur(blur: GlassMaterialBlur): this {
    const copy = this.copy();
    copy.blur = blur;
    return copy;
  }
}
