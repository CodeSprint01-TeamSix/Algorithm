/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function(nums) {
    let result = [];
    let numsLen = nums.length;
    let sortedNums = nums.sort((a,b) => a - b);

    for(let i = 0; i < numsLen/2; i++) {
        result.push((sortedNums.shift() + sortedNums.pop()) / 2);
    }

    return Math.min(...result)
};