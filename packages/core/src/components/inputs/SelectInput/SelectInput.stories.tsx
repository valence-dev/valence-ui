import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button, FlexCenter, Option, ValenceProvider } from "../../..";

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
  const [value, setValue] = React.useState<Option>({ label: "Hello", value: "hello" });

  return (
    <ValenceProvider>
      <FlexCenter>
        <SI
          {...args}
          value={value}
          setValue={setValue}
        />

        <Button
          onClick={() => setValue({ label: "Hello", value: "hello" })}
        >
          Reset
        </Button>
      </FlexCenter>
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