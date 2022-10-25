const { replaceElements } = require("./003-replace-greatest-right");

describe("Replace Elements with Greatest Element on Right Side", () => {
  test("01", () => {
    expect(replaceElements([17, 18, 5, 4, 6, 1])).toEqual([18, 6, 6, 6, 1, -1]);
  });

  test("02", () => {
    expect(replaceElements([400])).toEqual([-1]);
  });

  test("03", () => {
    expect(replaceElements([1, 400])).toEqual([400, -1]);
  });

  test("03", () => {
    expect(replaceElements([1, 0])).toEqual([0, -1]);
  });
});
