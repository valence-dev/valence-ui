import { Meta, StoryObj } from "@storybook/react";
import { Icon123, IconHeart, IconSearch } from "@tabler/icons-react";
import {
  Case,
  Matrix,
  Section,
  Showcase,
  Storybook,
  colorControl,
} from "../../../../storybook";
import { Text } from "../Text/Text";
import { Icon as I } from "./Icon";

const meta: Meta<typeof I> = {
  component: I,
  title: "Core/Display/Icon",
  argTypes: {
    size: { control: { type: "number" }, table: { category: "Appearance" } },
    stroke: { control: { type: "number" }, table: { category: "Appearance" } },
    color: colorControl,
  },
  args: {
    children: <Icon123 />,
  },
};
export default meta;
type Story = StoryObj<typeof I>;

/** One icon, driven entirely by the controls panel. */
export const Playground: Story = {};

/**
 * The theme's icon sizes, and arbitrary ones.
 *
 * `Icon` takes a pixel size rather than a `ComponentSize`, so the sizes worth
 * checking are the ones the theme feeds it from `sizeClasses.iconSize`.
 */
export const Sizes: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Icon sizes"
      description="The first row is the theme's icon scale; the second goes well beyond it, where a stroke width tuned for small sizes starts to look thin."
    >
      <Matrix title="theme icon sizes" values={[18, 20, 24, 26, 30]}>
        {(size) => <I {...args} size={size} />}
      </Matrix>

      <Matrix title="beyond the scale" values={[12, 48, 96, 160]}>
        {(size) => <I {...args} size={size} />}
      </Matrix>
    </Showcase>
  ),
};

/** Stroke weights across sizes. */
export const Variants: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Stroke weight"
      description="A stroke that reads well at 24px is usually too heavy at 96px and too light at 12px — this is the grid where that shows."
    >
      {[0.75, 1.5, 2.5].map((stroke) => (
        <Matrix
          key={stroke}
          title={`stroke=${stroke}`}
          values={[16, 24, 48, 96]}
        >
          {(size) => <I {...args} size={size} stroke={stroke} />}
        </Matrix>
      ))}
    </Showcase>
  ),
};

/** Every palette colour, plus inheritance. */
export const Colors: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Icon colours"
      description="An icon with no colour inherits from its parent — the last case checks that it actually does."
    >
      <Matrix title="color" values={Storybook.colors}>
        {(color) => <I {...args} color={color} size={32} />}
      </Matrix>

      <Section title="Inheritance">
        <Case label="unset, inside red text">
          <Text color="red">
            <I {...args} size={32} />
          </Text>
        </Case>
        <Case label="explicit blue, inside red text">
          <Text color="red">
            <I {...args} color="blue" size={32} />
          </Text>
        </Case>
      </Section>
    </Showcase>
  ),
};

/** Mount animations. */
export const Content: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Animations"
      description="These run on mount, so reload the story to replay them."
    >
      <Section>
        <Case label="none">
          <I {...args} size={48} />
        </Case>
        <Case label="fade">
          <I {...args} size={48} animation="fade" />
        </Case>
        <Case label="blur">
          <I {...args} size={48} animation="blur" />
        </Case>
        <Case label="fade + blur + grow">
          <I {...args} size={48} animation={["fade", "blur", "grow"]} />
        </Case>
      </Section>
    </Showcase>
  ),
};

/** Children an icon wrapper is not designed for. */
export const EdgeCases: Story = {
  name: "Edge Cases",
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Icon edge cases"
      description="`Icon` clones its child to inject the size and colour, so a child that is not an element is the interesting case — it must pass through rather than throw."
    >
      <Section>
        <Case label="an unwrapped Tabler icon" note="For comparison.">
          <Icon123 />
        </Case>
        <Case label="no children">
          <I {...args}>{null}</I>
        </Case>
        <Case label="a string child">
          <I {...args}>not an element</I>
        </Case>
        <Case label="several icons">
          <I {...args} size={32} color="grape">
            <IconSearch />
          </I>
          <I {...args} size={32} color="grape">
            <IconHeart />
          </I>
        </Case>
      </Section>
    </Showcase>
  ),
};
