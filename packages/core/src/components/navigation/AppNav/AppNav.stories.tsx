import { Meta, StoryObj } from "@storybook/react";
import {
  IconBell,
  IconBolt,
  IconCategory,
  IconHome,
  IconLogout,
  IconSearch,
  IconSettings,
  IconUserCircle,
} from "@tabler/icons-react";
import { BrowserRouter } from "react-router-dom";
import { Case, Section, Showcase, Storybook } from "../../../../storybook";
import { GlassMaterial } from "../../../utilities/materials/GlassMaterial";
import { Text } from "../../display/Text/Text";
import { Flex } from "../../layout/Flex";
import { AppNav as AN, AppNavButtonProps } from "./AppNav";

const BUTTONS: AppNavButtonProps[] = [
  { id: "home", children: <IconHome />, highlighted: true, to: "/" },
  { id: "apps", children: <IconCategory />, to: "/apps" },
  { id: "search", children: <IconSearch />, to: "/search" },
  { id: "account", children: <IconUserCircle />, to: "/account" },
];

const BOTTOM_BUTTONS: AppNavButtonProps[] = [
  { id: "settings", children: <IconSettings />, to: "/settings" },
  { id: "signOut", children: <IconLogout />, onClick: () => alert("Sign out") },
];

/** A nav in a bordered frame, so its own edges are visible. */
function Frame(props: { children: React.ReactNode; height?: number }) {
  return (
    <Flex
      height={props.height ?? 420}
      material={new GlassMaterial()}
      align="stretch"
      gap={0}
    >
      {props.children}
    </Flex>
  );
}

const meta: Meta<typeof AN> = {
  component: AN,
  title: "Core/Navigation/AppNav",
  argTypes: {
    gap: { control: { type: "number" }, table: { category: "Layout" } },
    padding: { control: { type: "text" }, table: { category: "Layout" } },
  },
  args: {
    buttons: BUTTONS,
    bottomButtons: BOTTOM_BUTTONS,
  },
  decorators: [
    // Every nav button is a router link, so the component throws on mount
    // without a router above it. The v7 flags are opted into so the router
    // stops warning about them on every story.
    (Story) => (
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Story />
      </BrowserRouter>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof AN>;

/**
 * The application's root navigation.
 *
 * `AppNav` had no story of its own — it was only ever visible inside the
 * `AppContainer` story, where it shares the frame with a whole page. On its
 * own its two layouts, its highlighting and its per-breakpoint button
 * visibility can each be looked at directly.
 */
export const Playground: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="App nav">
      <Frame>
        <AN {...args} />
      </Frame>
    </Showcase>
  ),
};

/** Which button is marked as current. */
export const States: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Highlighting"
      description="`highlighted` is what marks the current route. Exactly one button should read as current, and the marking must not depend on colour alone."
    >
      <Section>
        {BUTTONS.map((_, index) => (
          <Case key={index} label={`button ${index + 1} highlighted`}>
            <Frame>
              <AN
                {...args}
                buttons={BUTTONS.map((button, i) => ({
                  ...button,
                  highlighted: i === index,
                }))}
              />
            </Frame>
          </Case>
        ))}
        <Case label="none highlighted">
          <Frame>
            <AN
              {...args}
              buttons={BUTTONS.map((button) => ({
                ...button,
                highlighted: false,
              }))}
            />
          </Frame>
        </Case>
      </Section>
    </Showcase>
  ),
};

/** The favicon slot and the two button groups. */
export const Content: Story = {
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase
      title="Nav content"
      description="`bottomButtons` are pinned to the bottom on desktop and folded in with the rest along the bottom edge on mobile."
    >
      <Section>
        <Case label="with a favicon">
          <Frame>
            <AN {...args} favicon={Storybook.imageSrc} />
          </Frame>
        </Case>
        <Case label="no bottom buttons">
          <Frame>
            <AN {...args} bottomButtons={undefined} />
          </Frame>
        </Case>
        <Case label="bottom buttons only">
          <Frame>
            <AN {...args} buttons={[]} />
          </Frame>
        </Case>
        <Case label="a broken favicon">
          <Frame>
            <AN {...args} favicon={Storybook.brokenImageSrc} />
          </Frame>
        </Case>
      </Section>
    </Showcase>
  ),
};

/**
 * Per-breakpoint button visibility, and the mobile layout.
 *
 * Below the tablet breakpoint the nav turns from a left rail into a bottom
 * bar, and any button whose `show` is false at that breakpoint disappears —
 * behaviour a desktop-width frame never reveals.
 */
export const Responsive: Story = {
  parameters: { valence: { layout: "fullscreen" } },
  render: (args) => (
    <Flex height="100vh" align="stretch" gap={0}>
      <AN
        {...args}
        buttons={[
          { id: "home", children: <IconHome />, highlighted: true, to: "/" },
          {
            id: "apps",
            children: <IconCategory />,
            to: "/apps",
            show: { default: true, mobile: false },
          },
          {
            id: "power",
            children: <IconBolt />,
            to: "/power",
            show: { default: false, mobile: true },
          },
          { id: "alerts", children: <IconBell />, to: "/alerts" },
        ]}
      />
      <Flex direction="column" padding={20} grow>
        <Text>
          Narrow the frame past the mobile breakpoint. The rail becomes a bottom
          bar, `apps` hides itself, and `power` appears in its place.
        </Text>
      </Flex>
    </Flex>
  ),
};

/** Button counts the rail has to hold. */
export const EdgeCases: Story = {
  name: "Edge Cases",
  parameters: { valence: { layout: "flow" } },
  render: (args) => (
    <Showcase title="App nav edge cases">
      <Section>
        <Case label="one button">
          <Frame>
            <AN {...args} buttons={[BUTTONS[0]]} bottomButtons={undefined} />
          </Frame>
        </Case>
        <Case label="no buttons at all">
          <Frame>
            <AN {...args} buttons={[]} bottomButtons={undefined} />
          </Frame>
        </Case>
        <Case
          label="twenty buttons"
          note="More than fit — the rail must scroll or compress rather than overflow."
        >
          <Frame>
            <AN
              {...args}
              buttons={Array.from({ length: 20 }, (_, index) => ({
                id: `button-${index}`,
                children: <IconCategory />,
                to: `/${index}`,
                highlighted: index === 0,
              }))}
            />
          </Frame>
        </Case>
        <Case label="in a short frame">
          <Frame height={160}>
            <AN {...args} />
          </Frame>
        </Case>
      </Section>
    </Showcase>
  ),
};
