import { GenericProps } from "@valence-ui/utils";
import { FlexProps } from "../Flex";
import { CSSProperties } from "react";
import { MakeResponsive } from "../../../utilities";
export type OverflowDirection = "horizontal" | "vertical" | "both" | "none";
export type OverflowContainerProps = GenericProps & {
    /** The direction the container allows its inner content to scroll. Defaults to `"vertical"`. */
    direction?: OverflowDirection;
    /** The width of the container. */
    width?: CSSProperties["width"];
    /** The height of the container. */
    height?: CSSProperties["height"];
    /** Optional props to pass to the inner flex component. */
    innerProps?: FlexProps;
};
export declare const OverflowContainer: import("react").ForwardRefExoticComponent<MakeResponsive<OverflowContainerProps> & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=OverflowContainer.d.ts.map