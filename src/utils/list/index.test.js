import { halveList, hasItems, joinList } from ".";

describe("halveList", () => {
  it("splits the array into two equal size arrays", () => {
    const result = halveList([1, 2, 3, 4]);
    expect(result).toEqual([[1, 2], [3, 4]]);
  });

  it("splits the array into two arrays", () => {
    const result = halveList([1, 2, 3, 4, 5]);
    expect(result).toEqual([[1, 2, 3], [4, 5]]);
  });
});

describe("joinList", () => {
  it("handles single author", () => {
    const result = joinList(["Author A.B."]);
    expect(result).toBe("Author A.B.");
  });

  it("handles multiple authors", () => {
    const result = joinList(["Author A.B.", "Author C.D."]);
    expect(result).toBe("Author A.B. & Author C.D.");
  });
});

describe("hasItems", () => {
  test.each([[undefined, false], [null, false], [[], false], [[1], true]])(
    "returns the correct result (%O)",
    (list, expected) => {
      const result = hasItems(list);
      expect(result).toBe(expected);
    }
  );
});
