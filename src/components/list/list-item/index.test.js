import React from "react";
import { render } from "@testing-library/react";
import ListItem from ".";

const food = [
  {
    id: "yogurt",
    category: "dairy",
    displayName: "Yogurt",
    fodmapStatus: "high",
  },
  {
    id: "ice-cream",
    category: "dairy",
    displayName: "Ice cream",
    fodmapStatus: "high",
  },
];

describe("ListItem", () => {
  it("returns the correctly formatted ListItem", () => {
    const { getByText } = render(<ListItem food={food} status="high" />);

    expect(getByText("high")).toBeTruthy();
    expect(getByText("Yogurt")).toBeTruthy();
    expect(getByText("Ice cream")).toBeTruthy();
  });

  it("uses the 'is-danger' color when the status is 'high'", () => {
    const { container } = render(<ListItem food={food} status="high" />);

    expect(container.querySelector(".message").className).toContain(
      "is-danger"
    );
  });

  it("uses the 'is-primary' color when the status is 'low'", () => {
    const { container } = render(<ListItem food={food} status="low" />);

    expect(container.querySelector(".message").className).toContain(
      "is-primary"
    );
  });
});
