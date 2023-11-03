import { CSSProperties, forwardRef } from "react";
import { Flex, IconButton, IconButtonProps, PrimitiveButton, PrimitiveButtonProps, Space, useBreakpoint } from "@valence-ui/core";
import { GenericReactiveLayoutProps, PolymorphicLayoutProps, ReactiveProp, getReactiveProp } from "@valence-ui/utils";

export type NavButtonProps = IconButtonProps & {
  /** Specifies if this button is highlighted */
  highlighted?: boolean;
}

export type GenericNavProps =
  GenericReactiveLayoutProps
  & PolymorphicLayoutProps
  & {
    /** Buttons to display on the top of the navigation */
    buttons: NavButtonProps[];
    /** Buttons to display on the bottom of the navigation. On mobile devices these will be groups with `buttons` horizontally along the bottom of the screen */
    bottomButtons?: NavButtonProps[];

    /** **[REACTIVE]** Sets `gap` css property */
    gap?: ReactiveProp<CSSProperties["gap"]>;
  }

export type NavProps = GenericNavProps & {
  /** A favicon or app logo to include at the top of the nav on desktop devices */
  favicon?: string;
  /** Props to pass to the favicon button */
  faviconProps?: PrimitiveButtonProps;
}


/** The App Nav is designed to handle inter-page navigation and application-level actions, such as page navigation, signing out, etc. This particular navigator is presented as a vertical icon button strip down the left-hand side of the screen on desktop devices, and a horizontal icon button strip along the bottom of the screen on mobile devices. */
export const Nav = forwardRef(function Nav(
  props: NavProps,
  ref: any
) {
  const breakpoint = useBreakpoint();

  // Defaults
  const {
    buttons,
    bottomButtons,
    gap = 5,
    favicon,
    faviconProps,

    style,
    ...rest
  } = props;


  // Styles
  const navStyle: ReactiveProp<CSSProperties> = {
    default: {
      height: "100%",

      ...getReactiveProp(style, breakpoint)
    },
    mobile: {
      width: "100%",

      ...getReactiveProp(style, breakpoint)
    },
  }
  const faviconStyle: CSSProperties = {
    width: 25,
  }


  return (
    <Flex
      direction={{ default: "column", mobile: "row" }}
      gap={props.gap}
      style={navStyle}
      justify={{ default: "unset", mobile: "space-around" }}

      ref={ref}
      {...rest}
    >
      {favicon && !breakpoint.isMobile &&
        <Flex
          align="center"
          justify="center"
          height={100}
        >
          <PrimitiveButton
            motion={{ onHover: "grow", onTap: "shrink" }}
            square
            {...faviconProps}
          >
            <img
              src={favicon}
              alt="favicon"
              style={faviconStyle}
            />
          </PrimitiveButton>
        </Flex>
      }

      {buttons.map(b => {
        const { id, highlighted, children, to, ...rest } = b;

        return (
          <IconButton
            key={id}
            color="white"
            variant={highlighted ? "light" : "subtle"}
            radius={breakpoint.isMobile ? "xl" : undefined}
            square={!breakpoint.isMobile}
            component={to ? "link" : undefined}
            {...rest}
          >
            {children}
          </IconButton>
        )
      })}

      {!breakpoint.isMobile && <Space grow height="100%" />}

      {bottomButtons && bottomButtons.map(b => {
        const { id, highlighted, children, to, ...rest } = b;

        return (
          <IconButton
            key={id}
            color="white"
            variant={highlighted ? "light" : "subtle"}
            radius={breakpoint.isMobile ? "xl" : undefined}
            square={!breakpoint.isMobile}
            component={to ? "link" : undefined}
            {...rest}
          >
            {children}
          </IconButton>
        )
      })}
    </Flex>
  )
});