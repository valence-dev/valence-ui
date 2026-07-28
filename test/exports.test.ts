import { describe, expect, it } from "vitest";
import * as core from "../packages/core/src";

// Every symbol referenced by the V4 documentation must actually be exported.
const DOCUMENTED = [
  "ValenceProvider", "useValence", "AnimationSection",
  "Material", "AirMaterial", "GlassMaterial", "PaperMaterial", "SolidMaterial",
  "DEFAULT_PALETTE", "useColors", "useColorScheme",
  "useAnimation", "useBreakpoint", "useResponsiveProps", "useDisclosure",
  "Button", "PrimitiveButton", "IconButton", "ButtonWithIcon", "GridButton",
  "MultipartButton", "UnstyledButton",
  "Text", "Title", "Icon", "Loader", "Pill", "Alert", "Stepper", "ColorSwatch",
  "Avatar", "AvatarGroup", "Image", "Accordion", "Spoiler",
  "TextInput", "Textarea", "NumberInput", "SelectInput", "Switch", "Slider",
  "RangeSlider", "SegmentedControl", "PillSelector", "InputContainer",
  "DropdownContainer", "ColorPicker",
  "Flex", "FlexCenter", "Card", "Grid", "Space", "Header", "PageContainer",
  "OverflowContainer", "FloatingToolbar", "AppContainer", "AppNav",
  "Modal", "Tooltip", "ModalBackground", "BottomSheet", "SideSheet", "DynamicSheet",
];

describe("public API", () => {
  it.each(DOCUMENTED)("exports %s", (name) => {
    expect(core[name as keyof typeof core]).toBeDefined();
  });

  it("no longer exports the removed V3 symbols", () => {
    expect("StyledFlex" in core).toBe(false);
  });

  it("no longer exports the pre-4.0 motion behaviour helpers", () => {
    // Superseded by `useAnimation` and the `animation` prop (ISSUE-22).
    expect("getMotionBehaviour" in core).toBe(false);
  });
});
