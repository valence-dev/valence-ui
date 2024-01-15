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
exports.Avatar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Image_1 = require("../Image");
const ValenceProvider_1 = require("../../../../ValenceProvider");
const icons_react_1 = require("@tabler/icons-react");
const buttons_1 = require("../../../buttons");
const layout_1 = require("../../../layout");
const Icon_1 = require("../../Icon");
exports.Avatar = (0, react_1.forwardRef)(function Avatar(props, ref) {
    const theme = (0, ValenceProvider_1.useValence)();
    // Defaults
    const { placeholderIcon, placeholderColor = theme.primaryColor, fillVariant = theme.defaults.variant, placeholder = (0, jsx_runtime_1.jsx)(icons_react_1.IconUserCircle, {}), square = true, radius = "xl", style } = props, rest = __rest(props, ["placeholderIcon", "placeholderColor", "fillVariant", "placeholder", "square", "radius", "style"]);
    // Styles
    const imageStyle = Object.assign({ backgroundColor: (0, buttons_1.getBackgroundColor)(placeholderColor, fillVariant, false, theme), color: (0, buttons_1.getTextColor)(placeholderColor, fillVariant, theme) }, style);
    return ((0, jsx_runtime_1.jsx)(Image_1.Image, Object.assign({ style: imageStyle, radius: radius, square: square, placeholder: (0, jsx_runtime_1.jsx)(layout_1.Flex, { align: "center", justify: "center", height: "100%", width: "100%", children: (0, jsx_runtime_1.jsx)(Icon_1.Icon, { children: placeholder }) }), ref: ref }, rest)));
});
