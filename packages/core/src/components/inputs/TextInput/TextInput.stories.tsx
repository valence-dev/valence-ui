import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ValenceProvider } from "../../..";

import { TextInput as TI } from "./TextInput";
import { IconSearch } from "@tabler/icons-react";

const meta: Meta<typeof TI> = {
  component: TI,
  title: "Valence/Core/Inputs",
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof TI>;


export const TextInput: Story = (args: any) => {
  const [value, setValue] = React.useState("");

  return (
    <ValenceProvider>
      <TI
        {...args}
        value={value}
        setValue={setValue}
      />
    </ValenceProvider>
  );
}
TextInput.args = {
  placeholder: "Placeholder...",
  icon: <IconSearch />
}