import React, { ReactNode } from "react";
import { AvatarProps } from "../Avatar/Avatar";
export type AvatarGroupProps = Omit<AvatarProps, "src" | "alt"> & {
    /** The space between the avatars */
    gap?: number;
    children: ReactNode;
};
export declare const AvatarGroup: React.ForwardRefExoticComponent<Omit<AvatarProps, "alt" | "src"> & {
    /** The space between the avatars */
    gap?: number | undefined;
    children: ReactNode;
} & React.RefAttributes<unknown>>;
//# sourceMappingURL=AvatarGroup.d.ts.map