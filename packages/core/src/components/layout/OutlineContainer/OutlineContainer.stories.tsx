import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { TextInput, ValenceProvider } from "../../..";

import { OutlineContainer as OC } from "../../..";

const meta: Meta<typeof OC> = {
  component: OC,
  title: "Valence/Core/Layout",
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof OC>;


export const OutlineContainer: Story = (args: any) => {
  const [inputValue, setInputValue] = React.useState("");

  return (
    <div style={{ height: "200vh" }}>
      <ValenceProvider>
        <OC
          {...args}
        >
          <TextInput
            value={inputValue}
            setValue={setInputValue}
            placeholder="Type here..."
            variant="subtle"
          />
        </OC>

        <TextInput
          value={inputValue}
          setValue={setInputValue}
          placeholder="Type here..."
        />
      </ValenceProvider>
    </div>
  );
}
OutlineContainer.args = {
  label: "Components",
}