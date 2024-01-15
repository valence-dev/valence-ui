import { CSSProperties } from "react";
import { Color, ColorReactive } from "../Color";
import { ComponentSize, FillVariant, SizeClasses } from "@valence-ui/utils";
import { TextProps } from "../components";
export type IValenceContext = {
    /** A list of all colors to use */
    colors: ColorReactive[];
    /** The primary color to default upon */
    primaryColor: string;
    /** Finds a color within the theme context
     * @param key key of the color to find. Using `primary` will return the theme primary color. Alternatively, an accepted hex code (prefixed with `#`) can be used to retrieve a color that is not defined in the theme.
     * @deprecated Use `getColorHex` instead
     */
    getColor: (key: string | undefined) => Color | undefined;
    /** Finds a color within the theme context and returns it as a hex code
     * @param key key of the color to find. Using `primary` will return the theme primary color. Alternatively, an accepted hex code (prefixed with `#`) can be used to retrieve a color that is not defined in the theme.
     */
    getColorHex: (key: string | undefined, opacity?: "weak" | "medium" | "strong") => string | undefined;
    /** Default sizes and parameters for common attributes */
    defaults: {
        /** The default component size */
        size: ComponentSize;
        /** The default component radius size */
        radius: ComponentSize;
        /** The default component fill variant */
        variant: FillVariant;
        /** The default transition duration for animated properties */
        transitionDuration: CSSProperties["transitionDuration"];
        /** The default shadow style to apply */
        shadow: CSSProperties["boxShadow"];
    };
    /** The default font families to use in specific contexts */
    fontFamily: {
        /** The default font family to use */
        default: string;
        /** The font family to use for headings. If not provided, the default will be used */
        heading?: string;
        /** The font family to use for monospace text. If not provided, the default will be used */
        monospace?: string;
    };
    /** Finds a font family within the theme context
     * @param property the property to find the font family for
     */
    getFont: (property: "default" | "heading" | "monospace") => string;
    /** Standardised sizing guide to use for components */
    sizeClasses: {
        /** The padding to use for components */
        padding: SizeClasses<CSSProperties["padding"]>;
        /** The height to use for components */
        height: SizeClasses<CSSProperties["height"]>;
        /** The radius to use for components */
        radius: SizeClasses<CSSProperties["borderRadius"]>;
        /** The font size to use for components */
        fontSize: SizeClasses<CSSProperties["fontSize"]>;
        /** The icon size to use for components */
        iconSize: SizeClasses<CSSProperties["fontSize"]>;
    };
    /** Finds a size within the theme context
     * @param property the property to find the size for
     **/
    getSize: (property: "padding" | "height" | "radius" | "fontSize" | "iconSize", size?: ComponentSize) => any;
    /** Props to refer to for titles */
    titles: {
        1: TextProps;
        2: TextProps;
        3: TextProps;
        4: TextProps;
        5: TextProps;
        6: TextProps;
    };
    /** Breakpoints to use for determining breakpoint-sensitive props */
    breakpoints: {
        mobileWidth: number;
        tabletWidth: number;
        desktopLargeWidth: number;
        tvWidth: number;
    };
};
export declare const ValenceContextDefaults: IValenceContext;
//# sourceMappingURL=ValenceProvider.types.d.ts.map