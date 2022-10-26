const { longestCommonPrefix } = require("./007-longest-common-prefix");

describe("Longest Common Prefix", () => {
  test("01", () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toEqual("fl");
  });

  test("02", () => {
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toEqual("");
  });

  test("03", () => {
    expect(longestCommonPrefix([""])).toEqual("");
  });

  test("04", () => {
    expect(longestCommonPrefix(["abc"])).toEqual("abc");
  });
});
