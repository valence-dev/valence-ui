import { ReactNode, forwardRef } from "react";
import { SideSheet, SideSheetProps, SideSheetDisplay } from "../SideSheet";
import { BottomSheet, BottomSheetProps } from "../BottomSheet";
import { Disclosure, MakeResponsive, useResponsiveProps } from "@valence-ui/core";

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
  sideSheetProps?: Omit<SideSheetProps, "children"|"disclosure"|"title">;
  /** Optional props to apply to the Bottom Sheet component, when displayed. */
  bottomSheetProps?: Omit<BottomSheetProps, "children"|"disclosure"|"title">;
}


export const DynamicSheet = forwardRef(function DynamicSheet(
  props: MakeResponsive<DyanmicSheetProps>,
  ref: any
) {
  // Defaults
  const {
    type = useResponsiveProps({ default: "inline", tablet: "overlay", mobile: "bottom" }),
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

          ref={ref}
          {...bottomSheetProps}
        >
          {children}
        </BottomSheet>
      ) : (
        <SideSheet
          display={type as SideSheetDisplay}
          disclosure={disclosure}
          title={title}

          ref={ref}
          {...sideSheetProps}
        >
          {children}
        </SideSheet>
      )}
    </>
  )
});