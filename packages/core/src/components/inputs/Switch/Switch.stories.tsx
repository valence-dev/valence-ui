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
import { Switch as SI } from "./Switch";

const meta: Meta<typeof SI> = {
  component: SI,
  title: "Core/Inputs/Switch",
  argTypes: {
    ...sizingControls,
    label: textControl("The label rendered beside the switch."),
    disabled: { control: { type: "boolean" }, table: { category: "State" } },
    readOnly: { control: { type: "boolean" }, table: { category: "State" } },
    required: { control: { type: "boolean" }, table: { category: "State" } },
    loading: { control: { type: "boolean" }, table: { category: "State" } },
  },
  args: {
    label: "Switch",
  },
};
export default meta;
type Story = StoryObj<typeof SI>;

/** One switch, driven entirely by the controls panel. */
export const Playground: Story = {
  render: (args) => (
    <Controlled initial={false}>
      {(value, setValue) => <SI {...args} value={value} setValue={setValue} />}
    </Controlled>
  ),
};

/** Every size, off and on. */
export const Sizes: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Switch sizes"
      description="The thumb travel is derived from the track, so at every size the thumb must land flush inside the track at both ends."
    >
      <Matrix title="size, off" values={Storybook.componentSizes}>
        {(size) => (
          <Controlled initial={false}>
            {(value, setValue) => (
              <SI {...args} size={size} value={value} setValue={setValue} />
            )}
          </Controlled>
        )}
      </Matrix>

      <Matrix title="size, on" values={Storybook.componentSizes}>
        {(size) => (
          <Controlled initial={true}>
            {(value, setValue) => (
              <SI {...args} size={size} value={value} setValue={setValue} />
            )}
          </Controlled>
        )}
      </Matrix>
    </Showcase>
  ),
};

/**
 * Off and on, against every state.
 *
 * A switch's two values look completely different, so every state has to be
 * checked twice — the original story only ever showed one value at a time.
 */
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
        title="Switch states"
        description="A disabled switch must still read as on or off — dimming it is not allowed to hide its value."
      >
        <Section title="Off">
          {states.map(([label, props]) => (
            <Case key={label} label={label}>
              <Controlled initial={false}>
                {(value, setValue) => (
                  <SI {...args} {...props} value={value} setValue={setValue} />
                )}
              </Controlled>
            </Case>
          ))}
        </Section>

        <Section title="On">
          {states.map(([label, props]) => (
            <Case key={label} label={label}>
              <Controlled initial={true}>
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

/** Every material, off and on. */
export const Materials: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Switch materials">
      <Section title="Off">
        {allMaterials().map(([name, material]) => (
          <Case key={name} label={name}>
            <Controlled initial={false}>
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

      <Section title="On">
        {allMaterials().map(([name, material]) => (
          <Case key={name} label={name}>
            <Controlled initial={true}>
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

/**
 * The label.
 *
 * The label is what makes the switch operable by keyboard and by screen
 * reader, so a switch without one is a case worth showing rather than hiding.
 */
export const Accessibility: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Labels"
      description="Clicking the label must toggle the switch, and tabbing to it must move focus to the control rather than to the text."
    >
      <Section column>
        <Case label="with a label">
          <Controlled initial={false}>
            {(value, setValue) => (
              <SI {...args} value={value} setValue={setValue} />
            )}
          </Controlled>
        </Case>
        <Case label="no label" note="Needs a label from elsewhere to be usable.">
          <Controlled initial={false}>
            {(value, setValue) => (
              <SI {...args} label={undefined} value={value} setValue={setValue} />
            )}
          </Controlled>
        </Case>
        <Case label="a very long label" width={300}>
          <Controlled initial={false}>
            {(value, setValue) => (
              <SI
                {...args}
                label={Storybook.longText}
                value={value}
                setValue={setValue}
              />
            )}
          </Controlled>
        </Case>
        <Case label="non-latin and emoji">
          <Controlled initial={false}>
            {(value, setValue) => (
              <SI
                {...args}
                label={Storybook.awkwardText}
                value={value}
                setValue={setValue}
              />
            )}
          </Controlled>
        </Case>
      </Section>

      <Section title="A stack of switches" column>
        {["Notifications", "Dark mode", "Analytics", "Beta features"].map(
          (label, index) => (
            <Controlled key={label} initial={index % 2 === 0}>
              {(value, setValue) => (
                <SI {...args} label={label} value={value} setValue={setValue} />
              )}
            </Controlled>
          ),
        )}
      </Section>
    </Showcase>
  ),
};
