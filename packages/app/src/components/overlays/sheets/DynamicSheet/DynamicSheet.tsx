import { ReactNode, forwardRef } from "react";
import { SideSheet, SideSheetProps, SideSheetType } from "../SideSheet";
import { BottomSheet, BottomSheetProps } from "../BottomSheet";
import { ReactiveProp, getReactiveProp } from "@valence-ui/utils";
import { Disclosure, useBreakpoint } from "@valence-ui/core";

export type DynamicSheetType = SideSheetType | "bottom";

export type DyanmicSheetProps = {
  children: ReactNode;
  disclosure: Disclosure;
  title: string;

  type?: ReactiveProp<DynamicSheetType>;

  sideSheetProps?: SideSheetProps;
  bottomSheetProps?: BottomSheetProps;
}


export const DynamicSheet = forwardRef(function DynamicSheet(
  props: DyanmicSheetProps,
  ref: any
) {
  const breakpoint = useBreakpoint();


  // Defaults
  const {
    type = { default: "standard", desktopThin: "overlay", mobile: "bottom" },
    disclosure,
    title,

    sideSheetProps,
    bottomSheetProps,
    children
  } = props;


  return (
    <>
      {getReactiveProp(type, breakpoint) === "bottom" ? (
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