import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  Case,
  Controlled,
  Matrix,
  Section,
  Showcase,
  Storybook,
  sizingControls,
} from "../../../../storybook";
import { PillSelector as PS } from "./PillSelector";

const PILLS = [
  "hello",
  "world",
  "foo",
  "lorem",
  "ipsum",
  "dolor",
  "sit",
  "amet",
  "consectetur",
  "adipiscing",
  "elit",
  "sed",
  "do",
  "eiusmod",
  "tempor",
  "incididunt",
  "ut",
  "labore",
  "et",
  "dolore",
  "magna",
  "aliqua",
];

const meta: Meta<typeof PS> = {
  component: PS,
  title: "Core/Inputs/PillSelector",
  argTypes: {
    ...sizingControls,
    wrap: {
      options: ["nowrap", "wrap"],
      control: { type: "inline-radio" },
      table: { category: "Layout" },
    },
    gap: { control: { type: "number" }, table: { category: "Layout" } },
    allowClearing: {
      control: { type: "boolean" },
      table: { category: "Content" },
    },
    allowEditing: {
      control: { type: "boolean" },
      table: { category: "Content" },
    },
    maxSelectable: {
      control: { type: "number" },
      table: { category: "Content" },
    },
    disabled: { control: { type: "boolean" }, table: { category: "State" } },
    readOnly: { control: { type: "boolean" }, table: { category: "State" } },
    loading: { control: { type: "boolean" }, table: { category: "State" } },
  },
  args: {
    pills: PILLS,
  },
};
export default meta;
type Story = StoryObj<typeof PS>;

/** A wrapping selector with three pills already chosen. */
export const Playground: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Pill selector">
      <Controlled initial={["hello", "world", "amet"]}>
        {(value, setValue) => (
          <PS {...args} wrap="wrap" value={value} setValue={setValue} />
        )}
      </Controlled>
    </Showcase>
  ),
};

/**
 * Wrapping against overflowing.
 *
 * The default is `nowrap`, which puts a long pill list on one scrolling line —
 * a very different component to the wrapped one, and the two were previously
 * only visible in the same story by scrolling past each other.
 */
export const Variants: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Wrapping">
      <Section column>
        <Case label='wrap="nowrap" (default)' note="One scrolling line.">
          <Controlled initial={["hello", "world", "amet"]}>
            {(value, setValue) => (
              <PS {...args} value={value} setValue={setValue} />
            )}
          </Controlled>
        </Case>
        <Case label='wrap="wrap"' note="Grows downwards instead.">
          <Controlled initial={["hello", "world", "amet"]}>
            {(value, setValue) => (
              <PS {...args} wrap="wrap" value={value} setValue={setValue} />
            )}
          </Controlled>
        </Case>
        <Case label="gap=0">
          <Controlled initial={["hello", "world"]}>
            {(value, setValue) => (
              <PS
                {...args}
                wrap="wrap"
                gap={0}
                value={value}
                setValue={setValue}
              />
            )}
          </Controlled>
        </Case>
        <Case label="gap=15">
          <Controlled initial={["hello", "world"]}>
            {(value, setValue) => (
              <PS
                {...args}
                wrap="wrap"
                gap={15}
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

/** Every size. */
export const Sizes: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Pill selector sizes">
      <Matrix title="size" values={Storybook.componentSizes} column>
        {(size) => (
          <Controlled initial={["hello", "world"]}>
            {(value, setValue) => (
              <PS
                {...args}
                size={size}
                wrap="wrap"
                value={value}
                setValue={setValue}
              />
            )}
          </Controlled>
        )}
      </Matrix>
    </Showcase>
  ),
};

