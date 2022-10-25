/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function (s, t) {
  const sn = s.length;
  const tn = t.length;
  if (sn > tn) {
    return false;
  }
  let si = 0;
  let ti = 0;
  while (si < sn) {
    if (ti >= tn) {
      return false;
    }
    if (s[si] === t[ti]) {
      si += 1;
    }
    ti += 1;
  }
  return true;
};
module.exports = { isSubsequence };
