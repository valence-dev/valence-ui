import { CSSProperties, forwardRef } from "react";
import { GenericLayoutProps, PolymorphicLayoutProps } from "@valence-ui/utils";
import {
  IconButton,
  IconButtonProps,
  PrimitiveButton,
  PrimitiveButtonProps,
} from "../../buttons";
import {
  MakeResponsive,
  Responsive,
  useBreakpoint,
  useResponsiveProps,
} from "../../../utilities";
import { Flex, Space } from "../../layout";

export type AppNavButtonProps = IconButtonProps & {
  /** Whether this button is highlighted. `false` by default. */
  highlighted?: boolean;
  /** Whether this button should be shown at this breakpoint. `true` by default. */
  show?: Responsive<boolean>;
};

export type GenericNavProps = GenericLayoutProps &
  PolymorphicLayoutProps & {
    /** Buttons to display on the top of the navigation */
    buttons: AppNavButtonProps[];
    /** Buttons to display on the bottom of the navigation. On mobile devices these will be grouped
     * with `buttons` horizontally along the bottom of the screen
     */
    bottomButtons?: AppNavButtonProps[];

    /** Sets `gap` css property */
    gap?: CSSProperties["gap"];
  };

export type AppNavProps = GenericNavProps & {
  /** A favicon or app logo to include at the top of the nav on desktop devices */
  favicon?: string;
  /** Props to pass to the favicon button */
  faviconProps?: PrimitiveButtonProps;
};

export const AppNav = forwardRef(function Nav(
  props: MakeResponsive<AppNavProps>,
  ref: any
) {
  const breakpoint = useBreakpoint();

  // Defaults
  const {
    buttons,
    bottomButtons,
    gap = 10,
    padding = 10,
    favicon,
    faviconProps,

    style,
    ...rest
  } = useResponsiveProps<AppNavProps>(props);

  // Styles
  const navStyle: Responsive<CSSProperties> = {
    default: {
      height: "100%",
      boxSizing: "border-box",

      ...style,
    },
    mobile: {
      width: "100%",
      boxSizing: "border-box",
      ...style,
    },
  };
  const faviconStyle: CSSProperties = {
    width: 25,
  };

  return (
    <Flex
      direction={{ default: "column", mobile: "row" }}
      gap={gap}
      padding={padding}
      style={navStyle}
      justify={{ default: "unset", mobile: "space-around" }}
      ref={ref}
      {...rest}
    >
      {favicon && !breakpoint.isMobile && (
        <Flex align="center" justify="center" height={100}>
          <PrimitiveButton
            motion={{ onHover: "grow", onTap: "shrink" }}
            square
            {...faviconProps}
          >
            <img src={favicon} alt="favicon" style={faviconStyle} />
          </PrimitiveButton>
        </Flex>
      )}

      {buttons.map((b) => {
        const { id, highlighted, show = true, children, to, ...rest } = b;

        if (!useResponsiveProps(show)) return <></>;

        return (
          <IconButton
            key={id}
            color="white"
            variant={highlighted ? "light" : "subtle"}
            radius={breakpoint.isMobile ? "xl" : undefined}
            square={!breakpoint.isMobile}
            component={to ? "link" : undefined}
            to={to}
            {...rest}
          >
            {children}
          </IconButton>
        );
      })}

      {!breakpoint.isMobile && <Space grow height="100%" />}

      {bottomButtons &&
        bottomButtons.map((b) => {
          const { id, highlighted, show = true, children, to, ...rest } = b;

          if (!useResponsiveProps(show)) return <></>;

          return (
            <IconButton
              key={id}
              color="white"
              variant={highlighted ? "light" : "subtle"}
              radius={breakpoint.isMobile ? "xl" : undefined}
              square={!breakpoint.isMobile}
              component={to ? "link" : undefined}
              to={to}
              {...rest}
            >
              {children}
            </IconButton>
          );
        })}
    </Flex>
  );
});
