import { describe, expect, it } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { Providers, setViewportWidth } from "../../../../../test/utils";
import { Breakpoint } from "./UseBreakpoint";
import { useBreakpoint } from "./UseBreakpoint";
import { getResponsive } from "./ResponsiveProps";
import { useResponsiveProps } from "./UseResponsiveProps";

const AT: Record<string, Breakpoint> = {
  mobile: {
    isMobile: true,
    isTablet: false,
    isDefault: false,
    isDesktopLarge: false,
    isTV: false,
  },
  tablet: {
    isMobile: false,
    isTablet: true,
    isDefault: false,
    isDesktopLarge: false,
    isTV: false,
  },
  default: {
    isMobile: false,
    isTablet: false,
    isDefault: true,
    isDesktopLarge: false,
    isTV: false,
  },
  desktopLarge: {
    isMobile: false,
    isTablet: false,
    isDefault: false,
    isDesktopLarge: true,
    isTV: false,
  },
  tv: {
    isMobile: false,
    isTablet: false,
    isDefault: false,
    isDesktopLarge: false,
    isTV: true,
  },
};

describe("getResponsive", () => {
  it("passes plain values through unchanged at every breakpoint", () => {
    for (const breakpoint of Object.values(AT)) {
      expect(getResponsive({ size: "md" }, breakpoint)).toEqual({ size: "md" });
    }
  });

  it("selects the value matching the active breakpoint", () => {
    const props = {
      label: {
        default: "desktop",
        mobile: "phone",
        tablet: "pad",
        desktopLarge: "big",
        tv: "huge",
      },
    };

    expect(getResponsive(props, AT.mobile)).toEqual({ label: "phone" });
    expect(getResponsive(props, AT.tablet)).toEqual({ label: "pad" });
    expect(getResponsive(props, AT.default)).toEqual({ label: "desktop" });
    expect(getResponsive(props, AT.desktopLarge)).toEqual({ label: "big" });
    expect(getResponsive(props, AT.tv)).toEqual({ label: "huge" });
  });

  it("falls back through the breakpoint chain when a value is missing", () => {
    // mobile -> tablet -> default
    expect(
      getResponsive({ v: { default: "d", tablet: "t" } }, AT.mobile),
    ).toEqual({ v: "t" });
    expect(getResponsive({ v: { default: "d" } }, AT.mobile)).toEqual({
      v: "d",
    });

    // tv -> desktopLarge -> default
    expect(
      getResponsive({ v: { default: "d", desktopLarge: "dl" } }, AT.tv),
    ).toEqual({ v: "dl" });
    expect(getResponsive({ v: { default: "d" } }, AT.tv)).toEqual({ v: "d" });
  });

  it("resolves a bare responsive value, not just a props bag", () => {
    expect(getResponsive({ default: 10, mobile: 4 }, AT.mobile)).toBe(4);
    expect(getResponsive({ default: 10, mobile: 4 }, AT.default)).toBe(10);
  });

  it("leaves non-responsive object props (like a style object) intact", () => {
    const style = { color: "red", padding: 4 };
    expect(getResponsive({ style }, AT.default)).toEqual({ style });
  });

  it("preserves falsy values rather than treating them as absent", () => {
    expect(getResponsive({ v: { default: 1, mobile: 0 } }, AT.mobile)).toEqual({
      v: 0,
    });
    expect(
      getResponsive({ v: { default: true, mobile: false } }, AT.mobile),
    ).toEqual({ v: false });
  });
});

describe("useBreakpoint", () => {
  const renderBreakpoint = () =>
    renderHook(() => useBreakpoint(), {
      wrapper: ({ children }) => <Providers>{children}</Providers>,
    });

  it.each([
    [375, "isMobile"],
    [700, "isTablet"],
    [900, "isDefault"],
    [1200, "isDesktopLarge"],
    [1920, "isTV"],
  ] as const)("classifies %ipx as %s", (width, flag) => {
    setViewportWidth(width);
    const { result } = renderBreakpoint();

    expect(result.current[flag]).toBe(true);
    // Exactly one breakpoint should ever be active.
    expect(Object.values(result.current).filter(Boolean)).toHaveLength(1);
  });

  it("reacts to viewport resizes", () => {
    setViewportWidth(1280);
    const { result } = renderBreakpoint();
    expect(result.current.isDesktopLarge).toBe(true);

    act(() => setViewportWidth(375));
    expect(result.current.isMobile).toBe(true);
    expect(result.current.isDesktopLarge).toBe(false);
  });

  it("honours breakpoints overridden on the provider", () => {
    setViewportWidth(700);
    const { result } = renderHook(() => useBreakpoint(), {
      wrapper: ({ children }) => (
        <Providers
          breakpoints={{
            mobileWidth: 800,
            tabletWidth: 1000,
            desktopLargeWidth: 1400,
            tvWidth: 2000,
          }}
        >
          {children}
        </Providers>
      ),
    });

    expect(result.current.isMobile).toBe(true);
  });
});

describe("useResponsiveProps", () => {
  it("resolves props against the live breakpoint", () => {
    setViewportWidth(375);
    const { result, rerender } = renderHook(
      () => useResponsiveProps<{ gap: number }>({ gap: { default: 20, mobile: 5 } }),
      { wrapper: ({ children }) => <Providers>{children}</Providers> },
    );

    expect(result.current.gap).toBe(5);

    act(() => setViewportWidth(1280));
    rerender();
    expect(result.current.gap).toBe(20);
  });
});
