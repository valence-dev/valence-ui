import { Meta, StoryObj } from "@storybook/react";
import { ReactNode } from "react";
import {
  Case,
  Matrix,
  Section,
  Showcase,
  Storybook,
  elevatedMaterials,
} from "../../../storybook";
import { Flex, FlexProps } from "../../components/layout/Flex";
import { Text } from "../../components/display/Text/Text";
import { Material } from "./Material";
import { AirMaterial } from "./AirMaterial";
import { GlassMaterial } from "./GlassMaterial";
import { PaperMaterial } from "./PaperMaterial";
import { SolidMaterial } from "./SolidMaterial";

const TILE: FlexProps = {
  align: "center",
  justify: "center",
  height: 90,
  width: 130,
};

/** A labelled tile of one material — the only way to see a material at all. */
function Tile(props: { material: Material; children: ReactNode }) {
  return (
    <Flex {...TILE} material={props.material}>
      <Text align="center">{props.children}</Text>
    </Flex>
  );
}

/**
 * Materials have no component of their own — they are style objects applied to
 * something else — so their stories are tiles of `Flex`, and the story title
 * sits under `Foundations` rather than beside the components.
 */
const meta: Meta<typeof Flex> = {
  component: Flex,
  title: "Foundations/Materials",
  parameters: { valence: { layout: "flow" } },
};
export default meta;
type Story = StoryObj<typeof Flex>;

/** All four materials beside each other. */
export const Playground: Story = {
  render: () => (
    <Showcase
      title="The four materials"
      description="Each is the same tile with a different surface. Switch the toolbar's colour scheme — a material that only works in one of them is the thing to catch here."
    >
      <Section>
        <Tile material={new PaperMaterial()}>Paper</Tile>
        <Tile material={new GlassMaterial()}>Glass</Tile>
        <Tile material={new SolidMaterial()}>Solid</Tile>
        <Tile material={new AirMaterial()}>Air</Tile>
      </Section>

      <Section title="Interactive — hover each">
        <Tile material={new PaperMaterial({ interactive: true })}>Paper</Tile>
        <Tile material={new GlassMaterial({ interactive: true })}>Glass</Tile>
        <Tile material={new SolidMaterial({ interactive: true })}>Solid</Tile>
        <Tile material={new AirMaterial({ interactive: true })}>Air</Tile>
      </Section>
    </Showcase>
  ),
};

/** Paper, across every axis it has. */
export const Paper: Story = {
  render: () => (
    <Showcase
      title="Paper"
      description="An opaque, bordered surface with an elevation ramp. Its border darkens above elevation 3, which is the step to watch."
    >
      <Section title="Elevation">
        {elevatedMaterials("paper").map(([label, material]) => (
          <Case key={label} label={label}>
            <Tile material={material}>{label}</Tile>
          </Case>
        ))}
      </Section>

      <Section title="Colour">
        <Tile material={new PaperMaterial({ color: "red" })}>Red</Tile>
        <Tile
          material={
            new PaperMaterial({ backgroundColor: "red", color: "white" })
          }
        >
          Red background
        </Tile>
        <Tile material={new PaperMaterial({ backgroundColor: "transparent" })}>
          Transparent background
        </Tile>
        <Tile material={new PaperMaterial({ elevation: 4, interactive: true })}>
          Interactive
        </Tile>
      </Section>

      <Matrix title="Blur" values={["weak", "strong", 30] as const}>
        {(blur) => (
          <Tile material={new PaperMaterial({ blur, backgroundColor: "transparent" })}>
            {String(blur)}
          </Tile>
        )}
      </Matrix>

      <Matrix title="Every palette colour" values={Storybook.colors}>
        {(color) => (
          <Flex {...TILE} width={90} material={new PaperMaterial({ color })}>
            <Text size="xs" align="center">
              {color}
            </Text>
          </Flex>
        )}
      </Matrix>
    </Showcase>
  ),
};

/** Glass, across every axis it has. */
export const Glass: Story = {
  render: () => (
    <Showcase
      title="Glass"
      description="A translucent, blurred surface. Because it lets what is behind it through, the case that matters is what is behind it — the last section puts every variant over an image."
    >
      <Section title="Base">
        <Tile material={new GlassMaterial()}>Regular</Tile>
        <Tile material={new GlassMaterial({ interactive: true })}>
          Interactive
        </Tile>
        <Tile material={new GlassMaterial({ color: "blue" })}>Colour</Tile>
        <Tile
          material={
            new GlassMaterial({ color: "blue", backgroundColor: "red" })
          }
        >
          Different background and foreground
        </Tile>
      </Section>

      <Matrix title="Blur" values={["weak", "strong", 30] as const}>
        {(blur) => (
          <Tile material={new GlassMaterial({ blur })}>{String(blur)}</Tile>
        )}
      </Matrix>

      <Matrix title="Every palette colour" values={Storybook.colors}>
        {(color) => (
          <Flex {...TILE} width={90} material={new GlassMaterial({ color })}>
            <Text size="xs" align="center">
              {color}
            </Text>
          </Flex>
        )}
      </Matrix>

      <Section title="Over a photograph">
        <Case grow>
          <Flex
            padding={20}
            gap={20}
            wrap="wrap"
            width="100%"
            style={{
              backgroundImage: `url(${Storybook.imageSrc})`,
              backgroundSize: "cover",
            }}
          >
            <Tile material={new GlassMaterial()}>Glass</Tile>
            <Tile material={new GlassMaterial({ blur: "strong" })}>
              Strong blur
            </Tile>
            <Tile material={new GlassMaterial({ color: "blue" })}>Blue</Tile>
            <Tile material={new PaperMaterial()}>Paper, for comparison</Tile>
          </Flex>
        </Case>
      </Section>
    </Showcase>
  ),
};

