import { describe, expect, it } from "vitest";
import { renderHook } from "@testing-library/react";
import { Providers } from "../../../../../test/utils";
import { useColors } from "./UseColors";
import { Color, getDefaultSwatch } from "./Color";
import { DEFAULT_PALETTE } from "./DefaultPalette";

const BRAND: Color = {
  key: "brand",
  default: {
    base: "#123456",
    opacity: { weak: "20", medium: "40", strong: "80" },
  },
};

function useColorsIn(providerProps?: Parameters<typeof Providers>[0]) {
  return renderHook(() => useColors(), {
    wrapper: ({ children }) => (
      <Providers {...providerProps}>{children}</Providers>
    ),
  }).result;
}

describe("useColors", () => {
  describe("getSwatch", () => {
    it("resolves a palette key to its default swatch", () => {
      const { current } = useColorsIn();
      const black = DEFAULT_PALETTE.find((c) => c.key === "black")!;
      expect(current.getSwatch("black")).toEqual(black.default);
    });

    it("resolves `primary` to the configured primary color", () => {
      const { current } = useColorsIn({ primaryColor: "blue" });
      const blue = DEFAULT_PALETTE.find((c) => c.key === "blue")!;
      expect(current.getSwatch("primary")).toEqual(blue.default);
    });

    it("builds an ad-hoc swatch for a raw hex code", () => {
      const { current } = useColorsIn();
      expect(current.getSwatch("#ABCDEF")).toEqual(getDefaultSwatch("#ABCDEF"));
    });

    it("returns undefined for an unknown, non-hex key", () => {
      const { current } = useColorsIn();
      expect(current.getSwatch("not-a-color")).toBeUndefined();
    });

    it("returns undefined when the key is undefined", () => {
      const { current } = useColorsIn();
      expect(current.getSwatch(undefined)).toBeUndefined();
    });

    it("resolves a custom color added by the provider", () => {
      const { current } = useColorsIn({ colors: [BRAND] });
      expect(current.getSwatch("brand")).toEqual(BRAND.default);
    });

    it("still resolves the built-ins alongside a custom color", () => {
      const { current } = useColorsIn({ colors: [BRAND] });
      const black = DEFAULT_PALETTE.find((c) => c.key === "black")!;
      expect(current.getSwatch("black")).toEqual(black.default);
    });

    it("prefers a custom color over the built-in of the same key", () => {
      const customBlack: Color = { ...BRAND, key: "black" };
      const { current } = useColorsIn({ colors: [customBlack] });
      expect(current.getSwatch("black")).toEqual(customBlack.default);
    });
  });

  describe("getHex", () => {
    it("returns the base hex when no opacity is requested", () => {
      const { current } = useColorsIn();
      const black = DEFAULT_PALETTE.find((c) => c.key === "black")!;
      expect(current.getHex("black")).toBe(black.default.base);
    });

    it("appends the opacity suffix for each opacity level", () => {
      const { current } = useColorsIn();
      const black = DEFAULT_PALETTE.find((c) => c.key === "black")!;

      for (const level of ["weak", "medium", "strong"] as const) {
        expect(current.getHex("black", level)).toBe(
          black.default.base + black.default.opacity[level],
        );
      }
    });

    it("passes unknown keys through untouched so raw CSS colors still work", () => {
      const { current } = useColorsIn();
      expect(current.getHex("inherit")).toBe("inherit");
      expect(current.getHex("rgb(1, 2, 3)")).toBe("rgb(1, 2, 3)");
    });

    it("returns undefined when the key is undefined so `color` can be inherited", () => {
      const { current } = useColorsIn();
      expect(current.getHex(undefined)).toBeUndefined();
    });
  });

  describe("color scheme awareness", () => {
    it("uses the dark swatch when the provider forces dark mode", () => {
      const { current } = useColorsIn({ preferredColorScheme: "dark" });
      const black = DEFAULT_PALETTE.find((c) => c.key === "black")!;
      expect(current.getSwatch("black")).toEqual(black.dark);
    });

    it("falls back to the default swatch when a color has no dark variant", () => {
      const { current } = useColorsIn({ preferredColorScheme: "dark" });
      const permaWhite = DEFAULT_PALETTE.find((c) => c.key === "permaWhite")!;
      expect(permaWhite.dark).toBeUndefined();
      expect(current.getSwatch("permaWhite")).toEqual(permaWhite.default);
    });
  });
});

describe("getDefaultSwatch", () => {
  it("returns undefined for an undefined hex", () => {
    expect(getDefaultSwatch(undefined)).toBeUndefined();
  });

  it("produces the three standard opacity levels", () => {
    expect(getDefaultSwatch("#123456")).toEqual({
      base: "#123456",
      opacity: { weak: "20", medium: "4A", strong: "A0" },
    });
  });
});
