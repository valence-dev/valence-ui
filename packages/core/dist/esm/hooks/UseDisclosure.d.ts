export type Disclosure = {
    opened: boolean;
    open: () => void;
    close: () => void;
    update: (value: boolean) => void;
};
/** Returns a boolean value and functions to open and close the value */
export declare function useDisclosure(defaultValue?: boolean): Disclosure;
//# sourceMappingURL=UseDisclosure.d.ts.map