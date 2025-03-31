/**
 * @param {number[]} nums
 * @return {number}
 */
var countQuadruplets = function(nums) {
    let count = 0;

    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            for(let k = j+1; k < nums.length; k++) {
                const sum = nums[i] + nums[j] + nums[k];
                console.log(sum)
                const result = nums.filter(e => e === sum);
                count += result.length;
            }
        }
    }

    return count;
};