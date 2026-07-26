import { describe, expect, it } from "vitest";
import { renderHook } from "@testing-library/react";
import { Providers } from "../../../../../test/utils";
import { useValence, IValenceContext } from "../../ValenceProvider";
import { useColors, UseColorsReturn } from "../color";
import { AirMaterial } from "./AirMaterial";
import { GlassMaterial } from "./GlassMaterial";
import { PaperMaterial } from "./PaperMaterial";
import { SolidMaterial } from "./SolidMaterial";
import { Material } from "./Material";

/** Renders the two contexts every material needs to produce styles. */
function useMaterialContext(): [IValenceContext, UseColorsReturn] {
  const { result } = renderHook(
    () => [useValence(), useColors()] as [IValenceContext, UseColorsReturn],
    { wrapper: ({ children }) => <Providers>{children}</Providers> },
  );
  return result.current;
}

const ALL_MATERIALS: [string, () => Material][] = [
  ["AirMaterial", () => new AirMaterial()],
  ["GlassMaterial", () => new GlassMaterial()],
  ["PaperMaterial", () => new PaperMaterial()],
  ["SolidMaterial", () => new SolidMaterial()],
];

describe("Material (shared contract)", () => {
  describe.each(ALL_MATERIALS)("%s", (_name, create) => {
    it("defaults to non-interactive with empty overrides", () => {
      const material = create();
      expect(material.interactive).toBe(false);
      expect(material.overrides).toEqual({});
      expect(material.childrenOverrides).toEqual({});
    });

    it("produces a style object with a color and a background", () => {
      const [valence, colors] = useMaterialContext();
      const styles = create().getStyles(valence, colors);

      expect(styles).toHaveProperty("color");
      expect(styles).toHaveProperty("backgroundColor");
      expect(styles.outline).toBe("none");
    });

    it("only emits hover/focus rules when interactive", () => {
      const [valence, colors] = useMaterialContext();

      const idle = create().getStyles(valence, colors);
      const active = create().setInteractive(true).getStyles(valence, colors);

      expect(idle["&:hover"]).toBeUndefined();
      expect(active["&:hover"]).toBeDefined();
      expect(active["&:focus, &:focus-within"]).toBeDefined();
      expect(active["&:disabled"]).toEqual({
        cursor: "not-allowed",
        opacity: 0.75,
      });
    });

    it("setters return a copy and leave the original untouched", () => {
      const original = create();
      const modified = original.setInteractive(true);

      expect(modified).not.toBe(original);
      expect(modified.interactive).toBe(true);
      expect(original.interactive).toBe(false);
    });

    it("copy() preserves the concrete material subclass", () => {
      const original = create();
      expect(original.copy()).toBeInstanceOf(original.constructor);
    });

    it("applies `overrides` last so callers always win", () => {
      const [valence, colors] = useMaterialContext();
      const styles = create()
        .setOverrides({ color: "rebeccapurple", borderRadius: 99 })
        .getStyles(valence, colors);

      expect(styles.color).toBe("rebeccapurple");
      expect(styles.borderRadius).toBe(99);
    });

    it("styles the scrollbar on the surface and its descendants", () => {
      const [valence, colors] = useMaterialContext();
      const material = create();

      expect(
        material.getStyles(valence, colors)["&::-webkit-scrollbar-thumb"],
      ).toBeDefined();
      expect(
        material.getChildrenStyles(valence, colors)[
          "&::-webkit-scrollbar-thumb"
        ],
      ).toBeDefined();
    });

    it("applies `childrenOverrides` to descendant styles", () => {
      const [valence, colors] = useMaterialContext();
      const material = create().setChildrenOverrides({ fontWeight: 900 });

      expect(material.getChildrenStyles(valence, colors).fontWeight).toBe(900);
      expect((material.getStyles(valence, colors)["& *"] as any).fontWeight).toBe(
        900,
      );
    });
  });
});

