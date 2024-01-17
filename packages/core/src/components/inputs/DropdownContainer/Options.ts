import { ReactNode } from "react";

export type Option = { 
  value: string;
  label?: string;
  icon?: ReactNode;
} | string;


export function getOptionValue(option: Option): string {
  if (typeof option === "string") return option;
  return option.value;
}
export function getOptionLabel(option: Option): string {
  if (typeof option === "string") return option;
  return option.label ?? option.value;
}
export function getOptionIcon(option: Option): ReactNode {
  console.log(option);
  if (typeof option === "string") return undefined;
  return option.icon;
}