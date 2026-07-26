# Valence UI V4 — release fix plan

Findings from a full review of `@valence-ui/core`, `@valence-ui/utils` and
`@valence-ui/carousel` on the `v4` branch (at `6eb3667`, v4.0.2), plus the unit
test suite added alongside it.

Issues marked **[test]** have an executable reproduction in
`test/known-issues.test.tsx` (or `test/known-issues.card.test.tsx`). Those tests
use Vitest's `it.fails`, so they pass while the bug exists and **fail once it is
fixed** — that is the signal to delete the entry there and promote it into the
real suite.

Run everything with:

```bash
npm test
```

## Recommended release sequence

1. **Blockers** — ISSUE-01, ISSUE-02. Do not ship 4.1 without these.
2. **High** — ISSUE-03 … ISSUE-06. Data-loss / crash / silently-ignored props.
3. **Medium** — ISSUE-07 … ISSUE-18, ISSUE-31. Correctness, consistency and
   release hygiene.
4. **Low** — ISSUE-19 … ISSUE-30. Polish; safe to batch into a later minor.

Everything in tiers 1–3 is backwards compatible except ISSUE-02, which changes
runtime behaviour that some apps may have accidentally relied upon (see below).

---

## Tier 1 — release blockers

### ISSUE-01 — Internal barrel imports create module cycles **[fixed]**

**Severity: critical.** `Card` failed to render at all in some module graphs, and
`ButtonWithIcon` threw whenever `loading` was true.

Ten modules import from a barrel that (transitively) re-exports them:

| File | Imports from |
| --- | --- |
| `components/layout/Card/Card.tsx` | `".."` (the layout barrel) |
| `components/display/Loader/Loader.tsx` | `"../../.."` (the package barrel) |
| `components/buttons/ButtonWithIcon/ButtonWithIcon.tsx` | `"../../.."` |
| `components/display/Text/Title.tsx` | `"../../.."` |
| `components/inputs/InputContainer/InputContainer.tsx` | `"../../.."` |
| `components/inputs/NumberInput/NumberInput.tsx` | `"../../.."` |
| `components/inputs/TextInput/TextInput.tsx` | `"../../.."` |
| `components/layout/Flex/Flex.tsx` | `"../../.."` |
| `components/layout/Header/Header.tsx` | `"../../.."` |
| `components/overlays/Modal/Modal.tsx` | `"../../.."` |
| `components/overlays/ModalBackground/ModalBackground.tsx` | `"../../.."` |

`components/layout/index.ts` lists `export * from "./Card"` **before**
`export * from "./Flex"`. So when the layout barrel is evaluated, `Card`'s module
body runs while the `Flex` binding is still uninitialised, and React throws:

```
Element type is invalid: expected a string (for built-in components) or a
class/function (for composite components) but got: undefined.
```

The same shape breaks `ButtonWithIcon`: importing `IconButton` first pulls in
`overlays → Modal → the package barrel`, which leaves `display/Loader`
uninitialised inside `ButtonWithIcon`.

This reproduces under Vite's module runner (Vitest, Vite SSR, Storybook dev).
Whether it bites a given consumer depends on their bundler and import order,
which makes it worse, not better: it is a latent crash that will surface as an
unreproducible bug report.

**Fix.** Never import from a barrel that re-exports the importing module. Replace
each of the imports above with direct relative paths, e.g. in `Card.tsx`:

```ts
// before
import { Flex, FlexProps } from "..";

// after
import { Flex, FlexProps } from "../Flex";
```

Add a lint rule to keep it that way — `eslint-plugin-import`'s `import/no-cycle`
plus a `no-restricted-imports` rule banning `".."`/`"../../.."` specifiers inside
`packages/*/src`.

**What was done.**

- Every module under `packages/*/src` now imports the module that defines the
  symbol, never an ancestor or sibling *group* barrel. That covers the eleven
  files listed above plus the group-barrel imports (`"../../display"`,
  `"../../layout"`, …) that formed the same cycles one level up. Leaf barrels
  (`"../Flex"`, `"../../display/Icon"`) are still fine: nothing inside them
  re-exports their importer.
