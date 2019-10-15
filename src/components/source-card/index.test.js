import React from "react";
import { render } from "@testing-library/react";
import SourceCard from ".";

describe("Source card", () => {
  it("returns the correctly formatted card", () => {
    const data = {
      title: "Source title",
      type: "website",
      url: "http://www.example.com/article",
    };
    const { getByText, getByTitle } = render(<SourceCard {...data} />);

    expect(getByTitle("Website")).toBeTruthy();
    expect(getByTitle("Website").className).toContain("fa-laptop");
    expect(getByText("Source title")).toBeTruthy();
    expect(getByText("Read more").href).toBe("http://www.example.com/article");
  });

  it("displays the journal icon", () => {
    const data = {
      title: "Source title",
      type: "journal",
      url: "http://www.example.com/article",
    };
    const { getByTitle } = render(<SourceCard {...data} />);

    expect(getByTitle("Journal")).toBeTruthy();
    expect(getByTitle("Journal").className).toContain("fa-newspaper");
  });

  it("returns the correctly formatted author", () => {
    const data = {
      author: ["A Author", "B Author", "C Author"],
      title: "Source title",
      type: "journal",
      url: "http://www.example.com/article",
    };
    const { getByText } = render(<SourceCard {...data} />);

    expect(getByText("By A Author, B Author & C Author")).toBeTruthy();
  });

  it("returns the correctly formatted publishers", () => {
    const data = {
      publisher: ["A Publisher", "B Publisher"],
      title: "Source title",
      type: "website",
      url: "http://www.example.com/article",
    };
    const { getByText } = render(<SourceCard {...data} />);

    expect(getByText("A Publisher & B Publisher")).toBeTruthy();
  });
});
