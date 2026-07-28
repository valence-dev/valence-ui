import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { IconChevronDown, IconCloud, IconHash } from "@tabler/icons-react";
import {
  Case,
  Matrix,
  Section,
  Showcase,
  Storybook,
  allMaterials,
  sizingControls,
} from "../../../../storybook";
import { Option } from "./Options";
import { DropdownContainer as DC } from "./DropdownContainer";

const OPTIONS: Option<string>[] = [
  { value: "hi", label: "Hi" },
  { value: "there", label: "There" },
  { value: "mate", label: "Mate" },
  { value: "how", label: "How" },
  { value: "are", label: "Are" },
  { value: "you", label: "You" },
  { value: "doing", label: "Doing" },
  { value: "today", label: "Today" },
  { value: "son", label: "Father", icon: <IconCloud /> },
];

/**
 * Owns the selection for one dropdown.
 *
 * `DropdownContainer` keeps an internal fallback selection, but a story that
 * wants to show a *particular* selection has to control it — and each case
 * needs its own, so the state lives in a component rather than in the story.
 */
function Dropdown(props: Record<string, unknown> & { initial?: number | null }) {
  const { initial = null, ...rest } = props;
  const [selected, setSelected] = useState<number | null>(initial);

  return <DC {...rest} selected={selected} setSelected={setSelected} />;
}

const meta: Meta<typeof DC> = {
  component: DC,
  title: "Core/Inputs/DropdownContainer",
  argTypes: {
    ...sizingControls,
    disabled: { control: { type: "boolean" }, table: { category: "State" } },
    required: { control: { type: "boolean" }, table: { category: "State" } },
    loading: { control: { type: "boolean" }, table: { category: "State" } },
  },
  args: {
    options: OPTIONS,
    icon: <IconHash />,
    placeholder: "Select something...",
  },
};
export default meta;
type Story = StoryObj<typeof DC>;

/**
 * The menu `SelectInput` is built on.
 *
 * Like `InputContainer`, this is internal chrome rather than something an
 * application reaches for directly — its stories exist so the menu can be
 * checked without a particular input's behaviour on top of it.
 */
export const Playground: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Dropdown container">
      <Dropdown {...args} initial={0} />
    </Showcase>
  ),
};

/** Every size. */
export const Sizes: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Dropdown sizes"
      description="Open each one. The menu's option height should track the trigger's, so the two never look like different components."
    >
      <Matrix title="size" values={Storybook.componentSizes} column>
        {(size) => <Dropdown {...args} size={size} initial={0} />}
      </Matrix>
    </Showcase>
  ),
};

/** Open, closed, and every disabled variation. */
export const States: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Dropdown states"
      description="A disabled dropdown must not open. A loading one shows the loader in the icon slot and should behave as read-only while it does."
    >
      <Section title="Nothing selected" column>
        {(
          [
            ["default", {}],
            ["disabled", { disabled: true }],
            ["required", { required: true }],
            ["loading", { loading: true }],
          ] as const
        ).map(([label, props]) => (
          <Case key={label} label={label}>
            <Dropdown {...args} {...props} initial={null} />
          </Case>
        ))}
      </Section>

      <Section title="With a selection" column>
        {(
          [
            ["default", {}],
            ["disabled", { disabled: true }],
            ["required", { required: true }],
            ["loading", { loading: true }],
          ] as const
        ).map(([label, props]) => (
          <Case key={label} label={label}>
            <Dropdown {...args} {...props} initial={8} />
          </Case>
        ))}
      </Section>
    </Showcase>
  ),
};

/** Every material. */
export const Materials: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Dropdown materials">
      <Section column>
        {allMaterials().map(([name, material]) => (
          <Case key={name} label={name}>
            <Dropdown {...args} material={material} initial={0} />
          </Case>
        ))}
      </Section>
    </Showcase>
  ),
};

/** The slots and option shapes. */
export const Content: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Dropdown content">
      <Section column>
        <Case label="icon + secondaryIcon">
          <Dropdown
            {...args}
            secondaryIcon={<IconChevronDown />}
            initial={null}
          />
        </Case>
        <Case label="no icon">
          <Dropdown {...args} icon={undefined} initial={null} />
        </Case>
        <Case label="options with icons">
          <Dropdown
            {...args}
            options={[
              { value: "a", label: "Cloudy", icon: <IconCloud /> },
              { value: "b", label: "Hashed", icon: <IconHash /> },
              { value: "c", label: "Plain" },
            ]}
            initial={null}
          />
        </Case>
        <Case label="a long placeholder">
          <Dropdown {...args} placeholder={Storybook.longText} initial={null} />
        </Case>
      </Section>
    </Showcase>
  ),
};

/** Option lists the menu has to cope with. */
export const EdgeCases: Story = {
  name: "Edge Cases",
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Dropdown edge cases">
      <Section column>
        <Case label="no options" note="Must open to an empty menu, not crash.">
          <Dropdown {...args} options={[]} initial={null} />
        </Case>
        <Case label="one option">
          <Dropdown
            {...args}
            options={[{ value: "only", label: "The only option" }]}
            initial={null}
          />
        </Case>
        <Case
          label="two hundred options"
          note="The menu must scroll rather than run off the page."
        >
          <Dropdown
            {...args}
            options={Array.from({ length: 200 }, (_, index) => ({
              value: String(index),
              label: `Option ${index + 1}`,
            }))}
            initial={null}
          />
        </Case>
        <Case label="a very long option label">
          <Dropdown
            {...args}
            options={[
              { value: "long", label: Storybook.longText },
              { value: "short", label: "Short" },
            ]}
            initial={0}
          />
        </Case>
        <Case label="non-latin and emoji">
          <Dropdown
            {...args}
            options={[
              { value: "awkward", label: Storybook.awkwardText },
              { value: "plain", label: "Plain" },
            ]}
            initial={0}
          />
        </Case>
        <Case
          label="a selected index out of range"
          note="Must fall back to the placeholder."
        >
          <Dropdown {...args} initial={99} />
        </Case>
        <Case label="in a narrow parent" width={200}>
          <Dropdown {...args} grow initial={0} />
        </Case>
      </Section>
    </Showcase>
  ),
};
