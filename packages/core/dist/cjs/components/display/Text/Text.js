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
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_string_replace_1 = __importDefault(require("react-string-replace"));
const styled_components_1 = __importDefault(require("styled-components"));
const utils_1 = require("@valence-ui/utils");
const ValenceProvider_1 = require("../../../ValenceProvider");
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
function Text(props) {
    var _a, _b;
    const theme = (0, react_1.useContext)(ValenceProvider_1.ValenceContext);
    // Defaults
    const { bold = false, italic = false, monospace = false, family = monospace ? theme.getFont("monospace") : theme.getFont("default"), weight = bold ? "bold" : "normal", align = "left", transform = "none", size = theme.defaultSize, fontSize = theme.sizeClasses.fontSize[size], color = (_b = (_a = theme.getColor("black")) === null || _a === void 0 ? void 0 : _a.base) !== null && _b !== void 0 ? _b : "black" } = props, rest = __rest(props, ["bold", "italic", "monospace", "family", "weight", "align", "transform", "size", "fontSize", "color"]);
    // Run through formatters
    let replacements = props.children;
    replacements = (0, react_string_replace_1.default)(replacements, REGEX_PATTERNS.newline, (match, i) => ((0, jsx_runtime_1.jsx)("br", {}, match + i)));
    replacements = (0, react_string_replace_1.default)(replacements, REGEX_PATTERNS.boldItalic, (match, i) => ((0, jsx_runtime_1.jsx)("b", { style: {
            fontWeight: 800,
            fontStyle: "italic",
        }, children: (0, jsx_runtime_1.jsx)("i", { children: match }) }, match + i)));
    replacements = (0, react_string_replace_1.default)(replacements, REGEX_PATTERNS.bold, (match, i) => ((0, jsx_runtime_1.jsx)("b", { style: {
            fontWeight: 800,
        }, children: match }, match + i)));
    replacements = (0, react_string_replace_1.default)(replacements, REGEX_PATTERNS.italic, (match, i) => ((0, jsx_runtime_1.jsx)("i", { style: {
            fontStyle: "italic",
        }, children: match }, match + i)));
    replacements = (0, react_string_replace_1.default)(replacements, REGEX_PATTERNS.monospace, (match, i) => ((0, jsx_runtime_1.jsx)("span", { style: {
            fontFamily: theme.getFont("monospace"),
        }, children: match }, match + i)));
    // Styles
    const StyledText = styled_components_1.default.text({
        fontFamily: family,
        fontWeight: weight,
        fontStyle: italic ? "italic" : "normal",
        fontSize: fontSize,
        textTransform: transform,
        textAlign: align,
        color: color,
        margin: 0,
    });
    return ((0, jsx_runtime_1.jsx)(StyledText, Object.assign({ as: utils_1.PolymorphicText }, rest, { children: replacements })));
}
exports.Text = Text;
