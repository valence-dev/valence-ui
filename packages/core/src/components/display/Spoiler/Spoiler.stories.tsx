import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Spoiler as S } from "./Spoiler";

const meta: Meta<typeof S> = {
  component: S,
  title: "Valence/Display",
  argTypes: {
    show: {
      control: { type: "boolean" },
    },
  },
};
export default meta;
type Story = StoryObj<typeof S>;

export const Spoiler: Story = (args: any) => (
  <S data-testId="Spoiler-id" {...args} />
);
Spoiler.args = {
  children: "Spoiler content",
  show: true,
};