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
exports.OptionContainer = void 0;
const jsx_runtime_1 = require("@emotion/react/jsx-runtime");
/** @jsxImportSource @emotion/react */
const react_1 = require("@emotion/react");
const react_2 = require("@floating-ui/react");
const buttons_1 = require("../../buttons");
const InputContainer_1 = require("../InputContainer");
const react_3 = require("react");
const icons_react_1 = require("@tabler/icons-react");
const ValenceProvider_1 = require("../../../ValenceProvider");
const layout_1 = require("../../layout");
const display_1 = require("../../display");
const hooks_1 = require("../../../hooks");
const responsive_1 = require("../../../responsive");
exports.OptionContainer = (0, react_3.forwardRef)(function OptionContainer(props, ref) {
    const theme = (0, ValenceProvider_1.useValence)();
    // Defaults
    const _a = (0, responsive_1.useResponsiveProps)(props), { selectedOption, options, onSelect, nothingFound = "Nothing found...", selectKeys = ["Enter"], closeKeys = ["Escape"], icon, rightIcon = (0, jsx_runtime_1.jsx)(icons_react_1.IconSelector, {}), size = theme.defaults.size, radius = theme.defaults.radius, variant = theme.defaults.variant, loading, disabled, required, color = "black", backgroundColor = color, padding, margin, width, height, grow, dropdownProps = {
        padding: InputContainer_1.INPUT_SIZES[size].padding,
        backgroundColor: "white",
        color: "black",
        shadow: true,
        height: 200,
    }, dropdownButtonProps, dropdownStyle, style, inputRef, children } = _a, rest = __rest(_a, ["selectedOption", "options", "onSelect", "nothingFound", "selectKeys", "closeKeys", "icon", "rightIcon", "size", "radius", "variant", "loading", "disabled", "required", "color", "backgroundColor", "padding", "margin", "width", "height", "grow", "dropdownProps", "dropdownButtonProps", "dropdownStyle", "style", "inputRef", "children"]);
    // States
    const [isOpen, setIsOpen] = (0, react_3.useState)(false);
    const [highlightedIndex, setHighlightedIndex] = (0, react_3.useState)(0);
    // Hooks
    (0, hooks_1.useDetectKeyDown)((e) => {
        switch (e.key) {
            case "ArrowDown": {
                e.preventDefault();
                setHighlightedIndex((i) => (i + 1) % options.length);
                break;
            }
            case "ArrowUp": {
                e.preventDefault();
                setHighlightedIndex((i) => (i - 1 + options.length) % options.length);
                break;
            }
        }
        if (selectKeys.includes(e.key)) {
            if (highlightedIndex === -1 || options.length === 0)
                return;
            e.preventDefault();
            handleSelect(options[highlightedIndex]);
        }
        if (closeKeys.includes(e.key)) {
            setIsOpen(false);
        }
    }, ["ArrowDown", "ArrowUp", ...selectKeys, ...closeKeys], isOpen);
    (0, react_3.useEffect)(() => {
        if (!isOpen)
            return;
        if (options.length === 0)
            return setHighlightedIndex(-1);
        setHighlightedIndex(0);
    }, [isOpen, options]);
    (0, react_3.useEffect)(() => {
        if (document.activeElement === inputRef.current)
            setIsOpen(true);
        else
            setIsOpen(false);
    }, [document.activeElement, isOpen]);
    // Handlers
    function handleSelect(option) {
        onSelect === null || onSelect === void 0 ? void 0 : onSelect(option);
    }
    // Floating UI
    const { refs, floatingStyles, context } = (0, react_2.useFloating)({
        placement: "bottom-start",
        open: isOpen,
        onOpenChange: setIsOpen,
        whileElementsMounted: react_2.autoUpdate,
        middleware: [
            (0, react_2.offset)(5),
            (0, react_2.flip)({ padding: 15 }),
            (0, react_2.size)({
                apply({ rects, elements, availableHeight }) {
                    Object.assign(elements.floating.style, {
                        maxHeight: `${availableHeight}px`,
                        width: `${rects.reference.width}px`,
                    });
                },
            })
        ]
    });
    const click = (0, react_2.useClick)(context);
    const dismiss = (0, react_2.useDismiss)(context);
    const { getReferenceProps, getFloatingProps, } = (0, react_2.useInteractions)([dismiss, click]);
    // Styles
    const DropdownStyle = (0, react_1.css)(Object.assign(Object.assign({ backgroundColor: theme.getColorHex(dropdownProps.backgroundColor, "strong"), color: theme.getColorHex(dropdownProps.color), outline: `1px solid ${theme.getColorHex(dropdownProps.color, "weak")}`, backdropFilter: "blur(5px)", maxHeight: dropdownProps.height, borderRadius: theme.sizeClasses.radius[radius] + dropdownProps.padding, padding: dropdownProps.padding, boxShadow: dropdownProps.shadow ? theme.defaults.shadow : undefined, animationName: "in", animationDuration: "0.1s", overflowY: "auto", "@keyframes in": {
            from: {
                opacity: 0,
            },
            to: {
                opacity: 1,
            },
        }, "&::-webkit-scrollbar": {
            width: 10,
        }, "&::-webkit-scrollbar-thumb": {
            backgroundColor: theme.getColorHex(dropdownProps.color, "medium"),
            borderRadius: 5,
        } }, dropdownStyle), floatingStyles));
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(InputContainer_1.InputContainer, Object.assign({ icon: icon, button: rightIcon, size: size, radius: radius, variant: variant, loading: loading, disabled: disabled, required: required, color: color, backgroundColor: backgroundColor, padding: padding, margin: margin, width: width, height: height, grow: grow, style: style, inputRef: inputRef, ref: refs.setReference }, getReferenceProps(), rest, { children: children })), isOpen && ((0, jsx_runtime_1.jsx)(react_2.FloatingPortal, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ css: DropdownStyle, ref: refs.setFloating }, getFloatingProps(), { children: options.length === 0 ?
                        (0, jsx_runtime_1.jsx)(layout_1.Flex, { height: theme.sizeClasses.height[size], align: "center", justify: "center", children: typeof nothingFound === "string" ?
                                (0, jsx_runtime_1.jsx)(display_1.Text, { align: "center", color: theme.getColorHex("black", "strong"), children: nothingFound })
                                :
                                    nothingFound })
                        : options.map((option, i) => ((0, jsx_runtime_1.jsx)(buttons_1.ButtonWithIcon, Object.assign({ icon: (selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.label) === option.label
                                ? (0, jsx_runtime_1.jsx)(display_1.Icon, { children: (0, jsx_runtime_1.jsx)(icons_react_1.IconCheck, {}) })
                                : option.left, color: color, variant: highlightedIndex === i ? "light" : "subtle", radius: radius, size: size, width: "100%" }, dropdownButtonProps, { onClick: () => handleSelect(option), children: option.label }), i))) })) }))] }));
});
