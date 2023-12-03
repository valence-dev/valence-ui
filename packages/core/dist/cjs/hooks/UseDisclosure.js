"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDisclosure = void 0;
const react_1 = require("react");
/** Returns a boolean value and functions to open and close the value */
function useDisclosure(defaultValue = false) {
    const [value, setValue] = (0, react_1.useState)(defaultValue !== null && defaultValue !== void 0 ? defaultValue : false);
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
exports.useDisclosure = useDisclosure;
