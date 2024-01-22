"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValenceProvider = exports.useValence = exports.ValenceContext = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ValenceProvider_types_1 = require("./ValenceProvider.types");
const CssOverride_1 = require("./CssOverride");
exports.ValenceContext = (0, react_1.createContext)(ValenceProvider_types_1.ValenceContextDefaults);
const useValence = () => {
    const context = (0, react_1.useContext)(exports.ValenceContext);
    if (context === null)
        throw new Error("Valence components must be wrapped in <ValenceProvider />");
    return context;
};
exports.useValence = useValence;
function ValenceProvider(props) {
    // Fallback properties
    const { colors = props.colors ? ValenceProvider_types_1.ValenceContextDefaults.colors.concat(props.colors) : ValenceProvider_types_1.ValenceContextDefaults.colors, primaryColor = ValenceProvider_types_1.ValenceContextDefaults.primaryColor, defaults = ValenceProvider_types_1.ValenceContextDefaults.defaults, fontFamily = ValenceProvider_types_1.ValenceContextDefaults.fontFamily, sizeClasses = ValenceProvider_types_1.ValenceContextDefaults.sizeClasses, titles = ValenceProvider_types_1.ValenceContextDefaults.titles, breakpoints = ValenceProvider_types_1.ValenceContextDefaults.breakpoints, } = props;
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
    return ((0, jsx_runtime_1.jsxs)(exports.ValenceContext.Provider, { value: {
            colors,
            primaryColor,
            defaults,
            fontFamily,
            getFont,
            sizeClasses,
            getSize,
            titles,
            breakpoints,
        }, children: [(0, jsx_runtime_1.jsx)(CssOverride_1.CssOverride, {}), props.children] }));
}
exports.ValenceProvider = ValenceProvider;
