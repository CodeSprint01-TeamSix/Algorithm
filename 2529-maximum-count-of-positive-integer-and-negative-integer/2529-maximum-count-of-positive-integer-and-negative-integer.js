/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let positive = 0;
    let negative = 0;
    
    nums.forEach(e => {
        if(e > 0) positive++;
        else if(e < 0) negative++;
    })
    
    return positive >= negative ? positive : negative;
};

// forEach보다 for문 돌리는 것이 더 빠름