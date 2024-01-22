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
exports.IconButton = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ValenceProvider_1 = require("../../../ValenceProvider");
const responsive_1 = require("../../../utilities/responsive");
const display_1 = require("../../display");
const overlays_1 = require("../../overlays");
const PrimitiveButton_1 = require("../PrimitiveButton");
const react_1 = require("react");
exports.IconButton = (0, react_1.forwardRef)(function IconButton(props, ref) {
    const _a = (0, responsive_1.useResponsiveProps)(props), { tooltip, tooltipProps, tooltipContentProps, color = "primary", size, square = true, children } = _a, rest = __rest(_a, ["tooltip", "tooltipProps", "tooltipContentProps", "color", "size", "square", "children"]);
    return (tooltip ?
        (0, jsx_runtime_1.jsxs)(overlays_1.Tooltip, Object.assign({ placement: "bottom" }, tooltipProps, { children: [(0, jsx_runtime_1.jsx)(overlays_1.Tooltip.Trigger, { children: (0, jsx_runtime_1.jsx)(Button, Object.assign({ color: color, size: size, square: square }, rest, { ref: ref, children: children })) }), (0, jsx_runtime_1.jsx)(overlays_1.Tooltip.Content, Object.assign({ backgroundColor: color, zIndex: 999 }, tooltipContentProps, { children: tooltip }))] }))
        :
            (0, jsx_runtime_1.jsx)(Button, Object.assign({ color: color, size: size, square: square }, rest, { ref: ref, children: children })));
});
const Button = (0, react_1.forwardRef)(function Button(props, ref) {
    const { size, children } = props, rest = __rest(props, ["size", "children"]);
    const theme = (0, ValenceProvider_1.useValence)();
    return ((0, jsx_runtime_1.jsx)(PrimitiveButton_1.PrimitiveButton, Object.assign({ size: size, ref: ref }, rest, { children: (0, jsx_runtime_1.jsx)(display_1.Icon, { size: theme.getSize("iconSize", size), children: children }) })));
});
