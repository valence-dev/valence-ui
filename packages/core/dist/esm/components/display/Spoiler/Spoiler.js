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
import { motion } from "framer-motion";
import { forwardRef } from "react";
/** A simple wrapper component used to show or hide content at will. */
export const Spoiler = forwardRef(function Spoiler(props, ref) {
    // Defaults
    const { show = true, style, children } = props, rest = __rest(props, ["show", "style", "children"]);
    // Styles
    const SpoilerStyle = Object.assign({ overflow: "hidden" }, style);
    return (_jsx(motion.div, Object.assign({ animate: { height: show ? "auto" : 0 }, style: SpoilerStyle, ref: ref }, rest, { children: children })));
});
