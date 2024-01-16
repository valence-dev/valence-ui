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
import { jsx as _jsx } from "react/jsx-runtime";
import { AnimatePresence, motion } from "framer-motion";
import { forwardRef } from "react";
import { useResponsiveProps } from "../../../utilities/responsive";
/** A simple wrapper component used to show or hide content at will. */
export const Spoiler = forwardRef(function Spoiler(props, ref) {
    // Defaults
    const _a = useResponsiveProps(props), { show = true, style, children } = _a, rest = __rest(_a, ["show", "style", "children"]);
    // Styles
    const SpoilerStyle = Object.assign({ overflow: "hidden" }, style);
    return (_jsx(AnimatePresence, { children: show &&
            _jsx(motion.div, Object.assign({ initial: { height: 0 }, animate: { height: "auto" }, exit: { height: 0 }, style: SpoilerStyle, ref: ref }, rest, { children: children })) }));
});