/** Solid, across every axis it has. */
export const Solid: Story = {
  render: () => (
    <Showcase
      title="Solid"
      description="A flat, fully opaque surface with its own elevation ramp — the one to use when nothing behind the surface should show through."
    >
      <Section title="Base">
        <Tile material={new SolidMaterial()}>Regular</Tile>
        <Tile material={new SolidMaterial({ interactive: true })}>
          Interactive
        </Tile>
        <Tile material={new SolidMaterial({ color: "brighterWhite" })}>
          White
        </Tile>
      </Section>

      <Section title="Elevation">
        {elevatedMaterials("solid").map(([label, material]) => (
          <Case key={label} label={label}>
            <Tile material={material}>{label}</Tile>
          </Case>
        ))}
      </Section>

      <Matrix title="Every palette colour" values={Storybook.colors}>
        {(color) => (
          <Flex {...TILE} width={90} material={new SolidMaterial({ color })}>
            <Text size="xs" align="center">
              {color}
            </Text>
          </Flex>
        )}
      </Matrix>
    </Showcase>
  ),
};

/**
 * Air, which had no story at all.
 *
 * Air is the material that draws nothing until it is interacted with, so it is
 * the easiest one to break without noticing — there is nothing to look at
 * until you hover it.
 */
export const Air: Story = {
  render: () => (
    <Showcase
      title="Air"
      description="A surface with no fill of its own. Hover the interactive tiles — that is the only state in which air draws anything."
    >
      <Section title="Base">
        <Tile material={new AirMaterial()}>Regular</Tile>
        <Tile material={new AirMaterial({ interactive: true })}>
          Interactive
        </Tile>
        <Tile material={new AirMaterial({ color: "blue" })}>Colour</Tile>
        <Tile
          material={new AirMaterial({ color: "blue", interactive: true })}
        >
          Interactive colour
        </Tile>
      </Section>

      <Matrix title="Every palette colour, interactive" values={Storybook.colors}>
        {(color) => (
          <Flex
            {...TILE}
            width={90}
            material={new AirMaterial({ color, interactive: true })}
          >
            <Text size="xs" align="center">
              {color}
            </Text>
          </Flex>
        )}
      </Matrix>

      <Section title="Against a surface it has to sit on">
        <Case grow>
          <Flex padding={20} gap={20} width="100%" material={new PaperMaterial()}>
            <Tile material={new AirMaterial({ interactive: true })}>
              Air on paper
            </Tile>
            <Tile material={new AirMaterial({ interactive: true })}>
              Air on paper
            </Tile>
          </Flex>
        </Case>
      </Section>
    </Showcase>
  ),
};

/**
 * The four materials side by side on every axis they share.
 *
 * This is the comparison the separate stories cannot give: the same property
 * applied to all four at once, where an inconsistency between them shows.
 */
export const Comparison: Story = {
  render: () => {
    const build = (props: {
      color?: string;
      interactive?: boolean;
    }): [string, Material][] => [
      ["paper", new PaperMaterial(props)],
      ["glass", new GlassMaterial(props)],
      ["solid", new SolidMaterial(props)],
      ["air", new AirMaterial(props)],
    ];

    return (
      <Showcase
        title="Side by side"
        description="The same property applied to all four materials. They are meant to be interchangeable, so a property that lands differently on one of them is a bug rather than a design."
      >
        <Section title="Default">
          {build({}).map(([name, material]) => (
            <Case key={name} label={name}>
              <Tile material={material}>{name}</Tile>
            </Case>
          ))}
        </Section>

        <Section title="Interactive">
          {build({ interactive: true }).map(([name, material]) => (
            <Case key={name} label={name}>
              <Tile material={material}>{name}</Tile>
            </Case>
          ))}
        </Section>

        {["red", "blue", "green", "yellow"].map((color) => (
          <Section key={color} title={`color="${color}"`}>
            {build({ color }).map(([name, material]) => (
              <Case key={name} label={name}>
                <Tile material={material}>{name}</Tile>
              </Case>
            ))}
          </Section>
        ))}

        <Section title="Overrides">
          {build({}).map(([name, material]) => (
            <Case key={name} label={name}>
              <Tile
                material={material.setOverrides({
                  border: "2px dashed currentColor",
                })}
              >
                {name}
              </Tile>
            </Case>
          ))}
        </Section>
      </Showcase>
    );
  },
};
