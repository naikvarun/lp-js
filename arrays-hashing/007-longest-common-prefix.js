/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
  const minLength = strs.reduce(
    (m, s) => Math.min(s.length, m),
    Number.MAX_SAFE_INTEGER
  );
  let commonPrefix = "";

  for (let ci = 0; ci < minLength; ci++) {
    let allSame = true;
    for (let i = 1; i < strs.length; i++) {
      if (strs[i].charAt(ci) !== strs[i - 1].charAt(ci)) {
        allSame = false;
        break;
      }
    }
    if (!allSame) {
      break;
    }
    commonPrefix += strs[0].charAt(ci);
  }

  return commonPrefix;
};

module.exports = { longestCommonPrefix };
