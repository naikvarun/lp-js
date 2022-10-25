const { isAnagram } = require("./002-valid-anagram");

describe("002 Valid Anagram", () => {
  test("01", () => {
    expect(isAnagram("anagram", "nagaram")).toBeTruthy();
  });

  test("02", () => {
    expect(isAnagram("rat", "car")).toBeFalsy();
  });
});
