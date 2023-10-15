"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_COLORS = exports.getUnidentifiedHexColor = exports.getReactiveColor = void 0;
/** Retrieve a color based on the supplied reactive color
 * @param colorReactive The reactive color to retrieve
 * @param isDarkMode Whether or not the user is in dark mode
 */
function getReactiveColor(colorReactive, isDarkMode = false) {
    if (!colorReactive)
        return;
    if (colorReactive.dark && isDarkMode)
        return colorReactive.dark;
    else
        return colorReactive.default;
}
exports.getReactiveColor = getReactiveColor;
/** Retrieve default props for a color that is not defined in the theme
 * @param hex The hex code of the color to retrieve
*/
function getUnidentifiedHexColor(hex) {
    return { base: hex, opacity: { weak: "20", medium: "4A", strong: "A0" } };
}
exports.getUnidentifiedHexColor = getUnidentifiedHexColor;
const BASE_WHITE = { base: "#EFEEEE", opacity: { weak: "19", medium: "2A", strong: "A0" } }, BASE_BLACK = { base: "#11181C", opacity: { weak: "19", medium: "30", strong: "5A" } };
exports.DEFAULT_COLORS = [
    {
        key: "white",
        default: BASE_WHITE,
        dark: BASE_BLACK,
    },
    {
        key: "black",
        default: BASE_BLACK,
        dark: BASE_WHITE,
    },
    {
        key: "permaWhite",
        default: BASE_WHITE,
    },
    {
        key: "permaBlack",
        default: BASE_BLACK,
    },
    {
        key: "violet",
        default: { base: "#7C5DDE", opacity: { weak: "20", medium: "4A", strong: "A0" } },
        dark: { base: "#8F76DE", opacity: { weak: "20", medium: "4A", strong: "A0" } }
    },
    {
        key: "red",
        default: { base: "#E5524F", opacity: { weak: "20", medium: "4A", strong: "A0" } },
        dark: { base: "#E26765", opacity: { weak: "20", medium: "4A", strong: "A0" } }
    },
];
