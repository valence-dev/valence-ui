import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ValenceProvider } from "../../..";
import { Flex as Fl } from "./Flex";
import { StyledFlex as SF } from "./StyledFlex";
import { Text } from "../../display";

const meta: Meta<typeof Fl> = {
  component: Fl,
  title: "Valence/Core/Layout",
  argTypes: {
    backgroundColor: { control: { type: "text" } },
    color: { control: { type: "text" } },
    direction: {
      options: ["row", "column", "row-reverse", "column-reverse"],
      control: { type: "select" },
    },
    align: {
      options: ["flex-start", "center", "flex-end", "stretch"],
      control: { type: "select" },
    },
    justify: {
      options: [
        "flex-start",
        "center",
        "flex-end",
        "space-between",
        "space-around",
      ],
      control: { type: "select" },
    },
    alignSelf: {
      options: ["flex-start", "center", "flex-end", "stretch"],
      control: { type: "select" },
    },
    gap: {
      control: { type: "number" },
    },
    grow: {
      control: { type: "boolean" },
    },

    width: {
      control: { type: "text" },
    },
    height: {
      control: { type: "text" },
    },
    padding: {
      control: { type: "text" },
    },
    margin: {
      control: { type: "text" },
    },
  },
};
export default meta;
type Story = StoryObj<typeof Fl>;

export const Flex: Story = (args: any) => (
  <ValenceProvider>
    <Fl data-testId="InputField-id" {...args} />
  </ValenceProvider>
);
Flex.args = {
  children: (
    <>
      <SF grow align="center" justify="center" height={100} color="black">
        <Text>1</Text>
      </SF>
      <SF grow align="center" justify="center" height={100} color="black">
        <Text>2</Text>
      </SF>
      <SF grow align="center" justify="center" height={100} color="black">
        <Text>3</Text>
      </SF>
    </>
  ),
  width: "100%",
};

export const StyledFlex = (args: any) => (
  <ValenceProvider>
    <SF data-testId="InputField-id" {...args} />
  </ValenceProvider>
);
StyledFlex.args = {
  children: (
    <>
      <Text>`StyledFlex` component</Text>
    </>
  ),
};
