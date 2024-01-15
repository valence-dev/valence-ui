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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "@emotion/react/jsx-runtime";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useFloating, useClick, useDismiss, useInteractions, offset, flip, size as sizeFn, autoUpdate, FloatingPortal, } from "@floating-ui/react";
import { ButtonWithIcon } from "../../buttons";
import { INPUT_SIZES, InputContainer } from "../InputContainer";
import { forwardRef, useEffect, useState } from "react";
import { IconCheck, IconSelector } from "@tabler/icons-react";
import { useValence } from "../../../ValenceProvider";
import { Flex } from "../../layout";
import { Icon, Text } from "../../display";
import { useDetectKeyDown } from "../../../hooks";
import { useResponsiveProps } from "../../../responsive";
export const OptionContainer = forwardRef(function OptionContainer(props, ref) {
    const theme = useValence();
    // Defaults
    const _a = useResponsiveProps(props), { selectedOption, options, onSelect, nothingFound = "Nothing found...", selectKeys = ["Enter"], closeKeys = ["Escape"], icon, rightIcon = _jsx(IconSelector, {}), size = theme.defaults.size, radius = theme.defaults.radius, variant = theme.defaults.variant, loading, disabled, required, color = "black", backgroundColor = color, padding, margin, width, height, grow, dropdownProps = {
        padding: INPUT_SIZES[size].padding,
        backgroundColor: "white",
        color: "black",
        shadow: true,
        height: 200,
    }, dropdownButtonProps, dropdownStyle, style, inputRef, children } = _a, rest = __rest(_a, ["selectedOption", "options", "onSelect", "nothingFound", "selectKeys", "closeKeys", "icon", "rightIcon", "size", "radius", "variant", "loading", "disabled", "required", "color", "backgroundColor", "padding", "margin", "width", "height", "grow", "dropdownProps", "dropdownButtonProps", "dropdownStyle", "style", "inputRef", "children"]);
    // States
    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(0);
    // Hooks
    useDetectKeyDown((e) => {
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
    useEffect(() => {
        if (!isOpen)
            return;
        if (options.length === 0)
            return setHighlightedIndex(-1);
        setHighlightedIndex(0);
    }, [isOpen, options]);
    useEffect(() => {
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
    const { refs, floatingStyles, context } = useFloating({
        placement: "bottom-start",
        open: isOpen,
        onOpenChange: setIsOpen,
        whileElementsMounted: autoUpdate,
        middleware: [
            offset(5),
            flip({ padding: 15 }),
            sizeFn({
                apply({ rects, elements, availableHeight }) {
                    Object.assign(elements.floating.style, {
                        maxHeight: `${availableHeight}px`,
                        width: `${rects.reference.width}px`,
                    });
                },
            })
        ]
    });
    const click = useClick(context);
    const dismiss = useDismiss(context);
    const { getReferenceProps, getFloatingProps, } = useInteractions([dismiss, click]);
    // Styles
    const DropdownStyle = css(Object.assign(Object.assign({ backgroundColor: theme.getColorHex(dropdownProps.backgroundColor, "strong"), color: theme.getColorHex(dropdownProps.color), outline: `1px solid ${theme.getColorHex(dropdownProps.color, "weak")}`, backdropFilter: "blur(5px)", maxHeight: dropdownProps.height, borderRadius: theme.sizeClasses.radius[radius] + dropdownProps.padding, padding: dropdownProps.padding, boxShadow: dropdownProps.shadow ? theme.defaults.shadow : undefined, animationName: "in", animationDuration: "0.1s", overflowY: "auto", "@keyframes in": {
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
    return (_jsxs(_Fragment, { children: [_jsx(InputContainer, Object.assign({ icon: icon, button: rightIcon, size: size, radius: radius, variant: variant, loading: loading, disabled: disabled, required: required, color: color, backgroundColor: backgroundColor, padding: padding, margin: margin, width: width, height: height, grow: grow, style: style, inputRef: inputRef, ref: refs.setReference }, getReferenceProps(), rest, { children: children })), isOpen && (_jsx(FloatingPortal, { children: _jsx("div", Object.assign({ css: DropdownStyle, ref: refs.setFloating }, getFloatingProps(), { children: options.length === 0 ?
                        _jsx(Flex, { height: theme.sizeClasses.height[size], align: "center", justify: "center", children: typeof nothingFound === "string" ?
                                _jsx(Text, { align: "center", color: theme.getColorHex("black", "strong"), children: nothingFound })
                                :
                                    nothingFound })
                        : options.map((option, i) => (_jsx(ButtonWithIcon, Object.assign({ icon: (selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.label) === option.label
                                ? _jsx(Icon, { children: _jsx(IconCheck, {}) })
                                : option.left, color: color, variant: highlightedIndex === i ? "light" : "subtle", radius: radius, size: size, width: "100%" }, dropdownButtonProps, { onClick: () => handleSelect(option), children: option.label }), i))) })) }))] }));
});
