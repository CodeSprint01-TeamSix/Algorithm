/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let result = [0];
    for(let i = 1; i <= n; i++) {
        let binary = i.toString(2);
        let count = binary.split('').filter(bit => bit === '1').length;
        result.push(count);
    }
    return result;
};