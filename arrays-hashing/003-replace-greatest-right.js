/**
 * @param {number[]} arr
 * @return {number[]}
 */
const replaceElements = function (arr) {
  let greatestSoFar = -1;
  for (i = arr.length - 1; i >= 0; i--) {
    const current = arr[i];
    arr[i] = greatestSoFar;
    greatestSoFar = current > greatestSoFar ? current : greatestSoFar;
  }
  return arr;
};

module.exports = { replaceElements };
