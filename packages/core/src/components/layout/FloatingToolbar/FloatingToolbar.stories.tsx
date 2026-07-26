import { Meta, StoryObj } from "@storybook/react";
import { IconBold, IconItalic, IconUnderline } from "@tabler/icons-react";
import {
  Controlled,
  Storybook,
  allMaterials,
  radiusControl,
} from "../../../../storybook";
import { Button } from "../../buttons/TextButton";
import { IconButton } from "../../buttons/IconButton";
import { Text } from "../../display/Text/Text";
import { TextInput } from "../../inputs/TextInput";
import { Flex } from "../Flex";
import { FloatingToolbar as FT } from "./FloatingToolbar";

const HORIZONTAL = ["left", "center", "right"] as const;
const VERTICAL = ["top", "center", "bottom"] as const;

/** A page for the toolbar to float over. */
function page() {
  return (
    <Flex direction="column" padding={20} width="100%">
      {Array.from({ length: 30 }, (_, index) => (
        <Text key={index}>
          {index + 1}. {Storybook.longText}
        </Text>
      ))}
    </Flex>
  );
}

const meta: Meta<typeof FT> = {
  component: FT,
  title: "Core/Layout/FloatingToolbar",
  argTypes: {
    positionHorizontal: {
      options: HORIZONTAL,
      control: { type: "inline-radio" },
      table: { category: "Layout" },
    },
    positionVertical: {
      options: VERTICAL,
      control: { type: "inline-radio" },
      table: { category: "Layout" },
    },
    offset: { control: { type: "number" }, table: { category: "Layout" } },
    radius: radiusControl,
    shadow: { control: { type: "boolean" }, table: { category: "Appearance" } },
    label: { control: { type: "text" }, table: { category: "Content" } },
  },
  parameters: { valence: { layout: "fullscreen" } },
};
export default meta;
type Story = StoryObj<typeof FT>;

/** A toolbar floating over a scrolling page. */
export const Playground: Story = {
  render: (args) => (
    <>
      <FT {...args} label="Yes">
        <Button>Hi</Button>
        <Controlled initial="">
          {(value, setValue) => (
            <TextInput
              value={value}
              setValue={setValue}
              placeholder="Type here..."
            />
          )}
        </Controlled>
      </FT>
      {page()}
    </>
  ),
};

/**
 * All nine anchor positions at once.
 *
 * The toolbar's whole job is to sit in a corner and stay there while the page
 * scrolls behind it, so the case worth having is every corner simultaneously —
 * one story per position would never show two of them colliding.
 */
export const Variants: Story = {
  render: (args) => (
    <>
      {VERTICAL.map((positionVertical) =>
        HORIZONTAL.map((positionHorizontal) => (
          <FT
            {...args}
            key={`${positionVertical}-${positionHorizontal}`}
            positionVertical={positionVertical}
            positionHorizontal={positionHorizontal}
            label={`${positionVertical} ${positionHorizontal}`}
          >
            <IconButton size="xs" tooltip="Bold">
              <IconBold />
            </IconButton>
          </FT>
        )),
      )}
      {page()}
    </>
  ),
};

/** Every material behind the toolbar. */
export const Materials: Story = {
  render: (args) => (
    <>
      {allMaterials().map(([name, material], index) => (
        <FT
          {...args}
          key={name}
          material={material}
          label={name}
          positionVertical="top"
          positionHorizontal="left"
          offset={10 + index * 90}
        >
          <IconButton size="xs">
            <IconBold />
          </IconButton>
        </FT>
      ))}
      {page()}
    </>
  ),
};

/** What a toolbar can hold. */
export const Content: Story = {
  render: (args) => (
    <>
      <FT
        {...args}
        positionVertical="top"
        positionHorizontal="center"
        label="A formatting toolbar"
      >
        <IconButton size="xs" tooltip="Bold">
          <IconBold />
        </IconButton>
        <IconButton size="xs" tooltip="Italic">
          <IconItalic />
        </IconButton>
        <IconButton size="xs" tooltip="Underline">
          <IconUnderline />
        </IconButton>
      </FT>

      <FT
        {...args}
        positionVertical="bottom"
        positionHorizontal="center"
        label={Storybook.longText}
      >
        <Button size="xs">A very long label below</Button>
      </FT>

      <FT {...args} positionVertical="bottom" positionHorizontal="right">
        <Controlled initial="">
          {(value, setValue) => (
            <TextInput
              value={value}
              setValue={setValue}
              placeholder="No label at all"
            />
          )}
        </Controlled>
      </FT>

      {page()}
    </>
  ),
};
