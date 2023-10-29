import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ValenceProvider } from "../../..";

import { SwitchInput as SI } from "./SwitchInput";

const meta: Meta<typeof SI> = {
  component: SI,
  title: "Valence/Inputs",
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof SI>;


export const SwitchInput: Story = (args: any) => {
  const [checked, setChecked] = useState(args.checked);

  return (
    <ValenceProvider>
      <SI
        {...args}
        checked={checked}
        setChecked={setChecked}
      />
    </ValenceProvider>
  );
}
SwitchInput.args = {
  label: "Switch"
}