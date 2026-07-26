import { describe, expect, it, vi } from "vitest";
import { renderWithValence, screen } from "../../../../../test/utils";
import { Flex } from "./Flex";
import { FlexCenter } from "./Flex/FlexCenter";
import { Card } from "./Card";
import { Grid } from "./Grid";
import { Space } from "./Space";
import { PageContainer } from "./PageContainer";
import { OverflowContainer } from "./OverflowContainer";
import { SolidMaterial } from "../../utilities";

describe("Flex", () => {
  it("renders its children in a flex container", () => {
    const { container } = renderWithValence(
      <Flex>
        <span>child</span>
      </Flex>,
    );

    expect(screen.getByText("child")).toBeInTheDocument();
    expect(getComputedStyle(container.firstElementChild!).display).toBe("flex");
  });

  it("defaults to a row with start alignment", () => {
    const { container } = renderWithValence(<Flex>x</Flex>);
    const style = getComputedStyle(container.firstElementChild!);

    expect(style.flexDirection).toBe("row");
    expect(style.alignItems).toBe("flex-start");
    expect(style.justifyContent).toBe("flex-start");
  });

  it("centers both axes with the `center` shorthand", () => {
    const { container } = renderWithValence(<Flex center>x</Flex>);
    const style = getComputedStyle(container.firstElementChild!);

    expect(style.alignItems).toBe("center");
    expect(style.justifyContent).toBe("center");
  });

  it("lets explicit align/justify win over `center`", () => {
    const { container } = renderWithValence(
      <Flex center align="flex-end">
        x
      </Flex>,
    );
    const style = getComputedStyle(container.firstElementChild!);

    expect(style.alignItems).toBe("flex-end");
    expect(style.justifyContent).toBe("center");
  });

  it("applies direction, gap, wrap and grow", () => {
    const { container } = renderWithValence(
      <Flex direction="column" gap={12} wrap="wrap" grow>
        x
      </Flex>,
    );
    const style = getComputedStyle(container.firstElementChild!);

    expect(style.flexDirection).toBe("column");
    expect(style.gap).toBe("12px");
    expect(style.flexWrap).toBe("wrap");
    expect(style.flexGrow).toBe("1");
  });

  it("applies layout box props", () => {
    const { container } = renderWithValence(
      <Flex padding={8} margin={4} width={200} height={100}>
        x
      </Flex>,
    );
    const style = getComputedStyle(container.firstElementChild!);

    expect(style.padding).toBe("8px");
    expect(style.margin).toBe("4px");
    expect(style.width).toBe("200px");
    expect(style.height).toBe("100px");
  });

  it("applies a material when one is given", () => {
    const { container } = renderWithValence(
      <Flex material={new SolidMaterial({ color: "blue" })}>x</Flex>,
    );
    expect(
      getComputedStyle(container.firstElementChild!).backgroundColor,
    ).not.toBe("");
  });

  it("applies a radius size class", () => {
    const { container } = renderWithValence(<Flex radius="xl">x</Flex>);
    // xl radius in the default scale is 25px.
    expect(getComputedStyle(container.firstElementChild!).borderRadius).toBe(
      "25px",
    );
  });

  it("can be polymorphed to another element", () => {
    const { container } = renderWithValence(<Flex component="section">x</Flex>);
    expect(container.firstElementChild!.tagName).toBe("SECTION");
  });

  it("resolves responsive props", () => {
    const { container } = renderWithValence(
      <Flex direction={{ default: "column", mobile: "row" }}>x</Flex>,
    );
    expect(getComputedStyle(container.firstElementChild!).flexDirection).toBe(
      "column",
    );
  });
});

describe("FlexCenter", () => {
  it("centers an inner column of the requested width", () => {
    const { container } = renderWithValence(
      <FlexCenter innerWidth="60%">
        <span>child</span>
      </FlexCenter>,
    );

    const outer = getComputedStyle(container.firstElementChild!);
    expect(outer.alignItems).toBe("center");
    expect(outer.justifyContent).toBe("center");

    const inner = getComputedStyle(
      container.firstElementChild!.firstElementChild!,
    );
    expect(inner.width).toBe("60%");
    expect(inner.flexDirection).toBe("column");
    expect(screen.getByText("child")).toBeInTheDocument();
  });
});

describe("Card", () => {
  it("renders its children", () => {
    renderWithValence(
      <Card>
        <span>content</span>
      </Card>,
    );
    expect(screen.getByText("content")).toBeInTheDocument();
  });

  it("sizes itself from the card width scale", () => {
    renderWithValence(<Card size="xl">content</Card>);
    // xl cards default to 350px wide.
    expect(getComputedStyle(screen.getByRole("button")).width).toBe("350px");
  });

  it("hides overflowing content", () => {
    renderWithValence(<Card>content</Card>);
    expect(getComputedStyle(screen.getByRole("button")).overflow).toBe(
      "hidden",
    );
  });

  it("is clickable", async () => {
    const onClick = vi.fn();
    const { user } = renderWithValence(
      // CardProps has no click events in its type — ISSUE-14.
      <Card {...({ onClick } as any)}>content</Card>,
    );

    await user.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it("renders a Card.Section", () => {
    renderWithValence(
      <Card>
        <Card.Section>section</Card.Section>
      </Card>,
    );
    expect(screen.getByText("section")).toBeInTheDocument();
  });

  it("renders a Card.Image", () => {
    renderWithValence(
      <Card>
        <Card.Image src="/cover.png" alt="Cover" />
      </Card>,
    );
    expect(screen.getByAltText("Cover")).toBeInTheDocument();
  });

  it("stops clicks inside Card.Buttons from reaching the card", async () => {
    const onCardClick = vi.fn();
    const { user } = renderWithValence(
      <Card {...({ onClick: onCardClick } as any)}>
        <Card.Buttons>
          <span>actions</span>
        </Card.Buttons>
      </Card>,
    );

    await user.click(screen.getByText("actions"));
    expect(onCardClick).not.toHaveBeenCalled();
  });
});

describe("Grid", () => {
  it("renders a grid container with its children", () => {
    const { container } = renderWithValence(
      <Grid columns={3}>
        <span>a</span>
        <span>b</span>
      </Grid>,
    );

    expect(getComputedStyle(container.firstElementChild!).display).toBe("grid");
    expect(screen.getByText("a")).toBeInTheDocument();
    expect(screen.getByText("b")).toBeInTheDocument();
  });
});

describe("Space", () => {
  it("renders a spacer with the requested height", () => {
    const { container } = renderWithValence(<Space height={40} />);
    expect(getComputedStyle(container.firstElementChild!).height).toBe("40px");
  });
});

describe("PageContainer", () => {
  it("renders its children", () => {
    renderWithValence(
      <PageContainer>
        <span>page</span>
      </PageContainer>,
    );
    expect(screen.getByText("page")).toBeInTheDocument();
  });
});

describe("OverflowContainer", () => {
  it("renders its children inside a scrollable region", () => {
    const { container } = renderWithValence(
      <OverflowContainer>
        <span>scrollable</span>
      </OverflowContainer>,
    );

    expect(screen.getByText("scrollable")).toBeInTheDocument();
    expect(getComputedStyle(container.firstElementChild!).overflow).not.toBe(
      "visible",
    );
  });
});
