import { ReactNode, forwardRef } from "react";
import { SideSheet, SideSheetProps, SideSheetType } from "../SideSheet";
import { BottomSheet, BottomSheetProps } from "../BottomSheet";
import { Disclosure, MakeResponsive, useResponsiveProps } from "@valence-ui/core";

export type DynamicSheetType = SideSheetType | "bottom";

export type DyanmicSheetProps = {
  children: ReactNode;
  disclosure: Disclosure;
  title: string;

  type?: DynamicSheetType;

  sideSheetProps?: SideSheetProps;
  bottomSheetProps?: BottomSheetProps;
}


export const DynamicSheet = forwardRef(function DynamicSheet(
  props: MakeResponsive<DyanmicSheetProps>,
  ref: any
) {
  // Defaults
  const {
    type = { default: "standard", desktopThin: "overlay", mobile: "bottom" },
    disclosure,
    title,

    sideSheetProps,
    bottomSheetProps,
    children
  } = useResponsiveProps<DyanmicSheetProps>(props);


  return (
    <>
      {type === "bottom" ? (
        <BottomSheet
          disclosure={disclosure}
          title={title}
          {...bottomSheetProps}
        >
          {children}
        </BottomSheet>
      ) : (
        <SideSheet
          type={type as SideSheetType}
          disclosure={disclosure}
          title={title}
          {...sideSheetProps}
        >
          {children}
        </SideSheet>
      )}
    </>
  )
});