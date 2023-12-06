import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button, ValenceProvider, useDisclosure } from "@valence-ui/core"
import { SideSheet as SS } from "./SideSheet";

const meta: Meta<typeof SS> = {
  component: SS,
  title: "Valence/App/Overlays/Sheets",
};
export default meta;
type Story = StoryObj<typeof SS>;

export const SideSheet: Story = (args: any) => {
  const disclosure = useDisclosure();

  return (
    <ValenceProvider>
      <Button onClick={() => disclosure.open()}>Open Side Sheet</Button>

      <SS
        disclosure={disclosure}
        {...args}
      />
    </ValenceProvider>
  )
};
SideSheet.args = {
  title: "Side Sheet title",
};