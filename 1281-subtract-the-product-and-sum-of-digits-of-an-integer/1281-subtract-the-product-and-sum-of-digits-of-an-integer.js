/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    n = String(n).split('')

    let sum = n.reduce((prev, cur) => (+prev + +cur), 0);
    let product = n.reduce((prev, cur) => +prev * +cur);

    return product - sum;
};