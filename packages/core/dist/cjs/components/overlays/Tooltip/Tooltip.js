"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.Tooltip = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
/** @jsxImportSource @emotion/react */
const react_1 = __importStar(require("react"));
const hooks_1 = require("../../../hooks");
const react_2 = require("@floating-ui/react");
const layout_1 = require("../../layout");
const react_3 = require("@emotion/react");
const ValenceProvider_1 = require("../../../ValenceProvider");
const utils_1 = require("@valence-ui/utils");
const TooltipContext = (0, react_1.createContext)(null);
const useTooltipContext = () => {
    const context = (0, react_1.useContext)(TooltipContext);
    if (context === null)
        throw new Error("Tooltip compontents must be wrapped in <Tooltip />");
    return context;
};
function Tooltip(props) {
    const { children } = props, options = __rest(props, ["children"]);
    const tooltip = (0, hooks_1.useTooltip)(options);
    return ((0, jsx_runtime_1.jsx)(TooltipContext.Provider, { value: tooltip, children: children }));
}
const Trigger = (0, react_1.forwardRef)(function Trigger(props, propRef) {
    const { children } = props;
    const context = useTooltipContext();
    const childrenRef = children.ref;
    const ref = (0, react_2.useMergeRefs)([context.refs.setReference, childrenRef, propRef]);
    return react_1.default.cloneElement(children, context.getReferenceProps(Object.assign(Object.assign({ ref }, children.props), { "data-state": context.opened ? "open" : "closed" })));
});
const Content = (0, react_1.forwardRef)(function Content(props, propRef) {
    const { color = "white", backgroundColor = "black", radius = "xl", variant = "filled", padding = "5px 10px", withShadow = true, zIndex = 2, children } = props, rest = __rest(props, ["color", "backgroundColor", "radius", "variant", "padding", "withShadow", "zIndex", "children"]);
    const context = useTooltipContext();
    const ref = (0, react_2.useMergeRefs)([context.refs.setFloating, propRef]);
    const theme = (0, react_1.useContext)(ValenceProvider_1.ValenceContext);
    const breakpoint = (0, hooks_1.useBreakpoint)();
    // Styles
    const FloatingStyle = (0, react_3.css)(Object.assign({ borderRadius: theme.sizeClasses.radius[(0, utils_1.getReactiveProp)(radius, breakpoint)], boxShadow: !withShadow ? undefined : theme.defaultShadow, zIndex: zIndex, animationName: "in", animationDuration: "0.1s", overflowY: "auto", "@keyframes in": {
            from: {
                opacity: 0,
            },
            to: {
                opacity: 1,
            },
        } }, context.floatingStyles));
    if (!context.opened)
        return null;
    return ((0, jsx_runtime_1.jsx)(react_2.FloatingPortal, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ ref: ref, css: FloatingStyle }, context.getFloatingProps(), { children: (0, jsx_runtime_1.jsx)(layout_1.StyledFlex, Object.assign({ color: color, backgroundColor: backgroundColor, radius: radius, variant: variant, padding: padding }, rest, { children: children })) })) }));
});
const TooltipNamespace = Object.assign(Tooltip, { Trigger, Content, });
exports.Tooltip = TooltipNamespace;
