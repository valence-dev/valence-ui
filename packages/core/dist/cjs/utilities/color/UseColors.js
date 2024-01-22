"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useColors = void 0;
const ValenceProvider_1 = require("../../ValenceProvider");
const hooks_1 = require("../../hooks");
const Color_1 = require("./Color");
/** `useColors` is a hook to allow the usage of Valence colors.
 * It must be used as a child of the `ValenceProvider`.
 */
function useColors() {
    const theme = (0, ValenceProvider_1.useValence)();
    const { colorScheme } = (0, hooks_1.useColorScheme)();
    function getSwatch(key) {
        if (!key)
            return undefined;
        var color = theme.colors.find(c => c.key === key);
        if (key === "primary")
            color = theme.colors.find(c => c.key === theme.primaryColor);
        var swatch;
        // If there is no color, check if the key is a hex code
        if (!color) {
            if (key.startsWith("#"))
                swatch = (0, Color_1.getDefaultSwatch)(key);
            // If the key is not a hex code, return undefined
            else
                return undefined;
        }
        // If there is a color, get the swatch
        else
            swatch = color.dark && colorScheme === "dark" ?
                color.dark : color.default;
        return swatch;
    }
    function getHex(key, opacity) {
        const swatch = getSwatch(key);
        if (!swatch)
            return key;
        return swatch.base + (opacity ? swatch.opacity[opacity] : "");
    }
    function getBackgroundColor(key, variant, hovered) {
        switch (variant) {
            case "filled": return getHex(key);
            case "light": return getHex(key, hovered ? "medium" : "weak");
            case "subtle": return hovered ? getHex(key, "weak") : "#00000000";
            default: return getHex(key);
        }
    }
    function getForegroundColor(key, variant) {
        if (variant === "filled") {
            if (key === "white")
                return getHex("black");
            return getHex("white");
        }
        return getHex(key);
    }
    return {
        getSwatch,
        getHex,
        getBgHex: getBackgroundColor,
        getFgHex: getForegroundColor
    };
}
exports.useColors = useColors;
