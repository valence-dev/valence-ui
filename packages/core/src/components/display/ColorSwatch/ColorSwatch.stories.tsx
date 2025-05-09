import { Meta, StoryObj } from "@storybook/react";
import { ColorSwatch as CS } from "./ColorSwatch";
import { Storybook } from "../../../../storybook";
import { ValenceProvider } from "../../../ValenceProvider";
import { FlexCenter } from "../../layout";
import React from "react";

const meta: Meta<typeof CS> = {
  component: CS,
  title: "Valence/Core/Display",
  argTypes: {
    color: {
      control: { type: "text" },
    },
    opacity: {
      options: ["weak", "medium", "strong"],
      control: { type: "select" },
    },
    size: {
      options: Storybook.componentSizes,
      control: { type: "select" },
    },
    radius: {
      options: Storybook.componentSizes,
      control: { type: "select" },
    },
    withOutline: {
      control: { type: "boolean" },
    },
  },
};
export default meta;
type Story = StoryObj<typeof CS>;

export const ColorSwatch: Story = (args: any) => (
  <ValenceProvider>
    <FlexCenter height="100vh">
      <CS {...args} />
    </FlexCenter>
  </ValenceProvider>
);
ColorSwatch.args = {};
