import { Meta, StoryObj } from "@storybook/react";
import { IconPhoto } from "@tabler/icons-react";
import {
  Case,
  Matrix,
  Section,
  Showcase,
  Storybook,
  allMaterials,
  radiusControl,
} from "../../../../../storybook";
import { Text } from "../../Text/Text";
import { Image as I } from "./Image";

const FITS = ["cover", "contain", "fill", "none", "scale-down"] as const;

const meta: Meta<typeof I> = {
  component: I,
  title: "Core/Display/Image",
  argTypes: {
    radius: radiusControl,
    fit: {
      options: FITS,
      control: { type: "select" },
      table: { category: "Appearance" },
    },
    square: { control: { type: "boolean" }, table: { category: "Layout" } },
    width: { control: { type: "number" }, table: { category: "Layout" } },
    height: { control: { type: "number" }, table: { category: "Layout" } },
  },
  args: {
    src: Storybook.imageSrc,
    alt: "A landscape",
    width: 200,
    height: 200,
  },
};
export default meta;
type Story = StoryObj<typeof I>;

/** One image, driven entirely by the controls panel. */
export const Playground: Story = {};

/**
 * Loaded, empty and broken.
 *
 * The placeholder is what an image spends most of its life showing — while it
 * loads, when the source is missing, and when the source is wrong — so it gets
 * as much room here as the loaded state.
 */
export const States: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Image states"
      description="An empty and a broken image must both hold their box rather than collapsing, so the layout around them does not move once the source resolves."
    >
      <Section>
        <Case label="loaded">
          <I {...args} />
        </Case>
        <Case label="no src">
          <I {...args} src={undefined} />
        </Case>
        <Case label="broken src">
          <I {...args} src={Storybook.brokenImageSrc} />
        </Case>
        <Case label="custom placeholder">
          <I {...args} src={undefined} placeholder={<IconPhoto />} />
        </Case>
        <Case label="text placeholder">
          <I {...args} src={undefined} placeholder={<Text>No image</Text>} />
        </Case>
      </Section>
    </Showcase>
  ),
};

/** Every `object-fit`, against an image that does not match its box. */
export const Variants: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Object fit"
      description="The source is landscape and the box is square, so each `fit` should be visibly different from the others."
    >
      <Matrix title="fit, square box" values={FITS}>
        {(fit) => <I {...args} fit={fit} width={140} height={140} />}
      </Matrix>

      <Matrix title="fit, tall box" values={FITS}>
        {(fit) => <I {...args} fit={fit} width={100} height={200} />}
      </Matrix>
    </Showcase>
  ),
};

/** Every radius. */
export const Radii: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Image radii">
      <Matrix title="radius" values={Storybook.componentSizes}>
        {(radius) => <I {...args} radius={radius} width={120} height={120} />}
      </Matrix>
    </Showcase>
  ),
};

/**
 * The material behind the image.
 *
 * A material only shows through where the image does not cover, so the row
 * that matters is the empty one.
 */
export const Materials: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Image materials">
      <Section title="Empty — the material is the placeholder's surface">
        {allMaterials().map(([name, material]) => (
          <Case key={name} label={name}>
            <I {...args} src={undefined} material={material} width={120} height={120} />
          </Case>
        ))}
      </Section>

      <Section title="Loaded — the material should be hidden">
        {allMaterials().map(([name, material]) => (
          <Case key={name} label={name}>
            <I {...args} material={material} width={120} height={120} />
          </Case>
        ))}
      </Section>
    </Showcase>
  ),
};

/** Sizes and aspect ratios. */
export const EdgeCases: Story = {
  name: "Edge Cases",
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Image edge cases">
      <Section>
        <Case label="square">
          <I {...args} square width={120} height={undefined} />
        </Case>
        <Case label="very wide">
          <I {...args} width={400} height={60} />
        </Case>
        <Case label="very tall">
          <I {...args} width={60} height={300} />
        </Case>
        <Case label="tiny">
          <I {...args} width={16} height={16} />
        </Case>
        <Case label="no dimensions" note="Falls back to the intrinsic size.">
          <I {...args} width={undefined} height={undefined} />
        </Case>
      </Section>

      <Section title="Responsive width" column>
        <Case
          label='width={{ default: 200, mobile: "unset" }}'
          note="Resize the frame past the mobile breakpoint."
        >
          <I {...args} width={{ default: 200, mobile: "unset" }} height={300} />
        </Case>
      </Section>
    </Showcase>
  ),
};
