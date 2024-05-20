/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let plus = 0;
    let minus = 0;

    nums.forEach(num => {
        if(num > 0) {
            plus++
        } else if(num < 0) { // 0때문에 조건 넣어줘야함
            minus++
        }
    })
    return Math.max(plus, minus)
};