/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    let result = Array(n + 1).fill(0);

    result[0] = 0;
    result[1] = 1;
    result[2] = 1;

    for(let i = 3; i <= n; i++) {
        result[i] = result[i - 1] + result[i - 2] + result[i - 3]
    }

    return result[n];
};