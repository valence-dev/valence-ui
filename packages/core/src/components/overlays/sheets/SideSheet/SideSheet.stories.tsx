import { Meta, StoryObj } from "@storybook/react";
import { ReactNode } from "react";
import {
  Case,
  Section,
  Showcase,
  Storybook,
  radiusControl,
} from "../../../../../storybook";
import { useDisclosure } from "../../../../hooks";
import { GlassMaterial } from "../../../../utilities/materials/GlassMaterial";
import { Button } from "../../../buttons/TextButton";
import { Text } from "../../../display/Text/Text";
import { Flex } from "../../../layout/Flex";
import { SideSheet as SS } from "./SideSheet";

/** A sheet and the button that toggles it. Each needs its own disclosure. */
function SheetCase(props: {
  label: string;
  note?: string;
  children?: ReactNode;
  sheetProps?: Record<string, unknown>;
}) {
  const disclosure = useDisclosure();

  return (
    <Case label={props.label} note={props.note}>
      <Button onClick={disclosure.toggle}>{props.label}</Button>

      <SS title={props.label} disclosure={disclosure} {...props.sheetProps}>
        {props.children ?? <Text>{Storybook.longText}</Text>}
      </SS>
    </Case>
  );
}

const meta: Meta<typeof SS> = {
  component: SS,
  title: "Core/Overlays/SideSheet",
  argTypes: {
    title: { control: { type: "text" }, table: { category: "Content" } },
    display: {
      options: ["inline", "overlay"],
      control: { type: "inline-radio" },
      table: { category: "Layout" },
    },
    direction: {
      options: ["left", "right"],
      control: { type: "inline-radio" },
      table: { category: "Layout" },
    },
    radius: radiusControl,
    closeOnOverlayClick: {
      control: { type: "boolean" },
      table: { category: "Behaviour" },
    },
    closeOnEscape: {
      control: { type: "boolean" },
      table: { category: "Behaviour" },
    },
    withShadow: {
      control: { type: "boolean" },
      table: { category: "Appearance" },
    },
  },
  args: {
    title: "Side Sheet title",
  },
};
export default meta;
type Story = StoryObj<typeof SS>;

/** One sheet, driven entirely by the controls panel. */
export const Playground: Story = {
  render: (args) => {
    const disclosure = useDisclosure();

    return (
      <Flex center height="100vh">
        <Button onClick={disclosure.toggle}>Toggle Side Sheet</Button>

        <SS {...args} disclosure={disclosure}>
          <Flex width="100%" height="200vh" material={new GlassMaterial()}>
            <Text>Hi</Text>
          </Flex>
        </SS>
      </Flex>
    );
  },
};

/**
 * `inline` against `overlay`, and the two directions.
 *
 * These are two genuinely different components: an inline sheet takes width
 * away from the page beside it, while an overlay sheet floats above it and
 * dims it. Which one you get depends on the viewport unless `display` says
 * otherwise, so both need showing explicitly.
 */
export const Variants: Story = {
  parameters: { valence: { layout: "flow" } },
  render: () => (
    <Showcase
      title="Display and direction"
      description="`direction` only applies to an overlay sheet — an inline one always comes from the right. Open the inline cases and check the content beside them makes room rather than being covered."
    >
      <Section title="display">
        <SheetCase label="inline" sheetProps={{ display: "inline" }} />
        <SheetCase label="overlay" sheetProps={{ display: "overlay" }} />
        <SheetCase
          label="unset"
          note="Follows the viewport: inline on desktop, overlay on mobile."
        />
      </Section>

      <Section title="direction, as an overlay">
        <SheetCase
          label="left"
          sheetProps={{ display: "overlay", direction: "left" }}
        />
        <SheetCase
          label="right"
          sheetProps={{ display: "overlay", direction: "right" }}
        />
      </Section>

      <Section title="direction, inline">
        <SheetCase
          label="left"
          note="Should be ignored — inline is always on the right."
          sheetProps={{ display: "inline", direction: "left" }}
        />
        <SheetCase
          label="right"
          sheetProps={{ display: "inline", direction: "right" }}
        />
      </Section>
    </Showcase>
  ),
};

/** Dismissal behaviour. */
export const States: Story = {
  parameters: { valence: { layout: "flow" } },
  render: () => (
    <Showcase
      title="Dismissal"
      description="An overlay sheet can be dismissed by clicking the dimmed page behind it; an inline one has no overlay to click, so the close button and escape are all it has."
    >
      <Section>
        <SheetCase label="all dismissals" sheetProps={{ display: "overlay" }} />
        <SheetCase
          label="no overlay click"
          sheetProps={{ display: "overlay", closeOnOverlayClick: false }}
        />
        <SheetCase
          label="no escape"
          sheetProps={{ display: "overlay", closeOnEscape: false }}
        />
        <SheetCase
          label="inline, no escape"
          sheetProps={{ display: "inline", closeOnEscape: false }}
        />
      </Section>
    </Showcase>
  ),
};

/** Content of very different heights. */
export const Content: Story = {
  parameters: { valence: { layout: "flow" } },
  render: () => (
    <Showcase title="Sheet content">
      <Section>
        <SheetCase label="a single line">
          <Text>Short.</Text>
        </SheetCase>
        <SheetCase label="taller than the viewport">
          <Flex direction="column" width="100%">
            {Array.from({ length: 60 }, (_, index) => (
              <Text key={index}>
                {index + 1}. {Storybook.longText}
              </Text>
            ))}
          </Flex>
        </SheetCase>
        <SheetCase label="empty">
          <></>
        </SheetCase>
        <SheetCase
          label="a very long title"
          note="The header must wrap rather than push the close button off."
          sheetProps={{ title: Storybook.longText }}
        />
        <SheetCase
          label="non-latin and emoji"
          sheetProps={{ title: Storybook.awkwardText }}
        >
          <Text>{Storybook.awkwardText}</Text>
        </SheetCase>
        <SheetCase label="very wide content">
          <Text>{Storybook.longText.replace(/ /g, "")}</Text>
        </SheetCase>
      </Section>
    </Showcase>
  ),
};

/** Every radius, and the shadow. */
export const Radii: Story = {
  parameters: { valence: { layout: "flow" } },
  render: () => (
    <Showcase title="Sheet appearance">
      <Section title="radius">
        {Storybook.componentSizes.map((radius) => (
          <SheetCase key={radius} label={radius} sheetProps={{ radius }} />
        ))}
      </Section>

      <Section title="shadow">
        <SheetCase label="withShadow" sheetProps={{ withShadow: true }} />
        <SheetCase label="no shadow" sheetProps={{ withShadow: false }} />
      </Section>
    </Showcase>
  ),
};
