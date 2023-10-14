import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ValenceProvider } from "../../..";
import { Modal as M } from "./Modal";

const meta: Meta<typeof M> = {
  component: M,
  title: "Valence/Overlays",
  argTypes: {
    title: { control: { type: "text" } },
    opened: { control: { type: "boolean" } },
    closeOnOverlayClick: { control: { type: "boolean" } },
    closeOnEscape: { control: { type: "boolean" } },
    lockScroll: { control: { type: "boolean" } },
    withShadow: { control: { type: "boolean" } },
    radius: { control: { type: "text" } },
    backgroundColor: { control: { type: "text" } },
    color: { control: { type: "text" } },
  },
};
export default meta;
type Story = StoryObj<typeof M>;

export const Modal: Story = (args: any) => (
  <ValenceProvider>
    <M data-testId="Modal-id" {...args} />
  </ValenceProvider>
);
Modal.args = {
  title: "Modal Title",
  opened: true,
  children: "Hello there"
};