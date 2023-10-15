import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from "framer-motion";
/** A simple wrapper component used to show or hide content at will. */
export function Spoiler(props) {
    const { show = true, id, style, children, } = props;
    return (_jsx(motion.div, { id: id, animate: { height: show ? "auto" : 0 }, style: Object.assign({ overflow: "hidden" }, style), children: children }));
}
