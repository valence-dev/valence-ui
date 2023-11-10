import { ReactNode } from "react";

export type Option = {
  /** The label to display for this option */
  label: string;
  /** The value of this option */
  value?: string;

  /** An optional icon or component to display at the left side of this option */
  left?: ReactNode;
}


export type OptionsFilter = (options: Option[], search: string) => Option[];


export const DefaultOptionsFilter: OptionsFilter = (options, search) => {
  const query = search.trim().toLowerCase();
  const filtered = options.filter((option) => option.label.toLowerCase().includes(query));
  return filtered;
}