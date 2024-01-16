/** @jsxImportSource @emotion/react */
import React, { CSSProperties, ReactElement, ReactNode } from "react";
import { TooltipOptions } from "../../../hooks";
import { StyledFlexProps } from "../../layout";
import { MakeResponsive } from "../../../utilities/responsive";
export type TooltipProps = TooltipOptions & {
    children: ReactNode;
};
declare function Tooltip(props: TooltipProps): import("@emotion/react/jsx-runtime").JSX.Element;
export type TooltipTriggerProps = {
    children: ReactElement<any>;
};
export type TooltipContentProps = StyledFlexProps & {
    children: string | ReactNode;
    /** Whether to display a shadow underneath the tooltip */
    withShadow?: boolean;
    /** The z-index of the tooltip */
    zIndex?: CSSProperties["zIndex"];
};
declare const TooltipNamespace: typeof Tooltip & {
    Trigger: React.ForwardRefExoticComponent<TooltipTriggerProps & React.RefAttributes<unknown>>;
    Content: React.ForwardRefExoticComponent<MakeResponsive<TooltipContentProps> & React.RefAttributes<unknown>>;
};
export { TooltipNamespace as Tooltip };
//# sourceMappingURL=Tooltip.d.ts.map