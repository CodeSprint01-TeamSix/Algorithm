/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const n = nums.length;
    const totalSum = (n * (n + 1)) / 2;
    const arraySum = nums.reduce((sum, num) => sum + num, 0);
    return totalSum - arraySum;
};

//0~n까지의 합? 가오스 방식 (n * (n + 1)) / 2
//모든 요소의 합
// 두 값을 빼면 빠진 값이 나옴