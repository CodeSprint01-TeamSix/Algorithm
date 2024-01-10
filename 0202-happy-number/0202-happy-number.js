/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const arr = [];
   
    while (n !== 1) {
        n = n.toString().split("").reduce((a, b) => a + b**2, 0);
        console.log(arr)
        console.log(n)
        if (arr.indexOf(n) !== -1) return false;
        arr.push(n)
    }
    return true
};