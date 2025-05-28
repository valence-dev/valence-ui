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

const OPTIONS: Option<string>[] = [
  { value: "hi", label: "Hi" },
  { value: "there", label: "There" },
  { value: "mate", label: "Mate" },
  { value: "how", label: "How" },
  { value: "are", label: "Are" },
  { value: "you", label: "You" },
  { value: "doing", label: "Doing" },
  { value: "today", label: "Today" },
  { value: "son", label: "Father", icon: <IconCloud /> },
];

export const SelectInput: Story = (args: any) => {
  const [value, setValue] = React.useState<Option<string> | null>(
    OPTIONS[OPTIONS.length - 1],
  );

  return (
    <ValenceProvider>
      <FlexCenter>
        <SI {...args} value={value} setValue={setValue} />

        <Button onClick={() => setValue({ value: "hi", label: "Hi" })}>
          Reset
        </Button>

        <Button onClick={() => setValue(null)}>Clear</Button>
      </FlexCenter>
    </ValenceProvider>
  );
};
SelectInput.args = {
  placeholder: "Select something...",
  icon: <IconAward />,
  options: OPTIONS,
};