- `ValenceContext`/`useValence` moved out of `ValenceProvider.tsx` into
  `ValenceProvider/ValenceContext.tsx`. The provider renders `CssOverride`,
  which needs `useColors`, which needs the context — a cycle that existed
  independently of the barrels. Both names are still exported from
  `@valence-ui/core` unchanged.
- `ValenceProvider.types.tsx` is now a pure type module (`import type`
  throughout), so the unavoidable types-reference-component-props edge emits no
  runtime `require`.
- `npm run lint` enforces both rules from `eslint.config.mjs`. Stories are
  exempt from `no-restricted-imports`: nothing re-exports a story, so importing
  the package barrel there is what a real consumer does.

**Verification.** `npm test` reports 342 passing, 0 skipped:
`test/known-issues.card.test.tsx` is gone, the ISSUE-01 block in
`test/known-issues.test.tsx` is gone, its `ButtonWithIcon` `loading` case is now
a real test in `packages/core/src/components/buttons/Buttons.test.tsx`, and the
seven Card tests in `packages/core/src/components/layout/Layout.test.tsx` run
unskipped.

---

### ISSUE-02 — `disabled` never reaches the underlying button **[test]**

**Severity: critical.** Every disabled Valence button is still clickable and
focusable.

`PrimitiveButton` destructures `disabled` out of its props and uses it only for
styling. It is never forwarded, so it never lands on the DOM `<button>`:

```tsx
// packages/core/src/components/buttons/PrimitiveButton/PrimitiveButton.tsx
const { disabled = false, loading = false, /* … */ ...rest } = useResponsiveProps(props);
// `disabled` is not in `...rest`, and is not passed to <PolymorphicButton>
```

Consequences observed in tests:

- A disabled `PrimitiveButton` still fires `onClick`.
- `PillSelector` with `allowClear={false}` still clears on click.
- `PillSelector`'s add button fires with a whitespace-only input.
- `SegmentedControl`'s `disabled` prop only guards its own handler, not focus or
  the button's accessibility state.
- Screen readers are never told the control is unavailable.

**Fix.** Forward `disabled` to the rendered element, and keep the visual
treatment:

```tsx
<PolymorphicButton
  disabled={disabled || loading}
  aria-disabled={disabled || loading}
  css={ButtonStyle}
  /* … */
/>
```

Note `PolymorphicButton` can render an `<a>` or a router `Link`, neither of which
supports `disabled`. Guard it: for non-`button` components, set `aria-disabled`
and suppress the click handler instead of emitting an invalid DOM attribute.

**Behavioural change.** Apps that rendered `disabled` buttons and relied on the
click still firing will change behaviour. This is a bug fix, but it is worth a
line in the 4.1 release notes.

---

## Tier 2 — high

### ISSUE-03 — Custom colors replace the default palette **[fixed]**

`ValenceProvider` computes the palette before destructuring, via a new
`mergePalette` helper in `utilities/color/DefaultPalette.ts`.

**Override semantics, as decided:** a caller color whose `key` matches a
built-in *replaces that built-in in place*; every other color is appended.
The caller wins on keys they define, the rest of the palette survives, and
there is exactly one entry per key — so `getSwatch`'s `Array.find` cannot pick
the wrong copy, and no `findLast` change is needed. Later entries in the
caller's own array win over earlier ones. `DEFAULT_PALETTE` is never mutated.

The reproduction has been promoted into the `overrides` block of
`ValenceProvider.test.tsx`, with resolution coverage in `UseColors.test.tsx`.

The original report follows.

`ValenceProvider` intends to append user colors to `DEFAULT_PALETTE`, but the
merge is written as a destructuring default, which only runs when the prop is
**absent**:

```tsx
const {
  colors = props.colors ? VCD.colors.concat(props.colors) : VCD.colors,
  // …
} = props;
```

When `props.colors` is provided, destructuring takes it verbatim and the
`concat` branch is dead. Passing a single brand color therefore drops `black`,
`white`, `primary` and every other built-in — silently breaking most of the
library, since materials resolve `"black"`/`"brighterWhite"` by key.

**Fix.** Compute the merge before destructuring:

