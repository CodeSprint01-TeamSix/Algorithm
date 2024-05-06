/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    const str_nums = nums.map(String);
    const largest_num = str_nums.sort((a,b) => {
        const sort_num1 = a + b;
        const sort_num2 = b + a;
        return sort_num2.localeCompare(sort_num1) 
    }).join('')
    console.log(largest_num)
    return largest_num[0] === '0' ?  '0' : largest_num 
    //localeCompare: 두 값을 비교해줌
    //반환 값이 0 이면 두 문자열이 같음
    // 음수면 첫번째 문자열이 두번째 문자열 보다 크다
    // 양수면 두번째 문자열이 크다
};