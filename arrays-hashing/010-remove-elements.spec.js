const { removeElement } = require("./010-remove-elements");

describe("Remove Elements", () => {
  const runTest = (nums, val, expected) => {
    const k = removeElement(nums, val);
    expect(k).toEqual(expected.length);
    const result = nums.splice(0, k);
    result.sort();
    expected.sort();
    for (let i = 0; i < k; i++) {
      expect(result[i]).toEqual(expected[i]);
    }
  };
  test("01", () => {
    runTest([3, 2, 2, 3], 3, [2, 2]);
  });

  test("02", () => {
    runTest([0, 1, 2, 2, 3, 0, 4, 2], 2, [0, 1, 4, 0, 3]);
  });

  test("01", () => {
    runTest([1], 1, []);
  });
});
