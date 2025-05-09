import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Flex, ValenceProvider } from "../../..";

import { Icon as I } from "../../..";
import { Icon123 } from "@tabler/icons-react";

const meta: Meta<typeof I> = {
  component: I,
  title: "Valence/Core/Display",
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof I>;

export const Icon: Story = (args: any) => {
  return (
    <div style={{ height: "200vh" }}>
      <ValenceProvider>
        <Flex center height="100vh">
          <I {...args} color="black">
            <Icon123 />
          </I>

          <Icon123 />
        </Flex>
      </ValenceProvider>
    </div>
  );
};
Icon.args = {};
