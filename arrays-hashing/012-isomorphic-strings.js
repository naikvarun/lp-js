/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function (s, t) {
  const mapST = new Map();
  const mapTS = new Map();
  for (let i = 0; i < s.length; i++) {
    const sc = s.charAt(i);
    const tc = t.charAt(i);

    if (
      (mapST.has(sc) && mapST.get(sc) !== tc) ||
      (mapTS.has(tc) && mapTS.get(tc) !== sc)
    ) {
      return false;
    }
    mapST.set(sc, tc);
    mapTS.set(tc, sc);
  }

  return true;
};

module.exports = { isIsomorphic };
