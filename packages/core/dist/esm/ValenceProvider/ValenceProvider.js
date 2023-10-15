import { jsx as _jsx } from "react/jsx-runtime";
import { createContext } from "react";
import { getUnidentifiedHexColor, getReactiveColor } from "../Color";
import { ValenceContextDefaults as VCD } from "./ValenceProvider.types";
import { useColorScheme } from "../hooks";
export const ValenceContext = createContext(VCD);
export function ValenceProvider(props) {
    // Hooks
    const { isDarkMode } = useColorScheme();
    // Defaults
    const { colors = props.colors ? VCD.colors.concat(props.colors) : VCD.colors, primaryColor = VCD.primaryColor, defaultSize = VCD.defaultSize, defaultRadius = VCD.defaultRadius, defaultTransitionDuration = VCD.defaultTransitionDuration, defaultShadow = VCD.defaultShadow, defaultVariant = VCD.defaultVariant, fontFamily = VCD.fontFamily, sizeClasses = VCD.sizeClasses, titles = VCD.titles, breakpoints = VCD.breakpoints, } = props;
    function getColor(key) {
        if (key === undefined)
            return undefined;
        if (key === "primary")
            return getReactiveColor(colors.find(i => i.key === primaryColor));
        const baseColor = getReactiveColor(colors.find(i => i.key === key), isDarkMode);
        return baseColor ? baseColor
            : key !== "#" ?
                getReactiveColor(colors.find(i => i.key === primaryColor), isDarkMode)
                : getUnidentifiedHexColor(key);
    }
    function getFont(context) {
        var _a, _b;
        switch (context) {
            case "default": return fontFamily.default;
            case "heading": return (_a = fontFamily.heading) !== null && _a !== void 0 ? _a : fontFamily.default;
            case "monospace": return (_b = fontFamily.monospace) !== null && _b !== void 0 ? _b : fontFamily.default;
        }
    }
    return (_jsx(ValenceContext.Provider, { value: {
            colors,
            getColor,
            primaryColor,
            defaultSize,
            defaultRadius,
            defaultTransitionDuration,
            defaultShadow,
            defaultVariant,
            fontFamily,
            getFont,
            sizeClasses,
            titles,
            breakpoints,
        }, children: props.children }));
}
