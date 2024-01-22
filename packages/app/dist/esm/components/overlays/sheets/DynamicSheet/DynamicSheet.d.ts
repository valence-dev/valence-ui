import { ReactNode } from "react";
import { SideSheetProps, SideSheetDisplay } from "../SideSheet";
import { BottomSheetProps } from "../BottomSheet";
import { Disclosure, MakeResponsive } from "@valence-ui/core";
export type DynamicSheetType = SideSheetDisplay | "bottom";
export type DyanmicSheetProps = {
    children: ReactNode;
    /** A disclosure to handle the sheet's state. */
    disclosure: Disclosure;
    /** The title of the sheet. */
    title: string;
    /** The type of the sheet. */
    type?: DynamicSheetType;
    /** Optional props to apply to the Side Sheet component, when displayed. */
    sideSheetProps?: Omit<SideSheetProps, "children" | "disclosure" | "title">;
    /** Optional props to apply to the Bottom Sheet component, when displayed. */
    bottomSheetProps?: Omit<BottomSheetProps, "children" | "disclosure" | "title">;
};
export declare const DynamicSheet: import("react").ForwardRefExoticComponent<MakeResponsive<DyanmicSheetProps> & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=DynamicSheet.d.ts.map