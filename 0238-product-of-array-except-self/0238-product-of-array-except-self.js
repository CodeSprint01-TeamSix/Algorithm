/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const n = nums.length;

    const prefix = Array(n).fill(1);
    const suffix = Array(n).fill(1);

    // prefix 배열: 왼쪽에서부터 각 인덱스까지의 곱을 저장
    for(let i = 1; i < n; i++) {
        prefix[i] = prefix[i-1] * nums[i-1];
    }

    // suffix 배열: 오른쪽에서부터 각 인덱스까지의 곱을 저장
    for(let i = n - 2; i >= 0; i--) {
        suffix[i] = suffix[i+1] * nums[i+1];
    }

    const answer = [];

    for(let i = 0; i < n; i++) {
        answer[i] = prefix[i] * suffix[i];
    }

    return answer;
};