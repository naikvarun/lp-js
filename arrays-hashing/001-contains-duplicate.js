/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    const key = nums[i];
    if (key in hash) {
      return true;
    }
    hash[key] = true;
  }
  return false;
};

module.exports = { containsDuplicate };
