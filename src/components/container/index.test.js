import React from "react";
import { render } from "@testing-library/react";
import Container from ".";

describe("Container", () => {
  it("renders the container", () => {
    const { getByText } = render(<Container>Hello</Container>);

    expect(getByText("Hello")).toBeTruthy();
    expect(getByText("Hello").className).toContain("container");
  });

  it("renders the container with the provided class", () => {
    const { getByText } = render(
      <Container className="another-class">Hello</Container>
    );

    expect(getByText("Hello").className).toContain("another-class");
  });
});
