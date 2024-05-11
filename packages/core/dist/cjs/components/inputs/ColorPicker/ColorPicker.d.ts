import { Color, MakeResponsive } from "../../../utilities";
import { CSSProperties } from "react";
import { GenericInputProps } from "../../../generics";
import { MotionBehaviourProps } from "../../buttons";
export type ColorPickerEventProps = {
    onSelect?: (color: string) => void;
};
export type ColorPickerProps = GenericInputProps<string> & ColorPickerEventProps & {
    /** A list of colors to choose from. If left unset, will use the theme default color list. */
    colors?: Color[];
    /** Sets the gap between colors. `5` by default. */
    gap?: number;
    /** How the colors will wrap within the container. Defaults to `"nowrap". */
    wrap?: CSSProperties["flexWrap"];
    /** Motion props to apply to the swatch buttons. */
    swatchMotion?: MotionBehaviourProps;
};
export declare const ColorPicker: import("react").ForwardRefExoticComponent<MakeResponsive<ColorPickerProps> & import("react").RefAttributes<unknown>>;
//# sourceMappingURL=ColorPicker.d.ts.map