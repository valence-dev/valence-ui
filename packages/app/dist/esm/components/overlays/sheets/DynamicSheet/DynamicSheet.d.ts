import { ReactNode } from "react";
import { SideSheetProps, SideSheetDisplay } from "../SideSheet";
import { BottomSheetProps } from "../BottomSheet";
import { Disclosure, MakeResponsive } from "@valence-ui/core";
export type DynamicSheetType = SideSheetDisplay | "bottom";
export type DyanmicSheetProps = {
    children: ReactNode;
    disclosure: Disclosure;
    title: string;
    type?: DynamicSheetType;
    sideSheetProps?: SideSheetProps;
    bottomSheetProps?: BottomSheetProps;
};
export declare const DynamicSheet: import("react").ForwardRefExoticComponent<MakeResponsive<DyanmicSheetProps> & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=DynamicSheet.d.ts.map