import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Header from ".";

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

describe("Header", () => {
  it("renders the Header content", () => {
    const { getByText, getByTitle } = render(
      <Header pages={pages} title="Fodmap" />
    );

    expect(getByTitle("Fodmap")).toBeTruthy();
    expect(getByTitle("Fodmap").className).toContain("fas fa-seedling");

    expect(getByText("About")).toBeTruthy();
    expect(getByText("About").href).toBe("http://example.com/about");

    expect(getByText("Source")).toBeTruthy();
    expect(getByText("Source").href).toBe("http://example.com/source");
  });

  it("updates class when hamburger is clicked", () => {
    const { getByLabelText } = render(<Header pages={pages} title="Fodmap" />);

    expect(getByLabelText("menu").className).not.toContain("is-active");
    fireEvent.click(getByLabelText("menu"));
    expect(getByLabelText("menu").className).toContain("is-active");
  });
});
