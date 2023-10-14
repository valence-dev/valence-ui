import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ValenceProvider } from "../../..";

import { InputContainer as IC } from "./InputContainer";
import { IconSearch } from "@tabler/icons-react";

const meta: Meta<typeof IC> = {
  component: IC,
  title: "Valence/Inputs",
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof IC>;


export const InputContainer: Story = (args: any) => (
  <ValenceProvider>
    <IC {...args} />
  </ValenceProvider>
);
InputContainer.args = {
  icon: <IconSearch />,
  children: <input />
}