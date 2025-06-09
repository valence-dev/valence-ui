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
import { useState } from "react";

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

export const Text: Story = (args: any) => {
  const [loading, setLoading] = useState(false);

  return (
    <ValenceProvider>
      <Button onClick={() => setLoading(!loading)}>Toggle Loading State</Button>

      <Flex center padding={40}>
        <Button {...args} size="xs" loading={loading} />
        <Button {...args} size="sm" loading={loading} />
        <Button {...args} size="md" loading={loading} />
        <Button {...args} size="lg" loading={loading} />
        <Button {...args} size="xl" loading={loading} />
      </Flex>
      <Flex center padding={40}>
        <Button {...args} material={new GlassMaterial()} loading={loading} />
        <Button {...args} material={new PaperMaterial()} loading={loading} />
        <Button {...args} material={new SolidMaterial()} loading={loading} />
      </Flex>
    </ValenceProvider>
  );
};
Text.args = {
  children: "Button",
};
