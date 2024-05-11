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
exports.ColorPicker = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const utilities_1 = require("../../../utilities");
const react_1 = require("react");
const ValenceProvider_1 = require("../../../ValenceProvider");
const layout_1 = require("../../layout");
const buttons_1 = require("../../buttons");
const display_1 = require("../../display");
exports.ColorPicker = (0, react_1.forwardRef)(function ColorPicker(props, ref) {
    const theme = (0, ValenceProvider_1.useValence)();
    const { getHex } = (0, utilities_1.useColors)();
    // Defaults
    const _a = (0, utilities_1.useResponsiveProps)(props), { colors = theme.colors.filter(c => c.key !== "permaBlack" && c.key !== "permaWhite"), value, setValue, onSelect, grow = true, gap = 5, wrap = "nowrap", size = theme.defaults.size, radius = "xl", swatchMotion = { onHover: "grow", onTap: "shrink" }, style } = _a, rest = __rest(_a, ["colors", "value", "setValue", "onSelect", "grow", "gap", "wrap", "size", "radius", "swatchMotion", "style"]);
    // Styles
    const ContainerStyle = Object.assign({ padding: 5 }, style);
    const ButtonStyle = {
        cursor: "pointer",
        borderRadius: theme.sizeClasses.radius[radius],
    };
    return ((0, jsx_runtime_1.jsx)(layout_1.OverflowContainer, { ref: ref, direction: "horizontal", innerProps: {
            gap: gap,
            direction: "row",
            wrap: wrap,
            style: ContainerStyle,
        }, children: colors.map((color, i) => ((0, jsx_runtime_1.jsx)(buttons_1.UnstyledButton, { style: Object.assign({ outline: value === color.key ?
                    `1px solid ${getHex("black")}` : undefined }, ButtonStyle), motion: swatchMotion, onClick: () => {
                setValue === null || setValue === void 0 ? void 0 : setValue(color.key);
                onSelect === null || onSelect === void 0 ? void 0 : onSelect(color.key);
            }, children: (0, jsx_runtime_1.jsx)(display_1.ColorSwatch, { color: color.key, size: size, radius: radius }) }, i))) }));
});
