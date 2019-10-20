import React from "react";
import { render } from "@testing-library/react";
import Message from ".";

describe("Message", () => {
  it("returns the correctly formatted Message", () => {
    const { getByText } = render(<Message header="Header">Body</Message>);

    expect(getByText("Header")).toBeTruthy();
    expect(getByText("Body")).toBeTruthy();
  });

  it("adds the classes appropriately", () => {
    const { container } = render(
      <Message
        className={{
          body: "body-class",
          container: "container-class",
          header: "header-class",
        }}
        header="Header"
      >
        Body
      </Message>
    );

    expect(container.querySelector(".message").className).toContain(
      "container-class"
    );
    expect(container.querySelector(".message-header").className).toContain(
      "header-class"
    );
    expect(container.querySelector(".message-body").className).toContain(
      "body-class"
    );
  });
});
