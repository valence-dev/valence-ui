// This module declares types only. Every import below is a `import type` so
// that nothing here survives into the emitted JavaScript — the theme types
// reference component props (`TextProps`), and a value import would make that
// reference a require cycle at runtime.
import type { CSSProperties } from "react";
import type { ComponentSize, SizeClasses } from "@valence-ui/utils";
import type { TextProps } from "../components/display/Text/Text";
import type { Color } from "../utilities/color/Color";
import type { PreferrableColorScheme } from "../hooks/UseColorScheme";
import type { Material } from "../utilities/materials/Material";

export type IValenceContext = {
  /** A list of all colors to use */
  colors: Color[];
  /** The primary color to default upon */
  primaryColor: string;
  /** The user's preferred color scheme. `"system"` by default. */
  preferredColorScheme: PreferrableColorScheme;

  /** Default sizes and parameters for common attributes */
  defaults: {
    /** The default component size */
    size: ComponentSize;
    /** The default component radius size */
    radius: ComponentSize;
  };

  /** Default materials applied to objects of different types */
  materials: {
    /** The default material to use for buttons */
    button: Material;
    /** The default material to use for inputs */
    input: Material;
    /** The default material to use for cards */
    card: Material;
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
  getSize: (
    property: "padding" | "height" | "radius" | "fontSize" | "iconSize",
    size?: ComponentSize,
  ) => any;

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
