import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Flex, ValenceProvider } from "../../..";

import { Slider as S } from "./Slider";

const meta: Meta<typeof S> = {
  component: S,
  title: "Valence/Core/Inputs",
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof S>;

export const Slider: Story = (args: any) => {
  const [value, setValue] = React.useState(25);

  return (
    <ValenceProvider>
      <Flex direction="column">
        <S
          {...args}
          value={value}
          setValue={setValue}
        />

        <S
          {...args}
          value={value}
          setValue={setValue}
          color="violet"
          showValue
        />

        <S
          {...args}
          value={value}
          setValue={setValue}
          size="md"
          manualInputPosition="left"
        />
      </Flex>
    </ValenceProvider>
  );
}
Slider.args = {
}