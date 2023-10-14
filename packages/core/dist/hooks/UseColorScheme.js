"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useColorScheme = void 0;
const react_1 = require("react");
const usehooks_ts_1 = require("usehooks-ts");
const COLOR_SCHEME_QUERY = '(prefers-color-scheme: dark)';
/**
 * A hook that provides the current color scheme of the user's operating system and allows toggling between light and dark modes.
 * @returns An object containing the current color scheme, whether it's dark or light mode, and functions to toggle between them.
 */
function useColorScheme() {
    const isDarkOS = (0, usehooks_ts_1.useMediaQuery)(COLOR_SCHEME_QUERY);
    const [colorScheme, setColorScheme] = (0, react_1.useState)(getColorScheme());
    function getColorScheme() {
        return isDarkOS ? "dark" : "light";
    }
    // Update darkMode if os prefers changes
    (0, usehooks_ts_1.useUpdateEffect)(() => {
        setColorScheme(getColorScheme());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isDarkOS]);
    return {
        colorScheme: colorScheme,
        isDarkMode: colorScheme === "dark",
        isLightMode: colorScheme === "light",
        toggle: () => setColorScheme(colorScheme === "dark" ? "light" : "dark"),
        setDark: () => setColorScheme("dark"),
        setLight: () => setColorScheme("light"),
    };
}
exports.useColorScheme = useColorScheme;
