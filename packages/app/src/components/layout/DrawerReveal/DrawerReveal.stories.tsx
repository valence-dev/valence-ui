import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { DrawerReveal as DR } from "./DrawerReveal";
import { Button, Flex, Text, ValenceProvider, useDisclosure } from "@valence-ui/core";

const meta: Meta<typeof DR> = {
  component: DR,
  title: "Valence/App/Layout",
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof DR>;

export const DrawerReveal: Story = (args: any) => {
  const disclosure = useDisclosure();

  return (
    <ValenceProvider>
      <DR
        {...args}
        disclosure={disclosure}
        front={(
          <Flex
            height="200vh"
            backgroundColor="white"
            direction="column"
          >
            <Text>Hi! </Text>
            <Button
              onClick={() => disclosure.update(!disclosure.opened)}
            >Open/close</Button>
          </Flex>
        )}
      >
      </DR>
    </ValenceProvider>
  )
};
DrawerReveal.args = {
  behind: (
    <Flex
      width="100%"
      height="100%"
      backgroundColor="primary"
    >
      <Text>Bye!</Text>
    </Flex>
  ),
};