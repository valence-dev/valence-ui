import { jsx as _jsx } from "react/jsx-runtime";
import { useContext } from "react";
import { motion } from "framer-motion";
import { ValenceContext } from "../../..";
const SIZES = {
    xs: { height: 12, thickness: 2 },
    sm: { height: 14, thickness: 2 },
    md: { height: 16, thickness: 2.5 },
    lg: { height: 20, thickness: 3 },
    xl: { height: 25, thickness: 3.5 },
};
export function Loader(props) {
    var _a;
    const theme = useContext(ValenceContext);
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
    return (_jsx(motion.div, { style: loaderStyle, animate: { rotate: 360 }, transition: { repeat: Infinity, type: "tween", duration: 0.8, ease: "linear" } }));
}
