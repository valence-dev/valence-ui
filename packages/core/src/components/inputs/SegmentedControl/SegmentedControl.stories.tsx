import { Meta, StoryObj } from "@storybook/react";
import { IconLayoutGrid, IconLayoutList, IconTable } from "@tabler/icons-react";
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
import { Icon } from "../../display/Icon";
import { SegmentedControl as SC } from "./SegmentedControl";

const meta: Meta<typeof SC> = {
  component: SC,
  title: "Core/Inputs/SegmentedControl",
  argTypes: {
    ...sizingControls,
    equalWidth: {
      control: { type: "boolean" },
      table: { category: "Layout" },
    },
    disabled: { control: { type: "boolean" }, table: { category: "State" } },
    readOnly: { control: { type: "boolean" }, table: { category: "State" } },
    loading: { control: { type: "boolean" }, table: { category: "State" } },
  },
  args: {
    options: ["hello", "world", "again"],
  },
};
export default meta;
type Story = StoryObj<typeof SC>;

/** One control, driven entirely by the controls panel. */
export const Playground: Story = {
  render: (args) => (
    <Controlled initial="hello">
      {(value, setValue) => <SC {...args} value={value} setValue={setValue} />}
    </Controlled>
  ),
};

/** Every size. */
export const Sizes: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Segmented control sizes"
      description="The selected indicator sits inside the control's padding, so it must not overhang the track at any size."
    >
      <Matrix title="size" values={Storybook.componentSizes} column>
        {(size) => (
          <Controlled initial="hello">
            {(value, setValue) => (
              <SC {...args} size={size} value={value} setValue={setValue} />
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
    <Showcase
      title="Segmented control radii"
      description="The indicator's corners have to stay concentric with the track's — at `xl` both should read as a pill."
    >
      <Matrix title="radius" values={Storybook.componentSizes} column>
        {(radius) => (
          <Controlled initial="hello">
            {(value, setValue) => (
              <SC {...args} radius={radius} value={value} setValue={setValue} />
            )}
          </Controlled>
        )}
      </Matrix>
    </Showcase>
  ),
};

/** Every material on the track. */
export const Materials: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Segmented control materials"
      description="The selected segment is drawn on the track, so the two surfaces have to stay distinguishable from each other."
    >
      <Section column>
        {allMaterials().map(([name, material]) => (
          <Case key={name} label={name}>
            <Controlled initial="hello">
              {(value, setValue) => (
                <SC
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

/** Option shapes: plain strings, labels, and icons. */
export const Content: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Options">
      <Section column>
        <Case label="plain strings">
          <Controlled initial="hello">
            {(value, setValue) => (
              <SC {...args} value={value} setValue={setValue} />
            )}
          </Controlled>
        </Case>

        <Case label="value with a separate label">
          <Controlled initial="grid">
            {(value, setValue) => (
              <SC
                {...args}
                options={[
                  { value: "grid", label: "Grid" },
                  { value: "list", label: "List" },
                  { value: "table", label: "Table" },
                ]}
                value={value}
                setValue={setValue}
              />
            )}
          </Controlled>
        </Case>

        <Case label="icon labels">
          <Controlled initial="grid">
            {(value, setValue) => (
              <SC
                {...args}
                options={[
                  {
                    value: "grid",
                    label: (
                      <Icon>
                        <IconLayoutGrid />
                      </Icon>
                    ),
                  },
                  {
                    value: "list",
                    label: (
                      <Icon>
                        <IconLayoutList />
                      </Icon>
                    ),
                  },
                  {
                    value: "table",
                    label: (
                      <Icon>
                        <IconTable />
                      </Icon>
                    ),
                  },
                ]}
                value={value}
                setValue={setValue}
              />
            )}
          </Controlled>
        </Case>

        <Case label="mixed strings and elements">
          <Controlled initial="hello">
            {(value, setValue) => (
              <SC
                {...args}
                options={[
                  "hello",
                  "world",
                  {
                    value: "icon",
                    label: (
                      <Icon>
                        <IconTable />
                      </Icon>
                    ),
                  },
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
      <Showcase title="Segmented control states">
        <Section column>
          {states.map(([label, props]) => (
            <Case key={label} label={label}>
              <Controlled initial="hello">
                {(value, setValue) => (
                  <SC {...args} {...props} value={value} setValue={setValue} />
                )}
              </Controlled>
            </Case>
          ))}
        </Section>
      </Showcase>
    );
  },
};

/** Option counts and labels that unbalance the track. */
export const EdgeCases: Story = {
  name: "Edge Cases",
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Segmented control edge cases">
      <Section column>
        <Case label="a single option">
          <Controlled initial="only">
            {(value, setValue) => (
              <SC
                {...args}
                options={["only"]}
                value={value}
                setValue={setValue}
              />
            )}
          </Controlled>
        </Case>
        <Case label="ten options">
          <Controlled initial="0">
            {(value, setValue) => (
              <SC
                {...args}
                options={Array.from({ length: 10 }, (_, i) => String(i))}
                value={value}
                setValue={setValue}
              />
            )}
          </Controlled>
        </Case>
        <Case
          label="uneven label lengths, equalWidth"
          note="Every segment should be the same width as the widest."
        >
          <Controlled initial="a">
            {(value, setValue) => (
              <SC
                {...args}
                options={["a", "medium", Storybook.longText]}
                value={value}
                setValue={setValue}
              />
            )}
          </Controlled>
        </Case>
        <Case
          label="uneven label lengths, equalWidth={false}"
          note="Segments should size to their own content."
        >
          <Controlled initial="a">
            {(value, setValue) => (
              <SC
                {...args}
                equalWidth={false}
                options={["a", "medium", Storybook.longText]}
                value={value}
                setValue={setValue}
              />
            )}
          </Controlled>
        </Case>
        <Case
          label="a value not in the options"
          note="Nothing should be selected, and it must not crash."
        >
          <Controlled initial="missing">
            {(value, setValue) => (
              <SC {...args} value={value} setValue={setValue} />
            )}
          </Controlled>
        </Case>
      </Section>
    </Showcase>
  ),
};
