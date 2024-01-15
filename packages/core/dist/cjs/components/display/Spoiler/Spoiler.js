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
exports.Spoiler = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const framer_motion_1 = require("framer-motion");
const react_1 = require("react");
const responsive_1 = require("../../../responsive");
/** A simple wrapper component used to show or hide content at will. */
exports.Spoiler = (0, react_1.forwardRef)(function Spoiler(props, ref) {
    // Defaults
    const _a = (0, responsive_1.useResponsiveProps)(props), { show = true, style, children } = _a, rest = __rest(_a, ["show", "style", "children"]);
    // Styles
    const SpoilerStyle = Object.assign({ overflow: "hidden" }, style);
    return ((0, jsx_runtime_1.jsx)(framer_motion_1.AnimatePresence, { children: show &&
            (0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, Object.assign({ initial: { height: 0 }, animate: { height: "auto" }, exit: { height: 0 }, style: SpoilerStyle, ref: ref }, rest, { children: children })) }));
});
