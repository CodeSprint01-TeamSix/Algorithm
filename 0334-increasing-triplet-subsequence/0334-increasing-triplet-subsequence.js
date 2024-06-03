/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    const n = nums.length;
    let a = Infinity;
    let b = Infinity;
    let c = Infinity;

    for(let i = 0; i < n; i++) {
        if(nums[i] <= a) a = nums[i];
        else if(nums[i] <= b) b = nums[i];
        else if(nums[i] <= c) return true;
    }
    return false
};