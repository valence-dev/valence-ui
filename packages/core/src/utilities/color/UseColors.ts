import { useValence } from "../../ValenceProvider/ValenceContext";
import { useColorScheme } from "../../hooks/UseColorScheme";
import { Swatch, SwatchOpacity, getDefaultSwatch } from "./Color";

export type UseColorsReturn = {
  /** Gets the swatch for the given color key. If the color does
   * not exist, this will return `undefined`.
   */
  getSwatch(key: string | undefined): Swatch | undefined;

  /** Gets the hex code for the given color key. If the color does
   * not exist, this will return the key as-is.
   */
  getHex(key: string | undefined, opacity?: SwatchOpacity): string | undefined;
};

/** `useColors` is a hook to allow the usage of Valence colors.
 * It must be used as a child of the `ValenceProvider`.
 */
export function useColors(): UseColorsReturn {
  const theme = useValence();
  const { colorScheme } = useColorScheme();

  function getSwatch(key: string | undefined): Swatch | undefined {
    if (!key) return undefined;

    var color = theme.colors.find((c) => c.key === key);
    if (key === "primary")
      color = theme.colors.find((c) => c.key === theme.primaryColor);

    var swatch;

    // If there is no color, check if the key is a hex code
    if (!color) {
      if (key.startsWith("#")) swatch = getDefaultSwatch(key);
      // If the key is not a hex code, return undefined
      else return undefined;
    }
    // If there is a color, get the swatch
    else
      swatch =
        color.dark && colorScheme === "dark" ? color.dark : color.default;

    return swatch;
  }

  function getHex(
    key: string | undefined,
    opacity?: SwatchOpacity,
  ): string | undefined {
    const swatch = getSwatch(key);
    if (!swatch) return key;

    return swatch.base + (opacity ? swatch.opacity[opacity] : "");
  }

  return {
    getSwatch,
    getHex,
  };
}
