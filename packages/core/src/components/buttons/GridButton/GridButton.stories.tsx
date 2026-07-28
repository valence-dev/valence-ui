import { Meta, StoryObj } from "@storybook/react";
import { Icon123, IconMessage, IconStar } from "@tabler/icons-react";
import {
  Case,
  Matrix,
  Section,
  Showcase,
  Storybook,
  allMaterials,
  sizingControls,
  stateControls,
  textControl,
} from "../../../../storybook";
import { GridButton as GB } from "./GridButton";

const meta: Meta<typeof GB> = {
  component: GB,
  title: "Core/Buttons/GridButton",
  argTypes: {
    ...sizingControls,
    ...stateControls,
    children: textControl("The button's label, below or above the icon."),
    iconPosition: {
      options: ["top", "bottom"],
      control: { type: "inline-radio" },
      table: { category: "Content" },
    },
  },
  args: {
    icon: <Icon123 />,
    children: "Post count",
  },
};
export default meta;
type Story = StoryObj<typeof GB>;

/** One button, driven entirely by the controls panel. */
export const Playground: Story = {};

/**
 * Every size.
 *
 * A grid button derives its width from its height, so `size` scales the whole
 * tile rather than only the type.
 */
export const Sizes: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Grid button sizes"
      description="Width is 2.5× the height for the size, so these should stay in proportion. Check the label does not start wrapping before `xs`."
    >
      <Matrix title="size" values={Storybook.componentSizes}>
        {(size) => <GB {...args} size={size} />}
      </Matrix>

      <Matrix title="size, iconPosition=bottom" values={Storybook.componentSizes}>
        {(size) => <GB {...args} size={size} iconPosition="bottom" />}
      </Matrix>
    </Showcase>
  ),
};

/** The two icon positions. */
export const Variants: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Icon position">
      <Section>
        <Case label="top">
          <GB {...args} iconPosition="top" />
        </Case>
        <Case label="bottom">
          <GB {...args} iconPosition="bottom" />
        </Case>
      </Section>
    </Showcase>
  ),
};

/** Each material. */
export const Materials: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Grid button materials">
      <Section title="Default">
        {allMaterials().map(([name, material]) => (
          <Case key={name} label={name}>
            <GB {...args} material={material} />
          </Case>
        ))}
      </Section>

      <Section title="Coloured">
        {allMaterials("teal").map(([name, material]) => (
          <Case key={name} label={name}>
            <GB {...args} material={material} />
          </Case>
        ))}
      </Section>
    </Showcase>
  ),
};

/** Disabled and loading. */
export const States: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Grid button states"
      description="The tile is a fixed size, so the loader must sit where the icon was without moving the label."
    >
      <Section>
        <Case label="default">
          <GB {...args} />
        </Case>
        <Case label="disabled">
          <GB {...args} disabled />
        </Case>
        <Case label="loading">
          <GB {...args} loading />
        </Case>
        <Case label="disabled + loading">
          <GB {...args} disabled loading />
        </Case>
      </Section>

      <Matrix title="loading, by size" values={Storybook.componentSizes}>
        {(size) => <GB {...args} size={size} loading />}
      </Matrix>
    </Showcase>
  ),
};

/** A row of grid buttons, which is how they are actually used. */
export const Composition: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="In a grid"
      description="Grid buttons are meant to sit beside each other. Labels of different lengths must not knock the icons out of alignment."
    >
      <Section>
        <Case>
          <GB {...args} icon={<Icon123 />}>
            Posts
          </GB>
        </Case>
        <Case>
          <GB {...args} icon={<IconStar />}>
            Favourites
          </GB>
        </Case>
        <Case>
          <GB {...args} icon={<IconMessage />}>
            Messages
          </GB>
        </Case>
      </Section>
    </Showcase>
  ),
};

/** Labels a fixed-size tile cannot hold. */
export const EdgeCases: Story = {
  name: "Edge Cases",
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Grid button edge cases">
      <Section>
        <Case label="no label">
          <GB {...args}>{""}</GB>
        </Case>
        <Case label="very long label">
          <GB {...args}>{Storybook.longText}</GB>
        </Case>
        <Case label="single long word">
          <GB {...args}>Internationalisation</GB>
        </Case>
        <Case label="non-latin and emoji">
          <GB {...args}>{Storybook.awkwardText}</GB>
        </Case>
      </Section>
    </Showcase>
  ),
};
