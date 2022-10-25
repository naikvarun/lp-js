/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
  const frequency = {};
  for (let i = 0; i < s.length; i++) {
    if (!(s[i] in frequency)) {
      frequency[s[i]] = 0;
    }
    frequency[s[i]] += 1;
  }

  for (let i = 0; i < t.length; i++) {
    if (!(t[i] in frequency)) {
      return false;
    }
    frequency[t[i]] -= 1;
    if (frequency[t[i]] === 0) {
      delete frequency[t[i]];
    }
  }
  return Object.keys(frequency).length === 0;
};

module.exports = { isAnagram };
