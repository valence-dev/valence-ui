import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { IconAward, IconCloud, IconStar } from "@tabler/icons-react";
import {
  Case,
  Controlled,
  Matrix,
  Section,
  Showcase,
  Storybook,
  allMaterials,
  sizingControls,
} from "../../../../storybook";
import { Button } from "../../buttons/TextButton";
import { Option } from "../DropdownContainer/Options";
import { SelectInput as SI } from "./SelectInput";

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

const meta: Meta<typeof SI> = {
  component: SI,
  title: "Core/Inputs/SelectInput",
  argTypes: {
    ...sizingControls,
    disabled: { control: { type: "boolean" }, table: { category: "State" } },
    readOnly: { control: { type: "boolean" }, table: { category: "State" } },
    required: { control: { type: "boolean" }, table: { category: "State" } },
    loading: { control: { type: "boolean" }, table: { category: "State" } },
  },
  args: {
    placeholder: "Select something...",
    icon: <IconAward />,
    options: OPTIONS,
  },
};
export default meta;
type Story = StoryObj<typeof SI>;

/** One select, driven entirely by the controls panel. */
export const Playground: Story = {
  render: (args) => (
    <Controlled<Option<string> | null> initial={null}>
      {(value, setValue) => <SI {...args} value={value} setValue={setValue} />}
    </Controlled>
  ),
};

/**
 * Every size, empty and with a selection.
 *
 * These are laid out in a column rather than a row: opening a dropdown in a
 * wrapping row puts the menu over its neighbours, and the point of the case is
 * to be able to open them.
 */
export const Sizes: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Select input sizes">
      <Matrix title="size, empty" values={Storybook.componentSizes} column>
        {(size) => (
          <Controlled<Option<string> | null> initial={null}>
            {(value, setValue) => (
              <SI {...args} size={size} value={value} setValue={setValue} />
            )}
          </Controlled>
        )}
      </Matrix>

      <Matrix title="size, selected" values={Storybook.componentSizes} column>
        {(size) => (
          <Controlled<Option<string> | null> initial={OPTIONS[0]}>
            {(value, setValue) => (
              <SI {...args} size={size} value={value} setValue={setValue} />
            )}
          </Controlled>
        )}
      </Matrix>
    </Showcase>
  ),
};

/** Empty, selected, and every disabled variation. */
export const States: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => {
    const states = [
      ["default", {}],
      ["disabled", { disabled: true }],
      ["readOnly", { readOnly: true }],
      ["required", { required: true }],
      ["loading", { loading: true }],
    ] as const;

    return (
      <Showcase
        title="Select input states"
        description="A disabled select must refuse to open at all, not open a menu whose options cannot be picked."
      >
        <Section title="Empty" column>
          {states.map(([label, props]) => (
            <Case key={label} label={label}>
              <Controlled<Option<string> | null> initial={null}>
                {(value, setValue) => (
                  <SI {...args} {...props} value={value} setValue={setValue} />
                )}
              </Controlled>
            </Case>
          ))}
        </Section>

        <Section title="Selected" column>
          {states.map(([label, props]) => (
            <Case key={label} label={label}>
              <Controlled<Option<string> | null> initial={OPTIONS[8]}>
                {(value, setValue) => (
                  <SI {...args} {...props} value={value} setValue={setValue} />
                )}
              </Controlled>
            </Case>
          ))}
        </Section>
      </Showcase>
    );
  },
};

/** Every material. */
export const Materials: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Select input materials"
      description="Open each one — the dropdown takes its own surface, which has to stay legible over whatever is behind it."
    >
      <Section column>
        {allMaterials().map(([name, material]) => (
          <Case key={name} label={name}>
            <Controlled<Option<string> | null> initial={OPTIONS[0]}>
              {(value, setValue) => (
                <SI
                  {...args}
                  material={material}
                  value={value}
                  setValue={setValue}
                />
              )}
            </Controlled>
          </Case>
        ))}
      </Section>
    </Showcase>
  ),
};

/** Option lists of different shapes. */
export const Content: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Options">
      <Section column>
        <Case label="with icons">
          <Controlled<Option<string> | null> initial={null}>
            {(value, setValue) => (
              <SI
                {...args}
                options={[
                  { value: "a", label: "Cloudy", icon: <IconCloud /> },
                  { value: "b", label: "Starry", icon: <IconStar /> },
                  { value: "c", label: "Awarded", icon: <IconAward /> },
                ]}
                value={value}
                setValue={setValue}
              />
            )}
          </Controlled>
        </Case>
        <Case label="a single option">
          <Controlled<Option<string> | null> initial={null}>
            {(value, setValue) => (
              <SI
                {...args}
                options={[{ value: "only", label: "The only option" }]}
                value={value}
                setValue={setValue}
              />
            )}
          </Controlled>
        </Case>
        <Case label="no options" note="Must open to an empty menu, not crash.">
          <Controlled<Option<string> | null> initial={null}>
            {(value, setValue) => (
              <SI {...args} options={[]} value={value} setValue={setValue} />
            )}
          </Controlled>
        </Case>
        <Case
          label="a hundred options"
          note="The menu must scroll rather than run off the page."
        >
          <Controlled<Option<string> | null> initial={null}>
            {(value, setValue) => (
              <SI
                {...args}
                options={Array.from({ length: 100 }, (_, index) => ({
                  value: String(index),
                  label: `Option ${index + 1}`,
                }))}
                value={value}
                setValue={setValue}
              />
            )}
          </Controlled>
        </Case>
        <Case label="a very long option label">
          <Controlled<Option<string> | null> initial={null}>
            {(value, setValue) => (
              <SI
                {...args}
                options={[
                  { value: "long", label: Storybook.longText },
                  { value: "short", label: "Short" },
                ]}
                value={value}
                setValue={setValue}
              />
            )}
          </Controlled>
        </Case>
      </Section>
    </Showcase>
  ),
};

/** The value being changed from outside the component. */
export const Composition: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => {
    const [value, setValue] = useState<Option<string> | null>(OPTIONS[8]);

    return (
      <Showcase
        title="Controlled from outside"
        description="The select is fully controlled, so setting the value elsewhere must update the field — including setting it back to nothing."
      >
        <Section column>
          <Case>
            <SI {...args} value={value} setValue={setValue} />
          </Case>
          <Case>
            <Button onClick={() => setValue(OPTIONS[0])}>
              Set to the first option
            </Button>
            <Button onClick={() => setValue(null)}>Clear</Button>
          </Case>
        </Section>
      </Showcase>
    );
  },
};
