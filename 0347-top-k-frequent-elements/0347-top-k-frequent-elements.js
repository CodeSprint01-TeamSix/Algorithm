/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const set_nums = new Set(nums)
    const most_frequent = []
    const result = []

    
    for(i of set_nums) {
        let new_arr = nums.filter(num => i === num)
        most_frequent.push([i, new_arr.length])
    }
    
    most_frequent.sort((a,b) => b[1] - a[1])
    
    most_frequent.forEach((num, index) => {
        if(index < k) {
            result.push(num[0])
        }
    })
    return result
};