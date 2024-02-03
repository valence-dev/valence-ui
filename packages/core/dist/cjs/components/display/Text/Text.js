"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
/** @jsxImportSource @emotion/react */
const react_1 = require("react");
const react_string_replace_1 = __importDefault(require("react-string-replace"));
const utils_1 = require("@valence-ui/utils");
const ValenceProvider_1 = require("../../../ValenceProvider");
const react_2 = require("@emotion/react");
const responsive_1 = require("../../../utilities/responsive");
const color_1 = require("../../../utilities/color");
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
 * - `<hl>{...}</hl>` for highlighted text
 */
exports.Text = (0, react_1.forwardRef)(function Text(props, ref) {
    const theme = (0, ValenceProvider_1.useValence)();
    const colors = (0, color_1.useColors)();
    // Defaults
    const _a = (0, responsive_1.useResponsiveProps)(props), { bold = false, italic = false, monospace = false, family = monospace ? theme.getFont("monospace") : theme.getFont("default"), weight = bold ? "bold" : "normal", align = "left", transform = "none", size = theme.defaults.size, fontSize = theme.sizeClasses.fontSize[size], color = "black", highlightColor = "primary", highlightStyle, children, style } = _a, rest = __rest(_a, ["bold", "italic", "monospace", "family", "weight", "align", "transform", "size", "fontSize", "color", "highlightColor", "highlightStyle", "children", "style"]);
    // Run through formatters
    let replacements = children;
    replacements = (0, react_string_replace_1.default)(replacements, REGEX_PATTERNS.newline, (match, i) => ((0, jsx_runtime_1.jsx)("br", {}, crypto.randomUUID())));
    replacements = (0, react_string_replace_1.default)(replacements, REGEX_PATTERNS.boldItalic, (match, i) => ((0, jsx_runtime_1.jsx)("b", { style: {
            fontWeight: 800,
            fontStyle: "italic",
        }, children: (0, jsx_runtime_1.jsx)("i", { children: match }) }, crypto.randomUUID())));
    replacements = (0, react_string_replace_1.default)(replacements, REGEX_PATTERNS.bold, (match, i) => ((0, jsx_runtime_1.jsx)("b", { style: {
            fontWeight: 800,
        }, children: match }, crypto.randomUUID())));
    replacements = (0, react_string_replace_1.default)(replacements, REGEX_PATTERNS.italic, (match, i) => ((0, jsx_runtime_1.jsx)("i", { style: {
            fontStyle: "italic",
        }, children: match }, crypto.randomUUID())));
    replacements = (0, react_string_replace_1.default)(replacements, REGEX_PATTERNS.monospace, (match, i) => ((0, jsx_runtime_1.jsx)("span", { style: {
            fontFamily: theme.getFont("monospace"),
        }, children: match }, crypto.randomUUID())));
    replacements = (0, react_string_replace_1.default)(replacements, /<hl>(.+?)<\/hl>/, (match, i) => ((0, jsx_runtime_1.jsx)("span", { style: Object.assign({ backgroundColor: colors.getHex(highlightColor, "weak"), color: colors.getHex(highlightColor), borderRadius: 5, padding: 2 }, highlightStyle), children: match }, crypto.randomUUID())));
    // Styles
    const TextStyle = (0, react_2.css)(Object.assign({ fontFamily: family, fontWeight: weight, fontStyle: italic ? "italic" : "normal", fontSize: fontSize, textTransform: transform, textAlign: align, color: colors.getHex(color), margin: 0 }, style));
    return ((0, jsx_runtime_1.jsx)(utils_1.PolymorphicText, Object.assign({ css: TextStyle, ref: ref }, rest, { children: replacements })));
});
