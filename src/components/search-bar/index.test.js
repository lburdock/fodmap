import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchBar from ".";

describe("SearchBar", () => {
  it("renders the SearchBar content", () => {
    const { getByLabelText, getByText } = render(
      <SearchBar
        onChange={jest.fn()}
        onSubmit={jest.fn()}
        placeholderText="Placeholder"
      />
    );

    expect(getByText("Search")).toBeTruthy();
    expect(getByLabelText("Search the food list")).toBeTruthy();
  });

  it("calls the provided onChange function", () => {
    const onChange = jest.fn(e =>
      expect(e.target.value).toBe("onChange function")
    );
    const { getByLabelText } = render(
      <SearchBar
        onChange={onChange}
        onSubmit={jest.fn()}
        placeholderText="Placeholder"
      />
    );

    fireEvent.change(getByLabelText("Search the food list"), {
      target: { value: "onChange function" },
    });
    expect(onChange.mock.calls.length).toBe(1);
  });

  it("calls the provided onSubmit function", () => {
    const onSubmit = jest.fn(e =>
      expect(e.target.value).toBe("onSubmit function")
    );
    const { getByLabelText } = render(
      <SearchBar
        onChange={jest.fn()}
        onSubmit={onSubmit}
        placeholderText="Placeholder"
      />
    );

    fireEvent.submit(getByLabelText("Search the food list"), {
      target: { value: "onSubmit function" },
    });
    expect(onSubmit.mock.calls.length).toBe(1);
  });
});
