import { FillVariant } from "@valence-ui/utils";
import { useValence } from "../../ValenceProvider";
import { useColorScheme } from "../../hooks";
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
}


/** `useColors` is a hook to allow the usage of Valence colors.
 * It must be used as a child of the `ValenceProvider`.
 */
export function useColors(): UseColorsReturn {
  const theme = useValence();
  const { colorScheme } = useColorScheme();


  function getSwatch(key: string | undefined): Swatch | undefined {
    if (!key) return undefined;

    var color = theme.colors.find(c => c.key === key);
    if (key === "primary") color = theme.colors.find(c => c.key === theme.primaryColor);

    var swatch;

    // If there is no color, check if the key is a hex code
    if (!color) {
      if (key.startsWith("#"))
        swatch = getDefaultSwatch(key);
      // If the key is not a hex code, return undefined
      else
        return undefined;
    }
    // If there is a color, get the swatch
    else
      swatch = color.dark && colorScheme === "dark" ?
        color.dark : color.default;

    return swatch;
  }


  function getHex(key: string | undefined, opacity?: SwatchOpacity): string | undefined {
    const swatch = getSwatch(key);
    if (!swatch) return key;

    return swatch.base + (opacity ? swatch.opacity[opacity] : "");
  }


  function getBackgroundColor(key: string, variant?: FillVariant, hovered?: boolean): string | undefined {
    switch (variant) {
      case "filled": return getHex(key);
      case "light": return getHex(key, hovered ? "medium" : "weak");
      case "paper": return getHex("brighterWhite");
      case "outlined": case "subtle": return hovered ? getHex(key, "weak") : "#00000000";
      default: return getHex(key);
    }
  }

  function getBorderColor(key: string, variant?: FillVariant, focused?: boolean): string | undefined {
    if (focused) return `1px solid ${getHex(key, "strong")}`;
    switch (variant) {
      case "paper": return `1px solid ${getHex(key, "weak")}`;
      case "outlined": return `1px solid ${getHex(key, "medium")}`;
      default: return `1px solid #00000000`;
    }
  }

  function getForegroundColor(key: string, variant?: FillVariant): string | undefined {
    if (variant === "filled") {
      if (key === "white") return getHex("black");
      return getHex("white");
    }

    return getHex(key);
  }


  return {
    getSwatch,
    getHex,
    getBgHex: getBackgroundColor,
    getBorderHex: getBorderColor,
    getFgHex: getForegroundColor
  };
}