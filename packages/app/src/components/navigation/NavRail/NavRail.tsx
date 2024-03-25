import { Flex, FlexProps, IconButton, IconButtonProps, MakeResponsive, PrimitiveButton, PrimitiveButtonProps, Responsive, Space, useBreakpoint, useResponsiveProps, useValence } from "@valence-ui/core";
import { CSSProperties, ReactNode, forwardRef } from "react";

export type NavButtonPosition = "top" | "bottom";

export type NavButtonProps =
  IconButtonProps
  & {
    /** The position of this button. `top` by default. */
    position?: NavButtonPosition;

    /** Whether this button is highlighted. `false` by default. */
    highlighted?: boolean;
    /** Whether this button should be shown at this breakpoint. `true` by default. */
    show?: Responsive<boolean>;
  }

export type NavRailProps =
  Omit<FlexProps, "children">
  & {
    /** Buttons to display on the navigation rail. */
    buttons: NavButtonProps[];

    /** A favicon to display on the nav rail. */
    favicon?: string | ReactNode;
    /** Whether to show the favicon. `true` on tablet and larger; `false` on mobile. */
    showFavicon?: boolean;
    /** Optional props to pass to the favicon component. */
    faviconProps?: Omit<PrimitiveButtonProps, "children"> & {
      /** The alt text for the favicon. */
      alt?: string;
    };

    /** Sets `gap` css property. */
    gap?: CSSProperties["gap"];
  }


export const NavRail = forwardRef(function Nav(
  props: MakeResponsive<NavRailProps>,
  ref: any
) {
  const theme = useValence();
  const breakpoint = useBreakpoint();

  const {
    buttons,
    favicon,
    showFavicon = useResponsiveProps({ default: true, mobile: false }),
    faviconProps,

    padding = theme.getSize("padding") / 2,
    gap = padding,
    direction = useResponsiveProps({ default: "column", mobile: "row" }),
    justify = useResponsiveProps({ default: "unset", mobile: "space-around" }),
    component = "nav",

    style,
    ...rest
  } = useResponsiveProps<NavRailProps>(props);

  const {
    alt: faviconAlt = "Favicon",
    square: faviconSquare = true,
    motion: faviconMotion = { onHover: "grow", onTap: "shrink" },
    ...faviconPropsRest
  } = faviconProps ?? {};

  const topButtons = buttons.filter(b => b.position !== "bottom");
  const bottomButtons = buttons.filter(b => b.position === "bottom");


  // Styles
  const ContainerStyle: Responsive<CSSProperties> = {
    default: {
      height: "100%",
      ...style
    },
    mobile: {
      width: "100%",
      marginBottom: "env(safe-area-inset-bottom)",
      ...style
    },
  }


  return (
    <Flex
      component={component}
      direction={direction}
      justify={justify}
      padding={padding}
      gap={gap}
      style={ContainerStyle}
      ref={ref}
      {...rest}
    >
      {showFavicon && favicon && (
        typeof favicon === "string" ? (
          <Flex
            align="center"
            justify="center"
            height={100}
          >
            <PrimitiveButton
              motion={faviconMotion}
              square={faviconSquare}
              {...faviconPropsRest}
            >
              <img
                src={favicon}
                alt={faviconAlt}
                style={{ width: 25 }}
              />
            </PrimitiveButton>
          </Flex>
        ) : favicon
      )}

      {topButtons.map(button => {
        const {
          id,
          highlighted,
          position,
          show = true,
          children,
          to,

          color = "white",
          variant = highlighted ? "light" : "subtle",
          radius = useResponsiveProps({ default: undefined, mobile: "xl" }),
          square = useResponsiveProps({ default: true, mobile: false }),
          component = to ? "link" : undefined,
          ...buttonRest
        } = button;

        if (!useResponsiveProps(show)) return null;

        return (
          <IconButton
            key={id}
            color={color}
            variant={variant}
            radius={radius}
            square={square}
            component={component}
            to={to}
            {...buttonRest}
          >
            {children}
          </IconButton>
        )
      })}

      {!breakpoint.isMobile && <Space grow height="100%" />}

      {bottomButtons.map(button => {
        const {
          id,
          highlighted,
          position,
          show = true,
          children,
          to,

          color = "white",
          variant = highlighted ? "light" : "subtle",
          radius = useResponsiveProps({ default: undefined, mobile: "xl" }),
          square = useResponsiveProps({ default: true, mobile: false }),
          component = to ? "link" : undefined,
          ...buttonRest
        } = button;

        if (!useResponsiveProps(show)) return null;

        return (
          <IconButton
            key={id}
            color={color}
            variant={variant}
            radius={radius}
            square={square}
            component={component}
            to={to}
            {...buttonRest}
          >
            {children}
          </IconButton>
        )
      })}
    </Flex>
  )
})