import { getTextColor, useValence } from "..";
/** @deprecated This hook is deprecated. Use the `Icon` component instead.*/
export function useDefaultIconProps() {
    const theme = useValence();
    return {
        get: (color, size) => {
            return {
                size: size !== null && size !== void 0 ? size : 20,
                stroke: 1.5,
                color: color ? getTextColor(color, undefined, theme) : undefined,
            };
        }
    };
}
