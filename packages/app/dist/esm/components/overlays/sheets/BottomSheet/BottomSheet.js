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
import { jsx as _jsx, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ValenceContext, ModalBackground, Flex, useDetectKeyDown, DefaultModalHeader, useResponsiveProps, useColors, OverflowContainer } from "@valence-ui/core";
import { useContext, forwardRef } from "react";
import { AnimatePresence, motion, useDragControls } from "framer-motion";
import { useLockedBody } from "usehooks-ts";
import { FloatingFocusManager, useFloating, useId, useInteractions, useRole } from "@floating-ui/react";
export const BottomSheet = forwardRef(function BottomSheet(props, ref) {
    const theme = useContext(ValenceContext);
    const { getHex } = useColors();
    const controls = useDragControls();
    // Defaults
    const _a = useResponsiveProps(props), { disclosure, title, header = (props) => _jsx(DefaultModalHeader, Object.assign({ disclosure: disclosure }, props)), releaseOffset = Math.round(window.innerHeight / 2), releaseVelocity = 500, allowInnerScrolling = false, closeOnOverlayClick = true, closeOnEscape = true, lockScroll = true, radius = "lg", withShadow = true, backgroundColor = getHex("white"), color = getHex("black"), padding = theme.sizeClasses.padding[theme.defaults.size], margin = 0, width, height = "100%", flexProps, innerFlexProps, overlayBackgroundProps = {
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
    const ContainerStyles = css(Object.assign({ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 999, width: width, height: height }, style));
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
    useLockedBody(disclosure.opened && lockScroll, "root");
    useDetectKeyDown(disclosure.close, "Escape", closeOnEscape, [closeOnEscape, close]);
    // Floating UI
    const { refs, context } = useFloating({
        open: disclosure.opened,
        onOpenChange: disclosure.update,
    });
    const role = useRole(context);
    const { getFloatingProps } = useInteractions([
        role,
    ]);
    const labelId = useId();
    const descriptionId = useId();
    return (_jsx(AnimatePresence, { children: disclosure.opened &&
            _jsx(ModalBackground, Object.assign({ disclosure: disclosure }, overlayBackgroundProps, { children: _jsx(FloatingFocusManager, { context: context, children: _jsxs(motion.div, Object.assign({ css: ContainerStyles, onClick: e => e.stopPropagation(), drag: "y", dragConstraints: { top: 0 }, dragSnapToOrigin: true, onDragEnd: handleDragEnd, initial: { y: "100%" }, animate: {
                            y: 0,
                            transition: {
                                type: "spring",
                                stiffness: 400,
                                damping: 40,
                                delay: 0.1,
                            }
                        }, exit: { y: "100%" }, ref: refs.setFloating, "aria-labelledby": labelId, "aria-describedby": descriptionId }, getFloatingProps(), rest, { children: [_jsx("div", { style: DragStyle, children: _jsx("div", { style: PillStyle }) }), _jsxs(Flex, Object.assign({ direction: "column", style: SheetStyle }, flexPropsRest, { children: [_jsx("div", { onPointerDown: controls.start, style: { width: "100%", touchAction: "none" }, children: header({ title }) }), _jsx(OverflowContainer, { innerProps: innerFlexProps, direction: allowInnerScrolling ? "vertical" : "none", children: children })] }))] })) }) })) }));
});
