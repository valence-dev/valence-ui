import { describe, expect, it } from "vitest";
import { IconHeart } from "@tabler/icons-react";
import { renderWithValence, screen } from "../../../../../test/utils";
import { Text } from "./Text";
import { Title } from "./Text/Title";
import { Icon } from "./Icon";
import { Loader } from "./Loader";
import { Pill } from "./Pill";
import { ColorSwatch } from "./ColorSwatch";
import { Avatar } from "./images/Avatar";
import { AvatarGroup } from "./images/AvatarGroup";
import { Image } from "./images/Image";

describe("Text", () => {
  it("renders its content", () => {
    renderWithValence(<Text>Hello world</Text>);
    expect(screen.getByText("Hello world")).toBeInTheDocument();
  });

  it("renders as a <p> by default", () => {
    renderWithValence(<Text>Hello</Text>);
    expect(screen.getByText("Hello").tagName).toBe("P");
  });

  it("can be polymorphed to another element", () => {
    renderWithValence(<Text component="span">Hello</Text>);
    expect(screen.getByText("Hello").tagName).toBe("SPAN");
  });

  it("applies the font size for the requested size class", () => {
    renderWithValence(<Text size="xl">Hello</Text>);
    // xl font size in the default scale is 20px.
    expect(getComputedStyle(screen.getByText("Hello")).fontSize).toBe("20px");
  });

  it("prefers an explicit fontSize over the size class", () => {
    renderWithValence(
      <Text size="xs" fontSize={42}>
        Hello
      </Text>,
    );
    expect(getComputedStyle(screen.getByText("Hello")).fontSize).toBe("42px");
  });

  it("applies bold and italic shorthands", () => {
    const { container } = renderWithValence(
      <Text bold italic>
        Hello
      </Text>,
    );
    const style = getComputedStyle(container.querySelector("p")!);

    expect(style.fontWeight).toBe("bold");
    expect(style.fontStyle).toBe("italic");
  });

  it("applies text alignment and transform", () => {
    const { container } = renderWithValence(
      <Text align="center" transform="uppercase">
        Hello
      </Text>,
    );
    const style = getComputedStyle(container.querySelector("p")!);

    expect(style.textAlign).toBe("center");
    expect(style.textTransform).toBe("uppercase");
  });

  it("clamps to a maximum number of lines", () => {
    const { container } = renderWithValence(<Text maxLines={2}>Hello</Text>);
    const style = getComputedStyle(container.querySelector("p")!);

    expect(style.overflow).toBe("hidden");
    expect(style.getPropertyValue("-webkit-line-clamp")).toBe("2");
  });

  it("disables selection when userSelect is false", () => {
    const { container } = renderWithValence(
      <Text userSelect={false}>Hello</Text>,
    );
    expect(getComputedStyle(container.querySelector("p")!).userSelect).toBe(
      "none",
    );
  });

  describe("markdown-ish formatting", () => {
    it("renders **bold** segments as <b>", () => {
      const { container } = renderWithValence(<Text>a **bold** b</Text>);
      expect(container.querySelector("b")).toHaveTextContent("bold");
    });

    it("renders *italic* segments as <i>", () => {
      const { container } = renderWithValence(<Text>a *slanted* b</Text>);
      expect(container.querySelector("i")).toHaveTextContent("slanted");
    });

    it("renders ***bold italic*** as nested <b><i>", () => {
      const { container } = renderWithValence(<Text>a ***both*** b</Text>);
      const bold = container.querySelector("b");

      expect(bold).toBeTruthy();
      expect(bold!.querySelector("i")).toHaveTextContent("both");
    });

    it("renders `code` segments in the monospace family", () => {
      const { container } = renderWithValence(<Text>a `code` b</Text>);
      const span = Array.from(container.querySelectorAll("span")).find((s) =>
        s.textContent?.includes("code"),
      );

      expect(span).toBeTruthy();
      expect(span!.style.fontFamily).toBe("monospace");
    });

    it("renders newlines as <br>", () => {
      const { container } = renderWithValence(<Text>{"a\nb"}</Text>);
      expect(container.querySelector("br")).toBeInTheDocument();
    });

    it("renders <hl> segments as highlighted spans", () => {
      const { container } = renderWithValence(
        <Text>{"a <hl>lit</hl> b"}</Text>,
      );
      const span = Array.from(container.querySelectorAll("span")).find((s) =>
        s.textContent?.includes("lit"),
      );

      expect(span).toBeTruthy();
      expect(span!.style.backgroundColor).not.toBe("");
    });
  });
});

describe("Title", () => {
  it("renders an <h1> by default", () => {
    renderWithValence(<Title>Heading</Title>);
    expect(
      screen.getByRole("heading", { level: 1, name: "Heading" }),
    ).toBeInTheDocument();
  });

  it.each([1, 2, 3, 4, 5, 6] as const)(
    "renders order %i as the matching heading level",
    (order) => {
      renderWithValence(<Title order={order}>Heading</Title>);
      expect(
        screen.getByRole("heading", { level: order }),
      ).toBeInTheDocument();
    },
  );

  it("takes its font size from the theme's title scale", () => {
    renderWithValence(<Title order={1}>Heading</Title>);
    // Order 1 defaults to 28px in the theme.
    expect(
      getComputedStyle(screen.getByRole("heading", { level: 1 })).fontSize,
    ).toBe("28px");
  });

  it("lets an explicit prop override the theme title props", () => {
    renderWithValence(
      <Title order={1} fontSize={11}>
        Heading
      </Title>,
    );
    expect(
      getComputedStyle(screen.getByRole("heading", { level: 1 })).fontSize,
    ).toBe("11px");
  });
});

