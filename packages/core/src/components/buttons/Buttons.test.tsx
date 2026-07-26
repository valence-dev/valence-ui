import { describe, expect, it, vi } from "vitest";
import { useState } from "react";
import { IconHeart } from "@tabler/icons-react";
import { renderWithValence, screen, within } from "../../../../../test/utils";
import { PrimitiveButton } from "./PrimitiveButton";
import { Button as TextButton } from "./TextButton/TextButton";
import { IconButton } from "./IconButton";
import { ButtonWithIcon } from "./ButtonWithIcon";
import { GridButton } from "./GridButton";
import { MultipartButton } from "./MultipartButton";
import { UnstyledButton } from "./UnstyledButton";
import { SolidMaterial } from "../../utilities";

/** Returns the concatenated CSS text of every emotion rule on an element. */
function emittedCssFor(element: Element): string {
  const classes = Array.from(element.classList);
  return Array.from(document.styleSheets)
    .flatMap((sheet) => Array.from(sheet.cssRules ?? []))
    .filter((rule) =>
      classes.some((className) => rule.cssText.includes(`.${className}`)),
    )
    .map((rule) => rule.cssText)
    .join("\n");
}

describe("PrimitiveButton", () => {
  it("renders its children inside a button element", () => {
    renderWithValence(<PrimitiveButton>Save</PrimitiveButton>);
    expect(screen.getByRole("button", { name: "Save" })).toBeInTheDocument();
  });

  it("fires onClick when pressed", async () => {
    const onClick = vi.fn();
    const { user } = renderWithValence(
      <PrimitiveButton onClick={onClick}>Save</PrimitiveButton>,
    );

    await user.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it("renders a loader instead of children while loading", () => {
    renderWithValence(<PrimitiveButton loading>Save</PrimitiveButton>);
    expect(screen.queryByText("Save")).not.toBeInTheDocument();
  });

  it("dims itself and shows a not-allowed cursor when disabled", () => {
    renderWithValence(<PrimitiveButton disabled>Save</PrimitiveButton>);
    const style = getComputedStyle(screen.getByRole("button"));

    expect(style.opacity).toBe("0.75");
    expect(style.cursor).toBe("not-allowed");
  });

  it("marks the native button as disabled", () => {
    renderWithValence(<PrimitiveButton disabled>Save</PrimitiveButton>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("does not fire onClick when disabled", async () => {
    const onClick = vi.fn();
    const { user } = renderWithValence(
      <PrimitiveButton disabled onClick={onClick}>
        Save
      </PrimitiveButton>,
    );

    await user.click(screen.getByRole("button"));
    expect(onClick).not.toHaveBeenCalled();
  });

  it("sets aria-disabled and suppresses onClick when polymorphed to a non-button element", async () => {
    const onClick = vi.fn();
    const { user } = renderWithValence(
      <PrimitiveButton
        component="a"
        href="https://example.com"
        disabled
        onClick={onClick}
      >
        Link
      </PrimitiveButton>,
    );

    const link = screen.getByRole("link", { name: "Link" });
    expect(link).toHaveAttribute("aria-disabled", "true");
    expect(link).not.toHaveAttribute("disabled");

    await user.click(link);
    expect(onClick).not.toHaveBeenCalled();
  });

  it("renders as an anchor when polymorphed to `a`", () => {
    renderWithValence(
      <PrimitiveButton component="a" href="https://example.com">
        Link
      </PrimitiveButton>,
    );

    const link = screen.getByRole("link", { name: "Link" });
    expect(link).toHaveAttribute("href", "https://example.com");
  });

  it("applies the theme height for the requested size class", () => {
    renderWithValence(<PrimitiveButton size="xl">Save</PrimitiveButton>);
    // xl height in the default size scale is 60px.
    expect(getComputedStyle(screen.getByRole("button")).height).toBe("60px");
  });

  it("becomes square when `square` is set", () => {
    renderWithValence(<PrimitiveButton square>X</PrimitiveButton>);
    const style = getComputedStyle(screen.getByRole("button"));

    expect(style.width).toBe(style.height);
    expect(style.padding).toBe("0px");
  });

  it("grows to fill its container when `grow` is set", () => {
    renderWithValence(<PrimitiveButton grow>Save</PrimitiveButton>);
    expect(getComputedStyle(screen.getByRole("button")).flexGrow).toBe("1");
  });

  it("lets a custom material drive its colors", () => {
    renderWithValence(
      <PrimitiveButton material={new SolidMaterial({ color: "blue" })}>
        Save
      </PrimitiveButton>,
    );
    expect(
      getComputedStyle(screen.getByRole("button")).backgroundColor,
    ).not.toBe("");
  });

  it("resolves responsive props against the current breakpoint", () => {
    renderWithValence(
      <PrimitiveButton size={{ default: "xl", mobile: "xs" }}>
        Save
      </PrimitiveButton>,
    );
    // Test viewport is 1280px wide, so the default (xl -> 60px) applies.
    expect(getComputedStyle(screen.getByRole("button")).height).toBe("60px");
  });

  it("forwards a ref to the underlying element", () => {
    const ref = { current: null as HTMLElement | null };
    renderWithValence(<PrimitiveButton ref={ref}>Save</PrimitiveButton>);
    expect(ref.current).toBeInstanceOf(HTMLElement);
  });
});

describe("TextButton", () => {
  it("renders its label", () => {
    renderWithValence(<TextButton>Continue</TextButton>);
    expect(
      screen.getByRole("button", { name: "Continue" }),
    ).toBeInTheDocument();
  });

  it("forwards textProps to the label", () => {
    renderWithValence(
      <TextButton textProps={{ id: "label", bold: true }}>Continue</TextButton>,
    );
    expect(document.getElementById("label")).toHaveTextContent("Continue");
  });

  it("fires onClick", async () => {
    const onClick = vi.fn();
    const { user } = renderWithValence(
      <TextButton onClick={onClick}>Continue</TextButton>,
    );

    await user.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledOnce();
  });
});

describe("IconButton", () => {
  it("renders an icon inside a square button", () => {
    renderWithValence(
      <IconButton aria-label="Favorite">
        <IconHeart />
      </IconButton>,
    );

    const button = screen.getByRole("button");
    expect(button.querySelector("svg")).toBeInTheDocument();

    const style = getComputedStyle(button);
    expect(style.width).toBe(style.height);
  });

  it("marks the button as a tooltip trigger when `tooltip` is supplied", () => {
    renderWithValence(
      <IconButton tooltip="Add to favorites">
        <IconHeart />
      </IconButton>,
    );

    // The tooltip starts closed; the trigger carries floating-ui's state attr.
    expect(screen.getByRole("button")).toHaveAttribute("data-state", "closed");
    expect(screen.queryByText("Add to favorites")).not.toBeInTheDocument();
  });

  it("shows tooltip content when driven by a controlled disclosure", () => {
    const openDisclosure = {
      opened: true,
      open: () => {},
      close: () => {},
      toggle: () => {},
      update: () => {},
    };

    renderWithValence(
      // No cast: `disclosure` is part of IconButton's tooltipProps type, so
      // this line failing to compile is itself the regression test.
      <IconButton
        tooltip="Add to favorites"
        tooltipProps={{ disclosure: openDisclosure }}
      >
        <IconHeart />
      </IconButton>,
    );

    expect(screen.getByText("Add to favorites")).toBeInTheDocument();
  });

  it("hides tooltip content when the controlled disclosure is closed", () => {
    const closedDisclosure = {
      opened: false,
      open: () => {},
      close: () => {},
      toggle: () => {},
      update: () => {},
    };

    renderWithValence(
      <IconButton
        tooltip="Add to favorites"
        tooltipProps={{ disclosure: closedDisclosure }}
      >
        <IconHeart />
      </IconButton>,
    );

    expect(screen.queryByText("Add to favorites")).not.toBeInTheDocument();
  });

  it("does not render tooltip content when no tooltip is given", () => {
    renderWithValence(
      <IconButton>
        <IconHeart />
      </IconButton>,
    );
    expect(screen.queryByRole("tooltip")).not.toBeInTheDocument();
  });
});

describe("ButtonWithIcon", () => {
  it("renders both an icon and a label", () => {
    renderWithValence(
      <ButtonWithIcon icon={<IconHeart />}>Favorite</ButtonWithIcon>,
    );

    const button = screen.getByRole("button");
    expect(within(button).getByText("Favorite")).toBeInTheDocument();
    expect(button.querySelector("svg")).toBeInTheDocument();
  });

  it("reverses the layout when the icon is on the right", () => {
    renderWithValence(
      <ButtonWithIcon icon={<IconHeart />} iconPosition="right">
        Favorite
      </ButtonWithIcon>,
    );
    expect(getComputedStyle(screen.getByRole("button")).flexDirection).toBe(
      "row-reverse",
    );
  });

  it("swaps the icon for a loader while loading", () => {
    renderWithValence(
      <ButtonWithIcon icon={<IconHeart />} loading>
        Favorite
      </ButtonWithIcon>,
    );

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(within(button).getByText("Favorite")).toBeInTheDocument();
  });
});

describe("GridButton", () => {
  it("stacks the icon above the label", () => {
    renderWithValence(<GridButton icon={<IconHeart />}>Grid</GridButton>);
    expect(getComputedStyle(screen.getByRole("button")).flexDirection).toBe(
      "column",
    );
  });

  it("flips the stack when the icon sits at the bottom", () => {
    renderWithValence(
      <GridButton icon={<IconHeart />} iconPosition="bottom">
        Grid
      </GridButton>,
    );
    expect(getComputedStyle(screen.getByRole("button")).flexDirection).toBe(
      "column-reverse",
    );
  });

  it("renders as a square by default", () => {
    renderWithValence(<GridButton icon={<IconHeart />}>Grid</GridButton>);
    const style = getComputedStyle(screen.getByRole("button"));
    expect(style.width).toBe(style.height);
  });
});

describe("MultipartButton", () => {
  it("renders a title and a subtitle", () => {
    renderWithValence(<MultipartButton title="Account" subtitle="Manage" />);

    expect(screen.getByText("Account")).toBeInTheDocument();
    expect(screen.getByText("Manage")).toBeInTheDocument();
  });

  it("omits the subtitle when not provided", () => {
    renderWithValence(<MultipartButton title="Account" />);
    expect(screen.getByText("Account")).toBeInTheDocument();
    expect(screen.getByRole("button").textContent).toBe("Account");
  });

  it("renders a chevron on the right by default", () => {
    renderWithValence(<MultipartButton title="Account" />);
    expect(screen.getByRole("button").querySelector("svg")).toBeInTheDocument();
  });

  it("renders multiple left icons when given an array", () => {
    renderWithValence(
      <MultipartButton
        title="Account"
        rightIcon={null}
        leftIcon={[<IconHeart key="a" />, <IconHeart key="b" />]}
      />,
    );
    expect(screen.getByRole("button").querySelectorAll("svg")).toHaveLength(2);
  });
});

describe("UnstyledButton", () => {
  it("renders with no chrome of its own", () => {
    renderWithValence(<UnstyledButton>Bare</UnstyledButton>);
    const button = screen.getByRole("button");
    const style = getComputedStyle(button);

    expect(style.padding).toBe("0px");
    expect(style.margin).toBe("0px");
    expect(style.textDecoration).toBe("none");
    // jsdom does not expand the `border`/`background` shorthands into computed
    // longhands, so assert against the emitted rule instead.
    expect(emittedCssFor(button)).toContain("border: none");
    expect(emittedCssFor(button)).toContain("background: none");
  });

  it("fires onClick", async () => {
    const onClick = vi.fn();
    const { user } = renderWithValence(
      <UnstyledButton onClick={onClick}>Bare</UnstyledButton>,
    );

    await user.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it("can be polymorphed to a non-button element", () => {
    renderWithValence(
      <UnstyledButton component="div">Bare</UnstyledButton>,
    );
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
    expect(screen.getByText("Bare").tagName).toBe("DIV");
  });

  it("takes an `animation` prop, animating in components mounted after first paint", async () => {
    // Mounted via a state update well after the app's first paint (ISSUE-47),
    // so — unlike the "already on screen at first paint" case below — this
    // is exactly the kind of entrance that should still animate in.
    function Harness() {
      const [show, setShow] = useState(false);
      return (
        <div>
          <button onClick={() => setShow(true)}>reveal</button>
          {show && (
            <UnstyledButton animation={{ transitionAnimation: "fade" }}>
              Bare
            </UnstyledButton>
          )}
        </div>
      );
    }

    const { user } = renderWithValence(<Harness />);
    await user.click(screen.getByRole("button", { name: "reveal" }));

    // `fade` starts at opacity 0, which is what the initial variant applies.
    expect(screen.getByRole("button", { name: "Bare" })).toHaveStyle({
      opacity: "0",
    });
  });

  it("suppresses its animate-in transition when already on screen at first paint (ISSUE-47)", () => {
    renderWithValence(
      <UnstyledButton animation={{ transitionAnimation: "fade" }}>
        Bare
      </UnstyledButton>,
    );

    // Without suppression this would be stuck at `opacity: 0` (its `initial`
    // variant — nothing drives the animation forward in jsdom). Mounting
    // straight into `animate` avoids the mass "pop-in" issue #47 describes.
    expect(screen.getByRole("button")).toHaveStyle({ opacity: "1" });
  });

  it("applies no animation by default", () => {
    renderWithValence(<UnstyledButton>Bare</UnstyledButton>);

    // Unlike PrimitiveButton, an unstyled button opts into nothing.
    expect(screen.getByRole("button")).not.toHaveStyle({ opacity: "0" });
  });
});
