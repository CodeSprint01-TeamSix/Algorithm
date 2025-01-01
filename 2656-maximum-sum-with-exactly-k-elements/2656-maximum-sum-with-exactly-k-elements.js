/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
    let sortedNums = nums.sort((a,b) => a - b);
    let max = sortedNums[sortedNums.length - 1];
    
    for(let i = 0; i < k - 1; i++) {
        sortedNums[sortedNums.length - 1] = sortedNums[sortedNums.length - 1] + 1;
        max += sortedNums[sortedNums.length - 1]
    }

    return max;
};