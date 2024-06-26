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
exports.UnstyledButton = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
/** @jsxImportSource @emotion/react */
const utils_1 = require("@valence-ui/utils");
const react_1 = require("@emotion/react");
const react_2 = require("react");
const responsive_1 = require("../../../utilities/responsive");
const Helpers_1 = require("../Helpers");
const framer_motion_1 = require("framer-motion");
exports.UnstyledButton = (0, react_2.forwardRef)(function UnstyledButton(props, ref) {
    // Hooks & states
    const reducedMotion = (0, framer_motion_1.useReducedMotion)();
    // Defaults
    const _a = (0, responsive_1.useResponsiveProps)(props), { style, children, motion } = _a, rest = __rest(_a, ["style", "children", "motion"]);
    const motionBehaviour = (0, Helpers_1.getMotionBehaviour)(motion, reducedMotion);
    // Styles
    const UnstyledButtonStyle = (0, react_1.css)(Object.assign({ outline: "none", border: "none", textDecoration: "none", background: "none", padding: 0, margin: 0 }, style));
    return ((0, jsx_runtime_1.jsx)(utils_1.PolymorphicButton, Object.assign({ css: UnstyledButtonStyle, ref: ref, whileHover: motionBehaviour.whileHover, whileTap: motionBehaviour.whileTap }, rest, { children: children })));
});
