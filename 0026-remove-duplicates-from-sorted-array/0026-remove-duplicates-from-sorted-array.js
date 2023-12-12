/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for(let i = 0; i < nums.length-1; i++) {
        if(nums[i] == nums[i+1]) {
            nums.splice(i+1, 1);
            i--;
        }
    }
};

//const numbers = [1, 2, 2, 3, 4, 4, 5];
//const uniqueNumbers = [...new Set(numbers)];
//console.log(uniqueNumbers); // [1, 2, 3, 4, 5]

// var removeDuplicates = function(nums) {
//     let set = [...new Set(nums)];
//     console.log(set); // [ 1, 2 ]
//     nums = [];
//     nums.push(...set);
//     console.log(nums);
//     return nums;
// };