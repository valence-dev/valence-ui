import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { FlexCenter, ValenceProvider } from "../../..";

import { Switch as SI } from "./Switch";

const meta: Meta<typeof SI> = {
  component: SI,
  title: "Valence/Core/Inputs",
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof SI>;

export const Switch: Story = (args: any) => {
  const [checked, setChecked] = useState(args.checked);

  return (
    <ValenceProvider>
      <FlexCenter innerProps={{ justify: "center" }}>
        <SI {...args} value={checked} setValue={setChecked} />
      </FlexCenter>
    </ValenceProvider>
  );
};
Switch.args = {
  label: "Switch",
};
