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
import { DefaultModalHeader, Flex, ModalBackground, ValenceContext, useBreakpoint, useDetectKeyDown } from "@valence-ui/core";
import { getReactiveProp } from "@valence-ui/utils";
import { useLockedBody } from "usehooks-ts";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
export const SideSheet = forwardRef(function SideSheet(props, ref) {
    const theme = useContext(ValenceContext);
    const breakpoint = useBreakpoint();
    // Defaults
    const { disclosure, title, header = (props) => _jsx(DefaultModalHeader, Object.assign({ disclosure: disclosure }, props)), type = { default: "standard", desktopThin: "overlay", mobile: "overlay" }, closeOnOverlayClick = true, closeOnEscape = true, lockScroll = false, radius = "lg", withShadow = true, backgroundColor = theme.getColorHex("white"), color = theme.getColorHex("black"), padding = theme.sizeClasses.padding[theme.defaults.size], margin = 0, width = 350, height = "100vh", flexProps, overlayBackgroundProps = {
        padding: 0,
        style: {
            alignItems: "flex-end",
        }
    }, style, children } = props, rest = __rest(props, ["disclosure", "title", "header", "type", "closeOnOverlayClick", "closeOnEscape", "lockScroll", "radius", "withShadow", "backgroundColor", "color", "padding", "margin", "width", "height", "flexProps", "overlayBackgroundProps", "style", "children"]);
    // Styles
    const borderRadius = theme.sizeClasses.radius[radius];
    const SheetStyle = Object.assign({ position: "fixed", top: 0, right: 0, bottom: 0, zIndex: 999, width: width, maxWidth: "100%", height: height, backgroundColor: backgroundColor, color: color, padding: padding, margin: margin, boxSizing: "border-box", borderRadius: getReactiveProp(type, breakpoint) !== "overlay" ? undefined :
            `${borderRadius}px 0 0 ${borderRadius}px`, boxShadow: withShadow && getReactiveProp(type, breakpoint) === "overlay" ?
            theme.defaults.shadow : undefined, borderLeft: getReactiveProp(type, breakpoint) === "overlay" ? undefined :
            `1px solid ${theme.getColorHex("black", "weak")}`, overflowX: "hidden", overflowY: "auto" }, style);
    // Hooks
    useLockedBody(disclosure.opened && lockScroll && getReactiveProp(type, breakpoint) === "overlay", "root");
    useDetectKeyDown(disclosure.close, "Escape", closeOnEscape, [closeOnEscape, close]);
    // Effects
    useEffect(() => {
        // When the overlay is opened and the mode is "standard", we want to attempt to 
        // find and set the right padding of the root element to the width of the sheet
        const element = document.getElementById("root-content");
        if (!element)
            return;
        if (disclosure.opened && getReactiveProp(type, breakpoint) === "standard") {
            element.style.paddingRight = `calc(30px + ${width}px)`;
        }
        else {
            element.style.paddingRight = `30px`;
        }
    }, [disclosure.opened]);
    return (_jsx(AnimatePresence, { children: disclosure.opened &&
            _jsx(OptionalBackground, { disclosure: disclosure, showBackground: getReactiveProp(type, breakpoint) === "overlay", backgroundProps: overlayBackgroundProps, children: _jsx(motion.div, Object.assign({ style: SheetStyle, onClick: e => e.stopPropagation(), initial: { x: "100%" }, animate: {
                        x: 0,
                        transition: {
                            type: "spring",
                            stiffness: 400,
                            damping: 40,
                            delay: 0.1,
                        }
                    }, exit: { x: "100%" }, ref: ref }, rest, { children: _jsxs(Flex, Object.assign({ direction: "column" }, flexProps, { children: [header({ title }), children] })) })) }) }));
});
function OptionalBackground(props) {
    const { children, disclosure, showBackground, backgroundProps } = props;
    return (_jsx(_Fragment, { children: showBackground ?
            _jsx(ModalBackground, Object.assign({ disclosure: disclosure }, backgroundProps, { children: children }))
            :
                children }));
}
