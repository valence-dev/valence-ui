import { Material } from "../src/utilities/materials/Material";
import { AirMaterial } from "../src/utilities/materials/AirMaterial";
import { GlassMaterial } from "../src/utilities/materials/GlassMaterial";
import { PaperMaterial } from "../src/utilities/materials/PaperMaterial";
import { SolidMaterial } from "../src/utilities/materials/SolidMaterial";

export type MaterialName = "paper" | "glass" | "solid" | "air";

/**
 * Builds a material by name.
 *
 * Materials are classes, so they cannot be a Storybook control value — a
 * `select` control hands back a string. Stories take the string and call this,
 * which is also what lets the material be varied from the toolbar rather than
 * only from the story source.
 */
export function makeMaterial(name: MaterialName, color?: string): Material {
  switch (name) {
    case "paper":
      return new PaperMaterial({ color });
    case "glass":
      return new GlassMaterial({ color });
    case "solid":
      return new SolidMaterial({ color });
    case "air":
      return new AirMaterial({ color });
  }
}

/**
 * Every material, by name, for the "Materials" case of a component story.
 *
 * Paired as `[name, material]` so a `Matrix` can label each case with the name
 * that produced it.
 */
export function allMaterials(color?: string): [MaterialName, Material][] {
  return (["paper", "glass", "solid", "air"] as const).map((name) => [
    name,
    makeMaterial(name, color),
  ]);
}

/**
 * The elevations of the two materials that have them, for the elevation cases.
 *
 * `air` and `glass` are omitted because they do not carry an elevation; asking
 * for one would silently return the base material and the case would show six
 * identical tiles.
 *
 * The first entry is the material with no elevation set at all, which is a
 * distinct case from `elevation: 1` and the one a component gets by default.
 */
export function elevatedMaterials(
  kind: "paper" | "solid" = "paper",
): [string, Material][] {
  const make = (elevation?: 1 | 2 | 3 | 4 | 5) =>
    kind === "paper"
      ? new PaperMaterial({ elevation })
      : new SolidMaterial({ elevation });

  return [
    ["unset", make()],
    ...([1, 2, 3, 4, 5] as const).map(
      (elevation): [string, Material] => [String(elevation), make(elevation)],
    ),
  ];
}
