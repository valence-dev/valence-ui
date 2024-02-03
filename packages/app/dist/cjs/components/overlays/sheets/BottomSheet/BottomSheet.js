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
exports.BottomSheet = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
/** @jsxImportSource @emotion/react */
const react_1 = require("@emotion/react");
const core_1 = require("@valence-ui/core");
const react_2 = require("react");
const framer_motion_1 = require("framer-motion");
const usehooks_ts_1 = require("usehooks-ts");
exports.BottomSheet = (0, react_2.forwardRef)(function BottomSheet(props, ref) {
    const theme = (0, react_2.useContext)(core_1.ValenceContext);
    const { getHex } = (0, core_1.useColors)();
    const controls = (0, framer_motion_1.useDragControls)();
    // Defaults
    const _a = (0, core_1.useResponsiveProps)(props), { disclosure, title, header = (props) => (0, jsx_runtime_1.jsx)(core_1.DefaultModalHeader, Object.assign({ disclosure: disclosure }, props)), releaseOffset = Math.round(window.innerHeight / 2), releaseVelocity = 500, allowInnerScrolling = false, closeOnOverlayClick = true, closeOnEscape = true, lockScroll = true, radius = "lg", withShadow = true, backgroundColor = getHex("white"), color = getHex("black"), padding = theme.sizeClasses.padding[theme.defaults.size], margin = 0, width, height = "100%", flexProps, innerFlexProps, overlayBackgroundProps = {
        padding: 0,
        style: {
            alignItems: "flex-end",
        }
    }, style, children } = _a, rest = __rest(_a, ["disclosure", "title", "header", "releaseOffset", "releaseVelocity", "allowInnerScrolling", "closeOnOverlayClick", "closeOnEscape", "lockScroll", "radius", "withShadow", "backgroundColor", "color", "padding", "margin", "width", "height", "flexProps", "innerFlexProps", "overlayBackgroundProps", "style", "children"]);
    const _b = flexProps || {}, { style: flexStyle } = _b, flexPropsRest = __rest(_b, ["style"]);
    // Functions
    function handleDragEnd(e, { offset, velocity }) {
        if (offset.y > releaseOffset
            || velocity.y > releaseVelocity)
            disclosure.close();
    }
    // Styles
    const borderRadius = theme.sizeClasses.radius[radius];
    const ContainerStyles = (0, react_1.css)(Object.assign({ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 999, width: width, height: height }, style));
    const SheetStyle = Object.assign({ height: "calc(100% - 25px)", width: "100%", backgroundColor: backgroundColor, color: color, padding: padding, margin: margin, position: "relative", borderRadius: `${borderRadius}px ${borderRadius}px 0 0`, boxShadow: withShadow ? theme.defaults.shadow : undefined, touchAction: "none" }, flexStyle);
    const DragStyle = {
        width: "100%",
        height: 25,
        touchAction: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "grab",
    };
    const PillStyle = {
        width: 50,
        height: 5,
        borderRadius: 5,
        backgroundColor: getHex("white", "strong"),
    };
    // Hooks
    (0, usehooks_ts_1.useLockedBody)(disclosure.opened && lockScroll, "root");
    (0, core_1.useDetectKeyDown)(disclosure.close, "Escape", closeOnEscape, [closeOnEscape, close]);
    return ((0, jsx_runtime_1.jsx)(framer_motion_1.AnimatePresence, { children: disclosure.opened &&
            (0, jsx_runtime_1.jsx)(core_1.ModalBackground, Object.assign({ disclosure: disclosure }, overlayBackgroundProps, { children: (0, jsx_runtime_1.jsxs)(framer_motion_1.motion.div, Object.assign({ css: ContainerStyles, onClick: e => e.stopPropagation(), drag: "y", dragConstraints: { top: 0 }, dragSnapToOrigin: true, onDragEnd: handleDragEnd, initial: { y: "100%" }, animate: {
                        y: 0,
                        transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 40,
                            delay: 0.1,
                        }
                    }, exit: { y: "100%" }, ref: ref }, rest, { children: [(0, jsx_runtime_1.jsx)("div", { style: DragStyle, children: (0, jsx_runtime_1.jsx)("div", { style: PillStyle }) }), (0, jsx_runtime_1.jsxs)(core_1.Flex, Object.assign({ direction: "column", style: SheetStyle }, flexPropsRest, { children: [(0, jsx_runtime_1.jsx)("div", { onPointerDown: controls.start, style: { width: "100%", touchAction: "none" }, children: header({ title }) }), (0, jsx_runtime_1.jsx)(core_1.OverflowContainer, { innerProps: innerFlexProps, direction: allowInnerScrolling ? "vertical" : "none", children: children })] }))] })) })) }));
});
