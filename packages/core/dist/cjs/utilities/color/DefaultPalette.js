"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_PALETTE = void 0;
const BASE_WHITE = { base: "#EFEEEE", opacity: { weak: "19", medium: "2A", strong: "A0" } }, BASE_BLACK = { base: "#11181C", opacity: { weak: "19", medium: "30", strong: "5A" } }, BRIGHTER_WHITE = { base: "#F5F5F5", opacity: { weak: "19", medium: "2A", strong: "A0" } }, DARKER_BLACK = { base: "#0F1417", opacity: { weak: "19", medium: "30", strong: "5A" } };
/** The default palette used by the `ValenceProvider`. */
exports.DEFAULT_PALETTE = [
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
        key: "brighterWhite",
        default: BRIGHTER_WHITE,
        dark: DARKER_BLACK,
    },
    {
        key: "darkerBlack",
        default: DARKER_BLACK,
        dark: BRIGHTER_WHITE,
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