```tsx
const colors = props.colors
  ? [...DEFAULT_PALETTE, ...props.colors]
  : DEFAULT_PALETTE;
```

Decide and document the override semantics: if a user supplies a color whose
`key` already exists, theirs should win. `useColors.getSwatch` uses
`Array.find`, which returns the **first** match, so user colors must be
prepended — or the lookup changed to `findLast`.

---

### ISSUE-04 — `NumberInput` emits `NaN` **[fixed]**

`NumberInput` now keeps the field's raw text in local state and only emits
numbers that parse, so `""`, `"-"` and `"."` no longer reach the consumer as
`NaN`; an empty field settles on `min ?? 0` on blur. The reproduction has been
promoted into the `NumberInput` block of
`packages/core/src/components/inputs/Inputs.test.tsx`.

The original report follows.

Both the change and blur handlers call `parseFloat` on raw input text:

```tsx
onChange={(e) => setValue(parseFloat(e.target.value))}
// and
setValue(Math.min(Math.max(parseFloat(e.target.value), min ?? -Infinity), max ?? Infinity));
```

Clearing the field yields `parseFloat("") === NaN`, which propagates into
consumer state and back into `value`, producing a React controlled-input warning
and an unrecoverable field.

**Fix.** Keep the raw string in local state and only emit valid numbers:

```tsx
function handleChange(e) {
  const raw = e.target.value;
  if (raw === "" || raw === "-") return; // let the user get there
  const parsed = Number(raw);
  if (!Number.isNaN(parsed)) setValue(parsed);
}
```

On blur, fall back to `min ?? 0` rather than clamping `NaN`.

---

### ISSUE-05 — `SelectInput` matches options by reference **[fixed]**

`SelectInput` now matches options on their `value` property, treats "no match"
as `null` rather than `-1`, and accepts an optional `compare` prop for values
that need custom equality. `DropdownContainer` resolves the selected option
once and reads its label and icon through it, so index `0` is no longer treated
as "nothing selected". The reproductions have been promoted into the
`SelectInput` block of `packages/core/src/components/inputs/Inputs.test.tsx`.

The original report follows.

```tsx
selected={value ? options.findIndex((o) => o === value) : null}
```

`findIndex` uses `===`. A `value` rebuilt from state, props or JSON — the normal
case — returns `-1`, and `DropdownContainer` then evaluates
`options[-1].label`, throwing `Cannot read properties of undefined`.

There is a second defect one line down:

```tsx
icon={selected ? (options[selected].icon ?? icon) : icon}
```

`selected` is an index, so `0` is falsy and the first option's icon is silently
discarded.

**Fix.** Match on a stable key and test the index against `null`:

```tsx
const selectedIndex = options.findIndex((o) => o.value === value?.value);
// …
selected={selectedIndex === -1 ? null : selectedIndex}
icon={selected !== null ? (options[selected].icon ?? icon) : icon}
```

Consider adding an optional `compare?: (a, b) => boolean` prop for callers whose
`value` is not comparable by `===`.

---

### ISSUE-06 — Components silently drop their remaining props **[fixed]**

`Slider`, `RangeSlider` and `Switch` now spread `...rest`; `Switch` honours
`width`, `height` and `style`; both sliders forward `disabled` (plus `readOnly`
and `loading`) to `ReactSlider` and route the remaining input-level props to
the manual `NumberInput`, which is the only real form control they render.
`SegmentedControl` now focuses the selected option on `autoFocus` and exposes
`required` as `role="group"` + `aria-required`. The reproductions have been
promoted into `packages/core/src/components/inputs/Inputs.test.tsx`, which
gains `Slider` and `RangeSlider` blocks.

The original report follows.

`Slider`, `RangeSlider` and `Switch` all destructure `...rest` and then never
spread it. Everything the caller passes that the component does not explicitly
name is discarded: `id`, `className`, `aria-*`, `data-*`, `name`, `form`.

`Switch` additionally destructures `width` and `height` and then ignores both,
sizing itself from `theme.getSize("height", size)` regardless.

`Slider` and `RangeSlider` also declare `disabled`, `readOnly` and `required`
via `GenericInputProps` but wire none of them — `react-slider` has a `disabled`
prop that is never passed, so a "disabled" slider is fully draggable.

