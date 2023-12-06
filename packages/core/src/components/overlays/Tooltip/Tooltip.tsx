/** @jsxImportSource @emotion/react */
import React, { ReactElement, ReactNode, createContext, forwardRef, useContext } from "react";
import { TooltipOptions, useBreakpoint, useTooltip } from "../../../hooks";
import { FloatingPortal, useMergeRefs } from "@floating-ui/react";
import { StyledFlex, StyledFlexProps } from "../../layout";
import { css } from "@emotion/react";
import { ValenceContext } from "../../../ValenceProvider";
import { getReactiveProp } from "@valence-ui/utils";


// Tooltip context
type ContextType = ReturnType<typeof useTooltip> | null;
const TooltipContext = createContext<ContextType>(null);

const useTooltipContext = () => { 
  const context = useContext(TooltipContext);

  if (context === null) 
    throw new Error("Tooltip compontents must be wrapped in <Tooltip />");

  return context;
}


export type TooltipProps = TooltipOptions & {
  children: ReactNode;
}

function Tooltip(
  props: TooltipProps
) {
  const { children, ...options } = props;
  const tooltip = useTooltip(options);


  return (
    <TooltipContext.Provider
      value={tooltip}
    >
      {children}
    </TooltipContext.Provider>
  )
}


export type TooltipTriggerProps = {
  children: ReactElement<any>;
}

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
    })
  );
});


export type TooltipContentProps = StyledFlexProps & {
  /** Whether to display a shadow underneath the tooltip */
  withShadow?: boolean;
}

const Content = forwardRef(function Content(
  props: TooltipContentProps,
  propRef: any,
) {
  const {
    color = "white",
    backgroundColor = "black",
    radius = "xl",
    variant = "filled",
    padding = "5px 10px",

    withShadow = true,

    children,
    ...rest
  } = props;

  const context = useTooltipContext();
  const ref = useMergeRefs([context.refs.setFloating, propRef]);
  const theme = useContext(ValenceContext);
  const breakpoint = useBreakpoint();


  // Styles
  const FloatingStyle = css({
    borderRadius: theme.sizeClasses.radius[getReactiveProp(radius, breakpoint)],
    boxShadow: !withShadow ? undefined : theme.defaultShadow,

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
      <div
        ref={ref}
        css={FloatingStyle}
        {...context.getFloatingProps()}
      >
        <StyledFlex
          color={color}
          backgroundColor={backgroundColor}
          radius={radius}
          variant={variant}
          padding={padding}

          {...rest}
        >
          {children}
        </StyledFlex>
      </div>
    </FloatingPortal>
  )
});


const TooltipNamespace = Object.assign(Tooltip, { Trigger, Content, });
export { TooltipNamespace as Tooltip };