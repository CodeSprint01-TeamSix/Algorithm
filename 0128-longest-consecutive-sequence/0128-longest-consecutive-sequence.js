/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    nums = [...new Set(nums)];
    console.log(nums)
    nums.sort((a,b) => a - b);
    let result = [];
    let cnt = 0;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] - nums[i+1] === -1) {
            cnt++;
        } else {
            result.push(cnt);
            cnt = 0;
        }
    }
    result.sort((a,b) => b-a);
    return nums.length === 0 ? 0 : result[0] + 1;
}; 