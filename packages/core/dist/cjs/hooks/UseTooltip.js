"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTooltip = void 0;
const react_1 = require("@floating-ui/react");
const UseDisclosure_1 = require("./UseDisclosure");
const react_2 = require("react");
function useTooltip({ placement = "top", offset = 5, disclosure } = {}) {
    var _a, _b;
    const uncontrolled = (0, UseDisclosure_1.useDisclosure)();
    const opened = (_a = disclosure === null || disclosure === void 0 ? void 0 : disclosure.opened) !== null && _a !== void 0 ? _a : uncontrolled.opened;
    const setUpdate = (_b = disclosure === null || disclosure === void 0 ? void 0 : disclosure.update) !== null && _b !== void 0 ? _b : uncontrolled.update;
    // Floating UI
    const data = (0, react_1.useFloating)({
        placement,
        open: opened,
        onOpenChange: setUpdate,
        whileElementsMounted: react_1.autoUpdate,
        middleware: [
            (0, react_1.offset)(offset),
            (0, react_1.flip)({
                crossAxis: placement.includes("-"),
                fallbackAxisSideDirection: "start",
                padding: 5,
            }),
            (0, react_1.shift)({ padding: 5 }),
        ]
    });
    const context = data.context;
    const hover = (0, react_1.useHover)(context, {
        move: false,
        enabled: disclosure === undefined,
    });
    const focus = (0, react_1.useFocus)(context, {
        enabled: disclosure === undefined,
    });
    const dismiss = (0, react_1.useDismiss)(context);
    const role = (0, react_1.useRole)(context, { role: "tooltip" });
    const interactions = (0, react_1.useInteractions)([hover, focus, dismiss, role]);
    return (0, react_2.useMemo)(() => (Object.assign(Object.assign({ opened,
        setUpdate }, interactions), data)), [opened, setUpdate, interactions, data]);
}
exports.useTooltip = useTooltip;
