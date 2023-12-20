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
exports.BoundElement = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const hooks_1 = require("../../../hooks");
const react_2 = require("@floating-ui/react");
const BoundElementContext = (0, react_1.createContext)(null);
const useBoundElementContext = () => {
    const context = (0, react_1.useContext)(BoundElementContext);
    if (context === null)
        throw new Error("BoundElement compontents must be wrapped in <BoundElement />");
    return context;
};
function BoundElement(props) {
    const { children, disclosure = (0, hooks_1.useDisclosure)() } = props, options = __rest(props, ["children", "disclosure"]);
    const tooltip = (0, hooks_1.useTooltip)(Object.assign(Object.assign({}, options), { disclosure }));
    return ((0, jsx_runtime_1.jsx)(BoundElementContext.Provider, { value: tooltip, children: children }));
}
const Trigger = (0, react_1.forwardRef)(function Trigger(props, propRef) {
    const { children } = props;
    const context = useBoundElementContext();
    const childrenRef = children.ref;
    const ref = (0, react_2.useMergeRefs)([context.refs.setReference, childrenRef, propRef]);
    return react_1.default.cloneElement(children, context.getReferenceProps(Object.assign(Object.assign({ ref }, children.props), { "data-state": context.opened ? "open" : "closed" })));
});
const Content = (0, react_1.forwardRef)(function Content(props, ref) {
    const { children } = props;
    const context = useBoundElementContext();
    return ((0, jsx_runtime_1.jsx)(react_2.FloatingPortal, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ ref: ref, style: context.floatingStyles }, context.getFloatingProps(), { children: children })) }));
});
const BoundElementNamespace = Object.assign(BoundElement, { Trigger, Content });
exports.BoundElement = BoundElementNamespace;
