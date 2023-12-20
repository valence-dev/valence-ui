"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDefaultIconProps = void 0;
const __1 = require("..");
/** @deprecated This hook is deprecated. Use the `Icon` component instead.*/
function useDefaultIconProps() {
    const theme = (0, __1.useValence)();
    return {
        get: (color, size) => {
            return {
                size: size !== null && size !== void 0 ? size : 20,
                stroke: 1.5,
                color: color ? (0, __1.getTextColor)(color, undefined, theme) : undefined,
            };
        }
    };
}
exports.useDefaultIconProps = useDefaultIconProps;
