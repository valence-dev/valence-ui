/** @jsxImportSource @emotion/react */
import { CSSProperties } from "react";
import { GenericProps } from "@valence-ui/utils";
export type SpaceProps = GenericProps & {
    /** Sets the `width` css property. */
    width?: CSSProperties["width"];
    /** Sets the `height` css property. */
    height?: CSSProperties["height"];
    /** Shorthand for `flex-grow = 1` */
    grow?: boolean;
};
/** A basic, unstyled layout assistant that creates blank space between any two objects. */
export declare function Space(props: SpaceProps): import("@emotion/react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Space.d.ts.map