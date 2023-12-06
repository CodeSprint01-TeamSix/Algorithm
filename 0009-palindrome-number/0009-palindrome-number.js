/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const x_string = String(x);
    for(let i = 0;i<x_string.length;i++){
        if(x_string[i]!==x_string[x_string.length-i-1]){
            return false;
        }
        continue;
    }
    return true;
};