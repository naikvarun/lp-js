const { generate } = require("./009-pascals-triangle");

describe("Pascals Triangle", () => {
  test("01", () => {
    expect(generate(1)).toEqual([[1]]);
  });

  test("02", () => {
    expect(generate(2)).toEqual([[1], [1, 1]]);
  });
  test("03", () => {
    expect(generate(3)).toEqual([[1], [1, 1], [1, 2, 1]]);
  });

  test("04", () => {
    expect(generate(4)).toEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]]);
  });

  test("05", () => {
    expect(generate(5)).toEqual([
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1],
    ]);
  });

  test("06", () => {
    expect(generate(6)).toEqual([
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1],
      [1, 5, 10, 10, 5, 1],
    ]);
  });
});
