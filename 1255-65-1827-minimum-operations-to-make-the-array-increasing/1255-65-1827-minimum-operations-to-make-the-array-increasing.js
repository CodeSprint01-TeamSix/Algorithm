/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let result = 0;

    for(let i = 0; i < nums.length - 1; i++) {
        let originValue;
        if(nums[i] >= nums[i+1]) {
            originValue = nums[i+1];
            nums[i+1] = nums[i] + 1;
            result += nums[i+1] - originValue;
        }
    }

    return result;
};