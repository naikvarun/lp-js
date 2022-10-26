/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
  const cache = strs.reduce((c, s) => {
    const key = s.split("").sort().join("");
    if (!(key in c)) {
      c[key] = [];
    }
    c[key].push(s);
    return c;
  }, {});
  return Object.values(cache);
};

module.exports = groupAnagrams;
