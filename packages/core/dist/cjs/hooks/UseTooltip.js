"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTooltip = void 0;
const react_1 = require("@floating-ui/react");
const UseDisclosure_1 = require("./UseDisclosure");
const react_2 = require("react");
const utilities_1 = require("../utilities");
function useTooltip({ placement = "top", offset = 5, disclosure } = {}) {
    var _a;
    const uncontrolled = (0, UseDisclosure_1.useDisclosure)();
    const { isMobile } = (0, utilities_1.useBreakpoint)();
    const opened = disclosure ? disclosure.opened
        : isMobile ? false
            : uncontrolled.opened;
    const setUpdate = (_a = disclosure === null || disclosure === void 0 ? void 0 : disclosure.update) !== null && _a !== void 0 ? _a : uncontrolled.update;
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
