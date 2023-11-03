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
]