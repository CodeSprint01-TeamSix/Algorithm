/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const nums_table = {}
    let longest = 0;
    for(let num of nums) {
        nums_table[num] = true
    }
    for(let num in nums_table) {
        if(!(num-1 in nums_table)) {
          let cnt = 1;
          let target = Number(num) + 1
          while(target in nums_table) {
            target++;
            cnt++;
          }
          longest = Math.max(longest, cnt);
        } 
    }
 return longest
};