describe("Icon", () => {
  it("renders nothing when it has no children", () => {
    const { container } = renderWithValence(<Icon />);
    expect(container).toBeEmptyDOMElement();
  });

  it("sizes the icon from the theme by default", () => {
    const { container } = renderWithValence(
      <Icon>
        <IconHeart />
      </Icon>,
    );
    // sm icon size in the default scale is 20px.
    expect(container.querySelector("svg")).toHaveAttribute("width", "20");
  });

  it("honours an explicit size and stroke", () => {
    const { container } = renderWithValence(
      <Icon size={40} stroke={3}>
        <IconHeart />
      </Icon>,
    );

    const svg = container.querySelector("svg")!;
    expect(svg).toHaveAttribute("width", "40");
    expect(svg).toHaveAttribute("stroke-width", "3");
  });

  it("resolves a theme color key to a hex value", () => {
    const { container } = renderWithValence(
      <Icon color="black">
        <IconHeart />
      </Icon>,
    );
    expect(container.querySelector("svg")!.getAttribute("stroke")).toMatch(
      /^#/,
    );
  });
});

describe("Loader", () => {
  it("renders a spinner", () => {
    const { container } = renderWithValence(<Loader />);
    expect(container.firstElementChild).toBeInTheDocument();
  });

  it("scales with the size class", () => {
    const { container: small } = renderWithValence(<Loader size="xs" />);
    const smallHeight = getComputedStyle(
      small.firstElementChild!.firstElementChild!,
    ).height;

    const { container: large } = renderWithValence(<Loader size="xl" />);
    const largeHeight = getComputedStyle(
      large.firstElementChild!.firstElementChild!,
    ).height;

    expect(parseFloat(largeHeight)).toBeGreaterThan(parseFloat(smallHeight));
  });
});

describe("Pill", () => {
  it("renders its content", () => {
    renderWithValence(<Pill>Beta</Pill>);
    expect(screen.getByText("Beta")).toBeInTheDocument();
  });
});

describe("ColorSwatch", () => {
  it("renders a swatch for a theme color", () => {
    const { container } = renderWithValence(<ColorSwatch color="blue" />);
    expect(container.firstElementChild).toBeInTheDocument();
  });
});

describe("Image", () => {
  it("renders an img with the given source and alt text", () => {
    renderWithValence(<Image src="/logo.png" alt="Logo" />);

    const image = screen.getByAltText("Logo");
    expect(image.tagName).toBe("IMG");
    expect(image).toHaveAttribute("src", "/logo.png");
  });

  it("renders the placeholder instead of an img when there is no source", () => {
    const { container } = renderWithValence(<Image alt="Logo" />);

    expect(screen.queryByAltText("Logo")).not.toBeInTheDocument();
    expect(container.querySelector("svg")).toBeInTheDocument();
  });
});

describe("Avatar", () => {
  it("renders the image when a source is given", () => {
    renderWithValence(<Avatar src="/me.png" alt="Me" />);

    const image = screen.getByAltText("Me");
    expect(image).toHaveAttribute("src", "/me.png");
  });

  it("falls back to a placeholder icon when there is no source", () => {
    // `src` is omitted entirely, not passed as `undefined`: this line failing
    // to compile is the regression test for ISSUE-13.
    const { container } = renderWithValence(<Avatar alt="Me" />);
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("falls back to a placeholder icon for an explicitly undefined source", () => {
    const { container } = renderWithValence(
      <Avatar src={undefined} alt="Me" />,
    );
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("renders a secondary icon when supplied", () => {
    const { container } = renderWithValence(
      <Avatar src="/me.png" alt="Me" secondaryIcon={<IconHeart />} />,
    );
    expect(container.querySelectorAll("svg").length).toBeGreaterThan(0);
  });

  it("wraps the image in a positioned span so badges can anchor to it", () => {
    const { container } = renderWithValence(<Avatar src="/me.png" alt="Me" />);

    const span = container.querySelector("span")!;
    expect(span).toBeInTheDocument();
    expect(span.style.position).toBe("relative");
  });

  it("renders its image container as a circle", () => {
    renderWithValence(<Avatar src="/me.png" alt="Me" />);

    const container = screen.getByAltText("Me").parentElement!;
    expect(getComputedStyle(container).borderRadius).toBe("50%");
  });
});

describe("AvatarGroup", () => {
  it("renders every avatar it is given", () => {
    renderWithValence(
      <AvatarGroup>
        <Avatar src="/a.png" alt="A" />
        <Avatar src="/b.png" alt="B" />
      </AvatarGroup>,
    );

    expect(screen.getByAltText("A")).toBeInTheDocument();
    expect(screen.getByAltText("B")).toBeInTheDocument();
  });

  it("stacks avatars so earlier ones sit on top", () => {
    const { container } = renderWithValence(
      <AvatarGroup>
        <Avatar src="/a.png" alt="A" />
        <Avatar src="/b.png" alt="B" />
      </AvatarGroup>,
    );

    const [first, second] = Array.from(container.querySelectorAll("span"));
    expect(Number(first.style.zIndex)).toBeGreaterThan(
      Number(second.style.zIndex),
    );
  });
});
