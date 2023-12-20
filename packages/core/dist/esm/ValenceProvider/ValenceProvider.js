import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from "react";
import { getUnidentifiedHexColor, getReactiveColor } from "../Color";
import { ValenceContextDefaults as VCD } from "./ValenceProvider.types";
import { useColorScheme } from "../hooks";
export const ValenceContext = createContext(VCD);
export const useValenceContext = () => {
    const context = useContext(ValenceContext);
    if (context === null)
        throw new Error("Valence components must be wrapped in <ValenceProvider />");
    return context;
};
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
        const colIndex = colors.findIndex(i => i.key === key);
        if (colIndex === -1)
            return key !== "#" ?
                getUnidentifiedHexColor(key)
                : getReactiveColor(colors.find(i => i.key === primaryColor), isDarkMode);
        else
            return getReactiveColor(colors.find(i => i.key === key), isDarkMode);
    }
    function getColorHex(key, opacity) {
        const color = getColor(key);
        if (color === undefined)
            return undefined;
        return `${color.base}` + (opacity ? `${color.opacity[opacity]}` : "");
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
            getColorHex,
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
