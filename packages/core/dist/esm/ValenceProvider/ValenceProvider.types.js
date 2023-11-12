import { DEFAULT_COLORS } from "../Color";
export const ValenceContextDefaults = {
    colors: DEFAULT_COLORS,
    getColor: () => undefined,
    getColorHex: () => undefined,
    primaryColor: "pink",
    defaultSize: "sm",
    defaultRadius: "sm",
    defaultTransitionDuration: "0.1s",
    defaultShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
    defaultVariant: "light",
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
        fontSize: { xs: 12, sm: "14", md: 16, lg: 18, xl: 20 },
    },
    titles: {
        1: { fontSize: 28, bold: true },
        2: { fontSize: 22, bold: true },
        3: { fontSize: 18, bold: true },
        4: { fontSize: 16, bold: true },
        5: { fontSize: 14, bold: true },
        6: { fontSize: 12, bold: true },
    },
    breakpoints: {
        mobileWidth: 800,
        mobileTallHeight: 750,
    }
};
