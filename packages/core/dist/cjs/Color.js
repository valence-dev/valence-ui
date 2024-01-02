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
// Black and white will automatically flip between light and dark modes
const BASE_WHITE = { base: "#EFEEEE", opacity: { weak: "19", medium: "2A", strong: "A0" } }, BASE_BLACK = { base: "#11181C", opacity: { weak: "19", medium: "30", strong: "5A" } };
// Default colors to use
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
        key: "pink",
        default: { base: "#F6396F", opacity: { weak: "26", medium: "4D", strong: "99" } },
        dark: { base: "#FF5586", opacity: { weak: "33", medium: "59", strong: "99" } }
    },
    {
        key: "red",
        default: { base: "#E54542", opacity: { weak: "26", medium: "4D", strong: "99" } },
        dark: { base: "#E26765", opacity: { weak: "40", medium: "66", strong: "A6" } }
    },
    {
        key: "orange",
        default: { base: "#F49740", opacity: { weak: "40", medium: "66", strong: "A6" } },
        dark: { base: "#ED9C51", opacity: { weak: "33", medium: "66", strong: "A6" } }
    },
    {
        key: "yellow",
        default: { base: "#E9BA3A", opacity: { weak: "40", medium: "66", strong: "A6" } },
        dark: { base: "#F7CD5A", opacity: { weak: "33", medium: "66", strong: "A6" } }
    },
    {
        key: "lime",
        default: { base: "#8DC139", opacity: { weak: "33", medium: "66", strong: "99" } },
        dark: { base: "#D1FF86", opacity: { weak: "33", medium: "59", strong: "99" } }
    },
    {
        key: "green",
        default: { base: "#31C57A", opacity: { weak: "40", medium: "66", strong: "A6" } },
        dark: { base: "#53CA8E", opacity: { weak: "33", medium: "66", strong: "A6" } }
    },
    {
        key: "teal",
        default: { base: "#00C4A8", opacity: { weak: "33", medium: "66", strong: "99" } },
        dark: { base: "#31C5B0", opacity: { weak: "33", medium: "66", strong: "A6" } }
    },
    {
        key: "cyan",
        default: { base: "#18B3C6", opacity: { weak: "33", medium: "66", strong: "99" } },
        dark: { base: "#3AC8D9", opacity: { weak: "33", medium: "66", strong: "A6" } }
    },
    {
        key: "blue",
        default: { base: "#4575EA", opacity: { weak: "26", medium: "4D", strong: "99" } },
        dark: { base: "#4B91FF", opacity: { weak: "33", medium: "4D", strong: "99" } }
    },
    {
        key: "violet",
        default: { base: "#7C5DDE", opacity: { weak: "33", medium: "59", strong: "99" } },
        dark: { base: "#8F76DE", opacity: { weak: "40", medium: "66", strong: "A6" } }
    },
    {
        key: "grape",
        default: { base: "#C745EA", opacity: { weak: "33", medium: "59", strong: "99" } },
        dark: { base: "#DC67FB", opacity: { weak: "26", medium: "59", strong: "99" } }
    },
];
