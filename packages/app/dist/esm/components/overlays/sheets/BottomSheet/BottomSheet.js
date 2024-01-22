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
import { ValenceContext, ModalBackground, Flex, useDetectKeyDown, DefaultModalHeader, useResponsiveProps, useColors } from "@valence-ui/core";
import { useContext, forwardRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLockedBody } from "usehooks-ts";
export const BottomSheet = forwardRef(function BottomSheet(props, ref) {
    const theme = useContext(ValenceContext);
    const { getHex } = useColors();
    // Defaults
    const _a = useResponsiveProps(props), { disclosure, title, header = (props) => _jsx(DefaultModalHeader, Object.assign({ disclosure: disclosure }, props)), releaseOffset = Math.round(window.innerHeight / 2), releaseVelocity = 500, closeOnOverlayClick = true, closeOnEscape = true, lockScroll = false, radius = "lg", withShadow = true, backgroundColor = getHex("white"), color = getHex("black"), padding = theme.sizeClasses.padding[theme.defaults.size], margin = 0, width, height = "100%", flexProps, overlayBackgroundProps = {
        padding: 0,
        style: {
            alignItems: "flex-end",
        }
    }, style, children } = _a, rest = __rest(_a, ["disclosure", "title", "header", "releaseOffset", "releaseVelocity", "closeOnOverlayClick", "closeOnEscape", "lockScroll", "radius", "withShadow", "backgroundColor", "color", "padding", "margin", "width", "height", "flexProps", "overlayBackgroundProps", "style", "children"]);
    // Functions
    function handleDragEnd(e, { offset, velocity }) {
        if (offset.y > releaseOffset
            || velocity.y > releaseVelocity)
            disclosure.close();
    }
    // Styles
    const borderRadius = theme.sizeClasses.radius[radius];
    const ContainerStyles = css(Object.assign({ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 999, width: width, height: height }, style));
    const SheetStyle = {
        height: "100%",
        width: "100%",
        backgroundColor: backgroundColor,
        color: color,
        padding: padding,
        margin: margin,
        borderRadius: `${borderRadius}px ${borderRadius}px 0 0`,
        boxShadow: withShadow ? theme.defaults.shadow : undefined,
        overflowX: "hidden",
        overflowY: "auto",
    };
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
    return (_jsx(AnimatePresence, { children: disclosure.opened &&
            _jsx(ModalBackground, Object.assign({ disclosure: disclosure }, overlayBackgroundProps, { children: _jsxs(motion.div, Object.assign({ css: ContainerStyles, onClick: e => e.stopPropagation(), drag: "y", dragConstraints: { top: 0 }, dragSnapToOrigin: true, onDragEnd: handleDragEnd, initial: { y: "100%" }, animate: {
                        y: 0,
                        transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 40,
                            delay: 0.1,
                        }
                    }, exit: { y: "100%" }, ref: ref }, rest, { children: [_jsx("div", { style: DragStyle, children: _jsx("div", { style: PillStyle }) }), _jsxs(Flex, Object.assign({ direction: "column", style: SheetStyle }, flexProps, { children: [header({ title }), children] }))] })) })) }));
});
