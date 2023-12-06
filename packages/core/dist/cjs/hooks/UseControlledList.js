"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useControlledList = void 0;
const react_1 = require("react");
function useControlledList(defaultValue) {
    const [items, setItems] = (0, react_1.useState)(defaultValue !== null && defaultValue !== void 0 ? defaultValue : []);
    const add = (item) => setItems([...items, item]);
    const remove = (item) => setItems(items.filter(i => i !== item));
    const update = (items) => setItems(items);
    const clear = () => setItems([]);
    const includes = (item) => items.includes(item);
    return {
        items: items,
        add: add,
        remove: remove,
        update: update,
        clear: clear,
        includes: includes,
    };
}
exports.useControlledList = useControlledList;
