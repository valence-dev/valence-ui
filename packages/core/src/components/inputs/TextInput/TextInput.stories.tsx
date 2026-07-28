import { Meta, StoryObj } from "@storybook/react";
import { useRef } from "react";
import { IconMail, IconSearch } from "@tabler/icons-react";
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
import { Button } from "../../buttons/TextButton";
import { TextInput as TI } from "./TextInput";

const meta: Meta<typeof TI> = {
  component: TI,
  title: "Core/Inputs/TextInput",
  argTypes: {
    ...sizingControls,
    placeholder: textControl("Shown when the input is empty."),
    type: {
      options: ["text", "password", "email", "number", "tel", "url", "search"],
      control: { type: "select" },
      table: { category: "Content" },
    },
    disabled: { control: { type: "boolean" }, table: { category: "State" } },
    readOnly: { control: { type: "boolean" }, table: { category: "State" } },
    required: { control: { type: "boolean" }, table: { category: "State" } },
    loading: { control: { type: "boolean" }, table: { category: "State" } },
    grow: { control: { type: "boolean" }, table: { category: "Layout" } },
  },
  args: {
    placeholder: "Placeholder...",
    icon: <IconSearch />,
  },
};
export default meta;
type Story = StoryObj<typeof TI>;

/** One input, driven entirely by the controls panel. */
export const Playground: Story = {
  render: (args) => (
    <Controlled initial="">
      {(value, setValue) => <TI {...args} value={value} setValue={setValue} />}
    </Controlled>
  ),
};

/** Every size, with and without the leading icon. */
export const Sizes: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Text input sizes"
      description="The icon and the text are sized from the input. Check the caret sits on the same line as the icon at every size."
    >
      <Matrix title="size" values={Storybook.componentSizes}>
        {(size) => (
          <Controlled initial="">
            {(value, setValue) => (
              <TI {...args} size={size} value={value} setValue={setValue} />
            )}
          </Controlled>
        )}
      </Matrix>

      <Matrix title="size, no icon" values={Storybook.componentSizes}>
        {(size) => (
          <Controlled initial="">
            {(value, setValue) => (
              <TI
                {...args}
                icon={undefined}
                size={size}
                value={value}
                setValue={setValue}
              />
            )}
          </Controlled>
        )}
      </Matrix>

      <Matrix title="size, with a value" values={Storybook.componentSizes}>
        {(size) => (
          <Controlled initial="Some text">
            {(value, setValue) => (
              <TI {...args} size={size} value={value} setValue={setValue} />
            )}
          </Controlled>
        )}
      </Matrix>
    </Showcase>
  ),
};

/** Every radius. */
export const Radii: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Text input radii">
      <Matrix title="radius" values={Storybook.componentSizes}>
        {(radius) => (
          <Controlled initial="">
            {(value, setValue) => (
              <TI {...args} radius={radius} value={value} setValue={setValue} />
            )}
          </Controlled>
        )}
      </Matrix>
    </Showcase>
  ),
};

