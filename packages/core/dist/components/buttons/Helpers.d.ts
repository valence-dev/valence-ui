import { CSSProperties } from "react";
import { FillVariant } from "@valence-ui/utils";
import { IValenceContext } from "../../ValenceProvider";
/** Retrieves the most suitable background color, given the context
 * @param color The color to use
 * @param variant The variant of the button
 * @param hovered Whether the button is hovered
 * @param theme The theme context
 */
export declare function getBackgroundColor(color: CSSProperties["backgroundColor"], variant: FillVariant | undefined, hovered: boolean, theme: IValenceContext): string;
/** Retrieves the most suitable text color, given the context
 * @param color The color to use
 * @param variant The variant of the button
 * @param theme The theme context
 */
export declare function getTextColor(color: CSSProperties["color"], variant: FillVariant | undefined, theme: IValenceContext): string;
/** Defines expected behaviour for a component with motion behaviour */
export type MotionBehaviourProps = {
    /** Behaviour for while the component is hovered
     * `grow` = `scale: 1.1`
     * `raise` = `y: -2` (up)
     * `none` = nothing (default)
     */
    onHover?: "grow" | "raise" | "none";
    /** Behaviour for while the component is being tapped
     * `shrink` = `scale: 0.75`
     * `bounce` = `y: 2` (down; default)
     */
    onTap?: "shrink" | "bounce";
};
/** Defines the values for motion behaviour */
export type MotionBehaviourValue = {
    scale?: number | string;
    x?: number | string;
    y?: number | string;
    z?: number | string;
};
/** Defines the return type for the `getMotionBehaviour` function */
export type MotionBehaviour = {
    whileHover?: MotionBehaviourValue;
    whileTap?: MotionBehaviourValue;
};
/** Retrieves the motion behaviour for this component
 * @param props The expected motion behaviour props of this component
 * @param reducedMotion Whether the user has requested reduced motion
 */
export declare function getMotionBehaviour(props: MotionBehaviourProps | undefined, reducedMotion: boolean | null): MotionBehaviour;
//# sourceMappingURL=Helpers.d.ts.map