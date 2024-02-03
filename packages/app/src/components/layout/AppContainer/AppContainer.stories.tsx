import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button, Header, Title, ValenceProvider, useDisclosure } from "@valence-ui/core";

import { AppContainer as AC } from "./AppContainer";
import { Nav, Sidebar } from "../../navigation";
import { IconBolt, IconCategory, IconLogout, IconUserCircle } from "@tabler/icons-react";
import { BrowserRouter } from "react-router-dom";
import { SideSheet } from "../../overlays";

const meta: Meta<typeof AC> = {
  component: AC,
  title: "Valence/App/Layout",
  argTypes: {},
};
export default meta;
type Story = StoryObj<typeof AC>;

export const AppContainer: Story = (args: any) => {
  const sideSheet = useDisclosure();

  return (
    <BrowserRouter>
      <ValenceProvider>
        <AC {...args}>
          <Button onClick={() => sideSheet.open()}>Open Side Sheet</Button>

          <SideSheet
            title="Side sheet"
            disclosure={sideSheet}
          >
            Hi there
          </SideSheet>

        </AC>
      </ValenceProvider>
    </BrowserRouter>
  )
};
AppContainer.args = {
  nav:
    <Nav
      buttons={[
        {
          id: "apps",
          children: <IconCategory />,
          highlighted: true,
          to: "/dashboard",
          show: {
            default: true,
            mobile: false,
          }
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
      <Button width="100%">
        This is a sidebar!
      </Button>
    </Sidebar>,
};