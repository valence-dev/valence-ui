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
const TextInput_1 = require("../TextInput");
exports.PillSelector = (0, react_2.forwardRef)(function PillSelector(props, ref) {
    const theme = (0, ValenceProvider_1.useValence)();
    const { getHex } = (0, color_1.useColors)();
    // Defaults
    const _a = (0, responsive_1.useResponsiveProps)(props), { value, setValue, pills: _pills, setPills: _setPills, allowClear = true, gap = 5, maxSelectable = Infinity, clearButtonIcon = (0, jsx_runtime_1.jsx)(icons_react_1.IconX, {}), clearButtonProps, wrap = "nowrap", pillProps, selectedPillProps = pillProps, pillContainerProps, allowEditing = false, placeholder = "Add a pill...", inputProps, size = theme.defaults.size, radius = theme.defaults.radius, variant = theme.defaults.variant, loading, autoFocus, disabled, readOnly = disabled, required, color = "black", backgroundColor = color, padding, margin, width = "100%", height = "auto", grow = true, onPillSelected, onPillDeselected, style } = _a, rest = __rest(_a, ["value", "setValue", "pills", "setPills", "allowClear", "gap", "maxSelectable", "clearButtonIcon", "clearButtonProps", "wrap", "pillProps", "selectedPillProps", "pillContainerProps", "allowEditing", "placeholder", "inputProps", "size", "radius", "variant", "loading", "autoFocus", "disabled", "readOnly", "required", "color", "backgroundColor", "padding", "margin", "width", "height", "grow", "onPillSelected", "onPillDeselected", "style"]);
    const _b = pillContainerProps !== null && pillContainerProps !== void 0 ? pillContainerProps : {}, { style: pillContainerStyle } = _b, pillContainerPropsRest = __rest(_b, ["style"]);
    const _c = clearButtonProps !== null && clearButtonProps !== void 0 ? clearButtonProps : {}, { style: clearButtonStyle } = _c, clearButtonPropsRest = __rest(_c, ["style"]);
    // States
    const [__pills, __setPills] = (0, react_2.useState)([]);
    const pills = sortPills(_pills !== null && _pills !== void 0 ? _pills : __pills);
    const setPills = _setPills !== null && _setPills !== void 0 ? _setPills : __setPills;
    const [inputValue, setInputValue] = (0, react_2.useState)("");
    const [newPills, setNewPills] = (0, react_2.useState)([]);
    // Functions
    function sortPills(pills, v = value) {
        const selectedPills = pills.filter(pill => v.includes(pill));
        const unselectedPills = pills.filter(pill => !v.includes(pill));
        return [...selectedPills.sort(), ...unselectedPills.sort()];
    }
    function handlePillClick(pill) {
        let v = [...value];
        let pillList = [...pills];
        if (value.includes(pill)) {
            onPillDeselected === null || onPillDeselected === void 0 ? void 0 : onPillDeselected(pill);
            v = value.filter(v => v !== pill);
            pillList = removePill(pill);
        }
        else {
            onPillSelected === null || onPillSelected === void 0 ? void 0 : onPillSelected(pill);
            v = [...value, pill];
        }
        setPills(sortPills(pillList, v));
        setValue(v);
    }
    function handleClearPills() {
        setValue([]);
        setPills(sortPills(pills, []));
    }
    // Input functions
    function addPill() {
        if (inputValue === "")
            return;
        if (value.length >= maxSelectable)
            return;
        if (value.includes(inputValue))
            return setInputValue("");
        if (pills.includes(inputValue)) {
            handlePillClick(inputValue);
            setInputValue("");
            return;
        }
        const newValue = [...value, inputValue];
        const newPillList = sortPills([...pills, inputValue], newValue);
        setPills(newPillList);
        setValue(newValue);
        setNewPills([...newPills, inputValue]);
        setInputValue("");
    }
    function removePill(pill) {
        console.log(pill, newPills);
        // If the pill has been removed and it is on the new pill list,
        // delete it from the new pill list and the pill list
        if (newPills.includes(pill)) {
            setNewPills(newPills.filter(p => p !== pill));
            return pills.filter(p => p !== pill);
        }
        return pills;
    }
    // Styles
    const ContainerStyle = Object.assign({ padding: padding, margin: margin, width: width, height: height, flexGrow: grow ? 1 : undefined, alignItems: "center" }, style);
    const PillContainerStyle = (0, react_1.css)(Object.assign({ padding: `${gap}px 0px`, overflowX: "auto", width: "100%", flexWrap: wrap, "&::-webkit-scrollbar": {
            height: 2,
        }, "&::-webkit-scrollbar-thumb": {
            backgroundColor: getHex(color, "medium"),
            borderRadius: 5,
        }, "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: getHex(color, "strong"),
            borderRadius: 5,
        } }, pillContainerStyle));
    const ButtonStyle = Object.assign({ margin: `${gap}px 0px` }, clearButtonStyle);
    return ((0, jsx_runtime_1.jsxs)(layout_1.Flex, Object.assign({ style: ContainerStyle, gap: gap, ref: ref }, rest, { children: [(0, jsx_runtime_1.jsxs)(layout_1.Flex, Object.assign({ gap: gap, css: PillContainerStyle }, pillContainerPropsRest, { children: [allowEditing && wrap === "wrap" &&
                        (0, jsx_runtime_1.jsx)(TextInput_1.TextInput, Object.assign({ value: inputValue, setValue: setInputValue, onEnterPress: () => addPill(), placeholder: placeholder, variant: variant, size: size, radius: radius, color: color, backgroundColor: backgroundColor, loading: loading, disabled: disabled, readOnly: readOnly, required: required }, inputProps)), pills.map((pill, index) => {
                        const isSelected = value.includes(pill);
                        return ((0, jsx_runtime_1.jsx)(buttons_1.Button, Object.assign({ size: size, radius: radius, variant: isSelected ?
                                variant === "filled" ? "light" : "filled"
                                : variant, color: color, onClick: () => handlePillClick(pill) }, pillProps, (isSelected ? selectedPillProps : undefined), { children: pill }), index));
                    })] })), (0, jsx_runtime_1.jsx)(buttons_1.IconButton, Object.assign({ size: size, radius: radius, color: color, variant: "subtle", onClick: () => handleClearPills(), style: ButtonStyle }, clearButtonPropsRest, { children: clearButtonIcon }))] })));
});
