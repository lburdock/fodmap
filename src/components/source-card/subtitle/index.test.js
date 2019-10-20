import React from "react";
import { render } from "@testing-library/react";
import Subtitle from ".";

describe("Source card subtitle", () => {
  it("returns the correctly formatted subtitle", () => {
    const data = {
      list: ["A Publisher", "B Publisher"],
    };
    const { getByText } = render(<Subtitle {...data} />);

    expect(getByText("A Publisher & B Publisher")).toBeTruthy();
  });

  it("returns the correctly formatted subtitle (with a prefix)", () => {
    const data = {
      list: ["A Author"],
      prefix: "By",
    };
    const { getByText } = render(<Subtitle {...data} />);

    expect(getByText("By A Author")).toBeTruthy();
  });

  it("returns null when no list is provided", () => {
    const data = {
      list: [],
    };
    const { container } = render(<Subtitle {...data} />);
    expect(container.firstChild).toBe(null);
  });
});
