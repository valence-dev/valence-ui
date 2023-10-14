"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spoiler = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const framer_motion_1 = require("framer-motion");
/** A simple wrapper component used to show or hide content at will. */
function Spoiler(props) {
    const { show = true, id, style, children, } = props;
    return ((0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { id: id, animate: { height: show ? "auto" : 0 }, style: Object.assign({ overflow: "hidden" }, style), children: children }));
}
exports.Spoiler = Spoiler;
