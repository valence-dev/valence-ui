import { CSSProperties, createContext, useContext } from "react";
import { IValenceContext, ValenceContextDefaults as VCD } from "./ValenceProvider.types";
import { TextProps } from "../components";
import { ComponentSize, FillVariant, SizeClasses } from "@valence-ui/utils";
import { CssOverride } from "./CssOverride";
import { Color } from "../utilities/color";
import { PreferrableColorScheme } from "../hooks";


export const ValenceContext = createContext<IValenceContext>(VCD);

export const useValence = () => {
  const context = useContext(ValenceContext);

  if (context === null)
    throw new Error("Valence components must be wrapped in <ValenceProvider />");

  return context;
}


export type ValenceProviderProps = {
  children?: React.ReactNode;

  colors?: Color[];
  primaryColor?: string;
  preferredColorScheme?: PreferrableColorScheme;

  defaults?: { 
    size: ComponentSize;
    radius: ComponentSize;
    variant: FillVariant;
    transitionDuration: CSSProperties["transitionDuration"];
    shadow: CSSProperties["boxShadow"];
  };

  fontFamily?: {
    default: string;
    heading?: string;
    monospace?: string;
  }

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
}

export function ValenceProvider(props: ValenceProviderProps) {
  // Fallback properties
  const {
    colors = props.colors ? VCD.colors.concat(props.colors) : VCD.colors,
    primaryColor = VCD.primaryColor,
    preferredColorScheme = VCD.preferredColorScheme,

    defaults = VCD.defaults,

    fontFamily = VCD.fontFamily,
    sizeClasses = VCD.sizeClasses,
    titles = VCD.titles,

    breakpoints = VCD.breakpoints,
  } = props;

  // Methods

  function getFont(context: "default" | "heading" | "monospace") {
    switch (context) {
      case "default": return fontFamily.default;
      case "heading": return fontFamily.heading ?? fontFamily.default;
      case "monospace": return fontFamily.monospace ?? fontFamily.default;
    }
  }

  function getSize(context: "padding" | "height" | "radius" | "fontSize" | "iconSize", size?: ComponentSize) {
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
  )
}