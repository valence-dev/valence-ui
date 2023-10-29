/** @jsxImportSource @emotion/react */
import { CSSProperties } from "react";
import { ComponentSize, GenericProps, PolymorphicTextProps } from "@valence-ui/utils";
export type TextProps = GenericProps & PolymorphicTextProps & {
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
    /** Sets `to` property on `Link` polymorphic elements */
    link?: string;
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
export declare function Text(props: TextProps): import("@emotion/react/jsx-runtime").JSX.Element;
//# sourceMappingURL=Text.d.ts.map