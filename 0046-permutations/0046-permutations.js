/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];
    
    const backtrack = (current, remaining) => {
        if (remaining.length === 0) {
            result.push(current);
            return;
        }
        
        for (let i = 0; i < remaining.length; i++) {
            const newCurrent = [...current, remaining[i]];
            const newRemaining = [...remaining.slice(0, i), ...remaining.slice(i + 1)];
            backtrack(newCurrent, newRemaining);
        }
    };
    
    backtrack([], nums);
    
    return result;
};

/* newCurrent [ 1 ] newRemaining [ 2, 3 ]
newCurrent [ 1, 2 ] newRemaining [ 3 ]
newCurrent [ 1, 2, 3 ] newRemaining []
newCurrent [ 1, 3 ] newRemaining [ 2 ]
newCurrent [ 1, 3, 2 ] newRemaining []
newCurrent [ 2 ] newRemaining [ 1, 3 ]
newCurrent [ 2, 1 ] newRemaining [ 3 ]
newCurrent [ 2, 1, 3 ] newRemaining []
newCurrent [ 2, 3 ] newRemaining [ 1 ]
newCurrent [ 2, 3, 1 ] newRemaining []
newCurrent [ 3 ] newRemaining [ 1, 2 ]
newCurrent [ 3, 1 ] newRemaining [ 2 ]
newCurrent [ 3, 1, 2 ] newRemaining []
newCurrent [ 3, 2 ] newRemaining [ 1 ]
newCurrent [ 3, 2, 1 ] newRemaining [] */