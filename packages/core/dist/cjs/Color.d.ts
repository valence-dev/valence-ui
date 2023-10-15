/** Basic information about a color */
export type Color = {
    /** The base, opaque version of this color */
    base: string;
    /** Two-digit HEX values to append to the base color to provide transparency effects */
    opacity: {
        /** Defines a very "diluted" value for this colour */
        weak: string;
        /** Mid-range color opacity */
        medium: string;
        /** Strong color opacity */
        strong: string;
    };
};
/** Information about a reactive color - that is, one that modifies its appearance
 * for light and dark themes
 */
export type ColorReactive = {
    /** The key to use when referencing this color in code */
    key: string;
    /** Information about this color in light/default mode */
    default: Color;
    /** Information about this color in dark mode */
    dark?: Color;
};
/** Retrieve a color based on the supplied reactive color
 * @param colorReactive The reactive color to retrieve
 * @param isDarkMode Whether or not the user is in dark mode
 */
export declare function getReactiveColor(colorReactive?: ColorReactive, isDarkMode?: boolean): Color | undefined;
/** Retrieve default props for a color that is not defined in the theme
 * @param hex The hex code of the color to retrieve
*/
export declare function getUnidentifiedHexColor(hex: string): Color;
export declare const DEFAULT_COLORS: ColorReactive[];
//# sourceMappingURL=Color.d.ts.map