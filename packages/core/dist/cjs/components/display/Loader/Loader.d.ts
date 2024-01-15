import { CSSProperties } from "react";
import { MakeResponsive } from "../../..";
import { ComponentSize, GenericProps } from "@valence-ui/utils";
export type LoaderProps = GenericProps & {
    /** Sets element size class. Defaults to theme default */
    size?: ComponentSize;
    /** Color of the loader. Defaults to theme default */
    color?: CSSProperties["color"];
};
export declare const Loader: import("react").ForwardRefExoticComponent<MakeResponsive<LoaderProps> & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=Loader.d.ts.map