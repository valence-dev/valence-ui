/**
 * ISSUE-01 reproduction (see docs/V4-RELEASE-FIXES.md).
 *
 * Card.tsx imports `Flex` from the layout barrel (`..`), and that barrel
 * re-exports `./Card` before `./Flex`. Whenever another layout module is
 * evaluated before Card, the `Flex` binding inside Card is still uninitialised
 * at render time and React throws "Element type is invalid".
 *
 * This file keeps its own module graph so the ordering is deterministic.
 */
import { describe, expect, it } from "vitest";
import { renderWithValence, screen } from "./utils";
// Importing any sibling layout module first is what triggers the cycle.
import "../packages/core/src/components/layout/Flex";
import { Card } from "../packages/core/src/components/layout/Card/Card";

describe("ISSUE-01: layout barrel cycle breaks Card", () => {
  it.fails("Card renders when a sibling layout module was imported first", () => {
    renderWithValence(<Card>content</Card>);
    expect(screen.getByText("content")).toBeInTheDocument();
  });
});
