import { CSSProperties } from "react";
import { IValenceContext } from "./ValenceProvider.types";
import { ValenceContext } from "./ValenceContext";
import type { TextProps } from "../components/display/Text/Text";
import { ComponentSize, SizeClasses } from "@valence-ui/utils";
import { CssOverride } from "./CssOverride";
import { Color } from "../utilities/color";
import { PreferrableColorScheme } from "../hooks";
import {
  DEFAULT_PALETTE,
  GlassMaterial,
  Material,
  PaperMaterial,
} from "../utilities";

export type ValenceProviderProps = {
  children?: React.ReactNode;

  colors?: Color[];
  primaryColor?: string;
  preferredColorScheme?: PreferrableColorScheme;

  defaults?: {
    size: ComponentSize;
    radius: ComponentSize;
  };
  materials?: {
    button: Material;
    input: Material;
    card: Material;
  };

  fontFamily?: {
    default: string;
    heading?: string;
    monospace?: string;
  };

  sizeClasses?: {
    padding: SizeClasses<CSSProperties["padding"]>;
    height: SizeClasses<CSSProperties["height"]>;
    radius: SizeClasses<CSSProperties["borderRadius"]>;
    fontSize: SizeClasses<CSSProperties["fontSize"]>;
    iconSize: SizeClasses<CSSProperties["fontSize"]>;
  };

  titles?: {
    1: TextProps;
    2: TextProps;
    3: TextProps;
    4: TextProps;
    5: TextProps;
    6: TextProps;
  };

  breakpoints?: {
    mobileWidth: number;
    tabletWidth: number;
    desktopLargeWidth: number;
    tvWidth: number;
  };
};

export function ValenceProvider(props: ValenceProviderProps) {
  const VCD: IValenceContext = {
    colors: DEFAULT_PALETTE,
    primaryColor: "pink",
    preferredColorScheme: "system",

    defaults: {
      size: "sm",
      radius: "sm",
    },
    materials: {
      button: new GlassMaterial(),
      input: new GlassMaterial({ color: "black" }),
      card: new PaperMaterial(),
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
      mobileWidth: 480,
      tabletWidth: 768,
      desktopLargeWidth: 1024,
      tvWidth: 1440,
    },
  };

  // Fallback properties
  const {
    colors = props.colors ? VCD.colors.concat(props.colors) : VCD.colors,
    primaryColor = VCD.primaryColor,
    preferredColorScheme = VCD.preferredColorScheme,

    defaults = VCD.defaults,
    materials = VCD.materials,

    fontFamily = VCD.fontFamily,
    sizeClasses = VCD.sizeClasses,
    titles = VCD.titles,

    breakpoints = VCD.breakpoints,
  } = props;

  // Methods

  function getFont(context: "default" | "heading" | "monospace") {
    switch (context) {
      case "default":
        return fontFamily.default;
      case "heading":
        return fontFamily.heading ?? fontFamily.default;
      case "monospace":
        return fontFamily.monospace ?? fontFamily.default;
    }
  }

  function getSize(
    context: "padding" | "height" | "radius" | "fontSize" | "iconSize",
    size?: ComponentSize,
  ) {
    size = size ?? defaults.size;
    return sizeClasses[context][size];
  }

  return (
    <ValenceContext.Provider
      value={{
        colors,
        primaryColor,
        preferredColorScheme,

        defaults,
        materials,

        fontFamily,
        getFont,

        sizeClasses,
        getSize,
        titles,

        breakpoints,
      }}
    >
      {/* CSS overrider to avoid pasting a global.css file */}
      <CssOverride />

      {props.children}
    </ValenceContext.Provider>
  );
}
