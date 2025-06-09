import { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  Flex,
  IconButton,
  Text,
  ValenceProvider,
  useDisclosure,
} from "../../..";
import { Tooltip as T } from "./Tooltip";
import { IconTool } from "@tabler/icons-react";

const meta: Meta<typeof T> = {
  component: T,
  title: "Valence/Core/Overlays",
};
export default meta;
type Story = StoryObj<typeof T>;

export const Tooltip: Story = (args: any) => {
  const tooltipDisclosure = useDisclosure();

  return (
    <ValenceProvider>
      <Flex center direction="column" gap={40} height="100vh">
        {/* Controlled */}
        <T disclosure={tooltipDisclosure} {...args}>
          <T.Trigger>
            <Button
              onClick={() =>
                tooltipDisclosure.update(!tooltipDisclosure.opened)
              }
            >
              Tooltip (controlled)
            </Button>
          </T.Trigger>

          <T.Content>
            <Text align="center">Tooltip Content</Text>
          </T.Content>
        </T>

        {/* Uncontrolled */}
        <T {...args}>
          <T.Trigger>
            <Text align="center">Tooltip (uncontrolled)</Text>
          </T.Trigger>

          <T.Content>Tooltip content</T.Content>
        </T>

        <T {...args}>
          <T.Trigger>
            <IconButton>
              <IconTool />
            </IconButton>
          </T.Trigger>

          <T.Content>Tooltip content</T.Content>
        </T>
      </Flex>
    </ValenceProvider>
  );
};

Tooltip.args = {};
