import { useCallback, useEffect, useState } from "react";
/** Returns the size of an element */
export function useSize(ref) {
    const [size, setSize] = useState({ width: 0, height: 0 });
    const handleResize = useCallback(() => {
        if (ref.current) {
            setSize({
                width: ref.current.offsetWidth,
                height: ref.current.offsetHeight,
            });
        }
    }, [ref]);
    useEffect(() => {
        window.addEventListener("load", handleResize);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("load", handleResize);
            window.removeEventListener("resize", handleResize);
        };
    }, [ref, handleResize]);
    return size;
}
