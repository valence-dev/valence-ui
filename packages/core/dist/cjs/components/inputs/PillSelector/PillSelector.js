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
exports.PillSelector = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
/** @jsxImportSource @emotion/react */
const react_1 = require("@emotion/react");
const react_2 = require("react");
const buttons_1 = require("../../buttons");
const layout_1 = require("../../layout");
const ValenceProvider_1 = require("../../../ValenceProvider");
const icons_react_1 = require("@tabler/icons-react");
const responsive_1 = require("../../../utilities/responsive");
const color_1 = require("../../../utilities/color");
exports.PillSelector = (0, react_2.forwardRef)(function PillSelector(props, ref) {
    const theme = (0, ValenceProvider_1.useValence)();
    const { getHex } = (0, color_1.useColors)();
    // Defaults
    const _a = (0, responsive_1.useResponsiveProps)(props), { value, setValue, pills, allowClear = true, gap = 5, maxSelectable = Infinity, clearButtonIcon = (0, jsx_runtime_1.jsx)(icons_react_1.IconX, {}), clearButtonProps, pillProps, selectedPillProps = pillProps, pillContainerProps, size = theme.defaults.size, radius = theme.defaults.radius, variant = theme.defaults.variant, loading, autoFocus, disabled, readOnly = disabled, required, color = "black", backgroundColor = color, padding, margin, width, height = "auto", grow = true, onPillSelected, onPillDeselected, style } = _a, rest = __rest(_a, ["value", "setValue", "pills", "allowClear", "gap", "maxSelectable", "clearButtonIcon", "clearButtonProps", "pillProps", "selectedPillProps", "pillContainerProps", "size", "radius", "variant", "loading", "autoFocus", "disabled", "readOnly", "required", "color", "backgroundColor", "padding", "margin", "width", "height", "grow", "onPillSelected", "onPillDeselected", "style"]);
    const _b = pillContainerProps !== null && pillContainerProps !== void 0 ? pillContainerProps : {}, { style: pillContainerStyle } = _b, pillContainerPropsRest = __rest(_b, ["style"]);
    const _c = clearButtonProps !== null && clearButtonProps !== void 0 ? clearButtonProps : {}, { style: clearButtonStyle } = _c, clearButtonPropsRest = __rest(_c, ["style"]);
    // States
    const [pillList, setPillList] = (0, react_2.useState)(sortPills(pills));
    // Functions
    function sortPills(pills, v = value) {
        const selectedPills = pills.filter(pill => v.includes(pill));
        const unselectedPills = pills.filter(pill => !v.includes(pill));
        return [...selectedPills.sort(), ...unselectedPills.sort()];
    }
    function handlePillClick(pill) {
        let v = [...value];
        if (value.includes(pill)) {
            onPillDeselected === null || onPillDeselected === void 0 ? void 0 : onPillDeselected(pill);
            v = value.filter(v => v !== pill);
        }
        else {
            onPillSelected === null || onPillSelected === void 0 ? void 0 : onPillSelected(pill);
            v = [...value, pill];
        }
        setPillList(sortPills(pillList, v));
        setValue(v);
    }
    function handleClearPills() {
        setValue([]);
        setPillList(sortPills(pillList, []));
    }
    // Styles
    const ContainerStyle = Object.assign({ padding: padding, margin: margin, width: width, height: height, flexGrow: grow ? 1 : undefined }, style);
    const PillContainerStyle = (0, react_1.css)(Object.assign({ padding: `${gap}px 0px`, overflowX: "auto", width: "100%", "&::-webkit-scrollbar": {
            height: 2,
        }, "&::-webkit-scrollbar-thumb": {
            backgroundColor: getHex(color, "medium"),
            borderRadius: 5,
        }, "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: getHex(color, "strong"),
            borderRadius: 5,
        } }, pillContainerStyle));
    const ButtonStyle = Object.assign({ margin: `${gap}px 0px` }, clearButtonStyle);
    return ((0, jsx_runtime_1.jsxs)(layout_1.Flex, Object.assign({ style: ContainerStyle, gap: gap, ref: ref }, rest, { children: [(0, jsx_runtime_1.jsx)(layout_1.Flex, Object.assign({ gap: gap, css: PillContainerStyle }, pillContainerPropsRest, { children: pillList.map((pill, index) => {
                    const isSelected = value.includes(pill);
                    return ((0, jsx_runtime_1.jsx)(buttons_1.Button, Object.assign({ size: size, radius: radius, variant: isSelected ?
                            variant === "filled" ? "light" : "filled"
                            : variant, color: color, onClick: () => handlePillClick(pill) }, pillProps, (isSelected ? selectedPillProps : undefined), { children: pill }), index));
                }) })), (0, jsx_runtime_1.jsx)(buttons_1.IconButton, Object.assign({ size: size, radius: radius, color: color, variant: "subtle", onClick: () => handleClearPills(), style: ButtonStyle }, clearButtonPropsRest, { children: clearButtonIcon }))] })));
});
