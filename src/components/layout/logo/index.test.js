import React from "react";
import { render } from "@testing-library/react";
import Logo from ".";

describe("Logo", () => {
  it("renders the Logo content", () => {
    const { getAllByText, getByTitle } = render(<Logo title="Fodmap" />);

    expect(
      getAllByText((content, element) => {
        return element.textContent === "Fodmap";
      })
    ).toBeTruthy();
    expect(getByTitle("Fodmap").className).toContain("fas fa-seedling");
  });
});
