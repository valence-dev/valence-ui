"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSize = void 0;
const react_1 = require("react");
/** Returns the size of an element */
function useSize(ref) {
    const [size, setSize] = (0, react_1.useState)({ width: 0, height: 0 });
    const handleResize = (0, react_1.useCallback)(() => {
        if (ref.current) {
            setSize({
                width: ref.current.offsetWidth,
                height: ref.current.offsetHeight,
            });
        }
    }, [ref]);
    (0, react_1.useEffect)(() => {
        window.addEventListener("load", handleResize);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("load", handleResize);
            window.removeEventListener("resize", handleResize);
        };
    }, [ref, handleResize]);
    return size;
}
exports.useSize = useSize;
