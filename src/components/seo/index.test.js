import React from "react";
import { useStaticQuery } from "gatsby";
import { render, waitForDomChange } from "@testing-library/react";
import SEO from ".";

const getContent = selector => document.querySelector(selector).content;

beforeEach(() => {
  useStaticQuery.mockImplementationOnce(() => ({
    site: {
      siteMetadata: {
        title: "Website title",
        description: "Website description",
        author: "Website author",
      },
    },
  }));
});

describe("SEO", () => {
  it("adds the correctly formatted meta tags", async () => {
    render(<SEO title="Page title" />);

    await waitForDomChange();

    expect(getContent("meta[name='description']")).toBe("Website description");
    expect(getContent("meta[property='og:description']")).toBe(
      "Website description"
    );
    expect(getContent("meta[name='twitter:description']")).toBe(
      "Website description"
    );

    expect(document.title).toEqual("Page title | Website title");
    expect(getContent("meta[property='og:title']")).toBe("Page title");
    expect(getContent("meta[name='twitter:title']")).toBe("Page title");

    expect(getContent("meta[name='twitter:creator']")).toBe("Website author");

    expect(getContent("meta[property='og:type']")).toBe("website");
    expect(getContent("meta[name='twitter:card']")).toBe("summary");
  });

  it("uses the provided description", async () => {
    render(<SEO title="Page title" description="Page description" />);

    await waitForDomChange();

    expect(getContent("meta[name='description']")).toBe("Page description");
    expect(getContent("meta[property='og:description']")).toBe(
      "Page description"
    );
    expect(getContent("meta[name='twitter:description']")).toBe(
      "Page description"
    );
  });

  it("adds additional meta tags", async () => {
    const metaTags = [
      {
        name: "robots",
        content: "index, follow",
      },
    ];
    render(<SEO title="Page title" meta={metaTags} />);

    await waitForDomChange();

    expect(getContent("meta[name='robots']")).toBe("index, follow");
  });
});
