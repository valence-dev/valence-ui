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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { forwardRef, useContext, useEffect } from "react";
import { DefaultModalHeader, Flex, ModalBackground, OverflowContainer, ValenceContext, useColors, useDetectKeyDown, useResponsiveProps } from "@valence-ui/core";
import { useLockedBody } from "usehooks-ts";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
export const SideSheet = forwardRef(function SideSheet(props, ref) {
    const theme = useContext(ValenceContext);
    const { getHex } = useColors();
    // Defaults
    const _a = useResponsiveProps(props), { disclosure, title, header = (props) => _jsx(DefaultModalHeader, Object.assign({ disclosure: disclosure }, props)), display = useResponsiveProps({ default: "inline", tablet: "overlay", mobile: "overlay" }), direction = "right", closeOnOverlayClick = true, closeOnEscape = true, lockScroll = false, radius = "lg", withShadow = true, backgroundColor = getHex("white"), color = getHex("black"), padding = theme.sizeClasses.padding[theme.defaults.size], margin = 0, width = 350, height = "100vh", flexProps, innerFlexProps, overlayBackgroundProps = {
        padding: 0,
        style: {
            alignItems: "flex-end",
        }
    }, style, children } = _a, rest = __rest(_a, ["disclosure", "title", "header", "display", "direction", "closeOnOverlayClick", "closeOnEscape", "lockScroll", "radius", "withShadow", "backgroundColor", "color", "padding", "margin", "width", "height", "flexProps", "innerFlexProps", "overlayBackgroundProps", "style", "children"]);
    const fixedDirection = display === "overlay" ? direction : "right";
    // Styles
    const borderRadius = theme.sizeClasses.radius[radius];
    const SheetStyle = Object.assign({ position: "fixed", top: 0, right: fixedDirection === "right" ? 0 : undefined, left: fixedDirection === "left" ? 0 : undefined, bottom: 0, zIndex: 999, width: width, maxWidth: "100%", height: height, backgroundColor: backgroundColor, color: color, padding: padding, margin: margin, boxSizing: "border-box", borderRadius: display !== "overlay" ? undefined :
            fixedDirection === "right" ?
                `${borderRadius}px 0 0 ${borderRadius}px` :
                `0 ${borderRadius}px ${borderRadius}px 0`, boxShadow: withShadow && display === "overlay" ?
            theme.defaults.shadow : undefined, borderLeft: `1px solid ${getHex("black", "weak")}` }, style);
    // Hooks
    useLockedBody(disclosure.opened && lockScroll && display === "overlay", "root");
    useDetectKeyDown(disclosure.close, "Escape", closeOnEscape, [closeOnEscape, close]);
    // Effects
    useEffect(() => {
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
    return (_jsx(AnimatePresence, { children: disclosure.opened &&
            _jsx(OptionalBackground, { disclosure: disclosure, showBackground: display === "overlay", backgroundProps: overlayBackgroundProps, children: _jsx(motion.div, Object.assign({ style: SheetStyle, onClick: e => e.stopPropagation(), initial: {
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
                    }, ref: ref }, rest, { children: _jsxs(Flex, Object.assign({ direction: "column", height: "100%" }, flexProps, { children: [header({ title }), _jsx(OverflowContainer, { innerProps: innerFlexProps, children: children })] })) })) }) }));
});
function OptionalBackground(props) {
    const { children, disclosure, showBackground, backgroundProps } = props;
    return (_jsx(_Fragment, { children: showBackground ?
            _jsx(ModalBackground, Object.assign({ disclosure: disclosure }, backgroundProps, { children: children }))
            :
                children }));
}
