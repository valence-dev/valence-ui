/** @jsxImportSource @emotion/react */
import { CSSProperties, ReactNode, forwardRef, isValidElement } from "react";
import reactStringReplace from "react-string-replace";
import {
  ComponentSize,
  GenericClickableProps,
  GenericProps,
  PolymorphicText,
  PolymorphicTextProps,
} from "@valence-ui/utils";
import { useValence } from "../../../ValenceProvider";
import { css } from "@emotion/react";
import {
  MakeResponsive,
  useResponsiveProps,
} from "../../../utilities/responsive";
import { useColors } from "../../../utilities/color";
import { TransitionAnimation, useAnimation } from "../../../hooks";

const REGEX_PATTERNS = {
  newline: /(\n)/,
  boldItalic: /\*\*\*(.+?)\*\*\*(?!\*)/,
  bold: /\*\*(.+?)\*\*(?!\*)/,
  italic: /\*([^*><]+)\*/,
  monospace: /`([^`><]+)`/,
};

/**
 * Flattens children to the text they render, so the change animation can be
 * keyed on content.
 *
 * The raw children are used rather than the formatted `replacements`, because
 * those are React elements: coerced to a key they collapse to
 * `"[object Object]"` and stop varying with the text inside them.
 */
function getTextContent(node: ReactNode): string {
  if (node === null || node === undefined || typeof node === "boolean")
    return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(getTextContent).join("");
  if (isValidElement(node))
    return getTextContent((node.props as { children?: ReactNode }).children);
  return "";
}

// TYPES
export type TextProps = GenericProps &
  GenericClickableProps &
  PolymorphicTextProps & {
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
    /** Allow the user to select this text. */
    userSelect?: boolean;

    /** Sets the number of lines to display before truncating with an ellipsis */
    maxLines?: number;

    /** Optionally animate the text whenever its contents change.
     * - `fade` - Fades the component in and out
     * - `blur` - Blurs the component in and out
     * - `slide-left` - Slides the component to the left
     * - `slide-right` - Slides the component to the right
     * - `slide-down` - Slides the component to the top
     * - `slide-up` - Slides the component to the bottom
     */
    animation?: TransitionAnimation | TransitionAnimation[];
  };

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
  ref: any,
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
    color,

    highlightColor = "primary",
    highlightStyle,
    userSelect = true,

    maxLines,

    animation,

    children,
    style,
    ...rest
  } = useResponsiveProps<TextProps>(props);
  // `initial` is pulled out on its own because it may be `false`, which is
  // valid as the `initial` prop directly but not as a `variants` map entry
  // (Motion's `Variants` type only accepts real targets, never `false`).
  const { initial, ...variants } = useAnimation({
    transitionAnimation: animation,
  });

  // Run through formatters
  //
  // `reactStringReplace` re-runs its match index from 0 for every string
  // fragment it processes, rather than across the whole call, so a single
  // pass over multiple fragments (e.g. paragraphs already split apart by an
  // earlier pass) can hand back the same index more than once. `keyIndex` is
  // incremented on every replacement across every pass instead, so the key
  // it's combined with is unique across the whole render rather than just
  // within one fragment of one pass.
  let keyIndex = 0;
  let replacements: any = children;
  replacements = reactStringReplace(
    replacements,
    REGEX_PATTERNS.newline,
    () => <br key={`newline-${keyIndex++}`} />,
  );
  replacements = reactStringReplace(
    replacements,
    REGEX_PATTERNS.boldItalic,
    (match) => (
      <b
        key={`bold-italic-${keyIndex++}`}
        style={{
          fontWeight: 800,
          fontStyle: "italic",
        }}
      >
        <i>{match}</i>
      </b>
    ),
  );
  replacements = reactStringReplace(
    replacements,
    REGEX_PATTERNS.bold,
    (match) => (
      <b
        key={`bold-${keyIndex++}`}
        style={{
          fontWeight: 800,
        }}
      >
        {match}
      </b>
    ),
  );
  replacements = reactStringReplace(
    replacements,
    REGEX_PATTERNS.italic,
    (match) => (
      <i
        key={`italic-${keyIndex++}`}
        style={{
          fontStyle: "italic",
        }}
      >
        {match}
      </i>
    ),
  );
  replacements = reactStringReplace(
    replacements,
    REGEX_PATTERNS.monospace,
    (match) => (
      <span
        key={`monospace-${keyIndex++}`}
        style={{
          fontFamily: theme.getFont("monospace"),
        }}
      >
        {match}
      </span>
    ),
  );
  replacements = reactStringReplace(
    replacements,
    /<hl>(.+?)<\/hl>/,
    (match) => (
      <span
        key={`highlight-${keyIndex++}`}
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
    ),
  );

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

    userSelect: userSelect ? "text" : "none",

    ...(maxLines
      ? {
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          WebkitLineClamp: maxLines,
        }
      : {}),

    ...style,
  });

  return (
    <PolymorphicText
      css={TextStyle}
      ref={ref}
      key={animation ? getTextContent(children) : undefined}
      variants={variants}
      initial={initial}
      animate="animate"
      exit="exit"
      {...rest}
    >
      {replacements}
    </PolymorphicText>
  );
});
