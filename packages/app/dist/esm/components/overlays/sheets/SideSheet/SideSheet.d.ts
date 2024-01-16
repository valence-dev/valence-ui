/// <reference types="react" />
import { GenericSheetProps } from "../Generics";
import { MakeResponsive } from "@valence-ui/core";
export type SideSheetDisplay = "inline" | "overlay";
export type SideSheetProps = GenericSheetProps & {
    /** The display option for the sidebar. Defaults to `inline` on desktop and
     * bigger, and `overlay` on mobile and smaller.
     */
    display?: SideSheetDisplay;
    /** The direction that this sidebar will appear from. Direction will only
     * be adhered to if the display type is `overlay`. Otherwise, it will be
     * `right` by default.
     */
    direction?: "left" | "right";
};
export declare const SideSheet: import("react").ForwardRefExoticComponent<MakeResponsive<SideSheetProps> & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=SideSheet.d.ts.map