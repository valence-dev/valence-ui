import { CSSObject } from "@emotion/react";
import { UseColorsReturn } from "..";
import { IValenceContext } from "../../ValenceProvider";
import { Material, MaterialProps } from "./Material";

export type AirMaterialProps = MaterialProps & {
  color?: string;
  backgroundColor?: string;
};

export class AirMaterial extends Material {
  color?: string;
  backgroundColor?: string;

  constructor(props?: AirMaterialProps) {
    super(props ?? {});
    this.color = props?.color;
    this.backgroundColor = props?.backgroundColor;
  }

  copy(): AirMaterial {
    return new AirMaterial({
      overrides: this.overrides,
      childrenOverrides: this.childrenOverrides,
      color: this.color,
      backgroundColor: this.backgroundColor,
    });
  }

  getStyles(valence: IValenceContext, colors: UseColorsReturn): CSSObject {
    const color = this.color ?? valence.primaryColor;
    const backgroundColor = this.backgroundColor ?? color;

    return {
      backgroundColor: "transparent",
      outline: "none",
      border: "none",

      ...(this.interactive && {
        transitionDuration: valence.defaults.transitionDuration,
        transitionProperty: "background-color, border",

        "&:hover": {
          backgroundColor: colors.getHex(backgroundColor, "weak"),
        },
        "&:focus, &:focus-within": {
          outline: "none",
          backgroundColor: colors.getHex(backgroundColor, "weak"),
          border: `1px solid ${colors.getHex(color)}`,
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
  setColor(color: string): AirMaterial {
    const copy = this.copy();
    copy.color = color;
    return copy;
  }
  setBackgroundColor(backgroundColor: string): AirMaterial {
    const copy = this.copy();
    copy.backgroundColor = backgroundColor;
    return copy;
  }
}
