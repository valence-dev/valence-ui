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
import { useValence } from "../../../ValenceProvider";
import { css } from "@emotion/react";
import { useResponsiveProps } from "../../../utilities/responsive";
import { useColors } from "../../../utilities/color";
const REGEX_PATTERNS = {
    newline: /(\n)/,
    boldItalic: /\*\*\*(.+?)\*\*\*(?!\*)/,
    bold: /\*\*(.+?)\*\*(?!\*)/,
    italic: /\*([^*><]+)\*/,
    monospace: /`([^`><]+)`/,
};
// CANNOT USE CRYTPO.RANDOMUUID() BECAUSE WEBKIT SUCKS
function randomId() {
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
export const Text = forwardRef(function Text(props, ref) {
    const theme = useValence();
    const colors = useColors();
    // Defaults
    const _a = useResponsiveProps(props), { bold = false, italic = false, monospace = false, family = monospace ? theme.getFont("monospace") : theme.getFont("default"), weight = bold ? "bold" : "normal", align = "left", transform = "none", size = theme.defaults.size, fontSize = theme.sizeClasses.fontSize[size], color = "black", highlightColor = "primary", highlightStyle, children, style } = _a, rest = __rest(_a, ["bold", "italic", "monospace", "family", "weight", "align", "transform", "size", "fontSize", "color", "highlightColor", "highlightStyle", "children", "style"]);
    // Run through formatters
    let replacements = children;
    replacements = reactStringReplace(replacements, REGEX_PATTERNS.newline, (match, i) => (_jsx("br", {}, randomId())));
    replacements = reactStringReplace(replacements, REGEX_PATTERNS.boldItalic, (match, i) => (_jsx("b", { style: {
            fontWeight: 800,
            fontStyle: "italic",
        }, children: _jsx("i", { children: match }) }, randomId())));
    replacements = reactStringReplace(replacements, REGEX_PATTERNS.bold, (match, i) => (_jsx("b", { style: {
            fontWeight: 800,
        }, children: match }, randomId())));
    replacements = reactStringReplace(replacements, REGEX_PATTERNS.italic, (match, i) => (_jsx("i", { style: {
            fontStyle: "italic",
        }, children: match }, randomId())));
    replacements = reactStringReplace(replacements, REGEX_PATTERNS.monospace, (match, i) => (_jsx("span", { style: {
            fontFamily: theme.getFont("monospace"),
        }, children: match }, randomId())));
    replacements = reactStringReplace(replacements, /<hl>(.+?)<\/hl>/, (match, i) => (_jsx("span", { style: Object.assign({ backgroundColor: colors.getHex(highlightColor, "weak"), color: colors.getHex(highlightColor), borderRadius: 5, padding: 2 }, highlightStyle), children: match }, randomId())));
    // Styles
    const TextStyle = css(Object.assign({ fontFamily: family, fontWeight: weight, fontStyle: italic ? "italic" : "normal", fontSize: fontSize, textTransform: transform, textAlign: align, color: colors.getHex(color), margin: 0 }, style));
    return (_jsx(PolymorphicText, Object.assign({ css: TextStyle, ref: ref }, rest, { children: replacements })));
});
