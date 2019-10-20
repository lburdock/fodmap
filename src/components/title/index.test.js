import React from "react";
import { render } from "@testing-library/react";
import Title from ".";

describe("Title", () => {
  it("renders the Title content", () => {
    const { getByText } = render(<Title>About</Title>);

    expect(getByText("About")).toBeTruthy();
    expect(getByText("About").className).toContain("title");
  });
});
