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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Flex_1 = require("../Flex");
const __1 = require("../../..");
const use_scroll_position_1 = require("@n8tb1t/use-scroll-position");
const utils_1 = require("@valence-ui/utils");
function interpolateHeight(max, min, scrollY) {
    return Math.max(max + scrollY, min);
}
/** A layout component that helps position `Title` and similar components.
 *
 * On desktop devices, the `Header` will act as a static container that can be placed anywhere and will scroll with the content. On mobile devices, however, the `Header` will become fixed tot he top of the screen and can shrink as the user scrolls.
 */
exports.Header = (0, react_1.forwardRef)(function Header(props, ref) {
    var _a;
    const theme = (0, __1.useValenceContext)();
    // Defaults
    const { regularHeight = 100, tallHeight = 150, compactHeight = 75, compactOnScroll = true, backgroundColor = "white", children, style } = props, rest = __rest(props, ["regularHeight", "tallHeight", "compactHeight", "compactOnScroll", "backgroundColor", "children", "style"]);
    // Hooks & States
    const breakpoint = (0, __1.useBreakpoint)();
    const [height, setHeight] = (0, react_1.useState)(((_a = props.height) !== null && _a !== void 0 ? _a : breakpoint.isMobileTall) ? tallHeight : regularHeight);
    // Scroll listener
    (0, use_scroll_position_1.useScrollPosition)(({ prevPos, currPos }) => {
        var _a;
        if (!compactOnScroll || !breakpoint.isMobile)
            return;
        setHeight(interpolateHeight(((_a = props.height) !== null && _a !== void 0 ? _a : breakpoint.isMobileTall) ? tallHeight : regularHeight, compactHeight, (prevPos.y + currPos.y) / 2));
    });
    // Styles
    const HeaderStyle = Object.assign({ backgroundColor: theme.getColorHex((0, utils_1.getReactiveProp)(backgroundColor, breakpoint), "strong"), backdropFilter: breakpoint.isMobile ? "blur(5px)" : undefined, position: breakpoint.isMobile ? "fixed" : undefined, top: 0, zIndex: 150, width: "100%" }, (0, utils_1.getReactiveProp)(style, breakpoint));
    return ((0, jsx_runtime_1.jsx)(Flex_1.Flex, Object.assign({ style: HeaderStyle, direction: "column", justify: "center", height: height, ref: ref }, rest, { children: children })));
});
