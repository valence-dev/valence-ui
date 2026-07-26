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
  });
});
