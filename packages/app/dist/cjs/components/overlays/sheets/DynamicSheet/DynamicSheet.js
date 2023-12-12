"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamicSheet = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const SideSheet_1 = require("../SideSheet");
const BottomSheet_1 = require("../BottomSheet");
const utils_1 = require("@valence-ui/utils");
const core_1 = require("@valence-ui/core");
exports.DynamicSheet = (0, react_1.forwardRef)(function DynamicSheet(props, ref) {
    const breakpoint = (0, core_1.useBreakpoint)();
    // Defaults
    const { type = { default: "standard", desktopThin: "overlay", mobile: "bottom" }, disclosure, title, sideSheetProps, bottomSheetProps, children } = props;
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, utils_1.getReactiveProp)(type, breakpoint) === "bottom" ? ((0, jsx_runtime_1.jsx)(BottomSheet_1.BottomSheet, Object.assign({ disclosure: disclosure, title: title }, bottomSheetProps, { children: children }))) : ((0, jsx_runtime_1.jsx)(SideSheet_1.SideSheet, Object.assign({ type: type, disclosure: disclosure, title: title }, sideSheetProps, { children: children }))) }));
});
