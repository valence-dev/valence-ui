import React, { ReactElement, ReactNode } from "react";
import { TooltipOptions } from "../../../hooks";
export type BoundElementProps = TooltipOptions & {
    disclosure?: never;
    children: ReactNode;
};
declare function BoundElement(props: BoundElementProps): import("react/jsx-runtime").JSX.Element;
export type BoundElementTriggerProps = {
    children: ReactElement<any>;
};
export type BoundElementContentProps = {
    children: ReactNode;
};
declare const BoundElementNamespace: typeof BoundElement & {
    Trigger: React.ForwardRefExoticComponent<BoundElementTriggerProps & React.RefAttributes<unknown>>;
    Content: React.ForwardRefExoticComponent<BoundElementContentProps & React.RefAttributes<unknown>>;
};
export { BoundElementNamespace as BoundElement };
//# sourceMappingURL=BoundElement.d.ts.map