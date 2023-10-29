import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { FAB as F } from "./FAB";
import { ValenceProvider } from "@valence-ui/core";
import { Icon123 } from "@tabler/icons-react";

const meta: Meta<typeof F> = {
  component: F,
  title: "Valence/App/Buttons/FAB",
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof F>;

export const FAB: Story = (args: any) => (
  <ValenceProvider>
    <F {...args} />
  </ValenceProvider>
);
FAB.args = {
  children: <Icon123 />,
};