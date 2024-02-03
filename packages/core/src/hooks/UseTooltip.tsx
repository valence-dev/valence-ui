import { Placement, autoUpdate, useFloating, offset as tooltipOffset, flip, shift, useHover, useFocus, useDismiss, useRole, useInteractions } from "@floating-ui/react";
import { Disclosure, useDisclosure } from "./UseDisclosure";
import { useMemo } from "react";
import { useBreakpoint } from "../utilities";

export type TooltipOptions = {
  /** The placement of the tooltip relative to the target */
  placement?: Placement;
  /** The offset between the tooltip and the target */
  offset?: number;
  /** An optional disclosure to handle the state of this tooltip */
  disclosure?: Disclosure;
}


export function useTooltip({
  placement = "top",
  offset = 5,
  disclosure
}: TooltipOptions = {}) {
  const uncontrolled = useDisclosure();
  const { isMobile } = useBreakpoint();

  const opened = disclosure?.opened ?? isMobile ? false : uncontrolled.opened;
  const setUpdate = disclosure?.update ?? uncontrolled.update;


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


  return useMemo(
    () => ({
      opened,
      setUpdate,
      ...interactions,
      ...data,
    }),
    [opened, setUpdate, interactions, data]
  )
}