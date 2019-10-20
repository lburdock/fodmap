import React from "react";
import { render } from "@testing-library/react";
import ExternalLink from ".";

describe("ExternalLink", () => {
  it("renders the external link", () => {
    const { getByText } = render(
      <ExternalLink to="http://example.com/">Example</ExternalLink>
    );

    expect(getByText("Example")).toBeTruthy();
    expect(getByText("Example").href).toBe("http://example.com/");
    expect(getByText("Example").rel).toBe("nofollow noopener noreferrer");
  });

  it("passes on additional props", () => {
    const { getByText } = render(
      <ExternalLink className="another-class" to="http://example.com/">
        Example
      </ExternalLink>
    );

    expect(getByText("Example")).toBeTruthy();
    expect(getByText("Example").className).toContain("another-class");
  });
});
