function solution(nums) {
    if([...new Set(nums)].length >= nums.length / 2) {
        return nums.length / 2;
    } else {
        return [...new Set(nums)].length;
    }
}