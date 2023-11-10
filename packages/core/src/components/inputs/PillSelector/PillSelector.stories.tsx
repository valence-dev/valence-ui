import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ValenceProvider } from "../../..";

import { PillSelector as PS } from "../../..";

const meta: Meta<typeof PS> = {
  component: PS,
  title: "Valence/Core/Inputs",
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof PS>;


export const PillSelector: Story = (args: any) => {
  const [value, setValue] = React.useState(["hello", "world", "amet"]);

  return (
    <ValenceProvider>
      <PS
        {...args}
        value={value}
        setValue={setValue}
      />
    </ValenceProvider>
  );
}
PillSelector.args = {
  pills: ["hello", "world", "foo", "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore", "magna", "aliqua"],
}