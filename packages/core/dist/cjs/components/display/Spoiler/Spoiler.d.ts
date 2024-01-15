/// <reference types="react" />
import { GenericProps } from "@valence-ui/utils";
import { MakeResponsive } from "../../../responsive";
export type SpoilerProps = GenericProps & {
    /** Whether to show or hide the spoiler content. Defaults to `true`. */
    show?: boolean;
};
/** A simple wrapper component used to show or hide content at will. */
export declare const Spoiler: import("react").ForwardRefExoticComponent<MakeResponsive<SpoilerProps> & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=Spoiler.d.ts.map