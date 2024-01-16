/// <reference types="react" />
import { TextProps } from "../../display";
import { FlexProps } from "../Flex";
import { ComponentSize, GenericFloatingLayoutProps } from "@valence-ui/utils";
import { MakeResponsive } from "../../../utilities/responsive";
export type OutlineContainerProps = GenericFloatingLayoutProps & FlexProps & {
    /** Determines if this container will stick to the window, or simply be a part of it. `true` by default. */
    sticky?: boolean;
    /** A label to display below the container */
    label?: string;
    /** Optional props to pass to the label component */
    labelProps?: TextProps & {
        children?: never;
    };
    /** Spacing around the container. `5px` by default */
    spacing?: number;
    /** Size class of the component's radius. Defaults to theme default. */
    radius?: ComponentSize;
};
export declare const OutlineContainer: import("react").ForwardRefExoticComponent<MakeResponsive<OutlineContainerProps> & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=OutlineContainer.d.ts.map