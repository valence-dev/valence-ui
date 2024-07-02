import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { AppContainer as AC } from "./AppContainer";
import { AppNav } from "../../navigation";
import { IconBolt, IconCategory, IconLogout, IconUserCircle } from "@tabler/icons-react";
import { BrowserRouter } from "react-router-dom";
import { SideSheet } from "../../overlays";
import { FlexCenter, Header, StyledFlex } from "..";
import { ValenceProvider } from "../../../ValenceProvider";
import { Title } from "../../display";
import { Button } from "../../buttons";
import { useDisclosure } from "../../../hooks";

const meta: Meta<typeof AC> = {
  component: AC,
  title: "Valence/Core/Layout",
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
          <Header innerWidth={700}>
            <Title> Page Title </Title>
          </Header>

          <FlexCenter
            innerWidth={700}
          >

            <Button onClick={() => { sideSheet.update(!sideSheet.opened) }}>Toggle Side Sheet</Button>

            <SideSheet
              title="Side sheet"
              disclosure={sideSheet}
            >
              Hi there
            </SideSheet>

            <StyledFlex height="300vh" width="100%">
              Hi there
            </StyledFlex>

            <Button
              onClick={() => { sideSheet.update(!sideSheet.opened) }}
              variant="paper"
              float={{ positionHorizontal: "right", positionVertical: "bottom" }}
            >
              Toggle Side Sheet
            </Button>
          </FlexCenter>
        </AC>
      </ValenceProvider>
    </BrowserRouter>
  )
};
AppContainer.args = {
  nav:
    <AppNav
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
};