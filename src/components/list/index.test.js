import React from "react";
import { render } from "@testing-library/react";
import ListSection from ".";

describe("ListSection", () => {
  it("returns the correctly formatted ListSection", () => {
    const data = {
      displayName: "Dairy",
      groups: [
        {
          status: "low",
          food: [
            {
              id: "butter",
              category: "dairy",
              displayName: "Butter",
              fodmapStatus: "low",
            },
          ],
        },
        {
          status: "high",
          food: [
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
          ],
        },
      ],
    };
    const { container, getByText } = render(<ListSection {...data} />);

    expect(getByText("Dairy")).toBeTruthy();

    expect(getByText("low")).toBeTruthy();
    expect(getByText("Butter")).toBeTruthy();

    expect(getByText("high")).toBeTruthy();
    expect(getByText("Yogurt")).toBeTruthy();
    expect(getByText("Ice cream")).toBeTruthy();

    expect(container.querySelector(".is-hidden-mobile")).toBeFalsy();
  });

  it("doesn't display the list item when a group is missing", () => {
    const data = {
      displayName: "Dairy",
      groups: [
        {
          status: "low",
          food: [
            {
              id: "butter",
              category: "dairy",
              displayName: "Butter",
              fodmapStatus: "low",
            },
          ],
        },
        {
          status: "high",
          food: [],
        },
      ],
    };
    const { container, getByText } = render(<ListSection {...data} />);

    expect(getByText("Dairy")).toBeTruthy();

    expect(getByText("low")).toBeTruthy();
    expect(getByText("Butter")).toBeTruthy();

    expect(() => getByText("high")).toThrow();

    expect(container.querySelector(".is-hidden-mobile")).toBeTruthy();
  });
});
