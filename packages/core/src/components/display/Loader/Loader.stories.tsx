import { Meta, StoryObj } from "@storybook/react";
import { Storybook } from "../../../../storybook";
import { Button, Flex, ValenceProvider } from "../../..";

import { Loader as L } from "./Loader";
import { useState } from "react";
import { AnimatePresence } from "motion/react";

const meta: Meta<typeof L> = {
  component: L,
  title: "Valence/Core/Display",
  argTypes: {
    size: {
      options: Storybook.componentSizes,
      control: { type: "select" },
    },
  },
};
export default meta;
type Story = StoryObj<typeof L>;

export const Loader: Story = (args: any) => {
  const [show, setShow] = useState(true);

  return (
    <ValenceProvider>
      <Flex center height="100vh" direction="column">
        <Flex direction="row" align="center">
          <L {...args} />
          <L {...args} size="xs" />
          <L {...args} size="sm" />
          <L {...args} size="md" />
          <L {...args} size="lg" />
          <L {...args} size="xl" />
        </Flex>

        <Flex direction="row" align="center">
          <Button onClick={() => setShow(!show)}>
            {show ? "Hide Loader" : "Show Loader"}
          </Button>

          <AnimatePresence>
            {show && <L {...args} key={1} />}
            {show && (
              <L
                {...args}
                animation={["blur", "fade", "slide-up"]}
                size="xl"
                key={2}
              />
            )}
          </AnimatePresence>
        </Flex>
      </Flex>
    </ValenceProvider>
  );
};
Loader.args = {};
