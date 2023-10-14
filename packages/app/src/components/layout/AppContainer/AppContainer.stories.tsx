import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Header, Title, ValenceProvider } from "@valence-ui/core";

import { AppContainer as AC } from "./AppContainer";
import { Nav, Sidebar } from "../../navigation";
import { IconAlertTriangle, IconBolt, IconCategory, IconLock, IconLogout, IconUserCircle } from "@tabler/icons-react";
import { BrowserRouter } from "react-router-dom";

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
    <Sidebar
      buttons={[
        {
          id: "profile",
          children: "Profile",
          icon: <IconUserCircle />,
          jumpTo: "#profile",
          highlighted: true,
        },
        {
          id: "security",
          children: "Security",
          icon: <IconLock />,
          jumpTo: "#security",
        },
        {
          id: "dangerZone",
          children: "Danger zone",
          icon: <IconAlertTriangle />,
          jumpTo: "#danger-zone",
        },
      ]}
    />,
  children: <div>Children</div>
};