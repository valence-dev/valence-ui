import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { Flex, Icon, SegmentedControl as SC, ValenceProvider } from "../../..";
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
      <Flex direction="column">
        <SC
          {...args}
          value={value}
          setValue={setValue}
          variant="subtle"
        />
        <SC
          {...args}
          value={value}
          setValue={setValue}
          variant="light"
          radius="xl"
        />
        <SC
          {...args}
          value={value}
          setValue={setValue}
          variant="filled"
        />
      </Flex>
    </ValenceProvider>
  );
}
SegmentedControl.args = {
  options: [
    "hello",
    "world",
    { value: "bruh", label: <Icon><Icon123 /></Icon> },
  ],
}