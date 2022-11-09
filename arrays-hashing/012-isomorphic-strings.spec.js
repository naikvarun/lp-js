const { isIsomorphic } = require("./012-isomorphic-strings");

describe("IsoMorphic Strings", () => {
  test("01", () => {
    expect(isIsomorphic("egg", "add")).toBeTruthy();
  });

  test("02", () => {
    expect(isIsomorphic("foo", "bar")).toBeFalsy();
  });

  test("02", () => {
    expect(isIsomorphic("paper", "title")).toBeTruthy();
  });

  test("02", () => {
    expect(isIsomorphic("badc", "bada")).toBeFalsy();
  });
});
