/** @jsxImportSource @emotion/react */
import React, {
  CSSProperties,
  ReactElement,
  ReactNode,
  createContext,
  forwardRef,
  useContext,
} from "react";
import { TooltipOptions, useTooltip } from "../../../hooks";
import { FloatingPortal, useMergeRefs } from "@floating-ui/react";
import { css } from "@emotion/react";
import { useValence } from "../../../ValenceProvider";
import { Text } from "../../display";
import {
  MakeResponsive,
  useResponsiveProps,
} from "../../../utilities/responsive";
import { Material, SolidMaterial, useColors } from "../../../utilities";
import { ComponentSize } from "@valence-ui/utils";

// Tooltip context
type ContextType = ReturnType<typeof useTooltip> | null;
const TooltipContext = createContext<ContextType>(null);

const useTooltipContext = () => {
  const context = useContext(TooltipContext);

  if (context === null)
    throw new Error("Tooltip compontents must be wrapped in <Tooltip />");

  return context;
};

export type TooltipProps = TooltipOptions & {
  children: ReactNode;
};

function Tooltip(props: TooltipProps) {
  const { children, ...options } = props;
  const tooltip = useTooltip(options);

  return (
    <TooltipContext.Provider value={tooltip}>
      {children}
    </TooltipContext.Provider>
  );
}

export type TooltipTriggerProps = {
  children: ReactElement<any>;
};

const Trigger = forwardRef(function Trigger(
  props: TooltipTriggerProps,
  propRef: any,
) {
  const { children } = props;

  const context = useTooltipContext();
  const childrenRef = (children as any).ref;
  const ref = useMergeRefs([context.refs.setReference, childrenRef, propRef]);

  return React.cloneElement(
    children,
    context.getReferenceProps({
      ref,
      ...children.props,
      "data-state": context.opened ? "open" : "closed",
    }),
  );
});

export type TooltipContentProps = {
  children: string | ReactNode;

  /** The material of the tooltip */
  material?: Material;
  /** The border radius of the tooltip */
  radius?: ComponentSize;
  /** The z-index of the tooltip */
  zIndex?: CSSProperties["zIndex"];
  /** The padding of the tooltip */
  padding?: CSSProperties["padding"];
};

const Content = forwardRef(function Content(
  props: MakeResponsive<TooltipContentProps>,
  propRef: any,
) {
  const {
    material = new SolidMaterial({ elevation: 3 }),
    radius = "xl",
    padding = "5px 10px",
    zIndex = 2,

    children,
  } = useResponsiveProps<TooltipContentProps>(props);

  const context = useTooltipContext();
  const ref = useMergeRefs([context.refs.setFloating, propRef]);
  const theme = useValence();
  const colors = useColors();

  // Styles
  const FloatingStyle = css({
    ...material.getStyles(theme, colors),
    padding: padding,
    borderRadius: theme.getSize("radius", radius),
    zIndex: zIndex,

    animationName: "in",
    animationDuration: "0.1s",
    overflowY: "auto",

    "@keyframes in": {
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      },
    },

    ...context.floatingStyles,
  });

  if (!context.opened) return null;

  return (
    <FloatingPortal>
      <div ref={ref} css={FloatingStyle} {...context.getFloatingProps()}>
        {typeof children !== "string" ? (
          children
        ) : (
          <Text align="center">{children}</Text>
        )}
      </div>
    </FloatingPortal>
  );
});

const TooltipNamespace = Object.assign(Tooltip, { Trigger, Content });
export { TooltipNamespace as Tooltip };
