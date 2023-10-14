import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ValenceProvider } from "../../..";

import { NumberInput as NI } from "./NumberInput";
import { IconNumber } from "@tabler/icons-react";

const meta: Meta<typeof NI> = {
  component: NI,
  title: "Valence/Inputs",
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof NI>;


export const NumberInput: Story = (args: any) => (
  <ValenceProvider>
    <NI {...args} />
  </ValenceProvider>
);
NumberInput.args = {
  placeholder: "Type a number...",
  icon: <IconNumber />
}