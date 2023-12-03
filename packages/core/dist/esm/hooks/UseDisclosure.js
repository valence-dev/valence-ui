import { useState } from "react";
/** Returns a boolean value and functions to open and close the value */
export function useDisclosure(defaultValue = false) {
    const [value, setValue] = useState(defaultValue !== null && defaultValue !== void 0 ? defaultValue : false);
    const open = () => setValue(true);
    const close = () => setValue(false);
    const update = (value) => setValue(value);
    return {
        opened: value,
        open: open,
        close: close,
        update: update,
    };
}
