import { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { ColorPicker as CP } from "./ColorPicker";
import { FlexCenter, ValenceProvider } from "../../..";

const meta: Meta<typeof CP> = {
  component: CP,
  title: "Valence/Core/Inputs",
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof CP>;

export const ColorPicker: Story = (args: any) => {
  const [color, setColor] = useState<string | undefined>();

  return (
    <ValenceProvider>
      <FlexCenter height="100vh">
        <CP {...args} value={color} setValue={setColor} />
      </FlexCenter>
    </ValenceProvider>
  );
};
ColorPicker.args = {};
