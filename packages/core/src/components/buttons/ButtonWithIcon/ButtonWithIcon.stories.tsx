import { Meta, StoryObj } from "@storybook/react";
import { IconTrash, IconUserCircle } from "@tabler/icons-react";
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
import { ButtonWithIcon as BWI } from "./ButtonWithIcon";

const meta: Meta<typeof BWI> = {
  component: BWI,
  title: "Core/Buttons/ButtonWithIcon",
  argTypes: {
    ...sizingControls,
    ...stateControls,
    children: textControl("The button's label."),
    iconPosition: {
      options: ["left", "right"],
      control: { type: "inline-radio" },
      table: { category: "Content" },
    },
    square: { control: { type: "boolean" }, table: { category: "Layout" } },
    grow: { control: { type: "boolean" }, table: { category: "Layout" } },
  },
  args: {
    icon: <IconUserCircle />,
    children: "Button",
    iconPosition: "left",
  },
};
export default meta;
type Story = StoryObj<typeof BWI>;

/** One button, driven entirely by the controls panel. */
export const Playground: Story = {};

/** Every size, on both sides, so the icon scales with the label. */
export const Sizes: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Button with icon sizes"
      description="The icon is sized from the button, not the label. Check the icon and the text stay on a shared centre line at every size."
    >
      <Matrix title="iconPosition=left" values={Storybook.componentSizes}>
        {(size) => <BWI {...args} size={size} iconPosition="left" />}
      </Matrix>

      <Matrix title="iconPosition=right" values={Storybook.componentSizes}>
        {(size) => <BWI {...args} size={size} iconPosition="right" />}
      </Matrix>
    </Showcase>
  ),
};

/** The two icon positions, side by side. */
export const Variants: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Icon position"
      description="The gap between icon and label must be identical on both sides."
    >
      <Section>
        <Case label="left">
          <BWI {...args} iconPosition="left" />
        </Case>
        <Case label="right">
          <BWI {...args} iconPosition="right" />
        </Case>
        <Case label="left, destructive icon">
          <BWI {...args} icon={<IconTrash />} iconPosition="left">
            Delete
          </BWI>
        </Case>
      </Section>
    </Showcase>
  ),
};

/** Each material. */
export const Materials: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Button with icon materials">
      <Section title="Default">
        {allMaterials().map(([name, material]) => (
          <Case key={name} label={name}>
            <BWI {...args} material={material} />
          </Case>
        ))}
      </Section>

      <Section title="Coloured">
        {allMaterials("violet").map(([name, material]) => (
          <Case key={name} label={name}>
            <BWI {...args} material={material} />
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
      title="Button with icon states"
      description="`loading` replaces both the icon and the label, so the button must not change width when it flips."
    >
      <Section>
        <Case label="default">
          <BWI {...args} />
        </Case>
        <Case label="disabled">
          <BWI {...args} disabled />
        </Case>
        <Case label="loading">
          <BWI {...args} loading />
        </Case>
        <Case label="disabled + loading">
          <BWI {...args} disabled loading />
        </Case>
      </Section>

      <Matrix title="loading, by size" values={Storybook.componentSizes}>
        {(size) => <BWI {...args} size={size} loading />}
      </Matrix>
    </Showcase>
  ),
};

/** Content the icon layout has to cope with. */
export const EdgeCases: Story = {
  name: "Edge Cases",
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Button with icon edge cases">
      <Section column>
        <Case label="no label" note="Should collapse to the icon, not to zero.">
          <BWI {...args}>{""}</BWI>
        </Case>
        <Case label="very long label">
          <BWI {...args}>{Storybook.longText}</BWI>
        </Case>
        <Case label="long label, icon right">
          <BWI {...args} iconPosition="right">
            {Storybook.longText}
          </BWI>
        </Case>
        <Case label="non-latin and emoji">
          <BWI {...args}>{Storybook.awkwardText}</BWI>
        </Case>
        <Case
          label="constrained width"
          width={200}
          note="The icon must not be squashed by the label."
        >
          <BWI {...args} width="100%">
            {Storybook.longText}
          </BWI>
        </Case>
      </Section>
    </Showcase>
  ),
};
