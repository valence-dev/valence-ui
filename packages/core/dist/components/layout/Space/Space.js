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
exports.Space = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styled_components_1 = __importDefault(require("styled-components"));
/** A basic, unstyled layout assistant that creates blank space between any two objects. */
function Space(props) {
    // Defaults
    const { height, width, grow, style } = props, rest = __rest(props, ["height", "width", "grow", "style"]);
    // Styles
    const StyledSpace = styled_components_1.default.span(Object.assign({ width: width, height: height, flexGrow: grow ? 1 : undefined }, style));
    return ((0, jsx_runtime_1.jsx)(StyledSpace, Object.assign({}, rest)));
}
exports.Space = Space;
