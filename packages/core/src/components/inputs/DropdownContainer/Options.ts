import { ReactNode } from "react";

export type Option =
  | {
      value: string;
      label?: string;
      icon?: ReactNode;
    }
  | string;

export function getOptionValue(option: Option | null): string {
  if (!option) return "";
  if (typeof option === "string") return option;
  return option.value;
}
export function getOptionLabel(option: Option | null): string {
  if (!option) return "";
  if (typeof option === "string") return option;
  return option.label ?? option.value;
}
export function getOptionIcon(option: Option | null): ReactNode {
  if (!option) return undefined;
  if (typeof option === "string") return undefined;
  return option.icon;
}

// Search filters
export type OptionFilter = (options: Option[], search: string) => Option[];

export const defaultOptionFilter: OptionFilter = (options, search) => {
  return options.filter((option) => {
    const label = getOptionLabel(option);
    return label.toLowerCase().includes(search.toLowerCase());
  });
};
