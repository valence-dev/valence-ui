import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { GridButton as GB } from "./GridButton";
import { Icon123 } from "@tabler/icons-react";
import { ValenceProvider } from "../../../ValenceProvider";
import { FlexCenter } from "../../layout";

const meta: Meta<typeof GB> = {
  component: GB,
  title: "Valence/Core/Buttons/GridButton",
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof GB>;

export const GridButton: Story = (args: any) => (
  <ValenceProvider>
    <FlexCenter innerProps={{ width: "fit-content", direction: "row", }}>
      <GB {...args} size="xs" />
      <GB {...args} size="sm" />
      <GB {...args} size="md" />
      <GB {...args} size="lg" />
      <GB {...args} size="xl" />
    </FlexCenter>
  </ValenceProvider>
);
GridButton.args = {
  icon: <Icon123 />,
  children: "Post count",
};