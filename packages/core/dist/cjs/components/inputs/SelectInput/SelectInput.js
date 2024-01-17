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
exports.SelectInput = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ValenceProvider_1 = require("../../../ValenceProvider");
const icons_react_1 = require("@tabler/icons-react");
const responsive_1 = require("../../../utilities/responsive");
const DropdownContainer_1 = require("../DropdownContainer");
exports.SelectInput = (0, react_1.forwardRef)(function SelectInput(props, ref) {
    const theme = (0, ValenceProvider_1.useValence)();
    // Defaults
    const _a = (0, responsive_1.useResponsiveProps)(props), { value, setValue, options, onSelect, icon, placeholder = "Select an option...", actionIcon = (0, jsx_runtime_1.jsx)(icons_react_1.IconSelector, {}) } = _a, rest = __rest(_a, ["value", "setValue", "options", "onSelect", "icon", "placeholder", "actionIcon"]);
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(DropdownContainer_1.DropdownContainer, Object.assign({ options: options, selected: value ? options.findIndex(o => o === value) : null, setSelected: i => setValue(i !== null ? options[i] : null), onSelect: onSelect, icon: icon, secondaryIcon: actionIcon, placeholder: placeholder }, rest)) }));
});
