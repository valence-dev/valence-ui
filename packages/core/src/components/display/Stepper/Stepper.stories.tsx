import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { Stepper as St } from "./Stepper";
import {
  Flex,
  FlexCenter,
  GlassMaterial,
  IconButton,
  PaperMaterial,
  SolidMaterial,
  Text,
  ValenceProvider,
} from "../../..";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { AirMaterial } from "../../../utilities/materials/AirMaterial";

const meta: Meta<typeof St> = {
  component: St,
  title: "Valence/Core/Display",
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof St>;

export const Stepper: Story = (args: any) => {
  const [currentStep, setCurrentStep] = React.useState(1);

  return (
    <ValenceProvider>
      <FlexCenter innerProps={{ direction: "column" }}>
        <St currentStep={currentStep} {...args}>
          <St.Step>
            <Text size="xl">Step 1</Text>
          </St.Step>
          <St.Step>
            <Text size="xl">Step 2</Text>
          </St.Step>
          <St.Step>
            <Text size="xl">Step 3</Text>
          </St.Step>
        </St>
        <St currentStep={currentStep} {...args} material={new GlassMaterial()}>
          <St.Step>
            <Text size="xl">Step 1</Text>
          </St.Step>
          <St.Step>
            <Text size="xl">Step 2</Text>
          </St.Step>
          <St.Step>
            <Text size="xl">Step 3</Text>
          </St.Step>
        </St>
        <St currentStep={currentStep} {...args} material={new AirMaterial()}>
          <St.Step>
            <Text size="xl">Step 1</Text>
          </St.Step>
          <St.Step>
            <Text size="xl">Step 2</Text>
          </St.Step>
          <St.Step>
            <Text size="xl">Step 3</Text>
          </St.Step>
        </St>
        <St currentStep={currentStep} {...args} material={new PaperMaterial()}>
          <St.Step>
            <Text size="xl">Step 1</Text>
          </St.Step>
          <St.Step>
            <Text size="xl">Step 2</Text>
          </St.Step>
          <St.Step>
            <Text size="xl">Step 3</Text>
          </St.Step>
        </St>
        <St currentStep={currentStep} {...args} material={new SolidMaterial()}>
          <St.Step>
            <Text size="xl">Step 1</Text>
          </St.Step>
          <St.Step>
            <Text size="xl">Step 2</Text>
          </St.Step>
          <St.Step>
            <Text size="xl">Step 3</Text>
          </St.Step>
        </St>

        <Flex direction="row">
          <IconButton
            onClick={() => setCurrentStep(Math.max(currentStep - 1, 0))}
            disabled={currentStep === 0}
          >
            <IconChevronLeft />
          </IconButton>
          <IconButton
            onClick={() => setCurrentStep(Math.min(currentStep + 1, 2))}
            disabled={currentStep === 2}
          >
            <IconChevronRight />
          </IconButton>
        </Flex>
      </FlexCenter>
    </ValenceProvider>
  );
};
Stepper.args = {};
