import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Text, ValenceProvider } from "../../..";
import { Column as C } from "./Column";

const meta: Meta<typeof C> = {
  component: C,
  title: "Valence/Core/Layout",
}
export default meta;
type Story = StoryObj<typeof C>;

export const Column: Story = (args: any) => (
  <ValenceProvider>
    <C.Container height={300}>
      <C {...args} />
      <C {...args} />
      <C {...args} />
    </C.Container>
  </ValenceProvider>
);
Column.args = {
  children: <Text align="center">Column</Text>,
  backgroundColor: "white",
}