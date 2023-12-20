import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ValenceProvider, useDefaultIconProps } from "../../..";

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
  const defaultIconProps = useDefaultIconProps();

  return (
    <div style={{ height: "200vh" }}>
      <ValenceProvider>
        <I
          {...args}
          color="black"
        >
          <Icon123 />
        </I>


        <Icon123 {...defaultIconProps.get("black")} />
      </ValenceProvider>
    </div>
  );
}
Icon.args = {}