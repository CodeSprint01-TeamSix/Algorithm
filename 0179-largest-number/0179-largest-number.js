/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums.sort((a,b) => {
        let newA = a.toString()
        let newB = b.toString()
        console.log(Number(newA + newB) > Number(newB + newA) ? -1 : 1)
        return Number(newB + newA) - Number(newA + newB)
    });
    if(nums[0] === 0) return '0';

    console.log(nums)
    return nums.join('')
};