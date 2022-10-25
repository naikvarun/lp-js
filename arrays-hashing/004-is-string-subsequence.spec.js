const { isSubsequence } = require("./004-is-string-subsequence");

describe("Is String Subsequence", () => {
  test("01", () => {
    expect(isSubsequence("abc", "ahbgdc")).toBeTruthy();
  });

  test("02", () => {
    expect(isSubsequence("", "")).toBeTruthy();
  });

  test("03", () => {
    expect(isSubsequence("abc", "")).toBeFalsy();
  });

  test("04", () => {
    expect(isSubsequence("axc", "ahbgdc")).toBeFalsy();
  });

  test("04", () => {
    expect(isSubsequence("abc", "abcde")).toBeTruthy();
  });
});
