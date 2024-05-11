/** @jsxImportSource @emotion/react */
import { CSSProperties } from "react";
import { MakeResponsive, SwatchOpacity } from "../../../utilities";
import { ComponentSize } from "@valence-ui/utils";
export type ColorSwatchProps = {
    /** The color to display. Will default to the theme default color. */
    color: CSSProperties["color"];
    /** The opacity of the color to display. Will default to completely filled. */
    opacity?: SwatchOpacity;
    /** The size of the swatch. Defaults to theme default. */
    size?: ComponentSize;
    /** The radius of the swatch. Defaults to `"xl"` */
    radius?: ComponentSize;
    /** Whether to display the swatch with an outline. Defaults to `true`. */
    withOutline?: boolean;
};
export declare const ColorSwatch: import("react").ForwardRefExoticComponent<MakeResponsive<ColorSwatchProps> & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=ColorSwatch.d.ts.map