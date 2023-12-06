export type Disclosure = {
    /** Whether this disclosure is open */
    opened: boolean;
    /** Open this disclosure */
    open: () => void;
    /** Close this disclosure */
    close: () => void;
    /** Update the state (openness) of this disclosure */
    update: (value: boolean) => void;
};
/** Returns a boolean value and functions to open and close the value */
export declare function useDisclosure(defaultValue?: boolean): Disclosure;
//# sourceMappingURL=UseDisclosure.d.ts.map