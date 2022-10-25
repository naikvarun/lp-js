const { containsDuplicate } = require("./001-contains-duplicate");
describe("001 Contains Duplicate", () => {
  test("01", () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBeTruthy();
  });

  test("02", () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBeFalsy();
  });

  test("03", () => {
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBeTruthy();
  });
});
