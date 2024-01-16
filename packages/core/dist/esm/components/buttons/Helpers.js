/** Retrieves the motion behaviour for this component
 * @param props The expected motion behaviour props of this component
 * @param reducedMotion Whether the user has requested reduced motion
 */
export function getMotionBehaviour(props, reducedMotion) {
    if (reducedMotion || !props)
        return {};
    if (props.onHover === "grow") {
        return {
            whileHover: { scale: 1.1 },
            whileTap: {
                scale: props.onTap === "shrink" ? 0.95 : 1.1,
                y: props.onTap === "bounce" ? 2 : 0,
            }
        };
    }
    if (props.onHover === "raise") {
        return {
            whileHover: { y: -2 },
            whileTap: {
                scale: props.onTap === "shrink" ? 0.95 : 1,
                y: props.onTap === "bounce" ? 2 : 0,
            }
        };
    }
    else {
        return {
            whileTap: {
                scale: props.onTap === "shrink" ? 0.75 : 1,
                y: props.onTap === "bounce" ? 2 : 0,
            }
        };
    }
}
