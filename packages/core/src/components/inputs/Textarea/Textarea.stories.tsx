import { Meta, StoryObj } from "@storybook/react";
import {
  Case,
  Controlled,
  Matrix,
  Section,
  Showcase,
  Storybook,
  allMaterials,
  sizingControls,
  textControl,
} from "../../../../storybook";
import { Textarea as TA } from "./Textarea";

const RESIZE = ["none", "vertical", "horizontal", "both"] as const;

const PARAGRAPH = `${Storybook.longText}\n\n${Storybook.longText}\n\n${Storybook.longText}`;

const meta: Meta<typeof TA> = {
  component: TA,
  title: "Core/Inputs/Textarea",
  argTypes: {
    ...sizingControls,
    placeholder: textControl("Shown when the textarea is empty."),
    resize: {
      options: RESIZE,
      control: { type: "inline-radio" },
      table: { category: "Layout" },
    },
    rows: { control: { type: "number" }, table: { category: "Layout" } },
    disabled: { control: { type: "boolean" }, table: { category: "State" } },
    readOnly: { control: { type: "boolean" }, table: { category: "State" } },
    required: { control: { type: "boolean" }, table: { category: "State" } },
    loading: { control: { type: "boolean" }, table: { category: "State" } },
  },
  args: {
    placeholder: "Placeholder...",
  },
};
export default meta;
type Story = StoryObj<typeof TA>;

/** One textarea, driven entirely by the controls panel. */
export const Playground: Story = {
  render: (args) => (
    <Controlled initial="Hello, world!">
      {(value, setValue) => <TA {...args} value={value} setValue={setValue} />}
    </Controlled>
  ),
};

/** Every size, empty and filled. */
export const Sizes: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Textarea sizes"
      description="Size scales the padding and the type. The default height should still hold a couple of lines at `xs`."
    >
      <Matrix title="size" values={Storybook.componentSizes}>
        {(size) => (
          <Controlled initial="">
            {(value, setValue) => (
              <TA {...args} size={size} value={value} setValue={setValue} />
            )}
          </Controlled>
        )}
      </Matrix>

      <Matrix title="size, filled" values={Storybook.componentSizes}>
        {(size) => (
          <Controlled initial={"Two lines\nof content"}>
            {(value, setValue) => (
              <TA {...args} size={size} value={value} setValue={setValue} />
            )}
          </Controlled>
        )}
      </Matrix>
    </Showcase>
  ),
};

/**
 * Every resize mode.
 *
 * `resize` defaults to `none`, so the modes that let the user drag the corner
 * are the ones nobody sees unless a story asks for them.
 */
export const Variants: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Resize"
      description="Drag the bottom-right corner of each. A resized textarea must not escape its container or lose its material."
    >
      <Matrix title="resize" values={RESIZE}>
        {(resize) => (
          <Controlled initial="Drag my corner">
            {(value, setValue) => (
              <TA {...args} resize={resize} value={value} setValue={setValue} />
            )}
          </Controlled>
        )}
      </Matrix>

      <Matrix title="rows" values={[1, 2, 5, 10]} label={(rows) => `rows=${rows}`}>
        {(rows) => (
          <Controlled initial="">
            {(value, setValue) => (
              <TA {...args} rows={rows} value={value} setValue={setValue} />
            )}
          </Controlled>
        )}
      </Matrix>
    </Showcase>
  ),
};

/** Every state, empty and filled. */
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
      <Showcase title="Textarea states">
        <Section title="Empty">
          {states.map(([label, props]) => (
            <Case key={label} label={label}>
              <Controlled initial="">
                {(value, setValue) => (
                  <TA {...args} {...props} value={value} setValue={setValue} />
                )}
              </Controlled>
            </Case>
          ))}
        </Section>

        <Section title="Filled">
          {states.map(([label, props]) => (
            <Case key={label} label={label}>
              <Controlled initial="Hello, world!">
                {(value, setValue) => (
                  <TA {...args} {...props} value={value} setValue={setValue} />
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
    <Showcase title="Textarea materials">
      <Section>
        {allMaterials().map(([name, material]) => (
          <Case key={name} label={name}>
            <Controlled initial="Hello, world!">
              {(value, setValue) => (
                <TA
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

/** Content that overflows the box in one direction or the other. */
export const EdgeCases: Story = {
  name: "Edge Cases",
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Textarea edge cases">
      <Section column>
        <Case
          label="content taller than the box"
          note="Should scroll inside, not push the page."
        >
          <Controlled initial={PARAGRAPH}>
            {(value, setValue) => (
              <TA {...args} value={value} setValue={setValue} />
            )}
          </Controlled>
        </Case>
        <Case label="maxHeight" note="Bounded even as the content grows.">
          <Controlled initial={PARAGRAPH}>
            {(value, setValue) => (
              <TA
                {...args}
                maxHeight={120}
                resize="vertical"
                value={value}
                setValue={setValue}
              />
            )}
          </Controlled>
        </Case>
        <Case label="a single unbreakable word">
          <Controlled
            initial={"Pneumonoultramicroscopicsilicovolcanoconiosis ".repeat(3)}
          >
            {(value, setValue) => (
              <TA {...args} value={value} setValue={setValue} />
            )}
          </Controlled>
        </Case>
        <Case label="non-latin and emoji">
          <Controlled initial={Storybook.awkwardText}>
            {(value, setValue) => (
              <TA {...args} value={value} setValue={setValue} />
            )}
          </Controlled>
        </Case>
        <Case label="a very long placeholder">
          <Controlled initial="">
            {(value, setValue) => (
              <TA
                {...args}
                placeholder={Storybook.longText}
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
