import { autoUpdate, useFloating, offset as tooltipOffset, flip, shift, useHover, useFocus, useDismiss, useRole, useInteractions } from "@floating-ui/react";
import { useDisclosure } from "./UseDisclosure";
import { useMemo } from "react";
import { useBreakpoint } from "../utilities";
export function useTooltip({ placement = "top", offset = 5, disclosure } = {}) {
    var _a;
    const uncontrolled = useDisclosure();
    const { isMobile } = useBreakpoint();
    const opened = disclosure ? disclosure.opened
        : isMobile ? false
            : uncontrolled.opened;
    const setUpdate = (_a = disclosure === null || disclosure === void 0 ? void 0 : disclosure.update) !== null && _a !== void 0 ? _a : uncontrolled.update;
    // Floating UI
    const data = useFloating({
        placement,
        open: opened,
        onOpenChange: setUpdate,
        whileElementsMounted: autoUpdate,
        middleware: [
            tooltipOffset(offset),
            flip({
                crossAxis: placement.includes("-"),
                fallbackAxisSideDirection: "start",
                padding: 5,
            }),
            shift({ padding: 5 }),
        ]
    });
    const context = data.context;
    const hover = useHover(context, {
        move: false,
        enabled: disclosure === undefined,
    });
    const focus = useFocus(context, {
        enabled: disclosure === undefined,
    });
    const dismiss = useDismiss(context);
    const role = useRole(context, { role: "tooltip" });
    const interactions = useInteractions([hover, focus, dismiss, role]);
    return useMemo(() => (Object.assign(Object.assign({ opened,
        setUpdate }, interactions), data)), [opened, setUpdate, interactions, data]);
}
