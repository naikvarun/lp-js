/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function (numRows) {
  const result = [[1]];
  let cr = 1;
  while (cr < numRows) {
    const previous = [0, ...result[result.length - 1], 0];
    const current = [];
    for (let i = 1; i < previous.length; i++) {
      current.push(previous[i - 1] + previous[i]);
    }
    result.push(current);
    cr += 1;
  }
  return result;
};
module.exports = { generate };
