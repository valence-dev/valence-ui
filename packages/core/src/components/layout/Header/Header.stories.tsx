import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ValenceProvider } from "../../..";
import { Header as H } from "./Header";
import { Title } from "../../display";
import { Flex } from "../Flex";

const meta: Meta<typeof H> = {
  component: H,
  title: "Valence/Layout",
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof H>;

export const Header: Story = (args: any) => (
  <ValenceProvider>
    <H data-testId="InputField-id" {...args} />
    <Flex height={5000} />
  </ValenceProvider>
);
Header.args = {
  children: <Title>Hello world</Title>,
};