/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
   const reX = `${x}`.split("").reverse();
    return Number(reX.join('')) === x ? true : false;
    
};