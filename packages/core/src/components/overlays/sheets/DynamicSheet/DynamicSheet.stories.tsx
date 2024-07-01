import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button, ValenceProvider, useDisclosure } from "@valence-ui/core"
import { DynamicSheet as DS } from "./DynamicSheet";

const meta: Meta<typeof DS> = {
  component: DS,
  title: "Valence/Core/Overlays/Sheets",
};
export default meta;
type Story = StoryObj<typeof DS>;

export const DynamicSheet: Story = (args: any) => {
  const disclosure = useDisclosure();

  return (
    <ValenceProvider>
      <Button onClick={() => disclosure.open()}>Open Dynamic Sheet</Button>

      <DS
        disclosure={disclosure}
        {...args}
      />
    </ValenceProvider>
  )
};
DynamicSheet.args = {
  title: "Dynamic Sheet title",
};