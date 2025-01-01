function solution(nums) {
    let set = new Set(nums);
    const getCount = nums.length / 2;
    
    if(getCount >= set.size) {
        return set.size
    } else {
        return getCount
    }
}