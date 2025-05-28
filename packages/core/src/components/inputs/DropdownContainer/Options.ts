import { ReactNode } from "react";

export type Option<T> = {
  value: T;
  label: string;
  icon?: ReactNode;
};

// Search filters
export type OptionFilter<T> = (
  options: Option<T>[],
  search: string,
) => Option<T>[];

export const defaultOptionFilter: OptionFilter<any> = (options, search) => {
  return options.filter((option) =>
    option.label.toLowerCase().includes(search.toLowerCase()),
  );
};
