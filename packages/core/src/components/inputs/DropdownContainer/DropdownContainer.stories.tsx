import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { FlexCenter, ValenceProvider } from "../../..";

import { DropdownContainer as DC } from "../DropdownContainer";
import { IconCloud, IconHash } from "@tabler/icons-react";

const meta: Meta<typeof DC> = {
  component: DC,
  title: "Valence/Core/Inputs",
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof DC>;

export const DropdownContainer: Story = (args: any) => {
  const [selected, setSelected] = React.useState<number | null>(0);

  return (
    <ValenceProvider>
      <FlexCenter>
        <DC {...args} selected={selected} setSelected={setSelected} />
      </FlexCenter>
    </ValenceProvider>
  );
};
DropdownContainer.args = {
  options: [
    "hi",
    "there",
    "mate",
    "how",
    "are",
    "you",
    "doing",
    "today",
    { value: "son", label: "Father", icon: <IconCloud /> },
  ],
  icon: <IconHash />,
};
