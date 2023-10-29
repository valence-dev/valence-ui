"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMotionBehaviour = exports.getTextColor = exports.getBackgroundColor = void 0;
/** Retrieves the most suitable background color, given the context
 * @param color The color to use
 * @param variant The variant of the button
 * @param hovered Whether the button is hovered
 * @param theme The theme context
 */
function getBackgroundColor(color, variant, hovered, theme) {
    const baseColor = theme.getColor(`${color}`);
    if (!baseColor)
        return `${color}`;
    switch (variant) {
        case "filled": return `${baseColor.base}`;
        case "light": return `${baseColor.base}${hovered ? baseColor.opacity.medium : baseColor.opacity.weak}`;
        case "subtle": return hovered ? `${baseColor.base}${baseColor.opacity.weak}` : "#00000000";
        default: return "#00000000";
    }
}
exports.getBackgroundColor = getBackgroundColor;
/** Retrieves the most suitable text color, given the context
 * @param color The color to use
 * @param variant The variant of the button
 * @param theme The theme context
 */
function getTextColor(color, variant, theme) {
    var _a, _b, _c, _d;
    if (variant === "filled") {
        if (color === "white")
            return `${(_b = (_a = theme.getColor("black")) === null || _a === void 0 ? void 0 : _a.base) !== null && _b !== void 0 ? _b : "#000000"}`;
        return (_d = (_c = theme.getColor("white")) === null || _c === void 0 ? void 0 : _c.base) !== null && _d !== void 0 ? _d : "#FFFFFF";
    }
    const baseColor = theme.getColor(color);
    if (!baseColor)
        return `${color}`;
    return `${baseColor.base}`;
}
exports.getTextColor = getTextColor;
/** Retrieves the motion behaviour for this component
 * @param props The expected motion behaviour props of this component
 * @param reducedMotion Whether the user has requested reduced motion
 */
function getMotionBehaviour(props, reducedMotion) {
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
exports.getMotionBehaviour = getMotionBehaviour;
