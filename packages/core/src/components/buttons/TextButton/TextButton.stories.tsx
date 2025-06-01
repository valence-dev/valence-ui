import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./TextButton";
import { Storybook } from "../../../../storybook";
import {
  Flex,
  GlassMaterial,
  PaperMaterial,
  SolidMaterial,
  ValenceProvider,
} from "../../..";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Valence/Core/Buttons",
  argTypes: {
    size: {
      options: Storybook.componentSizes,
      control: { type: "select" },
    },
    radius: {
      options: Storybook.componentSizes,
      control: { type: "select" },
    },

    square: {
      control: { type: "boolean" },
    },
    shadow: {
      control: { type: "boolean" },
    },
    grow: {
      control: { type: "boolean" },
    },

    disabled: {
      control: { type: "boolean" },
    },
    loading: {
      control: { type: "boolean" },
    },

    width: {
      control: { type: "number" },
    },
    height: {
      control: { type: "number" },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Text: Story = (args: any) => (
  <ValenceProvider>
    <Flex center padding={40}>
      <Button {...args} size="xs" />
      <Button {...args} size="sm" />
      <Button {...args} size="md" />
      <Button {...args} size="lg" />
      <Button {...args} size="xl" />
    </Flex>
    <Flex center padding={40}>
      <Button {...args} material={new GlassMaterial()} />
      <Button {...args} material={new PaperMaterial()} />
      <Button {...args} material={new SolidMaterial()} />
    </Flex>
  </ValenceProvider>
);
Text.args = {
  children: "Button",
};
