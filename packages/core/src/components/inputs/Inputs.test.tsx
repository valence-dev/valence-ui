import { describe, expect, it, vi } from "vitest";
import { useState } from "react";
import { IconSearch } from "@tabler/icons-react";
import { act, renderWithValence, screen } from "../../../../../test/utils";
import { TextInput } from "./TextInput";
import { Textarea } from "./Textarea";
import { NumberInput } from "./NumberInput";
import { InputContainer } from "./InputContainer";
import { Switch } from "./Switch";
import { SegmentedControl } from "./SegmentedControl";
import { SelectInput } from "./SelectInput";
import { PillSelector } from "./PillSelector";
import { Slider } from "./Slider";
import { RangeSlider } from "./RangeSlider";

/** Wraps a controlled input so tests can drive it like a real consumer would. */
function Controlled<T>({
  initial,
  render,
}: {
  initial: T;
  render: (value: T, setValue: (value: T) => void) => React.ReactNode;
}) {
  const [value, setValue] = useState<T>(initial);
  return <>{render(value, setValue)}</>;
}

describe("InputContainer", () => {
  it("renders its children", () => {
    renderWithValence(
      <InputContainer>
        <input aria-label="field" />
      </InputContainer>,
    );
    expect(screen.getByLabelText("field")).toBeInTheDocument();
  });

  it("renders an icon when one is supplied", () => {
    const { container } = renderWithValence(
      <InputContainer icon={<IconSearch />}>
        <input aria-label="field" />
      </InputContainer>,
    );
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("swaps the icon for a loader while loading", () => {
    const { container } = renderWithValence(
      <InputContainer loading icon={<IconSearch data-testid="icon" />}>
        <input aria-label="field" />
      </InputContainer>,
    );
    expect(screen.queryByTestId("icon")).not.toBeInTheDocument();
    expect(container.querySelector("svg")).not.toBeInTheDocument();
  });

  it("shows a required indicator when required", () => {
    const { container } = renderWithValence(
      <InputContainer required>
        <input aria-label="field" />
      </InputContainer>,
    );
    // The indicator is the first child div before the input.
    expect(container.querySelector("div > div")).toBeInTheDocument();
  });

  it("dims itself when disabled", () => {
    const { container } = renderWithValence(
      <InputContainer disabled>
        <input aria-label="field" />
      </InputContainer>,
    );
    expect(getComputedStyle(container.firstElementChild!).opacity).toBe("0.5");
  });

  it("focuses the input when the container is clicked", async () => {
    function Harness() {
      const ref = { current: null as HTMLInputElement | null };
      return (
        <InputContainer inputRef={ref}>
          <input aria-label="field" ref={(n) => {
            ref.current = n;
          }} />
        </InputContainer>
      );
    }

    const { user, container } = renderWithValence(<Harness />);
    await user.click(container.firstElementChild!);
    expect(screen.getByLabelText("field")).toHaveFocus();
  });
});

describe("TextInput", () => {
  it("renders the current value", () => {
    renderWithValence(
      <TextInput value="hello" setValue={() => {}} aria-label="name" />,
    );
    expect(screen.getByLabelText("name")).toHaveValue("hello");
  });

  it("calls setValue on each keystroke", async () => {
    const setValue = vi.fn();
    const { user } = renderWithValence(
      <TextInput value="" setValue={setValue} aria-label="name" />,
    );

    await user.type(screen.getByLabelText("name"), "ab");
    expect(setValue).toHaveBeenCalledTimes(2);
    expect(setValue).toHaveBeenNthCalledWith(1, "a");
  });

  it("supports controlled typing end to end", async () => {
    const { user } = renderWithValence(
      <Controlled
        initial=""
        render={(value, setValue) => (
          <TextInput value={value} setValue={setValue} aria-label="name" />
        )}
      />,
    );

    await user.type(screen.getByLabelText("name"), "Valence");
    expect(screen.getByLabelText("name")).toHaveValue("Valence");
  });

  it("renders a placeholder", () => {
    renderWithValence(
      <TextInput
        value=""
        setValue={() => {}}
        placeholder="Your name"
        aria-label="name"
      />,
    );
    expect(screen.getByPlaceholderText("Your name")).toBeInTheDocument();
  });

  it("forwards the input type", () => {
    renderWithValence(
      <TextInput
        value=""
        setValue={() => {}}
        type="password"
        aria-label="password"
      />,
    );
    expect(screen.getByLabelText("password")).toHaveAttribute(
      "type",
      "password",
    );
  });

  it("marks the native input disabled, readOnly and required", () => {
    renderWithValence(
      <TextInput
        value=""
        setValue={() => {}}
        disabled
        required
        readOnly
        aria-label="name"
      />,
    );

    const input = screen.getByLabelText("name");
    expect(input).toBeDisabled();
    expect(input).toBeRequired();
    expect(input).toHaveAttribute("readonly");
  });

  it("becomes readOnly while loading", () => {
    renderWithValence(
      <TextInput value="" setValue={() => {}} loading aria-label="name" />,
    );
    expect(screen.getByLabelText("name")).toHaveAttribute("readonly");
  });

  it("fires onEnterPress when Enter is pressed", async () => {
    const onEnterPress = vi.fn();
    const { user } = renderWithValence(
      <TextInput
        value=""
        setValue={() => {}}
        onEnterPress={onEnterPress}
        aria-label="name"
      />,
    );

    await user.type(screen.getByLabelText("name"), "{Enter}");
    expect(onEnterPress).toHaveBeenCalledOnce();
  });

  it("blurs on Escape", async () => {
    const { user } = renderWithValence(
      <TextInput value="" setValue={() => {}} aria-label="name" />,
    );

    const input = screen.getByLabelText("name");
    await user.click(input);
    expect(input).toHaveFocus();

    await user.keyboard("{Escape}");
    expect(input).not.toHaveFocus();
  });

  it("forwards maxLength and pattern to the native input", () => {
    renderWithValence(
      <TextInput
        value=""
        setValue={() => {}}
        maxLength={5}
        pattern="[a-z]+"
        aria-label="name"
      />,
    );

    const input = screen.getByLabelText("name");
    expect(input).toHaveAttribute("maxlength", "5");
    expect(input).toHaveAttribute("pattern", "[a-z]+");
  });
});

describe("Textarea", () => {
  it("renders the current value in a textarea", () => {
    renderWithValence(
      <Textarea value="notes" setValue={() => {}} aria-label="notes" />,
    );

    const field = screen.getByLabelText("notes");
    expect(field.tagName).toBe("TEXTAREA");
    expect(field).toHaveValue("notes");
  });

  it("supports controlled typing", async () => {
    const { user } = renderWithValence(
      <Controlled
        initial=""
        render={(value, setValue) => (
          <Textarea value={value} setValue={setValue} aria-label="notes" />
        )}
      />,
    );

    await user.type(screen.getByLabelText("notes"), "hi");
    expect(screen.getByLabelText("notes")).toHaveValue("hi");
  });

  it("forwards rows, cols and wrap", () => {
    renderWithValence(
      <Textarea
        value=""
        setValue={() => {}}
        rows={4}
        cols={30}
        wrap="hard"
        aria-label="notes"
      />,
    );

    const field = screen.getByLabelText("notes");
    expect(field).toHaveAttribute("rows", "4");
    expect(field).toHaveAttribute("cols", "30");
    expect(field).toHaveAttribute("wrap", "hard");
  });

  it("applies the resize behaviour", () => {
    renderWithValence(
      <Textarea
        value=""
        setValue={() => {}}
        resize="vertical"
        aria-label="notes"
      />,
    );
    expect(getComputedStyle(screen.getByLabelText("notes")).resize).toBe(
      "vertical",
    );
  });

  it("enables spellcheck by default and disables autocomplete", () => {
    renderWithValence(
      <Textarea value="" setValue={() => {}} aria-label="notes" />,
    );

    const field = screen.getByLabelText("notes");
    expect(field).toHaveAttribute("spellcheck", "true");
    expect(field).toHaveAttribute("autocomplete", "off");
  });
});

describe("NumberInput", () => {
  it("renders a number input holding the current value", () => {
    renderWithValence(
      <NumberInput value={7} setValue={() => {}} aria-label="qty" />,
    );

    const input = screen.getByLabelText("qty");
    expect(input).toHaveAttribute("type", "number");
    expect(input).toHaveValue(7);
  });

  it("forwards min, max and step", () => {
    renderWithValence(
      <NumberInput
        value={5}
        setValue={() => {}}
        min={1}
        max={10}
        step={2}
        aria-label="qty"
      />,
    );

    const input = screen.getByLabelText("qty");
    expect(input).toHaveAttribute("min", "1");
    expect(input).toHaveAttribute("max", "10");
    expect(input).toHaveAttribute("step", "2");
  });

  it("renders stepper controls by default and hides them on request", () => {
    const { rerender } = renderWithValence(
      <NumberInput value={1} setValue={() => {}} aria-label="qty" />,
    );
    // Two stepper buttons: up and down.
    expect(screen.getAllByRole("button")).toHaveLength(2);

    rerender(
      <NumberInput
        value={1}
        setValue={() => {}}
        showControls={false}
        aria-label="qty"
      />,
    );
    expect(screen.queryAllByRole("button")).toHaveLength(0);
  });

  it("does not warn about invalid props on React.Fragment (ISSUE-16)", () => {
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});

    renderWithValence(
      <NumberInput value={1} setValue={() => {}} aria-label="qty" />,
    );

    expect(errorSpy).not.toHaveBeenCalled();
    errorSpy.mockRestore();
  });

  it("steps the value up and down by `step`", async () => {
    const { user } = renderWithValence(
      <Controlled
        initial={5}
        render={(value, setValue) => (
          <NumberInput
            value={value}
            setValue={setValue}
            step={3}
            aria-label="qty"
          />
        )}
      />,
    );

    const [down, up] = screen.getAllByRole("button");

    await user.click(up);
    expect(screen.getByLabelText("qty")).toHaveValue(8);

    await user.click(down);
    expect(screen.getByLabelText("qty")).toHaveValue(5);
  });

  it("clamps the value to min/max on blur", async () => {
    const setValue = vi.fn();
    const { user } = renderWithValence(
      <NumberInput
        value={50}
        setValue={setValue}
        min={0}
        max={10}
        aria-label="qty"
      />,
    );

    await user.click(screen.getByLabelText("qty"));
    await user.tab();

    expect(setValue).toHaveBeenCalledWith(10);
  });

  it("never emits NaN while the field is cleared", async () => {
    const setValue = vi.fn();
    const { user } = renderWithValence(
      <NumberInput value={5} setValue={setValue} aria-label="qty" />,
    );

    await user.clear(screen.getByLabelText("qty"));

    for (const call of setValue.mock.calls) {
      expect(Number.isNaN(call[0])).toBe(false);
    }
  });

  it("keeps the field editable after it has been cleared", async () => {
    const { user } = renderWithValence(
      <Controlled
        initial={5}
        render={(value, setValue) => (
          <NumberInput value={value} setValue={setValue} aria-label="qty" />
        )}
      />,
    );

    const input = screen.getByLabelText("qty");
    await user.clear(input);
    expect(input).toHaveValue(null);

    await user.type(input, "12");
    expect(input).toHaveValue(12);
  });

  it("lets the user type through a lone minus sign", async () => {
    const setValue = vi.fn();
    const { user } = renderWithValence(
      <NumberInput value={5} setValue={setValue} aria-label="qty" />,
    );

    const input = screen.getByLabelText("qty");
    await user.clear(input);
    await user.type(input, "-");

    expect(setValue).not.toHaveBeenCalled();

    await user.type(input, "4");
    expect(setValue).toHaveBeenLastCalledWith(-4);
  });

  it("falls back to `min` on blur when the field is empty", async () => {
    const setValue = vi.fn();
    const { user } = renderWithValence(
      <NumberInput value={5} setValue={setValue} min={2} aria-label="qty" />,
    );

    await user.clear(screen.getByLabelText("qty"));
    await user.tab();

    expect(setValue).toHaveBeenLastCalledWith(2);
  });

  it("falls back to zero on blur when the field is empty and has no `min`", async () => {
    const setValue = vi.fn();
    const { user } = renderWithValence(
      <NumberInput value={5} setValue={setValue} aria-label="qty" />,
    );

    await user.clear(screen.getByLabelText("qty"));
    await user.tab();

    expect(setValue).toHaveBeenLastCalledWith(0);
  });

  it("calls a caller-supplied onChange alongside setValue", async () => {
    const setValue = vi.fn();
    const onChange = vi.fn();
    const { user } = renderWithValence(
      <NumberInput
        value={1}
        setValue={setValue}
        onChange={onChange}
        aria-label="qty"
      />,
    );

    await user.type(screen.getByLabelText("qty"), "2");

    expect(setValue).toHaveBeenCalledWith(12);
    expect(onChange).toHaveBeenCalled();
  });
});

