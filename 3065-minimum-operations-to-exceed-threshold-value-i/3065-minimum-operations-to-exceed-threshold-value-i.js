/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let len = nums.filter(e => e < k).length
    return len ? len : 0;
};