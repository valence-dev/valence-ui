import { Meta, StoryObj } from "@storybook/react";
import { Flex, FlexProps, Text, Title } from "../../components";
import { ValenceProvider } from "../../ValenceProvider";
import { PaperMaterial } from "./PaperMaterial";
import { GlassMaterial } from "./GlassMaterial";
import { SolidMaterial } from "./SolidMaterial";

const meta: Meta<typeof Flex> = {
  component: Flex,
  title: "Valence/Core/Materials",
};
export default meta;
type Story = StoryObj<typeof Flex>;

const FlexChildProps: FlexProps = {
  grow: true,
  align: "center",
  justify: "center",
  height: 100,
};

export const Paper: Story = (args: any) => (
  <ValenceProvider>
    <Flex direction="column" padding={20}>
      <Title>Paper Material</Title>
      <Flex width="100%">
        <Flex {...FlexChildProps} material={new PaperMaterial()}>
          <Text>0</Text>
        </Flex>
        <Flex
          {...FlexChildProps}
          material={new PaperMaterial().setElevation(1)}
        >
          <Text>1</Text>
        </Flex>
        <Flex
          {...FlexChildProps}
          material={new PaperMaterial().setElevation(2)}
        >
          <Text>2</Text>
        </Flex>
        <Flex
          {...FlexChildProps}
          material={new PaperMaterial().setElevation(3)}
        >
          <Text>3</Text>
        </Flex>
        <Flex
          {...FlexChildProps}
          material={new PaperMaterial().setElevation(4)}
        >
          <Text>4</Text>
        </Flex>
        <Flex
          {...FlexChildProps}
          material={new PaperMaterial().setElevation(5)}
        >
          <Text>5</Text>
        </Flex>
      </Flex>
      <Flex width="100%">
        <Flex
          {...FlexChildProps}
          material={new PaperMaterial().setColor("red")}
        >
          <Text>Red</Text>
        </Flex>
        <Flex
          {...FlexChildProps}
          material={new PaperMaterial()
            .setBackgroundColor("red")
            .setColor("white")}
        >
          <Text>Red Background</Text>
        </Flex>
        <Flex
          {...FlexChildProps}
          material={new PaperMaterial().setBackgroundColor("transparent")}
        >
          <Text>Transparent background</Text>
        </Flex>
        <Flex
          {...FlexChildProps}
          material={new PaperMaterial().setElevation(4).setInteractive(true)}
        >
          <Text>Interactive</Text>
        </Flex>
      </Flex>
    </Flex>
  </ValenceProvider>
);
Paper.args = {};

export const Glass: Story = (args: any) => (
  <ValenceProvider>
    <Flex direction="column" padding={20}>
      <Title>Glass Material</Title>
      <Flex width="100%">
        <Flex {...FlexChildProps} material={new GlassMaterial()}>
          <Text>Regular</Text>
        </Flex>
        <Flex
          {...FlexChildProps}
          material={new GlassMaterial().setInteractive(true)}
        >
          <Text>Interactive</Text>
        </Flex>
        <Flex
          {...FlexChildProps}
          material={new GlassMaterial().setColor("blue")}
        >
          <Text>Color</Text>
        </Flex>
        <Flex
          {...FlexChildProps}
          material={new GlassMaterial()
            .setColor("blue")
            .setBackgroundColor("red")}
        >
          <Text>Different background & foreground</Text>
        </Flex>
      </Flex>
    </Flex>
  </ValenceProvider>
);
Glass.args = {};

export const Solid: Story = (args: any) => (
  <ValenceProvider>
    <Flex direction="column" padding={20}>
      <Title>Solid Material</Title>
      <Flex width="100%">
        <Flex {...FlexChildProps} material={new SolidMaterial()}>
          <Text>Regular</Text>
        </Flex>
        <Flex
          {...FlexChildProps}
          material={new SolidMaterial().setInteractive(true)}
        >
          <Text>Interactive</Text>
        </Flex>
        <Flex
          {...FlexChildProps}
          material={new SolidMaterial().setColor("brighterWhite")}
        >
          <Text>White</Text>
        </Flex>
      </Flex>

      <Flex width="100%">
        <Flex {...FlexChildProps} material={new SolidMaterial()}>
          <Text>0</Text>
        </Flex>
        <Flex
          {...FlexChildProps}
          material={new SolidMaterial().setElevation(1)}
        >
          <Text>1</Text>
        </Flex>
        <Flex
          {...FlexChildProps}
          material={new SolidMaterial().setElevation(2)}
        >
          <Text>2</Text>
        </Flex>
        <Flex
          {...FlexChildProps}
          material={new SolidMaterial().setElevation(3)}
        >
          <Text>3</Text>
        </Flex>
        <Flex
          {...FlexChildProps}
          material={new SolidMaterial().setElevation(4)}
        >
          <Text>4</Text>
        </Flex>
        <Flex
          {...FlexChildProps}
          material={new SolidMaterial().setElevation(5)}
        >
          <Text>5</Text>
        </Flex>
      </Flex>
    </Flex>
  </ValenceProvider>
);
Solid.args = {};
