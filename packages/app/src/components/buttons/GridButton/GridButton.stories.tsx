import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { GridButton as GB } from "./GridButton";
import { Flex, ValenceProvider } from "@valence-ui/core";
import { Icon123 } from "@tabler/icons-react";

const meta: Meta<typeof GB> = {
  component: GB,
  title: "Valence/App/Buttons/GridButton",
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof GB>;

export const GridButton: Story = (args: any) => (
  <ValenceProvider>
    <Flex>
      <GB {...args} size="xs" />
      <GB {...args} size="sm" />
      <GB {...args} size="md" />
      <GB {...args} size="lg" />
      <GB {...args} size="xl" />
    </Flex>
  </ValenceProvider>
);
GridButton.args = {
  icon: <Icon123 />,
  children: "Post count",
};