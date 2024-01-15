/// <reference types="react" />
import { GenericSheetProps } from "../Generics";
import { MakeResponsive } from "@valence-ui/core";
export type SideSheetType = "standard" | "overlay";
export type SideSheetProps = GenericSheetProps & {
    type?: SideSheetType;
};
export declare const SideSheet: import("react").ForwardRefExoticComponent<MakeResponsive<SideSheetProps> & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=SideSheet.d.ts.map