**Fix.** Spread `...rest` onto the outermost element of each component, honour
`width`/`height` in `Switch`, and forward `disabled` to `ReactSlider`. Then audit
the remaining components for the same pattern — `SegmentedControl` also accepts
`required` and `autoFocus` without using them.

---

## Tier 3 — medium

### ISSUE-07 — `SolidMaterial` omits scrollbar styling **[fixed]**

`SolidMaterial.getStyles` and `getChildrenStyles` now spread
`getScrollbarStyles`, matching the other three materials. The reproduction has
been promoted into the shared-contract block of `Materials.test.tsx`, so every
material — including any added later — is held to it.

The original report follows.

`AirMaterial`, `GlassMaterial` and `PaperMaterial` all spread
`this.getScrollbarStyles(...)` into `getStyles()`. `SolidMaterial` implements the
method but never calls it, so scrollable surfaces using it fall back to native
scrollbars. Add the spread for parity.

### ISSUE-08 — Hooks update state from stale closures **[test]**

```ts
// UseDisclosure.tsx
const toggle = () => setValue(!value);

// UseControlledList.tsx
const add = (item: T) => setItems([...items, item]);
const remove = (item: T) => setItems(items.filter((i) => i !== item));
```

Two calls in one batch collapse into one. Switch to updater form
(`setValue((v) => !v)`, `setItems((items) => [...items, item])`) and wrap the
returned callbacks in `useCallback` so they are stable dependencies.

### ISSUE-09 — `PillSelector` ignores `maxSelectable` when clicking pills **[test]**

`maxSelectable` is only checked in `addPill()`. Clicking existing pills can select
any number of them. Add the same guard to `handlePillClick`, and decide whether
hitting the cap should disable the remaining pills or silently no-op.

### ISSUE-10 — A disabled `InputContainer` still takes focus **[test]**

```tsx
const handleClick = (e: MouseEvent) => {
  if (disabled) {
    e.preventDefault();
    e.stopPropagation();
  }
  if (inputRef && inputRef.current) inputRef.current.focus();  // still runs
  onClick?.(e as any);
};
```

`return` after the disabled branch.

### ISSUE-11 — `Icon` assumes its children are elements **[test]**

`cloneElement(children as any, iconProps)` throws for a string child.
`<Icon>text</Icon>` crashes. Guard with `isValidElement(children)` and return the
children untouched otherwise.

### ISSUE-12 — `IconButton` cannot receive a controlled tooltip

```ts
tooltipProps?: Omit<TooltipProps, "children" | "disclosure">;
```

`Tooltip` supports a controlled `disclosure`, but `IconButton` types it away, so
there is no way to control an icon button's tooltip. Drop `"disclosure"` from the
`Omit`.

### ISSUE-14 — `Card` has no typed click handler

`CardProps` is `GenericLayoutProps & PolymorphicButtonProps & { … }` — it never
includes `GenericClickableEventProps`, yet `Card` renders a `PrimitiveButton`.
`onClick` works at runtime but is a type error. Add
`GenericClickableEventProps & GenericClickableProps` to `CardProps`.

### ISSUE-15 — The library cannot be server-rendered

`useWindowSize` reads `window.innerWidth` during render, and `useColorScheme`
calls `window.matchMedia` during render:

```ts
const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });
```

`useWindowSize` backs `useBreakpoint`, which backs `useResponsiveProps`, which
**every** component calls. So importing any Valence component into a Next.js or
Remix server component throws `window is not defined`.

**Fix.** Initialise to a stable default and populate in an effect:

```ts
const [size, setSize] = useState({ width: 0, height: 0 });
useEffect(() => { /* set real size, subscribe to resize */ }, []);
```

Pick a deliberate SSR breakpoint (probably `default`) so the server and first
client render agree, and document it. If SSR is explicitly out of scope for V4,
say so in the README instead — but the current failure mode is a hard crash with
no explanation.

### ISSUE-16 — `NumberInput` stepper buttons are wrapped in `<Icon>`

`InputContainer` renders `<Icon>{button}</Icon>`. `NumberInput` passes a
fragment containing two `IconButton`s, so `cloneElement` hands `size`, `stroke`,
`color` and `ref` to `React.Fragment`. Every render logs:

