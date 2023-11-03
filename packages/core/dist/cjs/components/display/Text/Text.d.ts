/** @jsxImportSource @emotion/react */
import { CSSProperties } from "react";
import { ComponentSize, GenericClickableProps, GenericProps, PolymorphicTextProps } from "@valence-ui/utils";
export type TextProps = GenericProps & GenericClickableProps & PolymorphicTextProps & {
    /** Sets `font-family` css property */
    family?: CSSProperties["fontFamily"];
    /** Sets `font-weight` css property */
    weight?: CSSProperties["fontWeight"];
    /** Sets `font-size` css property */
    fontSize?: CSSProperties["fontSize"];
    /** Sets `text-align` css property */
    align?: CSSProperties["textAlign"];
    /** Sets `text-transform` css property */
    transform?: React.CSSProperties["textTransform"];
    /** Sets the size of the text */
    size?: ComponentSize;
    /** Sets `color` css property */
    color?: CSSProperties["color"];
    /** Shorthand for `font-style: italic` */
    italic?: boolean;
    /** Shorthand for `font-weight: 800` */
    bold?: boolean;
    /** Shorthand for `font-family: monospace` */
    monospace?: boolean;
};
/** A basic, formattable text object that is compatible with some markdown text injection.
 * Very handy when dealing with internationalization, particularly with the i18n module.
 *
 * **Automatically replaces the following values:**
 * - `\n` line break/newline
 * - `***{...}***` for bolded, italicized text
 * - `**{...}**` for bolded text
 * - `*{...}*` for italicized text
 * - `{...}` for monospace text
 */
export declare const Text: import("react").ForwardRefExoticComponent<GenericProps & GenericClickableProps & import("@valence-ui/utils").PolymorphicElementProps & {
    css?: any;
} & {
    /** Sets `font-family` css property */
    family?: CSSProperties["fontFamily"];
    /** Sets `font-weight` css property */
    weight?: CSSProperties["fontWeight"];
    /** Sets `font-size` css property */
    fontSize?: CSSProperties["fontSize"];
    /** Sets `text-align` css property */
    align?: CSSProperties["textAlign"];
    /** Sets `text-transform` css property */
    transform?: React.CSSProperties["textTransform"];
    /** Sets the size of the text */
    size?: ComponentSize | undefined;
    /** Sets `color` css property */
    color?: CSSProperties["color"];
    /** Shorthand for `font-style: italic` */
    italic?: boolean | undefined;
    /** Shorthand for `font-weight: 800` */
    bold?: boolean | undefined;
    /** Shorthand for `font-family: monospace` */
    monospace?: boolean | undefined;
} & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=Text.d.ts.map