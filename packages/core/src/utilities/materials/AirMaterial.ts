import { CSSObject } from "@emotion/react";
import { UseColorsReturn } from "../color";
import type { IValenceContext } from "../../ValenceProvider/ValenceProvider.types";
import { Material, MaterialProps } from "./Material";

export type AirMaterialProps = MaterialProps & {
  backgroundColor?: string;
};

export class AirMaterial extends Material {
  backgroundColor?: string;

  constructor(props?: AirMaterialProps) {
    super(props ?? {});
    this.backgroundColor = props?.backgroundColor;
  }

  copy(): this {
    return new AirMaterial({
      interactive: this.interactive,
      color: this.color,
      overrides: this.overrides,
      childrenOverrides: this.childrenOverrides,
      backgroundColor: this.backgroundColor,
    }) as this;
  }

  getStyles(valence: IValenceContext, colors: UseColorsReturn): CSSObject {
    const color = this.color ?? valence.primaryColor;
    const backgroundColor = this.backgroundColor ?? color;

    return {
      backgroundColor: "transparent",
      color: colors.getHex(color),
      outline: "none",
      border: "none",

      ...(this.interactive && {
        transitionDuration: "0.1s",
        transitionProperty: "background-color, border",

        "&:hover": {
          backgroundColor: colors.getHex(backgroundColor, "weak"),
        },
        "&:focus, &:focus-within": {
          outline: "none",
          backgroundColor: colors.getHex(backgroundColor, "weak"),
          border: `1px solid ${colors.getHex(color)}`,
        },
        "&:disabled": {
          cursor: "not-allowed",
          opacity: 0.75,
        },
      }),

      "& *": {
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
  // `setColor` is inherited from `Material`; it is `this`-typed there, so an
  // override narrowing it to `AirMaterial` would only lose information.
  setBackgroundColor(backgroundColor: string): this {
    const copy = this.copy();
    copy.backgroundColor = backgroundColor;
    return copy;
  }
}
