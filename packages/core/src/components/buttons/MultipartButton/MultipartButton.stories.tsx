import { Meta, StoryObj } from "@storybook/react";
import { IconApps, IconChevronRight } from "@tabler/icons-react";
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
import { MultipartButton as MPB } from "./MultipartButton";

const meta: Meta<typeof MPB> = {
  component: MPB,
  title: "Core/Buttons/MultipartButton",
  argTypes: {
    ...sizingControls,
    ...stateControls,
    title: textControl("The button's primary line."),
    subtitle: textControl("The button's secondary line."),
    grow: { control: { type: "boolean" }, table: { category: "Layout" } },
  },
  args: {
    title: "Multipart button",
    subtitle: "With a great subtitle that is very long and multi-line",
    leftIcon: <IconApps />,
  },
};
export default meta;
type Story = StoryObj<typeof MPB>;

/** One button, driven entirely by the controls panel. */
export const Playground: Story = {};

/** Every size. These stack, because each one is a full-width row. */
export const Sizes: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Multipart button sizes"
      description="Title, subtitle and icons all scale from `size`. Check the two lines of text stay optically balanced as the button grows."
    >
      <Matrix title="size" values={Storybook.componentSizes} column>
        {(size) => <MPB {...args} size={size} />}
      </Matrix>
    </Showcase>
  ),
};

/** The parts that can be present or absent. */
export const Content: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Content combinations"
      description="Each part is optional. The button must stay balanced with any of them missing rather than leaving a gap where one would have been."
    >
      <Section column>
        <Case label="title + subtitle + left icon">
          <MPB {...args} />
        </Case>
        <Case label="title only">
          <MPB {...args} subtitle={undefined} leftIcon={undefined} />
        </Case>
        <Case label="title + subtitle, no icon">
          <MPB {...args} leftIcon={undefined} />
        </Case>
        <Case label="title + left and right icons">
          <MPB {...args} rightIcon={<IconChevronRight />} />
        </Case>
        <Case label="multiple left icons">
          <MPB
            {...args}
            leftIcon={[
              <IconApps key="a" />,
              <IconApps key="b" />,
              <IconApps key="c" />,
            ]}
          />
        </Case>
        <Case label="right icon only">
          <MPB
            {...args}
            leftIcon={undefined}
            rightIcon={<IconChevronRight />}
          />
        </Case>
      </Section>
    </Showcase>
  ),
};

/** Each material. */
export const Materials: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Multipart button materials">
      <Section column>
        {allMaterials().map(([name, material]) => (
          <Case key={name} label={name}>
            <MPB {...args} material={material} />
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
    <Showcase title="Multipart button states">
      <Section column>
        <Case label="default">
          <MPB {...args} />
        </Case>
        <Case label="disabled">
          <MPB {...args} disabled />
        </Case>
        <Case label="loading">
          <MPB {...args} loading />
        </Case>
        <Case label="disabled + loading">
          <MPB {...args} disabled loading />
        </Case>
      </Section>
    </Showcase>
  ),
};

/** Text that does not fit. */
export const EdgeCases: Story = {
  name: "Edge Cases",
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Multipart button edge cases">
      <Section column>
        <Case label="very long title">
          <MPB {...args} title={Storybook.longText} />
        </Case>
        <Case label="very long subtitle">
          <MPB {...args} subtitle={Storybook.longText} />
        </Case>
        <Case label="both long, narrow parent" width={280}>
          <MPB
            {...args}
            title={Storybook.longText}
            subtitle={Storybook.longText}
            width="100%"
          />
        </Case>
        <Case label="empty title">
          <MPB {...args} title="" />
        </Case>
        <Case label="non-latin and emoji">
          <MPB
            {...args}
            title={Storybook.awkwardText}
            subtitle={Storybook.awkwardText}
          />
        </Case>
      </Section>
    </Showcase>
  ),
};
