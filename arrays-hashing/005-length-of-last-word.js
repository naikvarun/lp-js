/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
  let length = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") {
      length += 1;
    } else {
      if (length > 0) {
        return length;
      }
    }
  }
  return length;
};

// const lengthOfLastWord = function (s) {
//   let i = s.length - 1;
//   while (s[i] === " ") {
//     i -= 1;
//   }
//   const end = i;
//   while (i >= 0 && s[i] !== " ") {
//     i -= 1;
//   }
//   return end - i;
// };

module.exports = { lengthOfLastWord };
