import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { AnimatePresence } from "motion/react";
import {
  Case,
  Matrix,
  Section,
  Showcase,
  Storybook,
  colorControl,
  sizeControl,
} from "../../../../storybook";
import { Button } from "../../buttons/TextButton";
import { Loader as L } from "./Loader";

const meta: Meta<typeof L> = {
  component: L,
  title: "Core/Display/Loader",
  argTypes: {
    size: sizeControl,
    color: colorControl,
  },
};
export default meta;
type Story = StoryObj<typeof L>;

/** One loader, driven entirely by the controls panel. */
export const Playground: Story = {};

/** Every size, plus the theme default. */
export const Sizes: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Loader sizes"
      description="Every size beside the unset default, which should be indistinguishable from the theme's default size."
    >
      <Section title="size">
        <Case label="unset">
          <L {...args} />
        </Case>
        {Storybook.componentSizes.map((size) => (
          <Case key={size} label={size}>
            <L {...args} size={size} />
          </Case>
        ))}
      </Section>
    </Showcase>
  ),
};

/** Every palette colour. */
export const Colors: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Loader colours"
      description="A loader is thin, so a colour that is legible as a block of fill may not be legible here."
    >
      <Matrix title="color" values={Storybook.colors}>
        {(color) => <L {...args} color={color} size="lg" />}
      </Matrix>
    </Showcase>
  ),
};

/** Each mount animation. */
export const Content: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Mount animations"
      description="These run on mount, so reload the story to replay them."
    >
      <Section>
        <Case label="none">
          <L {...args} size="xl" />
        </Case>
        <Case label="fade">
          <L {...args} size="xl" animation="fade" />
        </Case>
        <Case label="blur">
          <L {...args} size="xl" animation="blur" />
        </Case>
        <Case label="slide-up">
          <L {...args} size="xl" animation="slide-up" />
        </Case>
        <Case label="blur + fade + slide-up">
          <L {...args} size="xl" animation={["blur", "fade", "slide-up"]} />
        </Case>
      </Section>
    </Showcase>
  ),
};

/** Mounting and unmounting under `AnimatePresence`. */
export const States: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => {
    const [show, setShow] = useState(true);

    return (
      <Showcase
        title="Exit animations"
        description="A loader normally disappears when its work finishes, so the exit transition matters as much as the entrance. Toggle it a few times in a row — a half-finished exit must not strand a loader on screen."
      >
        <Section>
          <Case>
            <Button onClick={() => setShow((prev) => !prev)}>
              {show ? "Hide" : "Show"}
            </Button>
          </Case>

          <Case label="no animation">
            <AnimatePresence>{show && <L {...args} size="xl" />}</AnimatePresence>
          </Case>

          <Case label="blur + fade + slide-up">
            <AnimatePresence>
              {show && (
                <L {...args} size="xl" animation={["blur", "fade", "slide-up"]} />
              )}
            </AnimatePresence>
          </Case>
        </Section>
      </Showcase>
    );
  },
};
