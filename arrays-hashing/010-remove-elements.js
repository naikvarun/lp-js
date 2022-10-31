/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
  let ci = 0;
  let ri = nums.length - 1;
  while (ci <= ri) {
    if (nums[ci] === val) {
      const temp = nums[ri];
      nums[ri] = nums[ci];
      nums[ci] = temp;
      ri -= 1;
    } else {
      ci += 1;
    }
  }
  return ri + 1;
};
module.exports = { removeElement };
