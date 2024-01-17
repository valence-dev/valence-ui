import { ReactNode } from "react";
export type Option = {
    value: string;
    label?: string;
    icon?: ReactNode;
} | string;
export declare function getOptionValue(option: Option): string;
export declare function getOptionLabel(option: Option): string;
export declare function getOptionIcon(option: Option): ReactNode;
export type OptionFilter = (options: Option[], search: string) => Option[];
export declare const defaultOptionFilter: OptionFilter;
//# sourceMappingURL=Options.d.ts.map