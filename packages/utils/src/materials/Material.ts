import { CSSProperties } from "react";

/** Base class for materials — reusable descriptions of a surface's fill
 * that layout components can accept via a `material` prop, instead of
 * setting `backgroundColor`/`color` (or nesting another component purely
 * to hold a background) directly. */
export abstract class Material {
  /** Produces the css properties needed to render this material. */
  abstract toCss(): CSSProperties;
}
