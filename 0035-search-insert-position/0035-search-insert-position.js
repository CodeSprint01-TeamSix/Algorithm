/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
   const findNum = nums.findIndex(num => num === target)
   if(findNum > -1) return findNum
    
   nums.push(target)
   const rangeNums = nums.sort((a,b) => a - b);
   const newFindNum = rangeNums.findIndex(num => num === target)
   
   return newFindNum
};