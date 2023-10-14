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
  }
}

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
}

/** Retrieve a color based on the supplied reactive color
 * @param colorReactive The reactive color to retrieve
 * @param isDarkMode Whether or not the user is in dark mode
 */
export function getReactiveColor(colorReactive?: ColorReactive, isDarkMode: boolean = false) {
  if (!colorReactive) return;
  if (colorReactive.dark && isDarkMode) return colorReactive.dark;
  else return colorReactive.default;
}

/** Retrieve default props for a color that is not defined in the theme 
 * @param hex The hex code of the color to retrieve
*/
export function getUnidentifiedHexColor(hex: string): Color {
  return { base: hex, opacity: { weak: "20", medium: "4A", strong: "A0" } };
}




const
  BASE_WHITE: Color = { base: "#EFEEEE", opacity: { weak: "19", medium: "2A", strong: "A0" } },
  BASE_BLACK: Color = { base: "#11181C", opacity: { weak: "19", medium: "30", strong: "5A" } };
export const DEFAULT_COLORS: ColorReactive[] = [
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
    key: "violet",
    default: { base: "#7C5DDE", opacity: { weak: "20", medium: "4A", strong: "A0" } },
    dark: { base: "#8F76DE", opacity: { weak: "20", medium: "4A", strong: "A0" } }
  },
  {
    key: "red",
    default: { base: "#E5524F", opacity: { weak: "20", medium: "4A", strong: "A0" } },
    dark: { base: "#E26765", opacity: { weak: "20", medium: "4A", strong: "A0" } }
  },
]