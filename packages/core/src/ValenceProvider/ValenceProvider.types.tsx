import { CSSProperties } from "react";
import { Color, ColorReactive, DEFAULT_COLORS } from "../Color";
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
  }


  /** The default font families to use in specific contexts */
  fontFamily: {
    /** The default font family to use */
    default: string;
    /** The font family to use for headings. If not provided, the default will be used */
    heading?: string;
    /** The font family to use for monospace text. If not provided, the default will be used */
    monospace?: string;
  }
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
  }
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
  }


  /** Breakpoints to use for determining breakpoint-sensitive props */
  breakpoints: { 
    /** The maxmimum width of a thin desktop device (px) */
    desktopThinWidth: number;
    /** The maxmimum width of a mobile device (px) */
    mobileWidth: number;
    /** The minimum of a tall mobile device (px) */
    mobileTallHeight: number;
  }
}


export const ValenceContextDefaults: IValenceContext = {
  colors: DEFAULT_COLORS,
  getColor: () => undefined,
  getColorHex: () => undefined,
  primaryColor: "pink",

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
    desktopThinWidth: 1200,
    mobileWidth: 800,
    mobileTallHeight: 750,
  }
}