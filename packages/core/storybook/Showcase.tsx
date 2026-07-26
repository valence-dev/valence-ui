import { CSSProperties, ReactNode } from "react";
import { Flex } from "../src/components/layout/Flex";
import { Text } from "../src/components/display/Text/Text";
import { Title } from "../src/components/display/Text/Title";

/**
 * The layout primitives that stories are built from.
 *
 * A story's job here is to put many *cases* of a component on screen at once —
 * every size beside every other size, every state beside every other state —
 * so a regression is visible by comparison rather than by clicking through
 * controls one value at a time. These components supply the labelling and
 * spacing that makes such a page readable, and nothing else: they render no
 * library chrome of their own beyond `Flex` and `Text`, so what you are
 * looking at is the component under test.
 */

export type ShowcaseProps = {
  /** The sections of the page. */
  children?: ReactNode;
  /** An optional heading naming what the whole page is demonstrating. */
  title?: string;
  /** An optional sentence explaining what to look for. */
  description?: string;
};

/**
 * The root of a case-matrix story: a scrolling, padded column of `Section`s.
 *
 * Deliberately not height-constrained. The single-instance playground stories
 * centre themselves in the viewport, but a matrix is usually taller than the
 * frame and needs to scroll rather than clip.
 */
export function Showcase(props: ShowcaseProps) {
  const { children, title, description } = props;

  return (
    <Flex direction="column" padding={20} gap={30} width="100%">
      {(title || description) && (
        <Flex direction="column" gap={5}>
          {title && <Title order={2}>{title}</Title>}
          {description && <Text>{description}</Text>}
        </Flex>
      )}

      {children}
    </Flex>
  );
}

export type SectionProps = {
  /** The cases in this section. */
  children?: ReactNode;
  /** The axis this section varies, e.g. `"Sizes"`. */
  title?: string;
  /** What to look for in this section. */
  description?: string;
  /** Lay the cases out in a column instead of a wrapping row. */
  column?: boolean;
  /** Sets the `align-items` of the case row. Defaults to `flex-start`. */
  align?: CSSProperties["alignItems"];
};

/** One axis of variation within a `Showcase` — a labelled group of `Case`s. */
export function Section(props: SectionProps) {
  const { children, title, description, column = false, align } = props;

  return (
    <Flex direction="column" gap={10} width="100%">
      {title && <Title order={4}>{title}</Title>}
      {description && <Text size="sm">{description}</Text>}

      {/*
        `stretch` so every case in the row is the height of the tallest one.
        Each case then centres its own content in that height, which keeps the
        labels on one line across the row while still letting components of
        different heights — an `xs` button beside an `xl` one — sit on a shared
        centre line.
      */}
      <Flex
        direction={column ? "column" : "row"}
        wrap={column ? "nowrap" : "wrap"}
        align={align ?? "stretch"}
        gap={20}
        width="100%"
      >
        {children}
      </Flex>
    </Flex>
  );
}

export type CaseProps = {
  /** The component instance being shown. */
  children?: ReactNode;
  /** The name of this case — the prop value it is demonstrating. */
  label?: string;
  /** An optional note on what this case is checking. */
  note?: string;
  /** Fixes the case's width, for cases that would otherwise size to content. */
  width?: CSSProperties["width"];
  /** Stretches the case to fill the row. */
  grow?: boolean;
};

/**
 * A single labelled instance of a component.
 *
 * The label sits above the instance rather than beside it so that a row of
 * cases stays aligned along the component's own top edge — otherwise a case
 * with a two-line label would push its component out of line with its
 * neighbours, and the comparison the matrix exists for is lost.
 */
export function Case(props: CaseProps) {
  const { children, label, note, width, grow = false } = props;

  return (
    <Flex direction="column" gap={5} width={width} grow={grow}>
      {label && (
        <Text size="xs" monospace color="black">
          {label}
        </Text>
      )}

      {/* Grows into whatever height the row's tallest case sets, so the
          instance sits on a shared centre line with its neighbours. */}
      <Flex grow align="center" gap={10} width="100%">
        {children}
      </Flex>

      {note && (
        <Text size="xs" color="black">
          {note}
        </Text>
      )}
    </Flex>
  );
}

export type MatrixProps<T> = {
  /** The values to enumerate. */
  values: readonly T[];
  /** Renders one case from one value. */
  children: (value: T, index: number) => ReactNode;
  /** Labels a case. Defaults to the value stringified. */
  label?: (value: T, index: number) => string;
  /** Lay the cases out in a column instead of a wrapping row. */
  column?: boolean;
  /** The axis being varied, e.g. `"Sizes"`. */
  title?: string;
  /** What to look for. */
  description?: string;
  /** Sets the `align-items` of the case row. */
  align?: CSSProperties["alignItems"];
  /** Fixes each case's width. */
  caseWidth?: CSSProperties["width"];
};

/**
 * A `Section` whose cases are generated by mapping over a set of prop values.
 *
 * This is the shape most matrix stories want: `values` comes from `Storybook`
 * so the story enumerates whatever the library currently supports, and adding
 * a size or a material to the library extends every such story at once.
 */
export function Matrix<T>(props: MatrixProps<T>) {
  const {
    values,
    children,
    label = (value: T) => String(value),
    column = false,
    title,
    description,
    align,
    caseWidth,
  } = props;

  return (
    <Section
      title={title}
      description={description}
      column={column}
      align={align}
    >
      {values.map((value, index) => (
        <Case key={index} label={label(value, index)} width={caseWidth}>
          {children(value, index)}
        </Case>
      ))}
    </Section>
  );
}
