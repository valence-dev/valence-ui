/** @jsxImportSource @emotion/react */
import { CSSProperties } from "react";
import { GenericProps } from "@valence-ui/utils";
import { MakeResponsive } from "../../../utilities/responsive";
export type SpaceProps = GenericProps & {
    /** Sets the `width` css property. */
    width?: CSSProperties["width"];
    /** Sets the `height` css property. */
    height?: CSSProperties["height"];
    /** Shorthand for `flex-grow = 1` */
    grow?: boolean;
    children?: never;
};
/** A basic, unstyled layout assistant that creates blank space between any two objects. */
export declare const Space: import("react").ForwardRefExoticComponent<MakeResponsive<SpaceProps> & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=Space.d.ts.map