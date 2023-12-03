import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button, ValenceProvider, useDisclosure } from "@valence-ui/core"
import { SlideUp as S } from "./SlideUp";

const meta: Meta<typeof S> = {
  component: S,
  title: "Valence/App/Overlays",
};
export default meta;
type Story = StoryObj<typeof S>;

export const SlideUp: Story = (args: any) => {
  const disclosure = useDisclosure();

  return (
    <ValenceProvider>
      <Button onClick={() => disclosure.open()}>Open SlideUp</Button>

      <S
        disclosure={disclosure}
        {...args}
      />
    </ValenceProvider>
  )
};
SlideUp.args = {
  children: "Hello there"
};