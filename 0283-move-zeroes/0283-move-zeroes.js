/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let moveZero = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            nums[moveZero] = nums[i];
            moveZero++;
        }
    }
    for(let i = moveZero; i < nums.length; i++) {
        nums[i] = 0;
    }
    return nums
};