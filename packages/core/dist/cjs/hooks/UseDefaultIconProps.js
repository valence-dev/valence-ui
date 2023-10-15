"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDefaultIconProps = void 0;
const react_1 = require("react");
const __1 = require("..");
function useDefaultIconProps() {
    const theme = (0, react_1.useContext)(__1.ValenceContext);
    return {
        get: (color, size) => {
            var _a;
            return {
                size: size !== null && size !== void 0 ? size : 20,
                stroke: 1.5,
                color: color ? (_a = (0, __1.getTextColor)(color, undefined, theme)) !== null && _a !== void 0 ? _a : color : undefined,
            };
        }
    };
}
exports.useDefaultIconProps = useDefaultIconProps;
