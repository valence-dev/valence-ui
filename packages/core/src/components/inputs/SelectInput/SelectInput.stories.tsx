import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button, FlexCenter, ValenceProvider } from "../../..";

import { SelectInput as SI } from "../../..";
import { IconAward, IconCloud } from "@tabler/icons-react";
import { Option } from "../DropdownContainer/Options";

const meta: Meta<typeof SI> = {
  component: SI,
  title: "Valence/Core/Inputs",
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof SI>;

const OPTIONS = [
  "hi",
  "there",
  "mate",
  "how",
  "are",
  "you",
  "doing",
  "today",
  { value: "son", label: "Father", icon: <IconCloud /> },
];

export const SelectInput: Story = (args: any) => {
  const [value, setValue] = React.useState<Option | null>(
    OPTIONS[OPTIONS.length - 1]
  );

  return (
    <ValenceProvider>
      <FlexCenter>
        <SI {...args} value={value} setValue={setValue} />

        <Button onClick={() => setValue("hi")}>Reset</Button>

        <Button onClick={() => setValue(null)}>Clear</Button>
      </FlexCenter>
    </ValenceProvider>
  );
};
SelectInput.args = {
  placeholder: "Select something...",
  icon: <IconAward />,
  options: OPTIONS,
  grow: true,
  width: 20,
};
