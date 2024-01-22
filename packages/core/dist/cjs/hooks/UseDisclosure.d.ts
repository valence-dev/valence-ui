export type Disclosure = {
    /** Whether the disclosure is open. */
    opened: boolean;
    /** Open the disclosure. */
    open: () => void;
    /** Close the disclosure. */
    close: () => void;
    /** Manually update the disclosure. */
    update: (value: boolean) => void;
};
/** Returns a boolean value and functions to open and close the value */
export declare function useDisclosure(defaultValue?: boolean): Disclosure;
//# sourceMappingURL=UseDisclosure.d.ts.map