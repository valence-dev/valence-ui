import { FillVariant } from "@valence-ui/utils";
import { Swatch, SwatchOpacity } from "./Color";
export type UseColorsReturn = {
    /** Gets the swatch for the given color key. If the color does
     * not exist, this will return `undefined`.
     */
    getSwatch(key: string | undefined): Swatch | undefined;
    /** Gets the hex code for the given color key. If the color does
     * not exist, this will return the key as-is.
     */
    getHex(key: string | undefined, opacity?: SwatchOpacity): string | undefined;
    /** Gets the most suitable background color, based upon the supplied
     * parameters.
     * @param key The color key to use
     * @param variant The variant of the component
     * @param hovered Whether the component is currently hovered
     */
    getBgHex(key: string, variant?: FillVariant, hovered?: boolean): string | undefined;
    /** Gets the most suitable border color, based upon the supplied
     * parameters.
     * @param key The color key to use
     * @param variant The variant of the component
     */
    getBorderHex(key: string, variant?: FillVariant, focused?: boolean): string | undefined;
    /** Gets the most suitable foreground color, based upon the supplied
     * parameters.
     * @param key The color key to use
     * @param variant The variant of the component
     */
    getFgHex(key: string, variant?: FillVariant): string | undefined;
};
/** `useColors` is a hook to allow the usage of Valence colors.
 * It must be used as a child of the `ValenceProvider`.
 */
export declare function useColors(): UseColorsReturn;
//# sourceMappingURL=UseColors.d.ts.map