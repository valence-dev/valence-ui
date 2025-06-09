import { CSSObject } from "@emotion/react";
import { IValenceContext } from "../../ValenceProvider";
import { UseColorsReturn } from "..";

export type MaterialProps = {
  /** Whether the material is interactive. Some materials may respond
   * to hover or focus states, while others may not.
   * Defaults to `false`.
   */
  interactive?: boolean;
  /** The color of the material. Different materials may use this color
   * in different ways, such as for the background or foreground.
   * If not provided, the material will use the primary color of the valence context.
   */
  color?: string;
  /** Overrides provided to the material after all other styles are applied. */
  overrides?: CSSObject;
  /** Overrides provided to the children of the material after all other styles are applied. */
  childrenOverrides?: CSSObject;
};

export abstract class Material {
  interactive: boolean;

  /**
   * The color of the material. Different materials may use this color
   * in different ways, such as for the background or foreground.
   * If not provided, the material will use the primary color of the valence context.
   */
  color?: string;

  /**
   * Overrides provided to the material after all other styles are applied.
   * This is useful for overriding specific styles without having to
   * override the entire material.
   */
  overrides: CSSObject;
  /**
   * Overrides provided to the children of the material after all other styles are applied.
   * This is useful for overriding specific styles of children without having to
   * override the entire material.
   */
  childrenOverrides?: CSSObject;

  constructor(props: MaterialProps) {
    this.interactive = props.interactive ?? false;
    this.color = props.color;
    this.overrides = props.overrides ?? {};
    this.childrenOverrides = props.childrenOverrides ?? {};
  }

  /** Returns an exact, deep copy of the material. */
  abstract copy(): Material;

  /**
   * Returns the styles for the material.
   * @param valence The valence context.
   * @param colors The colors context.
   * @returns The styles for the material.
   */
  abstract getStyles(
    valence: IValenceContext,
    colors: UseColorsReturn,
  ): CSSObject;
  /**
   * Returns the styles for the children of the material.
   * @param valence The valence context.
   * @param colors The colors context.
   * @returns The styles for the children of the material.
   */
  abstract getChildrenStyles(
    valence: IValenceContext,
    colors: UseColorsReturn,
  ): CSSObject;

  /**
   * Returns the styles for the scrollbar of the material.
   * @param valence The valence context.
   * @param colors The colors context.
   * @returns The styles for the scrollbar of the material.
   */
  abstract getScrollbarStyles(
    valence: IValenceContext,
    colors: UseColorsReturn,
  ): CSSObject;

  // SETTERS
  setInteractive(interactive: boolean): Material {
    const copy = this.copy();
    copy.interactive = interactive;
    return copy;
  }
  setColor(color: string): Material {
    const copy = this.copy();
    copy.color = color;
    return copy;
  }
  setOverrides(overrides: CSSObject): Material {
    const copy = this.copy();
    copy.overrides = overrides;
    return copy;
  }
  setChildrenOverrides(childrenOverrides: CSSObject): Material {
    const copy = this.copy();
    copy.childrenOverrides = childrenOverrides;
    return copy;
  }
}
