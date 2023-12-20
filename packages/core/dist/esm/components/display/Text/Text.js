var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "@emotion/react/jsx-runtime";
/** @jsxImportSource @emotion/react */
import { forwardRef } from "react";
import reactStringReplace from "react-string-replace";
import { PolymorphicText } from "@valence-ui/utils";
import { useValenceContext } from "../../../ValenceProvider";
import { css } from "@emotion/react";
const REGEX_PATTERNS = {
    newline: /(\n)/,
    boldItalic: /\*\*\*(.+?)\*\*\*(?!\*)/,
    bold: /\*\*(.+?)\*\*(?!\*)/,
    italic: /\*([^*><]+)\*/,
    monospace: /`([^`><]+)`/,
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
 */
export const Text = forwardRef(function Text(props, ref) {
    const theme = useValenceContext();
    // Defaults
    const { bold = false, italic = false, monospace = false, family = monospace ? theme.getFont("monospace") : theme.getFont("default"), weight = bold ? "bold" : "normal", align = "left", transform = "none", size = theme.defaultSize, fontSize = theme.sizeClasses.fontSize[size], color = "black", children, style } = props, rest = __rest(props, ["bold", "italic", "monospace", "family", "weight", "align", "transform", "size", "fontSize", "color", "children", "style"]);
    // Run through formatters
    let replacements = children;
    replacements = reactStringReplace(replacements, REGEX_PATTERNS.newline, (match, i) => (_jsx("br", {}, match + i)));
    replacements = reactStringReplace(replacements, REGEX_PATTERNS.boldItalic, (match, i) => (_jsx("b", { style: {
            fontWeight: 800,
            fontStyle: "italic",
        }, children: _jsx("i", { children: match }) }, match + i)));
    replacements = reactStringReplace(replacements, REGEX_PATTERNS.bold, (match, i) => (_jsx("b", { style: {
            fontWeight: 800,
        }, children: match }, match + i)));
    replacements = reactStringReplace(replacements, REGEX_PATTERNS.italic, (match, i) => (_jsx("i", { style: {
            fontStyle: "italic",
        }, children: match }, match + i)));
    replacements = reactStringReplace(replacements, REGEX_PATTERNS.monospace, (match, i) => (_jsx("span", { style: {
            fontFamily: theme.getFont("monospace"),
        }, children: match }, match + i)));
    // Styles
    const TextStyle = css(Object.assign({ fontFamily: family, fontWeight: weight, fontStyle: italic ? "italic" : "normal", fontSize: fontSize, textTransform: transform, textAlign: align, color: theme.getColorHex(color), margin: 0 }, style));
    return (_jsx(PolymorphicText, Object.assign({ css: TextStyle, ref: ref }, rest, { children: replacements })));
});