```
Invalid prop `size` supplied to `React.Fragment`.
```

**Fix.** The `button` slot holds arbitrary nodes, not icons — render `{button}`
directly and let callers wrap in `<Icon>` themselves.

### ISSUE-31 — `npm run build` never cleans `dist/`

Each package builds with a bare `tsc -p …`, which writes into `dist/` without
removing what is already there. Anything a previous build emitted survives —
including output from a build that **failed partway through**, since `tsc` emits
before it reports errors and `noEmitOnError` is not set.

This was observed in practice: a build that failed on test-file type errors left
compiled `*.test.js`/`*.d.ts` files and a nested `dist/esm/packages/core/src/…`
tree behind, and a later successful build did not remove them. Since every
package publishes with `"files": ["dist/"]`, that output would have shipped to
npm.

**Fix.** Clean before building, and refuse to emit on error:

```jsonc
// packages/*/package.json
"build": "rimraf dist && tsc -p tsconfig.json && tsc -p tsconfig-cjs.json"
```

```jsonc
// packages/*/tsconfig.json
"compilerOptions": { "noEmitOnError": true }
```

Verify with `find packages/*/dist -name "*test*" -o -name "*stories*"` after a
build — it should print nothing.

### ISSUE-17 — `createRef()` called during render

`TextInput`, `Textarea` and `NumberInput` all do:

```ts
const inputRef = ref ?? createRef<HTMLInputElement>();
```

`createRef` in a render body allocates a new ref object every render, forcing
React to detach and reattach the DOM ref each time. Use `useRef` and merge with
the forwarded ref (`useMergeRefs` from `@floating-ui/react` is already a
dependency).

### ISSUE-18 — `DropdownContainer` inconsistencies

- `useRef(options.map((o) => o.label))` captures the labels **once**; typeahead
  keeps matching against the original list after `options` change.
- It is the only component that neither calls `useResponsiveProps` nor uses
  `forwardRef`, so responsive props and refs silently do nothing on it and on
  `SelectInput`, which wraps it.
- `{...rest}` is spread *after* `{...getReferenceProps()}`, so a caller-supplied
  `onClick` clobbers floating-ui's open/close handling.
- `disabled` is forwarded for styling but `useClick` is still active, so a
  disabled dropdown still opens.

---

## Tier 4 — low / polish

| ID | Issue | Fix |
| --- | --- | --- |
| ISSUE-13 | `AvatarProps["src"]` is required even though `undefined` renders the placeholder | Make `src` optional in `GenericImageProps` |
| ISSUE-19 | `getSize("radius")` falls back to `defaults.size`, not `defaults.radius` | Use the radius default for the radius property |
| ISSUE-20 | `Text` passes an array as a React `key` to drive its change animation; the key only actually changes for unformatted plain text | Derive a string key from the raw children |
| ISSUE-21 | `Icon` calls the deprecated `motion(Component)` — logs a deprecation warning on every animated icon | Use `motion.create()`, as `PolymorphicButton` already does |
| ISSUE-22 | `UnstyledButton` still uses the old `getMotionBehaviour` helper and a `motion` prop; every other button uses `useAnimation` and an `animation` prop | Migrate it, then delete `components/buttons/Helpers.ts` |
| ISSUE-23 | `UseWindowTitle` is PascalCase, so React's lint rules do not treat it as a hook | Rename to `useWindowTitle`, re-export the old name as deprecated |
| ISSUE-24 | `Material.setInteractive`/`setOverrides`/`setChildrenOverrides` return `Material`, breaking subclass chaining; `SolidMaterial` has no `setColor`, `PaperMaterial` no `setBlur` | Make the base setters generic (`this`-typed) and fill the gaps |
| ISSUE-25 | `SliderTrackProps.material` is declared but never read | Wire it up or remove it |
| ISSUE-26 | `Switch` has no `role="switch"`/`aria-checked`, and its label is not associated with the control | Add ARIA and wrap in a `<label>` |
| ISSUE-27 | `useElementSize` only listens to window resize, so it misses element-only size changes | Use `ResizeObserver` |
| ISSUE-28 | `Textarea` sets `verticalAlign: "center"`, which is not a valid CSS value | Remove it or use `middle` |
| ISSUE-29 **[fixed]** | Unused `colors`/`theme` locals in `ButtonWithIcon`, `MultipartButton`, `Grid`; `CardNamesapce` typo | `noUnusedLocals` enabled in all three package tsconfigs (inherited by the `-cjs` variants). It found more than the report listed: also `Stepper`, `SelectInput`, a stray `React` import in `OverflowContainer.Stories.tsx`, and — in `Grid` — `getHex` rather than `theme`. Typo fixed. The unused `...rest` in `ColorPicker` turned out to mark a real prop-dropping bug, filed as #77 |
| ISSUE-30 | `Material.copy()` is documented as a deep copy but shares the `overrides` / `childrenOverrides` objects | Clone them, or correct the doc comment |

