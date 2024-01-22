/** Represents the opacity levels for a swatch. */
export type SwatchOpacity = "weak" | "medium" | "strong";
/** A swatch can be thought of as a "sub-color", and is
 * used to create the elements of a color that is responsive
 * to the current color scheme.
 *
 * All swatches are represented in hex, and have three opacity
 * levels: weak, medium, and strong. These are used to create
 * the various shades of a color that are used throughout the
 * application.
 */
export type Swatch = {
    /** The base color of the swatch. This should be a six-digit
     * hex code starting with a `#`.
     */
    base: string;
    /** The opacity levels for the swatch. Each of these should
     * be two-digit hex codes, and will be appended to the base
     * color to create the various shades of the color.
     */
    opacity: {
        [key in SwatchOpacity]: string;
    };
};
/** A color is a collection of swatches that are used to create
 * the various elements of a color that is responsive to the
 * current color scheme.
 */
export type Color = {
    /** The key of the color. This should be a unique string that
     * identifies the color
     */
    key: string;
    /** The default swatch for the color. This is used when the
     * current color scheme is light, or when the color does not
     * have a dark swatch.
     */
    default: Swatch;
    /** The dark swatch for the color. This is used when the
     * current color scheme is dark. If this is not provided,
     * the default swatch will be used.
     */
    dark?: Swatch;
};
/** Gets the swatch for the given hex code. This should be used
 * in situations where an unknown hex color has been provided.
 * @param hex The hex code to get the swatch for.
 */
export declare function getDefaultSwatch(hex: string | undefined): Swatch | undefined;
//# sourceMappingURL=Color.d.ts.map