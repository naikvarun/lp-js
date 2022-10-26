/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const cache = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (diff in cache) {
      return [cache[diff], i];
    }
    cache[nums[i]] = i;
  }

  return [-1, -1];
};

module.exports = { twoSum };