describe("Switch", () => {
  it("renders a button reflecting the current value", () => {
    renderWithValence(<Switch value={false} setValue={() => {}} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("toggles the value on click", async () => {
    const setValue = vi.fn();
    const { user } = renderWithValence(
      <Switch value={false} setValue={setValue} />,
    );

    await user.click(screen.getByRole("button"));
    expect(setValue).toHaveBeenCalledWith(true);
  });

  it("toggles back off when already on", async () => {
    const setValue = vi.fn();
    const { user } = renderWithValence(
      <Switch value setValue={setValue} />,
    );

    await user.click(screen.getByRole("button"));
    expect(setValue).toHaveBeenCalledWith(false);
  });

  it("renders a label when supplied", () => {
    renderWithValence(
      <Switch value={false} setValue={() => {}} label="Dark mode" />,
    );
    expect(screen.getByText("Dark mode")).toBeInTheDocument();
  });

  it("does not toggle when disabled, readOnly or loading", async () => {
    for (const props of [
      { disabled: true },
      { readOnly: true },
      { loading: true },
    ]) {
      const setValue = vi.fn();
      const { user, unmount } = renderWithValence(
        <Switch value={false} setValue={setValue} {...props} />,
      );

      expect(screen.getByRole("button")).toBeDisabled();
      await user.click(screen.getByRole("button"));
      expect(setValue).not.toHaveBeenCalled();

      unmount();
    }
  });

  it("moves the handle to the end when on", () => {
    const { rerender } = renderWithValence(
      <Switch value={false} setValue={() => {}} />,
    );
    expect(screen.getByRole("button").style.justifyContent).toBe("flex-start");

    rerender(<Switch value setValue={() => {}} />);
    expect(screen.getByRole("button").style.justifyContent).toBe("flex-end");
  });

  it("honours an explicit width and height", () => {
    renderWithValence(
      <Switch value={false} setValue={() => {}} width={200} height={40} />,
    );

    const style = getComputedStyle(screen.getByRole("button"));
    expect(style.width).toBe("200px");
    expect(style.height).toBe("40px");
  });

  it("forwards unnamed props to the control", () => {
    renderWithValence(
      <Switch
        value={false}
        setValue={() => {}}
        id="notifications"
        name="notifications"
        aria-label="Notifications"
        data-testid="switch"
      />,
    );

    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("id", "notifications");
    expect(button).toHaveAttribute("name", "notifications");
    expect(button).toHaveAttribute("aria-label", "Notifications");
    expect(button).toHaveAttribute("data-testid", "switch");
  });

  it("applies caller styles to the control", () => {
    renderWithValence(
      <Switch value={false} setValue={() => {}} style={{ opacity: 0.5 }} />,
    );
    expect(getComputedStyle(screen.getByRole("button")).opacity).toBe("0.5");
  });

  it("marks itself required for assistive technology", () => {
    renderWithValence(<Switch value={false} setValue={() => {}} required />);
    expect(screen.getByRole("button")).toHaveAttribute("aria-required", "true");
  });
});

describe("Slider", () => {
  it("forwards unnamed props to the outermost element", () => {
    const { container } = renderWithValence(
      <Slider value={50} setValue={() => {}} id="volume" data-testid="vol" />,
    );

    const root = container.firstElementChild!;
    expect(root).toHaveAttribute("id", "volume");
    expect(root).toHaveAttribute("data-testid", "vol");
  });

  it("applies caller styles to the outermost element", () => {
    const { container } = renderWithValence(
      <Slider value={50} setValue={() => {}} style={{ opacity: 0.5 }} />,
    );
    expect(getComputedStyle(container.firstElementChild!).opacity).toBe("0.5");
  });

  it("disables the track and the manual input when disabled", () => {
    const { container } = renderWithValence(
      <Slider value={50} setValue={() => {}} disabled aria-label="volume" />,
    );

    expect(container.querySelector('[role="slider"]')).toHaveAttribute(
      "aria-disabled",
      "true",
    );
    expect(container.querySelector("input")).toBeDisabled();
  });

  it("also stops dragging when readOnly or loading", () => {
    for (const props of [{ readOnly: true }, { loading: true }]) {
      const { container, unmount } = renderWithValence(
        <Slider value={50} setValue={() => {}} {...props} />,
      );

      expect(container.querySelector('[role="slider"]')).toHaveAttribute(
        "aria-disabled",
        "true",
      );
      unmount();
    }
  });

  it("passes name and form to the manual input", () => {
    const { container } = renderWithValence(
      <Slider value={50} setValue={() => {}} name="volume" form="settings" />,
    );

    const input = container.querySelector("input")!;
    expect(input).toHaveAttribute("name", "volume");
    expect(input).toHaveAttribute("form", "settings");
  });
});

describe("RangeSlider", () => {
  it("forwards unnamed props to the outermost element", () => {
    const { container } = renderWithValence(
      <RangeSlider value={[20, 80]} setValue={() => {}} id="range" />,
    );
    expect(container.firstElementChild!).toHaveAttribute("id", "range");
  });

  it("disables both thumbs and both manual inputs when disabled", () => {
    const { container } = renderWithValence(
      <RangeSlider value={[20, 80]} setValue={() => {}} disabled />,
    );

    const thumbs = container.querySelectorAll('[role="slider"]');
    expect(thumbs).toHaveLength(2);
    for (const thumb of thumbs) {
      expect(thumb).toHaveAttribute("aria-disabled", "true");
    }

    for (const input of container.querySelectorAll("input")) {
      expect(input).toBeDisabled();
    }
  });
});

describe("SegmentedControl", () => {
  const options = ["one", "two", "three"];

  it("renders one button per option", () => {
    renderWithValence(
      <SegmentedControl value="one" setValue={() => {}} options={options} />,
    );

    expect(screen.getAllByRole("button")).toHaveLength(3);
    for (const option of options) {
      expect(screen.getByText(option)).toBeInTheDocument();
    }
  });

  it("selects an option on click and reports it via onSelect", async () => {
    const setValue = vi.fn();
    const onSelect = vi.fn();
    const { user } = renderWithValence(
      <SegmentedControl
        value="one"
        setValue={setValue}
        options={options}
        onSelect={onSelect}
      />,
    );

    await user.click(screen.getByText("two"));
    expect(setValue).toHaveBeenCalledWith("two");
    expect(onSelect).toHaveBeenCalledWith("two");
  });

  it("accepts object options with custom labels", () => {
    renderWithValence(
      <SegmentedControl
        value="a"
        setValue={() => {}}
        options={[
          { value: "a", label: "Alpha" },
          { value: "b", label: "Beta" },
        ]}
      />,
    );

    expect(screen.getByText("Alpha")).toBeInTheDocument();
    expect(screen.getByText("Beta")).toBeInTheDocument();
  });

  it("falls back to the option value when no label is given", () => {
    renderWithValence(
      <SegmentedControl
        value="a"
        setValue={() => {}}
        options={[{ value: "a" }]}
      />,
    );
    expect(screen.getByText("a")).toBeInTheDocument();
  });

  it("renders a loader instead of options while loading", () => {
    renderWithValence(
      <SegmentedControl
        value="one"
        setValue={() => {}}
        options={options}
        loading
      />,
    );
    expect(screen.queryByText("one")).not.toBeInTheDocument();
  });

  it("makes every option grow equally by default", () => {
    renderWithValence(
      <SegmentedControl value="one" setValue={() => {}} options={options} />,
    );

    for (const button of screen.getAllByRole("button")) {
      expect(getComputedStyle(button).flexGrow).toBe("1");
    }
  });

  it("focuses the selected option on autoFocus", () => {
    renderWithValence(
      <SegmentedControl
        value="two"
        setValue={() => {}}
        options={options}
        autoFocus
      />,
    );
    expect(screen.getByText("two").closest("button")).toHaveFocus();
  });

  it("falls back to the first option when autoFocus finds no selection", () => {
    renderWithValence(
      <SegmentedControl
        value=""
        setValue={() => {}}
        options={options}
        autoFocus
      />,
    );
    expect(screen.getByText("one").closest("button")).toHaveFocus();
  });

  it("exposes itself as a required group", () => {
    renderWithValence(
      <SegmentedControl
        value="one"
        setValue={() => {}}
        options={options}
        required
      />,
    );

    const group = screen.getByRole("group");
    expect(group).toHaveAttribute("aria-required", "true");
  });
});

describe("SelectInput", () => {
  const options = [
    { value: 1, label: "One" },
    { value: 2, label: "Two" },
  ];

  it("shows the placeholder when nothing is selected", () => {
    renderWithValence(
      <SelectInput
        value={null}
        setValue={() => {}}
        options={options}
        placeholder="Pick one"
      />,
    );
    expect(screen.getByText("Pick one")).toBeInTheDocument();
  });

  it("shows the label of the selected option", () => {
    renderWithValence(
      <SelectInput
        value={options[1]}
        setValue={() => {}}
        options={options}
      />,
    );
    expect(screen.getByText("Two")).toBeInTheDocument();
  });

  it("opens a listbox of options on click", async () => {
    const { user } = renderWithValence(
      <SelectInput value={null} setValue={() => {}} options={options} />,
    );

    await user.click(screen.getByRole("combobox"));
    expect(await screen.findByText("One")).toBeInTheDocument();
    expect(screen.getByText("Two")).toBeInTheDocument();
  });

  it("selects an option and reports it", async () => {
    const setValue = vi.fn();
    const onSelect = vi.fn();
    const { user } = renderWithValence(
      <SelectInput
        value={null}
        setValue={setValue}
        options={options}
        onSelect={onSelect}
      />,
    );

    await user.click(screen.getByRole("combobox"));
    await user.click(await screen.findByText("Two"));

    expect(setValue).toHaveBeenCalledWith(options[1]);
    expect(onSelect).toHaveBeenCalledWith(options[1]);
  });

  it("resolves a structurally equal value to its option", () => {
    renderWithValence(
      <SelectInput
        value={{ value: 2, label: "Two" }}
        setValue={() => {}}
        options={options}
      />,
    );
    expect(screen.getByText("Two")).toBeInTheDocument();
  });

  it("falls back to the placeholder when the value matches no option", () => {
    renderWithValence(
      <SelectInput
        value={{ value: 99, label: "Ninety-nine" }}
        setValue={() => {}}
        options={options}
        placeholder="Pick one"
      />,
    );
    expect(screen.getByText("Pick one")).toBeInTheDocument();
  });

  it("uses a custom `compare` when one is supplied", () => {
    renderWithValence(
      <SelectInput
        value={{ value: { id: 2 }, label: "stale label" }}
        setValue={() => {}}
        options={[
          { value: { id: 1 }, label: "One" },
          { value: { id: 2 }, label: "Two" },
        ]}
        compare={(option, value) => option.value.id === value.value.id}
      />,
    );
    expect(screen.getByText("Two")).toBeInTheDocument();
  });

  // `actionIcon` is suppressed in both cases below so the only icon the
  // container can render is the selected option's.
  const withIcons = [
    { value: 1, label: "One", icon: <IconSearch /> },
    { value: 2, label: "Two" },
  ];

  it("shows the icon of the first option when it is selected", () => {
    const { container } = renderWithValence(
      <SelectInput
        value={withIcons[0]}
        setValue={() => {}}
        options={withIcons}
        actionIcon={null}
      />,
    );
    expect(container.querySelector("svg")).toBeInTheDocument();
  });

  it("renders no icon when the selected option has none", () => {
    const { container } = renderWithValence(
      <SelectInput
        value={withIcons[1]}
        setValue={() => {}}
        options={withIcons}
        actionIcon={null}
      />,
    );
    expect(container.querySelector("svg")).not.toBeInTheDocument();
  });
});

describe("PillSelector", () => {
  const pills = ["alpha", "beta", "gamma"];

  it("renders a button for every pill", () => {
    renderWithValence(
      <PillSelector value={[]} setValue={() => {}} pills={pills} />,
    );

    for (const pill of pills) {
      expect(screen.getByText(pill)).toBeInTheDocument();
    }
  });

  it("selects a pill on click", async () => {
    const setValue = vi.fn();
    const onPillSelected = vi.fn();
    const { user } = renderWithValence(
      <PillSelector
        value={[]}
        setValue={setValue}
        pills={pills}
        onPillSelected={onPillSelected}
      />,
    );

    await user.click(screen.getByText("beta"));
    expect(setValue).toHaveBeenCalledWith(["beta"]);
    expect(onPillSelected).toHaveBeenCalledWith("beta");
  });

  it("deselects an already-selected pill", async () => {
    const setValue = vi.fn();
    const onPillDeselected = vi.fn();
    const { user } = renderWithValence(
      <PillSelector
        value={["beta"]}
        setValue={setValue}
        pills={pills}
        onPillDeselected={onPillDeselected}
      />,
    );

    await user.click(screen.getByText("beta"));
    expect(setValue).toHaveBeenCalledWith([]);
    expect(onPillDeselected).toHaveBeenCalledWith("beta");
  });

  it("honours allowClear={false} on its clear button", async () => {
    const setValue = vi.fn();
    const { user } = renderWithValence(
      <PillSelector
        value={["alpha"]}
        setValue={setValue}
        pills={["alpha"]}
        allowClear={false}
      />,
    );

    // The clear button is the last button in the tree.
    const buttons = screen.getAllByRole("button");
    await user.click(buttons[buttons.length - 1]);

    expect(setValue).not.toHaveBeenCalled();
  });

  it("sorts selected pills ahead of unselected ones", () => {
    renderWithValence(
      <PillSelector value={["gamma"]} setValue={() => {}} pills={pills} />,
    );

    const labels = screen
      .getAllByRole("button")
      .map((b) => b.textContent)
      .filter((t) => pills.includes(t ?? ""));

    expect(labels[0]).toBe("gamma");
  });

  it("renders a text input only when editing is allowed", () => {
    const { rerender } = renderWithValence(
      <PillSelector value={[]} setValue={() => {}} pills={pills} />,
    );
    expect(screen.queryByPlaceholderText("Add a pill...")).toBeNull();

    rerender(
      <PillSelector value={[]} setValue={() => {}} pills={pills} allowEditing />,
    );
    expect(screen.getByPlaceholderText("Add a pill...")).toBeInTheDocument();
  });

  it("adds a new pill from the input on Enter", async () => {
    const setValue = vi.fn();
    const { user } = renderWithValence(
      <PillSelector
        value={[]}
        setValue={setValue}
        pills={pills}
        setPills={() => {}}
        allowEditing
      />,
    );

    await user.type(
      screen.getByPlaceholderText("Add a pill..."),
      "delta{Enter}",
    );
    expect(setValue).toHaveBeenCalledWith(["delta"]);
  });

  it("does not add a pill once maxSelectable is reached", async () => {
    const setValue = vi.fn();
    const { user } = renderWithValence(
      <PillSelector
        value={["alpha"]}
        setValue={setValue}
        pills={pills}
        setPills={() => {}}
        allowEditing
        maxSelectable={1}
      />,
    );

    await user.type(
      screen.getByPlaceholderText("Add a pill..."),
      "delta{Enter}",
    );
    expect(setValue).not.toHaveBeenCalled();
  });
});