describe("GlassMaterial", () => {
  it("maps named blur strengths to backdrop filters", () => {
    const [valence, colors] = useMaterialContext();

    expect(
      new GlassMaterial({ blur: "weak" }).getStyles(valence, colors)
        .backdropFilter,
    ).toBe("blur(5px)");
    expect(
      new GlassMaterial({ blur: "strong" }).getStyles(valence, colors)
        .backdropFilter,
    ).toBe("blur(15px)");
    expect(
      new GlassMaterial({ blur: 3 }).getStyles(valence, colors).backdropFilter,
    ).toBe("blur(3px)");
    expect(
      new GlassMaterial().getStyles(valence, colors).backdropFilter,
    ).toBe("none");
  });

  it("uses the theme primary color when no color is supplied", () => {
    const [valence, colors] = useMaterialContext();
    const styles = new GlassMaterial().getStyles(valence, colors);

    expect(styles.color).toBe(colors.getHex(valence.primaryColor));
    expect(styles.backgroundColor).toBe(
      colors.getHex(valence.primaryColor, "weak"),
    );
  });

  it("lets backgroundColor diverge from the foreground color", () => {
    const [valence, colors] = useMaterialContext();
    const styles = new GlassMaterial({
      color: "red",
      backgroundColor: "blue",
    }).getStyles(valence, colors);

    expect(styles.color).toBe(colors.getHex("red"));
    expect(styles.backgroundColor).toBe(colors.getHex("blue", "weak"));
  });

  it("keeps subclass typing through its own setters", () => {
    const material = new GlassMaterial().setBlur("strong").setColor("teal");
    expect(material).toBeInstanceOf(GlassMaterial);
    expect(material.blur).toBe("strong");
    expect(material.color).toBe("teal");
  });
});

describe("PaperMaterial", () => {
  it("emits no shadow at elevation 0 and a shadow at every named elevation", () => {
    const [valence, colors] = useMaterialContext();

    expect(new PaperMaterial().getStyles(valence, colors).boxShadow).toBe(
      "none",
    );

    for (const elevation of [1, 2, 3, 4, 5] as const) {
      const styles = new PaperMaterial({ elevation }).getStyles(
        valence,
        colors,
      );
      expect(styles.boxShadow).toMatch(/^0px .*rgba\(0, 0, 0, 0\./);
    }
  });

  it("raises elevation by one on hover, clamped at 5", () => {
    const [valence, colors] = useMaterialContext();

    const atFive = new PaperMaterial({ elevation: 5, interactive: true })
      .getStyles(valence, colors)["&:hover"] as any;
    const atFiveDirect = new PaperMaterial({ elevation: 5 }).getStyles(
      valence,
      colors,
    ).boxShadow;

    expect(atFive.boxShadow).toBe(atFiveDirect);
  });

  it("applies transparency to the background only when blurred", () => {
    const [valence, colors] = useMaterialContext();

    const opaque = new PaperMaterial().getStyles(valence, colors);
    const blurred = new PaperMaterial({ blur: "strong" }).getStyles(
      valence,
      colors,
    );

    expect(opaque.backgroundColor).toBe(colors.getHex("brighterWhite"));
    expect(blurred.backgroundColor).toBe(`${colors.getHex("brighterWhite")}A0`);
  });
});

describe("SolidMaterial", () => {
  it("picks a contrasting foreground for light background colors", () => {
    const [valence, colors] = useMaterialContext();

    expect(
      new SolidMaterial({ color: "white" }).getStyles(valence, colors).color,
    ).toBe(colors.getHex("black"));
    expect(
      new SolidMaterial({ color: "permaBlack" }).getStyles(valence, colors)
        .color,
    ).toBe(colors.getHex("permaWhite"));
    expect(
      new SolidMaterial({ color: "blue" }).getStyles(valence, colors).color,
    ).toBe(colors.getHex("white"));
  });

  it("darkens the background on hover when interactive", () => {
    const [valence, colors] = useMaterialContext();
    const styles = new SolidMaterial({ color: "blue", interactive: true })
      .getStyles(valence, colors);

    const hover = styles["&:hover"] as any;
    expect(hover.backgroundColor).toBeTypeOf("string");
    expect(hover.backgroundColor).not.toBe(styles.backgroundColor);
  });
});

describe("AirMaterial", () => {
  it("is fully transparent and borderless at rest", () => {
    const [valence, colors] = useMaterialContext();
    const styles = new AirMaterial().getStyles(valence, colors);

    expect(styles.backgroundColor).toBe("transparent");
    expect(styles.border).toBe("none");
  });

  it("tints the background on hover when interactive", () => {
    const [valence, colors] = useMaterialContext();
    const styles = new AirMaterial({ color: "red", interactive: true })
      .getStyles(valence, colors);

    expect((styles["&:hover"] as any).backgroundColor).toBe(
      colors.getHex("red", "weak"),
    );
  });
});
