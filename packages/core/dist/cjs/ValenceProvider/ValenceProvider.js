"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValenceProvider = exports.useValence = exports.ValenceContext = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Color_1 = require("../Color");
const ValenceProvider_types_1 = require("./ValenceProvider.types");
const hooks_1 = require("../hooks");
exports.ValenceContext = (0, react_1.createContext)(ValenceProvider_types_1.ValenceContextDefaults);
const useValence = () => {
    const context = (0, react_1.useContext)(exports.ValenceContext);
    if (context === null)
        throw new Error("Valence components must be wrapped in <ValenceProvider />");
    return context;
};
exports.useValence = useValence;
function ValenceProvider(props) {
    // Hooks
    const { isDarkMode } = (0, hooks_1.useColorScheme)();
    // Defaults
    const { colors = props.colors ? ValenceProvider_types_1.ValenceContextDefaults.colors.concat(props.colors) : ValenceProvider_types_1.ValenceContextDefaults.colors, primaryColor = ValenceProvider_types_1.ValenceContextDefaults.primaryColor, defaultSize = ValenceProvider_types_1.ValenceContextDefaults.defaultSize, defaultRadius = ValenceProvider_types_1.ValenceContextDefaults.defaultRadius, defaultTransitionDuration = ValenceProvider_types_1.ValenceContextDefaults.defaultTransitionDuration, defaultShadow = ValenceProvider_types_1.ValenceContextDefaults.defaultShadow, defaultVariant = ValenceProvider_types_1.ValenceContextDefaults.defaultVariant, fontFamily = ValenceProvider_types_1.ValenceContextDefaults.fontFamily, sizeClasses = ValenceProvider_types_1.ValenceContextDefaults.sizeClasses, titles = ValenceProvider_types_1.ValenceContextDefaults.titles, breakpoints = ValenceProvider_types_1.ValenceContextDefaults.breakpoints, } = props;
    function getColor(key) {
        if (key === undefined)
            return undefined;
        if (key === "primary")
            return (0, Color_1.getReactiveColor)(colors.find(i => i.key === primaryColor));
        const colIndex = colors.findIndex(i => i.key === key);
        if (colIndex === -1)
            return key !== "#" ?
                (0, Color_1.getUnidentifiedHexColor)(key)
                : (0, Color_1.getReactiveColor)(colors.find(i => i.key === primaryColor), isDarkMode);
        else
            return (0, Color_1.getReactiveColor)(colors.find(i => i.key === key), isDarkMode);
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
    function getSize(context, size) {
        size = size !== null && size !== void 0 ? size : defaultSize;
        return sizeClasses[context][size];
    }
    return ((0, jsx_runtime_1.jsx)(exports.ValenceContext.Provider, { value: {
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
            getSize,
            titles,
            breakpoints,
        }, children: props.children }));
}
exports.ValenceProvider = ValenceProvider;
