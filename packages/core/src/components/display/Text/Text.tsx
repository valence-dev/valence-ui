/** @jsxImportSource @emotion/react */
import { CSSProperties, forwardRef } from "react";
import reactStringReplace from "react-string-replace";
import { ComponentSize, GenericClickableProps, GenericProps, PolymorphicText, PolymorphicTextProps } from "@valence-ui/utils";
import { useValence } from "../../../ValenceProvider";
import { css } from "@emotion/react";
import { MakeResponsive, useResponsiveProps } from "../../../utilities/responsive";
import { useColors } from "../../../utilities/color";

const REGEX_PATTERNS = {
  newline: /(\n)/,
  boldItalic: /\*\*\*(.+?)\*\*\*(?!\*)/,
  bold: /\*\*(.+?)\*\*(?!\*)/,
  italic: /\*([^*><]+)\*/,
  monospace: /`([^`><]+)`/,
}


// TYPES
export type TextProps =
  GenericProps
  & GenericClickableProps
  & PolymorphicTextProps
  & {
    /** Sets `font-family` css property */
    family?: CSSProperties["fontFamily"];
    /** Sets `font-weight` css property */
    weight?: CSSProperties["fontWeight"];
    /** Sets `font-size` css property */
    fontSize?: CSSProperties["fontSize"];
    /** Sets `text-align` css property */
    align?: CSSProperties["textAlign"];
    /** Sets `text-transform` css property */
    transform?: CSSProperties["textTransform"];

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

    /** Sets the color of highlighted sections. */
    highlightColor?: CSSProperties["color"];
    /** Optional styles to pass to highlighted sections */
    highlightStyle?: CSSProperties;

    /** Sets the number of lines to display before truncating with an ellipsis */
    maxLines?: number;
  }


// CANNOT USE CRYTPO.RANDOMUUID() BECAUSE WEBKIT SUCKS
function randomId(): string {
  return Math.random().toString(36).substring(2);
}


// COMPONENTS
/** A basic, formattable text object that is compatible with some markdown text injection.
 * Very handy when dealing with internationalization, particularly with the i18n module.
 * 
 * **Automatically replaces the following values:**
 * - `\n` line break/newline
 * - `***{...}***` for bolded, italicized text
 * - `**{...}**` for bolded text
 * - `*{...}*` for italicized text
 * - `{...}` for monospace text
 * - `<hl>{...}</hl>` for highlighted text
 */
export const Text = forwardRef(function Text(
  props: MakeResponsive<TextProps>,
  ref: any
) {
  const theme = useValence();
  const colors = useColors();


  // Defaults
  const {
    bold = false,
    italic = false,
    monospace = false,

    family = monospace ? theme.getFont("monospace") : theme.getFont("default"),
    weight = bold ? "bold" : "normal",
    align = "left",
    transform = "none",

    size = theme.defaults.size,
    fontSize = theme.sizeClasses.fontSize[size],
    color = "black",

    highlightColor = "primary",
    highlightStyle,

    maxLines,

    children,
    style,
    ...rest
  } = useResponsiveProps<TextProps>(props);


  // Run through formatters
  let replacements: any = children;
  replacements = reactStringReplace(replacements, REGEX_PATTERNS.newline, (match, i) => (
    <br key={randomId()} />
  ));
  replacements = reactStringReplace(replacements, REGEX_PATTERNS.boldItalic, (match, i) => (
    <b key={randomId()}
      style={{
        fontWeight: 800,
        fontStyle: "italic",
      }}
    >
      <i>
        {match}
      </i>
    </b>
  ));
  replacements = reactStringReplace(replacements, REGEX_PATTERNS.bold, (match, i) => (
    <b key={randomId()}
      style={{
        fontWeight: 800,
      }}
    >
      {match}
    </b>
  ));
  replacements = reactStringReplace(replacements, REGEX_PATTERNS.italic, (match, i) => (
    <i key={randomId()}
      style={{
        fontStyle: "italic",
      }}
    >
      {match}
    </i>
  ));
  replacements = reactStringReplace(replacements, REGEX_PATTERNS.monospace, (match, i) => (
    <span key={randomId()}
      style={{
        fontFamily: theme.getFont("monospace"),
      }}
    >
      {match}
    </span>
  ));
  replacements = reactStringReplace(replacements, /<hl>(.+?)<\/hl>/, (match, i) => (
    <span key={randomId()}
      style={{
        backgroundColor: colors.getHex(highlightColor, "weak"),
        color: colors.getHex(highlightColor),
        borderRadius: 5,
        padding: 2,
        ...highlightStyle,
      }}
    >
      {match}
    </span>
  ));


  // Styles
  const TextStyle = css({
    fontFamily: family,
    fontWeight: weight,
    fontStyle: italic ? "italic" : "normal",
    fontSize: fontSize,

    textTransform: transform,
    textAlign: align,

    color: colors.getHex(color),
    margin: 0,

    ...(maxLines ? {
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
      WebkitLineClamp: maxLines,
    } : {}),

    ...style,
  });


  return (
    <PolymorphicText
      css={TextStyle}
      ref={ref}
      {...rest}
    >
      {replacements}
    </PolymorphicText>
  )
});