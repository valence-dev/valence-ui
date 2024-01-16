import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { FlexCenter, ValenceProvider } from "../../..";

import { RangeSlider as S } from "./RangeSlider";

const meta: Meta<typeof S> = {
  component: S,
  title: "Valence/Core/Inputs",
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof S>;

export const RangeSlider: Story = (args: any) => {
  const [value, setValue] = React.useState([25, 50, 75]);

  return (
    <ValenceProvider>
      <FlexCenter
        innerProps={{
          direction: "column",
        }}
      >
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
      </FlexCenter>
    </ValenceProvider>
  );
}
RangeSlider.args = {
}