/** Selection, editing and the limits on both. */
export const Content: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => {
    const [pills, setPills] = useState(PILLS);

    return (
      <Showcase
        title="Selecting and adding"
        description="`allowEditing` turns the selector into an input that can create new pills; `maxSelectable` should stop the selection growing past its limit rather than silently allowing it."
      >
        <Section column>
          <Case label="nothing selected">
            <Controlled initial={[] as string[]}>
              {(value, setValue) => (
                <PS {...args} wrap="wrap" value={value} setValue={setValue} />
              )}
            </Controlled>
          </Case>
          <Case label="everything selected">
            <Controlled initial={PILLS}>
              {(value, setValue) => (
                <PS {...args} wrap="wrap" value={value} setValue={setValue} />
              )}
            </Controlled>
          </Case>
          <Case
            label="maxSelectable=3"
            note="Try to select a fourth — it must be refused."
          >
            <Controlled initial={["hello", "world"]}>
              {(value, setValue) => (
                <PS
                  {...args}
                  wrap="wrap"
                  maxSelectable={3}
                  value={value}
                  setValue={setValue}
                />
              )}
            </Controlled>
          </Case>
          <Case
            label="allowClearing={false}"
            note="A selected pill cannot be deselected."
          >
            <Controlled initial={["hello"]}>
              {(value, setValue) => (
                <PS
                  {...args}
                  wrap="wrap"
                  allowClearing={false}
                  value={value}
                  setValue={setValue}
                />
              )}
            </Controlled>
          </Case>
          <Case
            label="allowEditing"
            note="Type a new pill and press enter — it should join the list."
          >
            <Controlled initial={["hello"]}>
              {(value, setValue) => (
                <PS
                  {...args}
                  wrap="wrap"
                  allowEditing
                  pills={pills}
                  setPills={setPills}
                  value={value}
                  setValue={setValue}
                />
              )}
            </Controlled>
          </Case>
        </Section>
      </Showcase>
    );
  },
};

/** Every state. */
export const States: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => {
    const states = [
      ["default", {}],
      ["disabled", { disabled: true }],
      ["readOnly", { readOnly: true }],
      ["loading", { loading: true }],
    ] as const;

    return (
      <Showcase title="Pill selector states">
        <Section column>
          {states.map(([label, props]) => (
            <Case key={label} label={label}>
              <Controlled initial={["hello", "world"]}>
                {(value, setValue) => (
                  <PS
                    {...args}
                    {...props}
                    wrap="wrap"
                    value={value}
                    setValue={setValue}
                  />
                )}
              </Controlled>
            </Case>
          ))}
        </Section>
      </Showcase>
    );
  },
};

/** Pill lists that do not fit. */
export const EdgeCases: Story = {
  name: "Edge Cases",
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Pill selector edge cases">
      <Section column>
        <Case label="no pills at all">
          <Controlled initial={[] as string[]}>
            {(value, setValue) => (
              <PS {...args} pills={[]} value={value} setValue={setValue} />
            )}
          </Controlled>
        </Case>
        <Case label="one pill">
          <Controlled initial={[] as string[]}>
            {(value, setValue) => (
              <PS {...args} pills={["only"]} value={value} setValue={setValue} />
            )}
          </Controlled>
        </Case>
        <Case label="a very long pill label">
          <Controlled initial={[Storybook.longText]}>
            {(value, setValue) => (
              <PS
                {...args}
                wrap="wrap"
                pills={[Storybook.longText, "short"]}
                value={value}
                setValue={setValue}
              />
            )}
          </Controlled>
        </Case>
        <Case label="non-latin and emoji">
          <Controlled initial={[Storybook.awkwardText]}>
            {(value, setValue) => (
              <PS
                {...args}
                wrap="wrap"
                pills={[Storybook.awkwardText, "plain"]}
                value={value}
                setValue={setValue}
              />
            )}
          </Controlled>
        </Case>
        <Case
          label="a selected value that is not in the list"
          note="Must not crash, and should be visible somehow."
        >
          <Controlled initial={["missing"]}>
            {(value, setValue) => (
              <PS {...args} wrap="wrap" value={value} setValue={setValue} />
            )}
          </Controlled>
        </Case>
        <Case label="in a narrow parent" width={240}>
          <Controlled initial={["hello", "world"]}>
            {(value, setValue) => (
              <PS {...args} wrap="wrap" value={value} setValue={setValue} />
            )}
          </Controlled>
        </Case>
      </Section>
    </Showcase>
  ),
};
