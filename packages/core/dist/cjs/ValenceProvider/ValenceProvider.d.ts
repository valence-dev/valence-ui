import { CSSProperties } from "react";
import { ColorReactive } from "../Color";
import { IValenceContext } from "./ValenceProvider.types";
import { TextProps } from "../components";
import { ComponentSize, FillVariant, SizeClasses } from "@valence-ui/utils";
export declare const ValenceContext: import("react").Context<IValenceContext>;
export type ValenceProviderProps = {
    children?: React.ReactNode;
    colors?: ColorReactive[];
    primaryColor?: string;
    defaultSize?: ComponentSize;
    defaultRadius?: ComponentSize;
    defaultTransitionDuration?: React.CSSProperties["transitionDuration"];
    defaultShadow?: React.CSSProperties["boxShadow"];
    defaultVariant?: FillVariant;
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
        desktopThinWidth: number;
        mobileWidth: number;
        mobileTallHeight: number;
    };
};
export declare function ValenceProvider(props: ValenceProviderProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ValenceProvider.d.ts.map