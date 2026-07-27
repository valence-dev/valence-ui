import { Meta, StoryObj } from "@storybook/react";
import { ReactNode } from "react";
import { Case, Section, Showcase, Storybook } from "../../../../../storybook";
import { useDisclosure } from "../../../../hooks";
import { Button } from "../../../buttons/TextButton";
import { Text } from "../../../display/Text/Text";
import { Flex } from "../../../layout/Flex";
import { DynamicSheet as DS, DynamicSheetType } from "./DynamicSheet";

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

      <DS title={props.label} disclosure={disclosure} {...props.sheetProps}>
        {props.children ?? <Text>{Storybook.longText}</Text>}
      </DS>
    </Case>
  );
}

const TYPES: DynamicSheetType[] = ["inline", "overlay", "bottom"];

const meta: Meta<typeof DS> = {
  component: DS,
  title: "Core/Overlays/DynamicSheet",
  argTypes: {
    title: { control: { type: "text" }, table: { category: "Content" } },
    type: {
      options: TYPES,
      control: { type: "inline-radio" },
      description:
        "Which sheet to render. Unset, this follows the viewport: inline on desktop, overlay on tablet, bottom on mobile.",
      table: { category: "Layout" },
    },
  },
  args: {
    title: "Dynamic Sheet title",
  },
};
export default meta;
type Story = StoryObj<typeof DS>;

/** One sheet, driven entirely by the controls panel. */
export const Playground: Story = {
  render: (args) => {
    const disclosure = useDisclosure();

    return (
      <Flex center height="100vh">
        <Button onClick={disclosure.toggle}>Toggle Dynamic Sheet</Button>

        <DS {...args} disclosure={disclosure}>
          <Text>{Storybook.longText}</Text>
        </DS>
      </Flex>
    );
  },
};

/**
 * Each sheet the component can become.
 *
 * `DynamicSheet` is a switch between two other components, so the case that
 * matters is being able to see all three of its outcomes without resizing the
 * frame — which is the only way the default picks between them.
 */
export const Variants: Story = {
  parameters: { valence: { layout: "flow" } },
  render: () => (
    <Showcase
      title="Sheet types"
      description="`inline` and `overlay` render a `SideSheet`; `bottom` renders a `BottomSheet`. All three should share the same header and dismissal behaviour."
    >
      <Section>
        {TYPES.map((type) => (
          <SheetCase key={type} label={type} sheetProps={{ type }} />
        ))}
        <SheetCase
          label="unset"
          note="Follows the viewport — resize the frame and reopen."
        />
      </Section>
    </Showcase>
  ),
};

/** Props passed through to whichever sheet is chosen. */
export const Composition: Story = {
  parameters: { valence: { layout: "flow" } },
  render: () => (
    <Showcase
      title="Per-sheet props"
      description="`sideSheetProps` and `bottomSheetProps` are only applied to the sheet actually rendered, so a prop meant for one must not leak into the other."
    >
      <Section>
        <SheetCase
          label="side sheet, from the left"
          sheetProps={{
            type: "overlay",
            sideSheetProps: { direction: "left" },
          }}
        />
        <SheetCase
          label="side sheet, xl radius"
          sheetProps={{ type: "overlay", sideSheetProps: { radius: "xl" } }}
        />
        <SheetCase
          label="bottom sheet, no inner scrolling"
          sheetProps={{
            type: "bottom",
            bottomSheetProps: { allowInnerScrolling: false },
          }}
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
          label="bottom sheet, xl radius"
          sheetProps={{ type: "bottom", bottomSheetProps: { radius: "xl" } }}
        />
      </Section>
    </Showcase>
  ),
};

/** Content across all three types. */
export const Content: Story = {
  parameters: { valence: { layout: "flow" } },
  render: () => (
    <Showcase
      title="Content in every type"
      description="The same content in each sheet, so a layout that only breaks in one of them is visible against the other two."
    >
      {TYPES.map((type) => (
        <Section key={type} title={type}>
          <SheetCase label={`${type} · short`} sheetProps={{ type }}>
            <Text>Short.</Text>
          </SheetCase>
          <SheetCase label={`${type} · tall`} sheetProps={{ type }}>
            <Flex direction="column" width="100%">
              {Array.from({ length: 60 }, (_, index) => (
                <Text key={index}>
                  {index + 1}. {Storybook.longText}
                </Text>
              ))}
            </Flex>
          </SheetCase>
          <SheetCase
            label={`${type} · long title`}
            sheetProps={{ type, title: Storybook.longText }}
          />
          <SheetCase label={`${type} · empty`} sheetProps={{ type }}>
            <></>
          </SheetCase>
        </Section>
      ))}
    </Showcase>
  ),
};
