const { lengthOfLastWord } = require("./005-length-of-last-word");

describe("Length of Last word", () => {
  test("01", () => {
    expect(lengthOfLastWord("Hello World")).toEqual(5);
  });

  test("02", () => {
    expect(lengthOfLastWord("   fly me   to   the moon  ")).toEqual(4);
  });

  test("03", () => {
    expect(lengthOfLastWord("luffy is still joyboy")).toEqual(6);
  });

  test("04", () => {
    expect(lengthOfLastWord("abc")).toEqual(3);
  });
});
