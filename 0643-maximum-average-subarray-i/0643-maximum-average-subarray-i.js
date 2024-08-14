/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let n = nums.length;
    if (n <= k) {
        return nums.reduce((prev, cur) => prev + cur) / k;
    }

    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }

    let maxSum = sum;
    for(let i = k; i < n; i++) {
        sum = sum - nums[i-k] + nums[i];
        maxSum = Math.max(maxSum, sum)
    }
    return maxSum / k
};

// 첫 번째 풀이
// var findMaxAverage = function(nums, k) {
//     let result = [];

//     for(let i = 0; i <= nums.length - k; i++) {
//         result.push(nums.splice(i, k))
//     }
//     console.log(result)
// };

// 두 번째 풀이
// var findMaxAverage = function(nums, k) {
//     let left = 0;
//     let right = k;
//     let sum = 0;
//     let temp = [];

//     if(nums.length <= 4) {
//         return nums.reduce((prev, cur) => prev + cur) / k
//     }

//     while(left <= nums.length - 4) {
//         for(let i = left; i < right; i++) {
//             sum += nums[i];
//         }
//         temp.push(sum);
//         sum = 0;
//         left++;
//         right++;
//     }
//     return Math.max(...temp) / k
// };