export type ControlledList<T> = {
    /** The list of items */
    items: T[];
    /** Add an item to the list */
    add: (item: T) => void;
    /** Remove an item from the list */
    remove: (item: T) => void;
    /** Override all items in the list */
    update: (items: T[]) => void;
    /** Clear the list */
    clear: () => void;
    /** Whether the list includes an item */
    includes: (item: T) => boolean;
};
export declare function useControlledList<T = string>(defaultValue?: T[]): ControlledList<T>;
//# sourceMappingURL=UseControlledList.d.ts.map