---

## Test suite

Added in this pass — 335 passing, 7 skipped pending ISSUE-01.

| Area | File | Tests |
| --- | --- | --- |
| Provider & theme | `packages/core/src/ValenceProvider/ValenceProvider.test.tsx` | 18 |
| Colors | `packages/core/src/utilities/color/UseColors.test.tsx` | 13 |
| Materials | `packages/core/src/utilities/materials/Materials.test.tsx` | 39 |
| Responsive props | `packages/core/src/utilities/responsive/ResponsiveProps.test.tsx` | 14 |
| Hooks | `packages/core/src/hooks/Hooks.test.tsx` | 21 |
| Buttons | `packages/core/src/components/buttons/Buttons.test.tsx` | 30 |
| Inputs | `packages/core/src/components/inputs/Inputs.test.tsx` | 49 |
| Display | `packages/core/src/components/display/Display.test.tsx` | 40 |
| Layout | `packages/core/src/components/layout/Layout.test.tsx` | 15 (+7 skipped) |
| Overlays | `packages/core/src/components/overlays/Overlays.test.tsx` | 15 |
| Public API surface | `test/exports.test.ts` | 64 |
| Known issues | `test/known-issues*.test.tsx` | 17 |

### Why Vitest + Testing Library rather than the Storybook test addon

The Storybook 8 test addon (`@storybook/experimental-addon-test`) runs stories as
tests through Vitest browser mode and Playwright. It was not a good fit here:

- The existing stories are CSF2 story **functions** (`export const X: Story = (args) => …`),
  which portable stories and the addon's story-indexing support poorly. They would
  all need rewriting to CSF3 `{ render }` objects first.
- Every story embeds its own `<ValenceProvider>` rather than using a preview
  decorator, so stories are not composable as test subjects.
- Stories cover *appearance* variants, not the behaviours that are actually
  broken (`disabled`, `NaN`, prop forwarding). Behavioural assertions would have
  to be written from scratch regardless.
- Playwright browser downloads make CI slower for no benefit at this stage.

Vitest + jsdom + Testing Library tests the same source with no browser, in ~2.5s.

Migrating the stories to CSF3 with a `ValenceProvider` decorator in
`.storybook/preview.ts` is worth doing on its own merits — it would let the same
stories power both Storybook and `composeStories`-based tests. That is a
follow-up, not a blocker.

### Infrastructure added

- `vitest.config.ts` — jsdom, React plugin (Emotion's `@jsxImportSource` pragma
  is respected per-file), workspace aliases pointing at `src` so tests run
  against source rather than `dist`.
- `test/setup.ts` — `jest-dom` matchers, `matchMedia` / `ResizeObserver` /
  `Element.animate` polyfills, deterministic 1280×800 viewport.
- `test/utils.tsx` — `renderWithValence()`, `setViewportWidth()`.
- `tsconfig.json` (repo root) — the editor/CI project for the test suite: Vitest
  globals, jest-dom matcher types and workspace path aliases. The published
  packages still build from their own `packages/*/tsconfig.json`.
- `packages/*/tsconfig.json` — `*.test.ts(x)` excluded so tests are not emitted
  into `dist/`.
- `npm test`, `npm run test:watch`, `npm run test:coverage`, `npm run test:types`.
