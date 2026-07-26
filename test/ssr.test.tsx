/**
 * @vitest-environment node
 *
 * Server-rendering smoke tests. These deliberately run under the `node`
 * environment rather than `jsdom`, so `window`, `document` and `navigator` are
 * genuinely absent — exactly what a Next.js or Remix server component sees.
 *
 * Any component that reads a browser global during render throws here, which
 * is the failure ISSUE-15 describes.
 */
import { describe, expect, it } from "vitest";
import { renderToString } from "react-dom/server";
import { ValenceProvider } from "../packages/core/src/ValenceProvider";
import { Button } from "../packages/core/src/components/buttons/TextButton";
import { Text } from "../packages/core/src/components/display/Text";
import { Flex } from "../packages/core/src/components/layout/Flex";
import { Card } from "../packages/core/src/components/layout/Card";
import { TextInput } from "../packages/core/src/components/inputs/TextInput";
import { SSR_WINDOW_SIZE } from "../packages/core/src/hooks/UseWindowSize";

/** Renders `ui` inside a provider, the way a consumer's root would. */
function ssr(ui: React.ReactNode) {
  return renderToString(<ValenceProvider>{ui}</ValenceProvider>);
}

describe("server rendering", () => {
  it("has no window to fall back on", () => {
    expect(typeof window).toBe("undefined");
    expect(typeof document).toBe("undefined");
  });

  it("renders a provider on its own", () => {
    expect(() => ssr(null)).not.toThrow();
  });

  it.each([
    ["Text", <Text key="t">Hello</Text>],
    ["Button", <Button key="b">Save</Button>],
    ["Flex", <Flex key="f">content</Flex>],
    ["Card", <Card key="c">content</Card>],
    [
      "TextInput",
      <TextInput key="i" value="" setValue={() => {}} aria-label="name" />,
    ],
  ])("renders %s without touching a browser global", (_name, element) => {
    expect(() => ssr(element)).not.toThrow();
  });

  it("emits the actual content, not an empty shell", () => {
    expect(ssr(<Text>Hello world</Text>)).toContain("Hello world");
  });

  it("resolves responsive props against the SSR breakpoint", () => {
    // 1024 sits in the `default` band, so the `default` variant is the one
    // that must land in the markup — not the mobile one.
    const html = ssr(<Text size={{ default: "xl", mobile: "xs" }}>Hello</Text>);

    // xl font size in the default scale is 20px, xs is 12px.
    expect(html).toContain("20px");
    expect(html).not.toContain("12px");
  });

  it("exposes the SSR window size it assumed", () => {
    expect(SSR_WINDOW_SIZE).toEqual({ width: 1024, height: 768 });
  });
});
