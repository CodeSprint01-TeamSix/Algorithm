/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let stairs = new Array(n).fill(0);
    stairs[1] = 1;
    stairs[2] = 2;
    
    for(let i = 3; i<= n; i++) {
        stairs[i] = stairs[i-2] + stairs[i-1];
    }
    return stairs[n]
};