const { twoSum } = require("./006-two-sum");

describe("Two Sum", () => {
  test("01", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });
  test("02", () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });
  test("03", () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });
});
