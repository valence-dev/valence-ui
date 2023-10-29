/** @jsxImportSource @emotion/react */
import { CSSProperties, useContext } from "react";
import reactStringReplace from "react-string-replace";
import { ComponentSize, GenericProps, PolymorphicText, PolymorphicTextProps } from "@valence-ui/utils";
import { ValenceContext } from "../../../ValenceProvider";
import { css } from "@emotion/react";

const REGEX_PATTERNS = {
  newline: /(\n)/,
  boldItalic: /\*\*\*(.+?)\*\*\*(?!\*)/,
  bold: /\*\*(.+?)\*\*(?!\*)/,
  italic: /\*([^*><]+)\*/,
  monospace: /`([^`><]+)`/,
}


// TYPES
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
 */
export function Text(props: TextProps) {
  const theme = useContext(ValenceContext);


  // Defaults
  const {
    bold = false,
    italic = false,
    monospace = false,

    family = monospace ? theme.getFont("monospace") : theme.getFont("default"),
    weight = bold ? "bold" : "normal",
    align = "left",
    transform = "none",
    
    size = theme.defaultSize,
    fontSize = theme.sizeClasses.fontSize[size],
    color = theme.getColor("black")?.base ?? "black",

    ...rest
  } = props;


  // Run through formatters
  let replacements: any = props.children;
  replacements = reactStringReplace(replacements, REGEX_PATTERNS.newline, (match, i) => (
    <br key={match + i} />
  ));
  replacements = reactStringReplace(replacements, REGEX_PATTERNS.boldItalic, (match, i) => (
    <b key={match + i}
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
    <b key={match + i}
      style={{
        fontWeight: 800,
      }}
    >
      {match}
    </b>
  ));
  replacements = reactStringReplace(replacements, REGEX_PATTERNS.italic, (match, i) => (
    <i key={match + i}
      style={{
        fontStyle: "italic",
      }}
    >
      {match}
    </i>
  ));
  replacements = reactStringReplace(replacements, REGEX_PATTERNS.monospace, (match, i) => (
    <span key={match + i}
      style={{
        fontFamily: theme.getFont("monospace"),
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

    color: color,

    margin: 0,
  });


  return (
    <PolymorphicText
      css={TextStyle}
      {...rest}
    >
      {replacements}
    </PolymorphicText>
  )
}