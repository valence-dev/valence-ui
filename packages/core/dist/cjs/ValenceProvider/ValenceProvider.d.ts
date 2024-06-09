import { CSSProperties } from "react";
import { IValenceContext } from "./ValenceProvider.types";
import { TextProps } from "../components";
import { ComponentSize, FillVariant, SizeClasses } from "@valence-ui/utils";
import { Color } from "../utilities/color";
import { PreferrableColorScheme } from "../hooks";
export declare const ValenceContext: import("react").Context<IValenceContext>;
export declare const useValence: () => IValenceContext;
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
export declare function ValenceProvider(props: ValenceProviderProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ValenceProvider.d.ts.map