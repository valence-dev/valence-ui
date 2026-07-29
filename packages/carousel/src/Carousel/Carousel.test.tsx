import { describe, expect, it, vi } from "vitest";
import { Flex, Text } from "@valence-ui/core";
import { renderWithValence, screen } from "../../../../test/utils";
import { Carousel } from "./Carousel";
import { useCarouselChild } from "./CarouselChild";

/** Reports the state the carousel publishes for the slide rendering it. */
function ReportingSlide() {
  const { index, isActive, isNearest, isDragging } = useCarouselChild();
  return (
    <Flex data-testid={`slide-${index}`}>
      <Text>{`${index}:${isActive}:${isNearest}:${isDragging}`}</Text>
    </Flex>
  );
}

describe("Carousel", () => {
  it("renders every child", () => {
    renderWithValence(
      <Carousel>
        {[0, 1, 2].map((i) => (
          <Flex key={i}>
            <Text>{`slide ${i}`}</Text>
          </Flex>
        ))}
      </Carousel>,
    );

    for (const i of [0, 1, 2]) {
      expect(screen.getByText(`slide ${i}`)).toBeInTheDocument();
    }
  });

  it("does not push its own flags onto a plain element child (ISSUE-104)", () => {
    // A bare `<Flex>` is the obvious thing to reach for as a slide. It spreads
    // what it doesn't recognise onto the DOM, so injecting `isActive`,
    // `isNearest` and `isDragging` into it made React warn about unknown
    // attributes — for a caller who did nothing wrong.
    const error = vi.spyOn(console, "error").mockImplementation(() => {});

    renderWithValence(
      <Carousel>
        {[0, 1, 2].map((i) => (
          <Flex key={i}>
            <Text>{`slide ${i}`}</Text>
          </Flex>
        ))}
      </Carousel>,
    );

    const unrecognised = error.mock.calls
      .map((call) => call.join(" "))
      .filter((message) => message.includes("does not recognize"));
    expect(unrecognised).toEqual([]);

    error.mockRestore();
  });

  it("leaves the DOM free of the flags it used to inject", () => {
    const { container } = renderWithValence(
      <Carousel>
        {[0, 1].map((i) => (
          <Flex key={i}>
            <Text>{`slide ${i}`}</Text>
          </Flex>
        ))}
      </Carousel>,
    );

    for (const attribute of ["isactive", "isnearest", "isdragging"]) {
      expect(container.querySelector(`[${attribute}]`)).toBeNull();
    }
  });

  it("publishes each slide's state through context", () => {
    renderWithValence(
      <Carousel>
        {[0, 1, 2].map((i) => (
          <ReportingSlide key={i} />
        ))}
      </Carousel>,
    );

    // The first slide is both the active and the nearest one before anything
    // is scrolled.
    expect(screen.getByTestId("slide-0")).toBeInTheDocument();
    expect(screen.getByText("0:true:true:false")).toBeInTheDocument();
    expect(screen.getByText("1:false:false:false")).toBeInTheDocument();
    expect(screen.getByText("2:false:false:false")).toBeInTheDocument();
  });

  it("gives a slide rendered outside a carousel an inert state", () => {
    renderWithValence(<ReportingSlide />);
    expect(screen.getByText("-1:false:false:false")).toBeInTheDocument();
  });
});
