import React from "react";
import { render } from "@testing-library/react";
import Footer from ".";

const pages = [
  {
    id: 1,
    text: "About",
    url: "http://example.com/about",
  },
  {
    id: 2,
    text: "Source",
    url: "http://example.com/source",
  },
];

describe("Footer", () => {
  it("renders the footer content", () => {
    const { getByText } = render(<Footer pages={pages} title="Fodmap" />);

    expect(
      getByText((content, element) => {
        return element.textContent === "About | Source";
      })
    ).toBeTruthy();

    expect(getByText("About")).toBeTruthy();
    expect(getByText("About").href).toBe("http://example.com/about");

    expect(getByText("Source")).toBeTruthy();
    expect(getByText("Source").href).toBe("http://example.com/source");

    expect(
      getByText((content, element) => {
        return element.textContent === "Contribute to Fodmap on Github.";
      })
    ).toBeTruthy();
  });
});
