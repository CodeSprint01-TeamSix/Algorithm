/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(!nums.includes(target)) {
     nums.push(target);   
    }
    return nums.sort((a,b) => (a-b)).indexOf(target);
};