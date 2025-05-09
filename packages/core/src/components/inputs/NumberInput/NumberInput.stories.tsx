import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { FlexCenter, ValenceProvider } from "../../..";

import { NumberInput as NI } from "./NumberInput";
import { IconNumber } from "@tabler/icons-react";

const meta: Meta<typeof NI> = {
  component: NI,
  title: "Valence/Core/Inputs",
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof NI>;

export const NumberInput: Story = (args: any) => {
  const [value, setValue] = React.useState(0);

  return (
    <ValenceProvider>
      <FlexCenter>
        <NI {...args} value={value} setValue={setValue} />
      </FlexCenter>
    </ValenceProvider>
  );
};
NumberInput.args = {
  placeholder: "Type a number...",
  icon: <IconNumber />,
};
