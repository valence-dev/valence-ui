import { useContext } from "react";
import { ValenceContext, getTextColor } from "..";
export function useDefaultIconProps() {
    const theme = useContext(ValenceContext);
    return {
        get: (color, size) => {
            var _a;
            return {
                size: size !== null && size !== void 0 ? size : 20,
                stroke: 1.5,
                color: color ? (_a = getTextColor(color, undefined, theme)) !== null && _a !== void 0 ? _a : color : undefined,
            };
        }
    };
}
