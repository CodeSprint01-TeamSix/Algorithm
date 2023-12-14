/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let arr = [1, 1];
        for(let i=2; i<=n; i++) {
            arr.push(arr[i-1] + arr[i-2]);
        }
        return arr[n];
};


// var climbStairs = function(n) {
//     if(n === 1) return 1
//     if(n === 2) return 2

//     return climbStairs(n-2) + climbStairs(n-1);
// };


// let arr = [1, 1];
//         for(let i=2; i<=n; i++) {
//             arr.push(arr[i-1] + arr[i-2]);
//         }
//         return arr[n];