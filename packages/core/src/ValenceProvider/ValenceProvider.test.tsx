import { describe, expect, it, vi } from "vitest";
import { render, renderHook, screen } from "@testing-library/react";
import { Providers } from "../../../../test/utils";
import { ValenceProvider } from "./ValenceProvider";
import { useValence } from "./ValenceContext";
import { DEFAULT_PALETTE } from "../utilities/color";
import { GlassMaterial, PaperMaterial, SolidMaterial } from "../utilities";
import { Color } from "../utilities/color";

const renderTheme = (providerProps?: Parameters<typeof Providers>[0]) =>
  renderHook(() => useValence(), {
    wrapper: ({ children }) => (
      <Providers {...providerProps}>{children}</Providers>
    ),
  }).result;

describe("ValenceProvider", () => {
  it("throws a helpful error when a component is used outside the provider", () => {
    const consoleError = vi
      .spyOn(console, "error")
      .mockImplementation(() => {});

    expect(() => renderHook(() => useValence())).toThrow(
      /must be wrapped in <ValenceProvider \/>/,
    );

    consoleError.mockRestore();
  });

  it("renders its children", () => {
    render(
      <ValenceProvider>
        <span>child</span>
      </ValenceProvider>,
    );
    expect(screen.getByText("child")).toBeInTheDocument();
  });

  describe("defaults", () => {
    it("exposes the default palette and primary color", () => {
      const { current } = renderTheme();
      expect(current.colors).toEqual(DEFAULT_PALETTE);
      expect(current.primaryColor).toBe("pink");
      expect(current.preferredColorScheme).toBe("system");
    });

    it("defaults size and radius to `sm`", () => {
      const { current } = renderTheme();
      expect(current.defaults).toEqual({ size: "sm", radius: "sm" });
    });

    it("provides a material for buttons, inputs and cards", () => {
      const { current } = renderTheme();
      expect(current.materials.button).toBeInstanceOf(GlassMaterial);
      expect(current.materials.input).toBeInstanceOf(GlassMaterial);
      expect(current.materials.card).toBeInstanceOf(PaperMaterial);
    });

    it("defines a complete size scale for every size class", () => {
      const { current } = renderTheme();
      const properties = [
        "padding",
        "height",
        "radius",
        "fontSize",
        "iconSize",
      ] as const;

      for (const property of properties) {
        for (const size of ["xs", "sm", "md", "lg", "xl"] as const) {
          expect(current.sizeClasses[property][size]).toBeDefined();
        }
      }
    });

    it("defines props for all six title orders", () => {
      const { current } = renderTheme();
      for (const order of [1, 2, 3, 4, 5, 6] as const) {
        expect(current.titles[order].bold).toBe(true);
        expect(current.titles[order].fontSize).toBeTypeOf("number");
      }
    });

    it("orders title font sizes largest-first", () => {
      const { current } = renderTheme();
      const sizes = [1, 2, 3, 4, 5, 6].map(
        (order) => current.titles[order as 1].fontSize as number,
      );
      expect(sizes).toEqual([...sizes].sort((a, b) => b - a));
    });
  });

  describe("getFont", () => {
    it("returns the configured default family", () => {
      const { current } = renderTheme();
      expect(current.getFont("default")).toBe("Inter, sans-serif");
    });

    it("falls back to the default family when heading is unset", () => {
      const { current } = renderTheme();
      expect(current.getFont("heading")).toBe(current.getFont("default"));
    });

    it("uses an explicit heading family when supplied", () => {
      const { current } = renderTheme({
        fontFamily: { default: "Body", heading: "Display" },
      });
      expect(current.getFont("heading")).toBe("Display");
      expect(current.getFont("default")).toBe("Body");
    });

    it("falls back to the default family when monospace is unset", () => {
      const { current } = renderTheme({ fontFamily: { default: "Body" } });
      expect(current.getFont("monospace")).toBe("Body");
    });
  });

  describe("getSize", () => {
    it("looks up a value for an explicit size class", () => {
      const { current } = renderTheme();
      expect(current.getSize("height", "xl")).toBe(
        current.sizeClasses.height.xl,
      );
      expect(current.getSize("padding", "xs")).toBe(
        current.sizeClasses.padding.xs,
      );
    });

    it("falls back to the theme default size when none is given", () => {
      const { current } = renderTheme();
      expect(current.getSize("height")).toBe(
        current.sizeClasses.height[current.defaults.size],
      );
    });

    it("falls back to the radius default for the radius property", () => {
      // The two defaults coincide out of the box, so they have to be pulled
      // apart for this to be able to fail.
      const { current } = renderTheme({
        defaults: { size: "xs", radius: "xl" },
      });

      expect(current.getSize("radius")).toBe(current.sizeClasses.radius.xl);
      expect(current.getSize("radius")).not.toBe(
        current.sizeClasses.radius.xs,
      );
    });

    it("still falls back to the size default for every other property", () => {
      const { current } = renderTheme({
        defaults: { size: "xs", radius: "xl" },
      });

      for (const property of [
        "padding",
        "height",
        "fontSize",
        "iconSize",
      ] as const) {
        expect(current.getSize(property)).toBe(
          current.sizeClasses[property].xs,
        );
      }
    });

    it("reads from an overridden size scale", () => {
      const scale = { xs: 1, sm: 2, md: 3, lg: 4, xl: 5 };
      const { current } = renderTheme({
        sizeClasses: {
          padding: scale,
          height: scale,
          radius: scale,
          fontSize: scale,
          iconSize: scale,
        },
      });
      expect(current.getSize("radius", "md")).toBe(3);
    });
  });

  describe("overrides", () => {
    it("accepts a custom primary color", () => {
      const { current } = renderTheme({ primaryColor: "teal" });
      expect(current.primaryColor).toBe("teal");
    });

    it("accepts custom materials", () => {
      const { current } = renderTheme({
        materials: {
          button: new SolidMaterial(),
          input: new PaperMaterial(),
          card: new SolidMaterial(),
        },
      });
      expect(current.materials.button).toBeInstanceOf(SolidMaterial);
      expect(current.materials.input).toBeInstanceOf(PaperMaterial);
    });

    it("makes a custom color resolvable by key", () => {
      const brand: Color = {
        key: "brand",
        default: {
          base: "#123456",
          opacity: { weak: "20", medium: "40", strong: "80" },
        },
      };
      const { current } = renderTheme({ colors: [brand] });

      expect(current.colors.find((c) => c.key === "brand")).toEqual(brand);
    });

    it("adds custom colors to the default palette instead of replacing it", () => {
      const brand: Color = {
        key: "brand",
        default: {
          base: "#123456",
          opacity: { weak: "20", medium: "40", strong: "80" },
        },
      };
      const { current } = renderTheme({ colors: [brand] });

      expect(current.colors).toHaveLength(DEFAULT_PALETTE.length + 1);
      // The library resolves these keys internally and breaks without them.
      expect(current.colors.find((c) => c.key === "black")).toBeDefined();
      expect(current.colors.find((c) => c.key === "brighterWhite")).toBeDefined();
    });

    it("lets a custom color override a built-in of the same key", () => {
      const black: Color = {
        key: "black",
        default: {
          base: "#000000",
          opacity: { weak: "20", medium: "40", strong: "80" },
        },
      };
      const { current } = renderTheme({ colors: [black] });

      // Replaced in place, so there is exactly one `black` and it is the
      // caller's — `getSwatch` resolves with `find`, which takes the first.
      expect(current.colors.filter((c) => c.key === "black")).toEqual([black]);
      expect(current.colors).toHaveLength(DEFAULT_PALETTE.length);
    });

    it("applies later custom colors over earlier ones", () => {
      const first: Color = {
        key: "brand",
        default: {
          base: "#111111",
          opacity: { weak: "20", medium: "40", strong: "80" },
        },
      };
      const second: Color = { ...first, default: { ...first.default, base: "#222222" } };
      const { current } = renderTheme({ colors: [first, second] });

      expect(current.colors.filter((c) => c.key === "brand")).toEqual([second]);
    });

    it("leaves the default palette untouched", () => {
      const before = [...DEFAULT_PALETTE];
      renderTheme({
        colors: [
          {
            key: "brand",
            default: {
              base: "#123456",
              opacity: { weak: "20", medium: "40", strong: "80" },
            },
          },
        ],
      });

      expect(DEFAULT_PALETTE).toEqual(before);
    });
  });
});
