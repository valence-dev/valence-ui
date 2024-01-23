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
exports.SideSheet = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const core_1 = require("@valence-ui/core");
const usehooks_ts_1 = require("usehooks-ts");
const framer_motion_1 = require("framer-motion");
const framer_motion_2 = require("framer-motion");
exports.SideSheet = (0, react_1.forwardRef)(function SideSheet(props, ref) {
    const theme = (0, react_1.useContext)(core_1.ValenceContext);
    const { getHex } = (0, core_1.useColors)();
    // Defaults
    const _a = (0, core_1.useResponsiveProps)(props), { disclosure, title, header = (props) => (0, jsx_runtime_1.jsx)(core_1.DefaultModalHeader, Object.assign({ disclosure: disclosure }, props)), display = (0, core_1.useResponsiveProps)({ default: "inline", tablet: "overlay", mobile: "overlay" }), direction = "right", closeOnOverlayClick = true, closeOnEscape = true, lockScroll = false, radius = "lg", withShadow = true, backgroundColor = getHex("white"), color = getHex("black"), padding = theme.sizeClasses.padding[theme.defaults.size], margin = 0, width = 350, height = "100vh", flexProps, overlayBackgroundProps = {
        padding: 0,
        style: {
            alignItems: "flex-end",
        }
    }, style, children } = _a, rest = __rest(_a, ["disclosure", "title", "header", "display", "direction", "closeOnOverlayClick", "closeOnEscape", "lockScroll", "radius", "withShadow", "backgroundColor", "color", "padding", "margin", "width", "height", "flexProps", "overlayBackgroundProps", "style", "children"]);
    const fixedDirection = display === "overlay" ? direction : "right";
    // Styles
    const borderRadius = theme.sizeClasses.radius[radius];
    const SheetStyle = Object.assign({ position: "fixed", top: 0, right: fixedDirection === "right" ? 0 : undefined, left: fixedDirection === "left" ? 0 : undefined, bottom: 0, zIndex: 999, width: width, maxWidth: "100%", height: height, backgroundColor: backgroundColor, color: color, padding: padding, margin: margin, boxSizing: "border-box", borderRadius: display !== "overlay" ? undefined :
            fixedDirection === "right" ?
                `${borderRadius}px 0 0 ${borderRadius}px` :
                `0 ${borderRadius}px ${borderRadius}px 0`, boxShadow: withShadow && display === "overlay" ?
            theme.defaults.shadow : undefined, borderLeft: display === "overlay" ? undefined :
            `1px solid ${getHex("black", "weak")}`, overflowX: "hidden", overflowY: "auto" }, style);
    // Hooks
    (0, usehooks_ts_1.useLockedBody)(disclosure.opened && lockScroll && display === "overlay", "root");
    (0, core_1.useDetectKeyDown)(disclosure.close, "Escape", closeOnEscape, [closeOnEscape, close]);
    // Effects
    (0, react_1.useEffect)(() => {
        // When the overlay is opened and the mode is "inline", we want to attempt to 
        // find and set the right padding of the root element to the width of the sheet
        const element = document.getElementById("root-content");
        if (!element)
            return;
        if (disclosure.opened && display === "inline") {
            element.style.paddingRight = `calc(10px + ${width}px)`;
        }
        else {
            element.style.paddingRight = `10px`;
        }
    }, [disclosure.opened]);
    return ((0, jsx_runtime_1.jsx)(framer_motion_1.AnimatePresence, { children: disclosure.opened &&
            (0, jsx_runtime_1.jsx)(OptionalBackground, { disclosure: disclosure, showBackground: display === "overlay", backgroundProps: overlayBackgroundProps, children: (0, jsx_runtime_1.jsx)(framer_motion_2.motion.div, Object.assign({ style: SheetStyle, onClick: e => e.stopPropagation(), initial: {
                        x: fixedDirection === "right" ? "100%" : "-100%",
                    }, animate: {
                        x: 0,
                        transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 40,
                            delay: 0.1,
                        }
                    }, exit: {
                        x: fixedDirection === "right" ? "100%" : "-100%",
                    }, ref: ref }, rest, { children: (0, jsx_runtime_1.jsxs)(core_1.Flex, Object.assign({ direction: "column" }, flexProps, { children: [header({ title }), children] })) })) }) }));
});
function OptionalBackground(props) {
    const { children, disclosure, showBackground, backgroundProps } = props;
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: showBackground ?
            (0, jsx_runtime_1.jsx)(core_1.ModalBackground, Object.assign({ disclosure: disclosure }, backgroundProps, { children: children }))
            :
                children }));
}
