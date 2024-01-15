import { CSSProperties, createContext, useContext } from "react";
import { ColorReactive, getUnidentifiedHexColor, getReactiveColor } from "../Color";
import { IValenceContext, ValenceContextDefaults as VCD } from "./ValenceProvider.types";
import { useColorScheme } from "../hooks";
import { TextProps } from "../components";
import { ComponentSize, FillVariant, SizeClasses } from "@valence-ui/utils";


export const ValenceContext = createContext<IValenceContext>(VCD);

export const useValence = () => {
  const context = useContext(ValenceContext);

  if (context === null)
    throw new Error("Valence components must be wrapped in <ValenceProvider />");

  return context;
}


export type ValenceProviderProps = {
  children?: React.ReactNode;

  colors?: ColorReactive[];
  primaryColor?: string;

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

  // Hooks
  const { isDarkMode } = useColorScheme();


  // Fallback properties
  const {
    colors = props.colors ? VCD.colors.concat(props.colors) : VCD.colors,
    primaryColor = VCD.primaryColor,

    defaults = VCD.defaults,

    fontFamily = VCD.fontFamily,
    sizeClasses = VCD.sizeClasses,
    titles = VCD.titles,

    breakpoints = VCD.breakpoints,
  } = props;


  // Functions
  function getColor(key: string | undefined) {
    if (key === undefined) return undefined;
    if (key === "primary")
      return getReactiveColor(colors.find(i => i.key === primaryColor),);

    const colIndex = colors.findIndex(i => i.key === key);
    if (colIndex === -1) return key as string[0] !== "#" ?
      getUnidentifiedHexColor(key as string)
      : getReactiveColor(colors.find(i => i.key === primaryColor), isDarkMode);
    else
      return getReactiveColor(colors.find(i => i.key === key), isDarkMode);
  }

  function getColorHex(key: string | undefined, opacity?: "weak" | "medium" | "strong") {
    const color = getColor(key);
    if (color === undefined) return undefined;
    return `${color.base}` + (opacity ? `${color.opacity[opacity]}` : "");
  }

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
        getColor,
        getColorHex,
        primaryColor,

        defaults,

        fontFamily,
        getFont,

        sizeClasses,
        getSize,
        titles,

        breakpoints,
      }}
    >
      {props.children}
    </ValenceContext.Provider>
  )
}