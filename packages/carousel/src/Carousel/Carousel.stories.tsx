import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { Carousel as C } from "./Carousel";
import { CarouselChildProps } from "./CarouselChild";
import { Flex, StyledFlex, Text, ValenceProvider } from "@valence-ui/core";

const meta: Meta<typeof C> = {
  component: C,
  title: "Valence/Carousel/Carousel",
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof C>;

export const Carousel: Story = (args: any) => {

  // Works as controlled and uncontrolled
  const [activeChild, setActiveChild] = React.useState(0);

  return (
    <ValenceProvider>
      <Flex width="100%" justify="center">
        <Flex width={600}>
          <C
            // activeChild={activeChild}
            // setActiveChild={setActiveChild}
            {...args}
          >
            {Array.from({ length: 10 }).map((_, i) => (
              <DemoCarouselChild
                key={i}
                index={i}
              />
            ))}
          </C>
        </Flex>
      </Flex>

    </ValenceProvider>
  )
};
Carousel.args = {};


function DemoCarouselChild(props: CarouselChildProps & {
  index: number,
}) {
  const { isActive, isNearest, index, ...rest } = props;

  return (
    <StyledFlex
      color={isActive ? "primary" : "black"}
      style={{
        border: isNearest ? "1px solid red" : "none",
      }}
      width={200}
      height={300}
      align="center"
      justify="center"

      {...rest}
    >
      <Text>{index}</Text>
    </StyledFlex>
  )
}