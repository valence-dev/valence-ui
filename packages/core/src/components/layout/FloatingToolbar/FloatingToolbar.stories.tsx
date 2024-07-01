import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button, TextInput, ValenceProvider } from "../../..";

import { FloatingToolbar as FT } from "../../..";

const meta: Meta<typeof FT> = {
  component: FT,
  title: "Valence/Core/Layout",
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof FT>;


export const FloatingToolbar: Story = (args: any) => {
  const [inputValue, setInputValue] = React.useState("");

  return (
    <ValenceProvider>
      <FT
        {...args}
      >
        <Button variant="filled">Hi</Button>

        <TextInput
          value={inputValue}
          setValue={setInputValue}
          placeholder="Type here..."
          variant="subtle"
        />
      </FT>
    </ValenceProvider>
  );
}
FloatingToolbar.args = {
  label: "Yes",
  // positionHorizontal: "right",
}