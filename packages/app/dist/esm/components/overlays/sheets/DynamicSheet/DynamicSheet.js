import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { forwardRef } from "react";
import { SideSheet } from "../SideSheet";
import { BottomSheet } from "../BottomSheet";
import { getReactiveProp } from "@valence-ui/utils";
import { useBreakpoint } from "@valence-ui/core";
export const DynamicSheet = forwardRef(function DynamicSheet(props, ref) {
    const breakpoint = useBreakpoint();
    // Defaults
    const { type = { default: "standard", desktopThin: "overlay", mobile: "bottom" }, disclosure, title, sideSheetProps, bottomSheetProps, children } = props;
    return (_jsx(_Fragment, { children: getReactiveProp(type, breakpoint) === "bottom" ? (_jsx(BottomSheet, Object.assign({ disclosure: disclosure, title: title }, bottomSheetProps, { children: children }))) : (_jsx(SideSheet, Object.assign({ type: type, disclosure: disclosure, title: title }, sideSheetProps, { children: children }))) }));
});
