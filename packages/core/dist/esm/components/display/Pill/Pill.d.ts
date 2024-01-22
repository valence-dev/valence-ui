import { ComponentSize, FillVariant, GenericLayoutProps } from "@valence-ui/utils";
import { IconButtonProps, UnstyledButtonProps } from "../../buttons";
import { ReactNode } from "react";
import { TextProps } from "../Text";
import { MakeResponsive } from "../../../utilities/responsive";
export type PillProps = Omit<GenericLayoutProps, "children"> & Omit<UnstyledButtonProps, "children"> & {
    /** Fill variant of this pill. Defaults to theme default. */
    variant?: FillVariant;
    /** Size class of this pill. Defaults to theme default.  */
    size?: ComponentSize;
    /** Border radius of this pill. Defaults to theme default. */
    radius?: ComponentSize;
    /** Whether to include a remove button. `false` by default. */
    withRemoveButton?: boolean;
    /** Icon to use for the remove button. Defaults to `IconX`. */
    removeButtonIcon?: ReactNode;
    /** Optional props to pass to the remove button. */
    removeButtonProps?: Omit<IconButtonProps, "children">;
    /** Callback to be called when the remove button is clicked. */
    onRemove?: () => void;
    /** Optional props to pass to the `Text` component */
    textProps?: Omit<TextProps, "children">;
    children?: string;
};
export declare const Pill: import("react").ForwardRefExoticComponent<MakeResponsive<PillProps> & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=Pill.d.ts.map