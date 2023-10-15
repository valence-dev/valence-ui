"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loader = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const framer_motion_1 = require("framer-motion");
const __1 = require("../../..");
const SIZES = {
    xs: { height: 12, thickness: 2 },
    sm: { height: 14, thickness: 2 },
    md: { height: 16, thickness: 2.5 },
    lg: { height: 20, thickness: 3 },
    xl: { height: 25, thickness: 3.5 },
};
function Loader(props) {
    var _a;
    const theme = (0, react_1.useContext)(__1.ValenceContext);
    const size = props.size || theme.defaultSize;
    const loaderStyle = {
        width: SIZES[size].height,
        height: SIZES[size].height,
        border: `${SIZES[size].thickness}px solid #11181C00`,
        borderBottomColor: ((_a = theme.getColor(props.color ? props.color : theme.primaryColor)) === null || _a === void 0 ? void 0 : _a.base) || props.color,
        borderRadius: "50%",
        display: "inline-block",
        boxSizing: "border-box",
    };
    return ((0, jsx_runtime_1.jsx)(framer_motion_1.motion.div, { style: loaderStyle, animate: { rotate: 360 }, transition: { repeat: Infinity, type: "tween", duration: 0.8, ease: "linear" } }));
}
exports.Loader = Loader;
