"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlideUp = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
/** @jsxImportSource @emotion/react */
const react_1 = require("@emotion/react");
const core_1 = require("@valence-ui/core");
const utils_1 = require("@valence-ui/utils");
const react_2 = require("react");
const framer_motion_1 = require("framer-motion");
const usehooks_ts_1 = require("usehooks-ts");
exports.SlideUp = (0, react_2.forwardRef)(function SlideUp(props, ref) {
    var _a, _b;
    const theme = (0, react_2.useContext)(core_1.ValenceContext);
    const breakpoint = (0, core_1.useBreakpoint)();
    // Defaults
    const { disclosure, closeOnOverlayClick = true, closeOnEscape = true, lockScroll = false, radius = "lg", shadow = true, backgroundColor = (_a = theme.getColor("white")) === null || _a === void 0 ? void 0 : _a.base, color = (_b = theme.getColor("black")) === null || _b === void 0 ? void 0 : _b.base, padding = theme.sizeClasses.padding[theme.defaultSize], margin = 0, width, height = "50vh", overlayProps, flexProps, style, children } = props, rest = __rest(props, ["disclosure", "closeOnOverlayClick", "closeOnEscape", "lockScroll", "radius", "shadow", "backgroundColor", "color", "padding", "margin", "width", "height", "overlayProps", "flexProps", "style", "children"]);
    // Styles
    const borderRadius = theme.sizeClasses.radius[(0, utils_1.getReactiveProp)(radius, breakpoint)];
    const ContainerStyles = (0, react_1.css)(Object.assign({ position: "fixed", bottom: 0, left: 0, right: 0, width: (0, utils_1.getReactiveProp)(width, breakpoint), height: (0, utils_1.getReactiveProp)(height, breakpoint), backgroundColor: (0, utils_1.getReactiveProp)(backgroundColor, breakpoint), color: (0, utils_1.getReactiveProp)(color, breakpoint), padding: (0, utils_1.getReactiveProp)(padding, breakpoint), margin: (0, utils_1.getReactiveProp)(margin, breakpoint), borderRadius: `${borderRadius}px ${borderRadius}px 0 0`, boxShadow: (0, utils_1.getReactiveProp)(shadow, breakpoint) ? theme.defaultShadow : undefined, overflowX: "hidden", overflowY: "auto", zIndex: 999 }, (0, utils_1.getReactiveProp)(style, breakpoint)));
    const OverlayStyle = {
        padding: 0,
        alignItems: "flex-end",
    };
    // Hooks
    (0, usehooks_ts_1.useLockedBody)(disclosure.opened && lockScroll, "root");
    (0, core_1.useDetectKeyDown)(close, "Escape", closeOnEscape, [closeOnEscape, close]);
    return ((0, jsx_runtime_1.jsx)(framer_motion_1.AnimatePresence, { children: disclosure.opened &&
            (0, jsx_runtime_1.jsx)(core_1.ModalOverlay, Object.assign({ blurBackground: false, disclosure: disclosure, closeOnClick: closeOnOverlayClick, style: OverlayStyle }, overlayProps, { children: (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, Object.assign({ css: ContainerStyles, onClick: e => e.stopPropagation(), initial: { y: "100%" }, animate: { y: 0 }, exit: { y: "100%" }, transition: { ease: "easeOut", duration: 0.1 }, ref: ref }, rest, { children: (0, jsx_runtime_1.jsx)(core_1.Flex, Object.assign({ direction: "column" }, flexProps, { children: children })) })) })) }));
});