/** Every material, empty and filled. */
export const Materials: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Text input materials"
      description="The placeholder has to stay legible on every surface without being mistaken for a real value."
    >
      <Section title="Empty">
        {allMaterials().map(([name, material]) => (
          <Case key={name} label={name}>
            <Controlled initial="">
              {(value, setValue) => (
                <TI
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

      <Section title="Filled">
        {allMaterials().map(([name, material]) => (
          <Case key={name} label={name}>
            <Controlled initial="Some text">
              {(value, setValue) => (
                <TI
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

/**
 * Every state the input can be in.
 *
 * The states that matter most are the ones a user cannot produce by typing —
 * disabled, read-only, loading — because those are the ones no amount of
 * clicking around the playground will reach.
 */
export const States: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Text input states"
      description="Disabled and read-only must be distinguishable from each other: one blocks focus, the other allows it and blocks editing."
    >
      <Section title="Empty">
        {(
          [
            ["default", {}],
            ["disabled", { disabled: true }],
            ["readOnly", { readOnly: true }],
            ["required", { required: true }],
            ["loading", { loading: true }],
          ] as const
        ).map(([label, props]) => (
          <Case key={label} label={label}>
            <Controlled initial="">
              {(value, setValue) => (
                <TI {...args} {...props} value={value} setValue={setValue} />
              )}
            </Controlled>
          </Case>
        ))}
      </Section>

      <Section title="Filled">
        {(
          [
            ["default", {}],
            ["disabled", { disabled: true }],
            ["readOnly", { readOnly: true }],
            ["required", { required: true }],
            ["loading", { loading: true }],
          ] as const
        ).map(([label, props]) => (
          <Case key={label} label={label}>
            <Controlled initial="Some text">
              {(value, setValue) => (
                <TI {...args} {...props} value={value} setValue={setValue} />
              )}
            </Controlled>
          </Case>
        ))}
      </Section>
    </Showcase>
  ),
};

/** Input types and the browser behaviour they select. */
export const Variants: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Input types"
      description="`type` changes the keyboard on touch devices and the masking in the field. A password field must not reveal its value."
    >
      <Section column>
        <Case label="text">
          <Controlled initial="">
            {(value, setValue) => (
              <TI {...args} type="text" value={value} setValue={setValue} />
            )}
          </Controlled>
        </Case>
        <Case label="email">
          <Controlled initial="">
            {(value, setValue) => (
              <TI
                {...args}
                type="email"
                icon={<IconMail />}
                placeholder="you@example.com"
                value={value}
                setValue={setValue}
              />
            )}
          </Controlled>
        </Case>
        <Case label="password">
          <Controlled initial="hunter2">
            {(value, setValue) => (
              <TI {...args} type="password" value={value} setValue={setValue} />
            )}
          </Controlled>
        </Case>
        <Case label="search">
          <Controlled initial="">
            {(value, setValue) => (
              <TI {...args} type="search" value={value} setValue={setValue} />
            )}
          </Controlled>
        </Case>
        <Case label="tel">
          <Controlled initial="">
            {(value, setValue) => (
              <TI {...args} type="tel" value={value} setValue={setValue} />
            )}
          </Controlled>
        </Case>
        <Case label="url">
          <Controlled initial="">
            {(value, setValue) => (
              <TI {...args} type="url" value={value} setValue={setValue} />
            )}
          </Controlled>
        </Case>
      </Section>
    </Showcase>
  ),
};

/** Imperative focus through the forwarded ref. */
export const Accessibility: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => {
    const ref = useRef<HTMLInputElement>(null);

    return (
      <Showcase
        title="Focus"
        description="The ref is forwarded to the underlying `input`, not to the container, so this button must move the caret into the field."
      >
        <Section>
          <Case label="target">
            <Controlled initial="">
              {(value, setValue) => (
                <TI
                  {...args}
                  ref={ref}
                  value={value}
                  setValue={setValue}
                  autoComplete="username"
                />
              )}
            </Controlled>
          </Case>
          <Case label="control">
            <Button onClick={() => ref.current?.focus()}>Focus the input</Button>
          </Case>
        </Section>

        <Section title="Autofocus on mount" column>
          <Case label="autoFocus" note="Should be focused as soon as the story loads.">
            <Controlled initial="">
              {(value, setValue) => (
                <TI {...args} autoFocus value={value} setValue={setValue} />
              )}
            </Controlled>
          </Case>
        </Section>
      </Showcase>
    );
  },
};

/** Values and constraints a text field has to survive. */
export const EdgeCases: Story = {
  name: "Edge Cases",
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Text input edge cases">
      <Section column>
        <Case label="a very long value" note="Should scroll inside the field, not grow it.">
          <Controlled initial={Storybook.longText}>
            {(value, setValue) => (
              <TI {...args} value={value} setValue={setValue} />
            )}
          </Controlled>
        </Case>
        <Case label="a very long placeholder">
          <Controlled initial="">
            {(value, setValue) => (
              <TI
                {...args}
                placeholder={Storybook.longText}
                value={value}
                setValue={setValue}
              />
            )}
          </Controlled>
        </Case>
        <Case label="non-latin and emoji">
          <Controlled initial={Storybook.awkwardText}>
            {(value, setValue) => (
              <TI {...args} value={value} setValue={setValue} />
            )}
          </Controlled>
        </Case>
        <Case label="maxLength=5" note="Typing past five characters must be refused.">
          <Controlled initial="">
            {(value, setValue) => (
              <TI {...args} maxLength={5} value={value} setValue={setValue} />
            )}
          </Controlled>
        </Case>
        <Case label="in a narrow parent" width={140}>
          <Controlled initial="">
            {(value, setValue) => (
              <TI {...args} grow value={value} setValue={setValue} />
            )}
          </Controlled>
        </Case>
      </Section>
    </Showcase>
  ),
};
