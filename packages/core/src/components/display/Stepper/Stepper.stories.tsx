import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import {
  Case,
  Matrix,
  Section,
  Showcase,
  Storybook,
  allMaterials,
  colorControl,
  sizeControl,
} from "../../../../storybook";
import { IconButton } from "../../buttons/IconButton";
import { Flex } from "../../layout/Flex";
import { Text } from "../Text/Text";
import { Stepper as St } from "./Stepper";

/** Three steps, reused by every case below. */
function steps(count = 3) {
  return Array.from({ length: count }, (_, index) => (
    <St.Step key={index}>
      <Text size="xl">Step {index + 1}</Text>
    </St.Step>
  ));
}

const meta: Meta<typeof St> = {
  component: St,
  title: "Core/Display/Stepper",
  argTypes: {
    size: sizeControl,
    color: colorControl,
    currentStep: {
      control: { type: "number" },
      table: { category: "State" },
    },
  },
  args: {
    currentStep: 1,
  },
};
export default meta;
type Story = StoryObj<typeof St>;

/** One stepper, driven entirely by the controls panel. */
export const Playground: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Stepper">
      <St {...args}>{steps()}</St>
    </Showcase>
  ),
};

/**
 * Every position in a three-step flow, laid out at once.
 *
 * The original story could only show one position at a time and made you click
 * through them; seeing all four together is what makes an inconsistency
 * between the "complete", "active" and "default" indicators obvious.
 */
export const States: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Every step position"
      description="Before the first step, on each step, and past the last. The completed, active and pending indicators must be distinguishable from each other without colour alone."
    >
      <Matrix
        title="currentStep"
        values={[0, 1, 2, 3]}
        label={(step) => `currentStep=${step}`}
        column
      >
        {(currentStep) => (
          <St {...args} currentStep={currentStep}>
            {steps()}
          </St>
        )}
      </Matrix>
    </Showcase>
  ),
};

/** The stepper walked through by hand. */
export const Composition: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => {
    const [currentStep, setCurrentStep] = useState(1);

    return (
      <Showcase
        title="Stepping through"
        description="Walk forwards and backwards. The transition between two positions is the part a static case cannot show."
      >
        <Section column>
          <Case>
            <St {...args} currentStep={currentStep}>
              {steps()}
            </St>
          </Case>
          <Case>
            <Flex direction="row">
              <IconButton
                onClick={() => setCurrentStep((step) => Math.max(step - 1, 0))}
                disabled={currentStep === 0}
                tooltip="Previous"
              >
                <IconChevronLeft />
              </IconButton>
              <IconButton
                onClick={() => setCurrentStep((step) => Math.min(step + 1, 3))}
                disabled={currentStep === 3}
                tooltip="Next"
              >
                <IconChevronRight />
              </IconButton>
            </Flex>
          </Case>
        </Section>
      </Showcase>
    );
  },
};

/** Every size. */
export const Sizes: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Stepper sizes"
      description="The indicator and the connecting line scale together, so the line must stay centred on the indicators at every size."
    >
      <Matrix title="size" values={Storybook.componentSizes} column>
        {(size) => (
          <St {...args} size={size}>
            {steps()}
          </St>
        )}
      </Matrix>
    </Showcase>
  ),
};

/** Every material. */
export const Materials: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Stepper materials">
      <Section column>
        {allMaterials().map(([name, material]) => (
          <Case key={name} label={name}>
            <St {...args} material={material}>
              {steps()}
            </St>
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
    <Showcase title="Stepper colours">
      <Matrix title="color" values={Storybook.colors} column>
        {(color) => (
          <St {...args} color={color}>
            {steps()}
          </St>
        )}
      </Matrix>
    </Showcase>
  ),
};

/** Step counts and labels a stepper is not usually given. */
export const EdgeCases: Story = {
  name: "Edge Cases",
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="Stepper edge cases">
      <Section column>
        <Case label="a single step" note="There is no line to draw.">
          <St {...args} currentStep={0}>
            {steps(1)}
          </St>
        </Case>
        <Case label="two steps">
          <St {...args}>{steps(2)}</St>
        </Case>
        <Case label="eight steps" note="Indicators must stay evenly spaced.">
          <St {...args} currentStep={4}>
            {steps(8)}
          </St>
        </Case>
        <Case label="currentStep out of range">
          <St {...args} currentStep={99}>
            {steps()}
          </St>
        </Case>
        <Case label="a long step label">
          <St {...args}>
            <St.Step>
              <Text>{Storybook.longText}</Text>
            </St.Step>
            <St.Step>
              <Text>Short</Text>
            </St.Step>
          </St>
        </Case>
      </Section>
    </Showcase>
  ),
};
