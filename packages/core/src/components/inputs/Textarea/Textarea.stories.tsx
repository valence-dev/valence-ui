import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { FlexCenter, ValenceProvider } from "../../..";

import { Textarea as TA } from "./Textarea";

const meta: Meta<typeof TA> = {
  component: TA,
  title: "Valence/Core/Inputs",
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof TA>;

export const Textarea: Story = (args: any) => {
  const [value, setValue] = useState(args.value);

  return (
    <ValenceProvider>
      <FlexCenter>
        <TA {...args} value={value} setValue={setValue} />
      </FlexCenter>
    </ValenceProvider>
  );
};
Textarea.args = {
  placeholder: "Placeholder...",
  value: "Hello, world!",
  resize: "vertical",
  required: true,
};
