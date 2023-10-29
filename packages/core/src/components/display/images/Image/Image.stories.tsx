import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ValenceProvider } from "../../../../ValenceProvider";

import { Image as I } from "./Image";

const meta: Meta<typeof I> = {
  component: I,
  title: "Valence/Core/Display/Images",
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof I>;


export const Image: Story = (args: any) => (
  <ValenceProvider>
    <I {...args} />
  </ValenceProvider>
);
Image.args = {
  src: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",
  alt: "A random image",

  width: { default: 200, mobile: "unset" },
  height: 300,
}