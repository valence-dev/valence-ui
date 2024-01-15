/// <reference types="react" />
import { MakeResponsive } from "../../../responsive";
import { TooltipContentProps, TooltipProps } from "../../overlays";
import { PrimitiveButtonProps } from "../PrimitiveButton";
export type IconButtonProps = PrimitiveButtonProps & {
    /** An optional tooltip to include. The tooltip will inherit the button's color.*/
    tooltip?: string;
    /** Optional props to pass to the tooltip. */
    tooltipProps?: Omit<TooltipProps, "children">;
    tooltipContentProps?: Omit<TooltipContentProps, "children">;
};
export declare const IconButton: import("react").ForwardRefExoticComponent<MakeResponsive<IconButtonProps> & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=IconButton.d.ts.map