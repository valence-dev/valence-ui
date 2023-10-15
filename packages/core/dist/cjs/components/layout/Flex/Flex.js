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
exports.Flex = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const __1 = require("../../..");
const styled_components_1 = __importDefault(require("styled-components"));
const utils_1 = require("@valence-ui/utils");
/** A basic formattable flexbox component that accepts many common flexbox properties. This component is also reactive, thus it will accept both a single value and an object of values that will be applied at different breakpoints. */
function Flex(props) {
    var _a, _b;
    const theme = (0, react_1.useContext)(__1.ValenceContext);
    const breakpoint = (0, __1.useBreakpoint)();
    // Defaults
    const { direction = { default: "row" }, align = { default: "flex-start" }, justify = { default: "flex-start" }, alignSelf = { default: "stretch" }, gap = theme.sizeClasses.padding[theme.defaultSize], grow = { default: false }, noWrap = { default: false }, backgroundColor, color, padding, margin, width, height, style, children } = props, rest = __rest(props, ["direction", "align", "justify", "alignSelf", "gap", "grow", "noWrap", "backgroundColor", "color", "padding", "margin", "width", "height", "style", "children"]);
    // Styles
    const StyledFlex = styled_components_1.default.div(Object.assign({ display: "flex", flexDirection: (0, utils_1.getReactiveProp)(direction, breakpoint), alignItems: (0, utils_1.getReactiveProp)(align, breakpoint), justifyContent: (0, utils_1.getReactiveProp)(justify, breakpoint), alignSelf: (0, utils_1.getReactiveProp)(alignSelf, breakpoint), gap: (0, utils_1.getReactiveProp)(gap, breakpoint), flexGrow: (0, utils_1.getReactiveProp)(grow, breakpoint) ? 1 : undefined, flexWrap: (0, utils_1.getReactiveProp)(noWrap, breakpoint) ? "nowrap" : undefined, backgroundColor: (_a = theme.getColor((0, utils_1.getReactiveProp)(backgroundColor, breakpoint))) === null || _a === void 0 ? void 0 : _a.base, color: (_b = theme.getColor((0, utils_1.getReactiveProp)(color, breakpoint))) === null || _b === void 0 ? void 0 : _b.base, padding: (0, utils_1.getReactiveProp)(padding, breakpoint), margin: (0, utils_1.getReactiveProp)(margin, breakpoint), width: (0, utils_1.getReactiveProp)(width, breakpoint), height: (0, utils_1.getReactiveProp)(height, breakpoint) }, (0, utils_1.getReactiveProp)(style, breakpoint)));
    return ((0, jsx_runtime_1.jsx)(StyledFlex, Object.assign({ as: utils_1.PolymorphicLayout }, rest, { children: children })));
}
exports.Flex = Flex;
