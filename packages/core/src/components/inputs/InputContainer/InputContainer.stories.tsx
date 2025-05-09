import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { FlexCenter, ValenceProvider } from "../../..";

import { InputContainer as IC } from "./InputContainer";
import { IconSearch } from "@tabler/icons-react";

const meta: Meta<typeof IC> = {
  component: IC,
  title: "Valence/Core/Inputs",
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof IC>;

export const InputContainer: Story = (args: any) => (
  <ValenceProvider>
    <FlexCenter>
      <IC {...args} />
    </FlexCenter>
  </ValenceProvider>
);
InputContainer.args = {
  icon: <IconSearch />,
  children: <input />,
  color: "blue",
};
