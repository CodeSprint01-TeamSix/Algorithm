/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    return nums.filter(e => e % 3 !== 0).length;
};