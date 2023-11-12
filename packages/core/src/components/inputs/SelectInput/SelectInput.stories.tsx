import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ValenceProvider } from "../../..";

import { SelectInput as SI } from "../../..";
import { IconAward } from "@tabler/icons-react";

const meta: Meta<typeof SI> = {
  component: SI,
  title: "Valence/Core/Inputs",
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof SI>;


export const SelectInput: Story = (args: any) => {
  const [value, setValue] = React.useState(["hello", "world"]);

  return (
    <ValenceProvider>
      <SI
        {...args}
        value={value}
        setValue={setValue}
      />
    </ValenceProvider>
  );
}
SelectInput.args = {
  placeholder: "Select something...",
  icon: <IconAward />,
  options: [
    { label: "Hello", value: "hello" },
    { label: "World", value: "world" },
    { label: "Foo", value: "foo" },
    { label: "Bar", value: "bar" },
    { label: "Baz", value: "baz" },
  ],
  width: 300,
}