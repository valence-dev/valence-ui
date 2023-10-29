import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { ButtonWithIcon, Flex, Header, Title, ValenceProvider } from "@valence-ui/core";

import { AppContainer as AC } from "./AppContainer";
import { Nav, Sidebar } from "../../navigation";
import { IconAlertTriangle, IconBolt, IconCategory, IconLock, IconLogout, IconMenu, IconUserCircle } from "@tabler/icons-react";
import { BrowserRouter } from "react-router-dom";
import { GridButton } from "../../buttons";

const meta: Meta<typeof AC> = {
  component: AC,
  title: "Valence/App/Layout",
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof AC>;

export const AppContainer: Story = (args: any) => (
  <BrowserRouter>
    <ValenceProvider>
      <AC data-testId="InputField-id" {...args} />
    </ValenceProvider>
  </BrowserRouter>
);
AppContainer.args = {
  sidebarWidth: 300,
  nav:
    <Nav
      buttons={[
        {
          id: "apps",
          children: <IconCategory />,
          highlighted: true,
          to: "/dashboard",
        },
        {
          id: "account",
          children: <IconUserCircle />,
          to: "/account",
        },
        {
          id: "power",
          children: <IconBolt />,
          to: "/power",
        }
      ]}
      bottomButtons={[
        {
          id: "signOut",
          children: <IconLogout />,
          onClick: () => alert("Sign out"),
        }
      ]}
    />,
  header:
    <Header>
      <Title>Page title</Title>
    </Header>,
  sidebar:
    <Sidebar>
      <ButtonWithIcon
        icon={<IconAlertTriangle />}
        width="100%"
      >Hi there</ButtonWithIcon>
      <ButtonWithIcon
        icon={<IconLock />}
        width="100%"
      >Security</ButtonWithIcon>

      <Flex
        direction="row"
        justify="space-between"
      >
        <GridButton
          icon={<IconAlertTriangle />}
        >
          Hi there
        </GridButton>
        <GridButton
          icon={<IconAlertTriangle />}
        >
          Hi there
        </GridButton>
        <GridButton
          icon={<IconAlertTriangle />}
        >
          Hi there
        </GridButton>
      </Flex>
    </Sidebar>,
  children: <div>Children</div>
};