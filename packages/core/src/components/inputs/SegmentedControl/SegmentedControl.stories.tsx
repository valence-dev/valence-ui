import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import {
  FlexCenter,
  Icon,
  SegmentedControl as SC,
  ValenceProvider,
} from "../../..";
import { Icon123 } from "@tabler/icons-react";

const meta: Meta<typeof SC> = {
  component: SC,
  title: "Valence/Core/Inputs",
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof SC>;

export const SegmentedControl: Story = (args: any) => {
  const [value, setValue] = React.useState("hello");

  return (
    <ValenceProvider>
      <FlexCenter
        innerProps={{
          direction: "column",
        }}
      >
        <SC {...args} value={value} setValue={setValue} variant="subtle" />
        <SC
          {...args}
          value={value}
          setValue={setValue}
          variant="light"
          radius="xl"
        />
        <SC {...args} value={value} setValue={setValue} variant="filled" />
      </FlexCenter>
    </ValenceProvider>
  );
};
SegmentedControl.args = {
  options: [
    "hello",
    "world",
    {
      value: "bruh",
      label: (
        <Icon>
          <Icon123 />
        </Icon>
      ),
    },
  ],
};
