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
import { BottomSheet as BS } from "./BottomSheet";

/** A sheet and the button that opens it. Each needs its own disclosure. */
function SheetCase(props: {
  label: string;
  note?: string;
  children?: ReactNode;
  sheetProps?: Record<string, unknown>;
}) {
  const disclosure = useDisclosure();

  return (
    <Case label={props.label} note={props.note}>
      <Button onClick={disclosure.open}>{props.label}</Button>

      <BS title={props.label} disclosure={disclosure} {...props.sheetProps}>
        {props.children ?? <Text>{Storybook.longText}</Text>}
      </BS>
    </Case>
  );
}

const meta: Meta<typeof BS> = {
  component: BS,
  title: "Core/Overlays/BottomSheet",
  argTypes: {
    title: { control: { type: "text" }, table: { category: "Content" } },
    radius: radiusControl,
    allowInnerScrolling: {
      control: { type: "boolean" },
      table: { category: "Behaviour" },
    },
    releaseOffset: {
      control: { type: "number" },
      table: { category: "Behaviour" },
    },
    releaseVelocity: {
      control: { type: "number" },
      table: { category: "Behaviour" },
    },
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
    title: "Bottom Sheet title",
    allowInnerScrolling: true,
  },
};
export default meta;
type Story = StoryObj<typeof BS>;

/** One sheet, driven entirely by the controls panel. */
export const Playground: Story = {
  render: (args) => {
    const disclosure = useDisclosure();

    return (
      <Flex center height="100vh">
        <Button onClick={disclosure.open}>Open Bottom Sheet</Button>

        <BS {...args} disclosure={disclosure}>
          <Flex width="100%" height="200vh" material={new GlassMaterial()}>
            <Text>Hi</Text>
          </Flex>
        </BS>
      </Flex>
    );
  },
};

/**
 * The drag-to-dismiss thresholds.
 *
 * A bottom sheet is dismissed by dragging it down, and the two thresholds that
 * decide whether a drag counts are the ones an application is most likely to
 * want to tune — and the ones no static screenshot can show.
 */
export const Variants: Story = {
  parameters: { valence: { layout: "flow" } },
  render: () => (
    <Showcase
      title="Drag to dismiss"
      description="Open each and drag the sheet down slowly, then flick it. `releaseOffset` is how far it must travel; `releaseVelocity` is how fast a flick has to be to dismiss it regardless of distance."
    >
      <Section>
        <SheetCase label="defaults" />
        <SheetCase
          label="a short offset"
          note="Dismisses after a small drag."
          sheetProps={{ releaseOffset: 50 }}
        />
        <SheetCase
          label="a long offset"
          note="Needs almost the full height."
          sheetProps={{ releaseOffset: 800 }}
        />
        <SheetCase
          label="a low velocity threshold"
          note="Any flick dismisses it."
          sheetProps={{ releaseVelocity: 50 }}
        />
        <SheetCase
          label="a high velocity threshold"
          note="Only a hard flick dismisses it."
          sheetProps={{ releaseVelocity: 5000 }}
        />
      </Section>
    </Showcase>
  ),
};

/** Scrolling inside the sheet against dragging it. */
export const States: Story = {
  parameters: { valence: { layout: "flow" } },
  render: () => (
    <Showcase
      title="Inner scrolling"
      description="With `allowInnerScrolling`, a drag that starts inside scrollable content should scroll it rather than dismiss the sheet — but a drag on the header must still dismiss."
    >
      <Section>
        <SheetCase label="allowInnerScrolling" sheetProps={{ allowInnerScrolling: true }}>
          <Flex direction="column" width="100%">
            {Array.from({ length: 40 }, (_, index) => (
              <Text key={index}>
                {index + 1}. {Storybook.longText}
              </Text>
            ))}
          </Flex>
        </SheetCase>

        <SheetCase
          label="no inner scrolling"
          sheetProps={{ allowInnerScrolling: false }}
        >
          <Flex direction="column" width="100%">
            {Array.from({ length: 40 }, (_, index) => (
              <Text key={index}>
                {index + 1}. {Storybook.longText}
              </Text>
            ))}
          </Flex>
        </SheetCase>

        <SheetCase
          label="no overlay click"
          sheetProps={{ closeOnOverlayClick: false }}
        />
        <SheetCase label="no escape" sheetProps={{ closeOnEscape: false }} />
      </Section>
    </Showcase>
  ),
};

/** Content of very different heights. */
export const Content: Story = {
  parameters: { valence: { layout: "flow" } },
  render: () => (
    <Showcase
      title="Sheet content"
      description="A bottom sheet grows to fit its content up to the viewport. A one-line sheet must not be full height."
    >
      <Section>
        <SheetCase label="a single line">
          <Text>Short.</Text>
        </SheetCase>
        <SheetCase label="a paragraph">
          <Text>{Storybook.longText}</Text>
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
          sheetProps={{ title: Storybook.longText }}
        />
        <SheetCase
          label="non-latin and emoji"
          sheetProps={{ title: Storybook.awkwardText }}
        >
          <Text>{Storybook.awkwardText}</Text>
        </SheetCase>
      </Section>
    </Showcase>
  ),
};

/** Every radius, and the shadow. */
export const Radii: Story = {
  parameters: { valence: { layout: "flow" } },
  render: () => (
    <Showcase
      title="Sheet appearance"
      description="Only the sheet's top corners are visible, so the radius has to read there — a sheet with rounded bottom corners would float oddly above the screen edge."
    >
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
