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
exports.DropdownContainer = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
/** @jsxImportSource @emotion/react */
const react_1 = require("react");
const Options_1 = require("./Options");
const hooks_1 = require("../../../hooks");
const react_2 = require("@floating-ui/react");
const react_3 = require("@emotion/react");
const icons_react_1 = require("@tabler/icons-react");
const InputContainer_1 = require("../InputContainer");
const ValenceProvider_1 = require("../../../ValenceProvider");
const utilities_1 = require("../../../utilities");
const buttons_1 = require("../../buttons");
const display_1 = require("../../display");
function DropdownContainer(props) {
    var _a;
    const theme = (0, ValenceProvider_1.useValence)();
    const { getHex, getFgHex } = (0, utilities_1.useColors)();
    // Fallback states
    const [_selected, _setSelected] = (0, react_1.useState)(null);
    const [_highlighted, _setHighlighted] = (0, react_1.useState)(null);
    // States
    const disclosure = (0, hooks_1.useDisclosure)();
    // Defaults
    const { options, onSelect, placeholder = "Select an option...", selected = _selected, setSelected = _setSelected, highlighted = _highlighted, setHighlighted = _setHighlighted, icon, secondaryIcon = (0, jsx_runtime_1.jsx)(icons_react_1.IconSelector, {}), 
    // Input container props
    size: inputSize = theme.defaults.size, radius = theme.defaults.radius, variant = theme.defaults.variant, color = "black", backgroundColor = color, loading, disabled, required, dropdownStyle, children } = props, rest = __rest(props, ["options", "onSelect", "placeholder", "selected", "setSelected", "highlighted", "setHighlighted", "icon", "secondaryIcon", "size", "radius", "variant", "color", "backgroundColor", "loading", "disabled", "required", "dropdownStyle", "children"]);
    // Floating UI
    const { refs, floatingStyles, context } = (0, react_2.useFloating)({
        placement: "bottom-start",
        open: disclosure.opened,
        onOpenChange: disclosure.update,
        whileElementsMounted: react_2.autoUpdate,
        middleware: [
            (0, react_2.offset)(10),
            (0, react_2.flip)({ padding: 10 }),
            (0, react_2.size)({
                apply({ rects, elements, availableHeight }) {
                    Object.assign(elements.floating.style, {
                        maxHeight: `${availableHeight}px`,
                        width: `${rects.reference.width}px`,
                    });
                },
                padding: 15
            })
        ]
    });
    const listRef = (0, react_1.useRef)([]);
    const listContentRef = (0, react_1.useRef)(options.map((o) => (0, Options_1.getOptionLabel)(o)));
    const isTypingRef = (0, react_1.useRef)(false);
    const click = (0, react_2.useClick)(context, { event: "mousedown" });
    const dismiss = (0, react_2.useDismiss)(context);
    const role = (0, react_2.useRole)(context, { role: "listbox" });
    const listNav = (0, react_2.useListNavigation)(context, {
        listRef,
        activeIndex: highlighted,
        selectedIndex: selected,
        onNavigate: setHighlighted,
        loop: true,
    });
    const typeahead = (0, react_2.useTypeahead)(context, {
        listRef: listContentRef,
        activeIndex: highlighted,
        selectedIndex: selected,
        onMatch: disclosure.opened ? setHighlighted : setSelected,
        onTypingChange(isTyping) { isTypingRef.current = isTyping; },
    });
    const { getReferenceProps, getFloatingProps, getItemProps, } = (0, react_2.useInteractions)([click, dismiss, role, listNav, typeahead]);
    function handleSelect(index) {
        setSelected(index);
        onSelect === null || onSelect === void 0 ? void 0 : onSelect(options[index]);
        disclosure.close();
    }
    const selectedItemLabel = selected !== null ? (0, Options_1.getOptionLabel)(options[selected]) : undefined;
    // Styles
    const DropdownStyle = (0, react_3.css)(Object.assign(Object.assign(Object.assign({}, floatingStyles), { overflowY: "auto", minWidth: 100, backgroundColor: getHex("white", "strong"), color: getHex(color), border: `1px solid ${getHex(color, "weak")}`, backdropFilter: "blur(5px)", borderRadius: theme.sizeClasses.radius[radius] + 5, padding: 5, boxSizing: "border-box", boxShadow: theme.defaults.shadow, animationName: "in", animationDuration: "0.1s", "@keyframes in": {
            from: {
                opacity: 0,
            },
            to: {
                opacity: 1,
            },
        } }), dropdownStyle));
    const ItemStyle = {
        outline: "none !important",
    };
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(InputContainer_1.InputContainer, Object.assign({ tabIndex: 0, icon: selected ? (_a = (0, Options_1.getOptionIcon)(options[selected])) !== null && _a !== void 0 ? _a : icon : icon, button: secondaryIcon, size: inputSize, radius: radius, variant: variant, color: color, backgroundColor: backgroundColor, loading: loading, disabled: disabled, required: required, ref: refs.setReference }, getReferenceProps(), rest, { children: children !== null && children !== void 0 ? children : (0, jsx_runtime_1.jsx)(display_1.Text, { style: {
                        flex: 1,
                        color: getFgHex(color, variant),
                        opacity: selectedItemLabel ? 1 : 0.5,
                    }, children: selectedItemLabel !== null && selectedItemLabel !== void 0 ? selectedItemLabel : placeholder }) })), disclosure.opened && ((0, jsx_runtime_1.jsx)(react_2.FloatingPortal, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ ref: refs.setFloating, css: DropdownStyle }, getFloatingProps(), { children: options.map((value, i) => ((0, jsx_runtime_1.jsx)(buttons_1.ButtonWithIcon, Object.assign({ ref: (node) => {
                            listRef.current[i] = node;
                        }, icon: i === selected ?
                            (0, jsx_runtime_1.jsx)(icons_react_1.IconCheck, {}) :
                            typeof value !== "string" ? value === null || value === void 0 ? void 0 : value.icon : undefined, variant: i === highlighted ? "light" : "subtle", width: "100%", color: color, style: ItemStyle }, getItemProps({
                        // Handle pointer select.
                        onClick() {
                            handleSelect(i);
                        },
                        // Handle keyboard select.
                        onKeyDown(event) {
                            if (event.key === "Enter") {
                                event.preventDefault();
                                handleSelect(i);
                            }
                            if (event.key === " " && !isTypingRef.current) {
                                event.preventDefault();
                                handleSelect(i);
                            }
                        },
                    }), { children: (0, Options_1.getOptionLabel)(value) }), i))) })) }))] }));
}
exports.DropdownContainer = DropdownContainer;
