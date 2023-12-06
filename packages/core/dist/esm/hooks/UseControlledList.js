import { useState } from "react";
export function useControlledList(defaultValue) {
    const [items, setItems] = useState(defaultValue !== null && defaultValue !== void 0 ? defaultValue : []);
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
