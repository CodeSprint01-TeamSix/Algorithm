/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let eleSum = nums.reduce((prev, cur) => (prev + cur), 0);
    let digSum = 0;

    for(let i = 0; i < nums.length; i++) {
        while(nums[i] > 0) {
            digSum += nums[i] % 10;
            nums[i] = Math.floor(nums[i] / 10)
        }
    }

    return Math.abs(eleSum - digSum)
};