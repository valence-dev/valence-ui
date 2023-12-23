import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button, Text, ValenceProvider, useDisclosure } from "../../..";
import { Tooltip as T } from "./Tooltip";

const meta: Meta<typeof T> = {
  component: T,
  title: "Valence/Core/Overlays",
}
export default meta;
type Story = StoryObj<typeof T>;

export const Tooltip: Story = (args: any) => {
  const tooltipDisclosure = useDisclosure();

  return (
    <ValenceProvider>
      
      {/* Controlled */}
      <T
        disclosure={tooltipDisclosure}
        {...args}
      >
        <T.Trigger>

          <Button
            onClick={() => tooltipDisclosure.update(!tooltipDisclosure.opened)}
          >Tooltip (controlled)</Button>
        </T.Trigger>

        <T.Content backgroundColor="primary">
          <Text align="center" color="white">Tooltip Content</Text>
        </T.Content>
      </T>

      {/* Uncontrolled */}
      <T
        {...args}
      >
        <T.Trigger>
          <Text align="center">Tooltip (uncontrolled)</Text>
        </T.Trigger>

        <T.Content>
          Tooltip content
        </T.Content>
      </T>
    </ValenceProvider>
  )
}

Tooltip.args = {
}