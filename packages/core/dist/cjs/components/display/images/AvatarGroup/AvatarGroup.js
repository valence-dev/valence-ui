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
exports.AvatarGroup = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const layout_1 = require("../../../layout");
const ValenceProvider_1 = require("../../../../ValenceProvider");
exports.AvatarGroup = (0, react_1.forwardRef)(function AvatarGroup(props, ref) {
    const theme = (0, ValenceProvider_1.useValence)();
    const { size = theme.defaults.size, gap = 5 - theme.sizeClasses.padding[size], children } = props, rest = __rest(props, ["size", "gap", "children"]);
    return ((0, jsx_runtime_1.jsx)(layout_1.Flex, { gap: 0, ref: ref, children: react_1.default.Children.toArray(children).map((child, i) => react_1.default.cloneElement(child, Object.assign({ spanStyle: {
                zIndex: react_1.default.Children.count(children) - i,
            }, style: {
                marginLeft: i === 0 ? undefined : gap,
            }, size: size }, rest))) }));
});
