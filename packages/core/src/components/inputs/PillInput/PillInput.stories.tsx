import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ValenceProvider } from "../../..";

import { PillInput as PI } from "../../..";
import { IconHash } from "@tabler/icons-react";

const meta: Meta<typeof PI> = {
  component: PI,
  title: "Valence/Core/Inputs",
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof PI>;


export const PillInput: Story = (args: any) => {
  const [value, setValue] = React.useState(["hello", "world"]);

  return (
    <ValenceProvider>
      <PI
        {...args}
        value={value}
        setValue={setValue}
      />
    </ValenceProvider>
  );
}
PillInput.args = {
  placeholder: "Add some tags...",
  options: [{ label: "hello" }, { label: "world" }, { label: "foo" }, { label: "bar" }],
  icon: <IconHash />,
  dropdownStyle: { zIndex: 9999 }
}