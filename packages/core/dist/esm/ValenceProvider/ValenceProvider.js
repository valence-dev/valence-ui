import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useContext } from "react";
import { ValenceContextDefaults as VCD } from "./ValenceProvider.types";
import { CssOverride } from "./CssOverride";
export const ValenceContext = createContext(VCD);
export const useValence = () => {
    const context = useContext(ValenceContext);
    if (context === null)
        throw new Error("Valence components must be wrapped in <ValenceProvider />");
    return context;
};
export function ValenceProvider(props) {
    // Fallback properties
    const { colors = props.colors ? VCD.colors.concat(props.colors) : VCD.colors, primaryColor = VCD.primaryColor, defaults = VCD.defaults, fontFamily = VCD.fontFamily, sizeClasses = VCD.sizeClasses, titles = VCD.titles, breakpoints = VCD.breakpoints, } = props;
    // Methods
    function getFont(context) {
        var _a, _b;
        switch (context) {
            case "default": return fontFamily.default;
            case "heading": return (_a = fontFamily.heading) !== null && _a !== void 0 ? _a : fontFamily.default;
            case "monospace": return (_b = fontFamily.monospace) !== null && _b !== void 0 ? _b : fontFamily.default;
        }
    }
    function getSize(context, size) {
        size = size !== null && size !== void 0 ? size : defaults.size;
        return sizeClasses[context][size];
    }
    return (_jsxs(ValenceContext.Provider, { value: {
            colors,
            primaryColor,
            defaults,
            fontFamily,
            getFont,
            sizeClasses,
            getSize,
            titles,
            breakpoints,
        }, children: [_jsx(CssOverride, {}), props.children] }));
}
