/// <reference types="react" />
import { TextProps } from "./Text";
export type TitleProps = TextProps & {
    /** Sets the order of the title */
    order?: 1 | 2 | 3 | 4 | 5 | 6;
};
export declare const Title: import("react").ForwardRefExoticComponent<import("@valence-ui/utils").GenericProps & import("@valence-ui/utils").GenericClickableProps & import("@valence-ui/utils").PolymorphicElementProps & {
    /** Sets the order of the title */
    css?: any;
} & {
    family?: import("csstype").Property.FontFamily | undefined;
    weight?: import("csstype").Property.FontWeight | undefined;
    fontSize?: import("csstype").Property.FontSize<string | number> | undefined;
    align?: import("csstype").Property.TextAlign | undefined;
    transform?: import("csstype").Property.TextTransform | undefined;
    size?: import("@valence-ui/utils").ComponentSize | undefined;
    color?: import("csstype").Property.Color | undefined;
    italic?: boolean | undefined;
    bold?: boolean | undefined;
    monospace?: boolean | undefined;
} & {
    /** Sets the order of the title */
    order?: 2 | 1 | 3 | 4 | 5 | 6 | undefined;
} & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=Title.d.ts.map