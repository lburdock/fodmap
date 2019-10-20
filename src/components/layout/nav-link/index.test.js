import React from "react";
import { render } from "@testing-library/react";
import NavLink from ".";

describe("NavLink", () => {
  it("renders the NavLink content", () => {
    const { getByText } = render(
      <NavLink to="http://example.com/about">About</NavLink>
    );

    expect(getByText("About")).toBeTruthy();
    expect(getByText("About").href).toBe("http://example.com/about");
  });
});
