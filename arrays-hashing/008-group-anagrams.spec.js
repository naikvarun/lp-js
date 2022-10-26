const groupAnagrams = require("./008-group-anagrams");

describe("Group Anagrams", () => {
  expect.extend({
    /**
     *
     * @param {string[][]} received
     * @param {string[][]} actual
     */
    toEqual2DArray(received, actual) {
      if (received.length !== actual.length) {
        return { pass: false };
      }

      for (let i = 0; i < received.length; i++) {
        received[i].sort();
        actual[i].sort();
      }

      /**
       *
       * @param {string[]} r1
       * @param {string[]} r2
       */
      const sort2D = (r1, r2) => {
        if (r1.length !== r2.length) {
          return r1.length - r2.length;
        }
        for (let i = 0; i < r1.length; i++) {
          const comp = r1[i].localeCompare(r2[i]);
          if (comp !== 0) {
            return comp;
          }
        }
        return 0;
      };
      received.sort(sort2D);
      actual.sort(sort2D);

      return { pass: JSON.stringify(received) === JSON.stringify(actual) };
    },
  });

  test("01", () => {
    expect(
      groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
    ).toEqual2DArray([["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]);
  });

  test("02", () => {
    expect(groupAnagrams([""])).toEqual2DArray([[""]]);
  });

  test("03", () => {
    expect(groupAnagrams(["a"])).toEqual2DArray([["a"]]);
  });
});
