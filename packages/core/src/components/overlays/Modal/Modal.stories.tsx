import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button, Flex, ValenceProvider, useDisclosure } from "../../..";
import { Modal as M } from "../../..";

const meta: Meta<typeof M> = {
  component: M,
  title: "Valence/Core/Overlays",
  argTypes: {
    title: { control: { type: "text" } },
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

export const Modal: Story = (args: any) => {
  const disclosure = useDisclosure(true);

  return (
    <ValenceProvider>
      <Flex
      backgroundColor="white"
      width="100%"
      height="100vh"
      >
      <Button onClick={disclosure.open}>Open Modal</Button>
      </Flex>

      <M
        disclosure={disclosure}
        {...args}
      />
    </ValenceProvider>
  )
}
Modal.args = {
  title: "Modal Title",
  children: "Hello there",
};