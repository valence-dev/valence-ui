"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValenceContextDefaults = void 0;
const color_1 = require("../utilities/color");
exports.ValenceContextDefaults = {
    colors: color_1.DEFAULT_PALETTE,
    primaryColor: "pink",
    preferredColorScheme: "system",
    defaults: {
        size: "sm",
        radius: "sm",
        variant: "light",
        transitionDuration: "0.1s",
        shadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
    },
    fontFamily: {
        default: "Inter, sans-serif",
        heading: undefined,
        monospace: "monospace",
    },
    getFont: () => "",
    sizeClasses: {
        padding: { xs: 10, sm: 15, md: 20, lg: 25, xl: 30 },
        height: { xs: 30, sm: 35, md: 40, lg: 50, xl: 60 },
        radius: { xs: 2, sm: 5, md: 10, lg: 15, xl: 25 },
        fontSize: { xs: 12, sm: 14, md: 16, lg: 18, xl: 20 },
        iconSize: { xs: 18, sm: 20, md: 24, lg: 26, xl: 30 },
    },
    getSize: () => undefined,
    titles: {
        1: { fontSize: 28, bold: true },
        2: { fontSize: 22, bold: true },
        3: { fontSize: 18, bold: true },
        4: { fontSize: 16, bold: true },
        5: { fontSize: 14, bold: true },
        6: { fontSize: 12, bold: true },
    },
    breakpoints: {
        mobileWidth: 480,
        tabletWidth: 768,
        desktopLargeWidth: 1024,
        tvWidth: 1440,
    }
};
