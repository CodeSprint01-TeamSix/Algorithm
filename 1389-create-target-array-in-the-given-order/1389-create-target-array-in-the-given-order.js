/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let result = [];

    for(let i = 0; i < nums.length; i++) {
        if(result[index[i]] !== undefined) {
            result.splice(index[i], 0, nums[i])
        } else {
            result[index[i]] = nums[i];
        }
    }

    return result;
};