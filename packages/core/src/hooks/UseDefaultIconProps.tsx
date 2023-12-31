import { TablerIconsProps } from "@tabler/icons-react";
import { getTextColor, useValence } from "..";

interface IUseDefaultIconProps {
  get: (color?: string, size?: number) => TablerIconsProps;
}

/** @deprecated This hook is deprecated. Use the `Icon` component instead.*/
export function useDefaultIconProps(): IUseDefaultIconProps {
  const theme = useValence();

  return {
    get: (color?: string, size?: number) => {
      return {
        size: size ?? 20,
        stroke: 1.5,
        color: color ? getTextColor(color, undefined, theme) : undefined,
      }
    }
  }
}