import React, { ReactNode, forwardRef } from "react";
import { AvatarProps } from "../Avatar/Avatar";
import { Flex } from "../../../layout";
import { useValence } from "../../../../ValenceProvider";

export type AvatarGroupProps =
  Omit<AvatarProps, "src"|"alt">
  & {
    /** The space between the avatars */
    gap?: number;

    children: ReactNode;
  }

export const AvatarGroup = forwardRef(function AvatarGroup(
  props: AvatarGroupProps,
  ref: any,
) {
  const theme = useValence();

  const {
    size = theme.defaults.size,
    gap = 5 - (theme.sizeClasses.padding[size] as number),

    children,
    ...rest
  } = props;

  return (
    <Flex
      gap={0}
      ref={ref}
    >
      {React.Children.toArray(children).map((child, i) => React.cloneElement(
        child as any,
        {
          spanStyle: {
            zIndex: React.Children.count(children) - i,
          },
          style: {
            marginLeft: i === 0 ? undefined : gap,
          },
          size: size,
          ...rest,
        }
      ))}
    </Flex>
  )
});