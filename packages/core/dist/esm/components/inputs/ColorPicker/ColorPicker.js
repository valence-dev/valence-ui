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
import { jsx as _jsx } from "react/jsx-runtime";
import { useColors, useResponsiveProps } from "../../../utilities";
import { forwardRef } from "react";
import { useValence } from "../../../ValenceProvider";
import { OverflowContainer } from "../../layout";
import { UnstyledButton } from "../../buttons";
import { ColorSwatch } from "../../display";
export const ColorPicker = forwardRef(function ColorPicker(props, ref) {
    const theme = useValence();
    const { getHex } = useColors();
    // Defaults
    const _a = useResponsiveProps(props), { excludeColors = ["permaBlack", "permaWhite", "white", "brighterWhite", "darkerBlack"], colors = theme.colors, value, setValue, onSelect, gap = 5, wrap = "nowrap", width, height, padding = 5, margin, size = theme.defaults.size, radius = "xl", swatchMotion = { onHover: "grow", onTap: "shrink" }, style } = _a, rest = __rest(_a, ["excludeColors", "colors", "value", "setValue", "onSelect", "gap", "wrap", "width", "height", "padding", "margin", "size", "radius", "swatchMotion", "style"]);
    const usableColors = colors.filter(c => !excludeColors.includes(c.key));
    // Styles
    const ContainerStyle = Object.assign({ padding: padding, margin: margin }, style);
    const ButtonStyle = {
        cursor: "pointer",
        borderRadius: theme.sizeClasses.radius[radius],
    };
    return (_jsx(OverflowContainer, { ref: ref, direction: "horizontal", width: width, height: height, innerProps: {
            gap: gap,
            direction: "row",
            wrap: wrap,
            style: ContainerStyle,
        }, children: usableColors.map((color, i) => (_jsx(UnstyledButton, { style: Object.assign({ outline: value === color.key ?
                    `1px solid ${getHex("black")}` : undefined }, ButtonStyle), motion: swatchMotion, onClick: () => {
                setValue === null || setValue === void 0 ? void 0 : setValue(color.key);
                onSelect === null || onSelect === void 0 ? void 0 : onSelect(color.key);
            }, children: _jsx(ColorSwatch, { color: color.key, size: size, radius: radius }) }, i))) }));
});
