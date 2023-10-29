"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
/** @jsxImportSource @emotion/react */
const react_1 = require("react");
const utils_1 = require("@valence-ui/utils");
const ValenceProvider_1 = require("../../../../ValenceProvider");
const hooks_1 = require("../../../../hooks");
const react_2 = require("@emotion/react");
function Image(props) {
    const theme = (0, react_1.useContext)(ValenceProvider_1.ValenceContext);
    const breakpoint = (0, hooks_1.useBreakpoint)();
    // Defaults
    const { src, alt, placeholder, radius = theme.defaultRadius, fit = "cover", position = "center", square = false, height = "fit-content", width = square ? height : "auto", shadow = false, style, id, } = props;
    // Styles
    const ContainerStyle = (0, react_2.css)(Object.assign({ height: (0, utils_1.getReactiveProp)(height, breakpoint), width: (0, utils_1.getReactiveProp)(width, breakpoint), minWidth: (0, utils_1.getReactiveProp)(width, breakpoint), borderRadius: theme.sizeClasses.radius[(0, utils_1.getReactiveProp)(radius, breakpoint)], aspectRatio: square ? "1/1" : undefined, overflow: "hidden", boxShadow: (0, utils_1.getReactiveProp)(shadow, breakpoint) ? theme.defaultShadow : "none" }, (0, utils_1.getReactiveProp)(style, breakpoint)));
    const ImageStyle = (0, react_2.css)({
        width: "100%",
        height: "100%",
        objectFit: (0, utils_1.getReactiveProp)(fit, breakpoint),
        objectPosition: (0, utils_1.getReactiveProp)(position, breakpoint)
    });
    return ((0, jsx_runtime_1.jsx)("div", { css: ContainerStyle, children: props.src ?
            (0, jsx_runtime_1.jsx)("img", { css: ImageStyle, id: id, src: src, alt: alt })
            :
                placeholder }));
}
exports.Image = Image;
