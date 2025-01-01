/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function(nums, k) {
    let result = 0;

    for(let i = 0; i < nums.length; i++) {
        if(i.toString(2).replaceAll(0, '').length === k) result += nums[i];
    }
    
    return result
};