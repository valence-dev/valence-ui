import { CSSProperties } from "react";
import { Material } from "./Material";

export type SolidMaterialProps = {
  /** Sets the `background-color` css property for this material */
  color?: CSSProperties["backgroundColor"];
};

/** A material that renders as a single, flat fill color. */
export class SolidMaterial extends Material {
  /** Sets the `background-color` css property for this material */
  color?: CSSProperties["backgroundColor"];

  constructor(props: SolidMaterialProps = {}) {
    super();
    this.color = props.color;
  }

  toCss(): CSSProperties {
    return {
      backgroundColor: this.color,
    };
  }
}
