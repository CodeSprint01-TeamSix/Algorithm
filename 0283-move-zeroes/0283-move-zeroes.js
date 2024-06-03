/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] !== 0) {
            // console.log(nums[right], nums[left]);
            // 1 0
            // 3 0
            // 12 0
            [nums[right], nums[left]] = [nums[left], nums[right]];
            left++;
        }
    }

    return nums;
};