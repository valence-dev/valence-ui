import { Meta, StoryObj } from "@storybook/react";
import { MultipartButton as MPB } from "./MultipartButton";
import { Storybook } from "../../../../storybook";
import { IconApps } from "@tabler/icons-react";
import { Button, Flex, ValenceProvider } from "../../..";
import { useState } from "react";

const meta: Meta<typeof MPB> = {
  component: MPB,
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
type Story = StoryObj<typeof MPB>;

export const Multipart: Story = (args: any) => {
  const [loading, setLoading] = useState(false);

  return (
    <ValenceProvider>
      <Button onClick={() => setLoading(!loading)}>Toggle Loading State</Button>

      <Flex direction="column" height="100vh" center padding={20}>
        <MPB {...args} size="xs" loading={loading} />
        <MPB {...args} size="sm" loading={loading} />
        <MPB {...args} size="md" loading={loading} />
        <MPB {...args} size="lg" loading={loading} />
        <MPB {...args} size="xl" loading={loading} />
      </Flex>
    </ValenceProvider>
  );
};
Multipart.args = {
  title: "Multipart button",
  subtitle: "With a great subtitle that is very long and multi-line",
  leftIcon: [<IconApps />, <IconApps />, <IconApps />],
};
