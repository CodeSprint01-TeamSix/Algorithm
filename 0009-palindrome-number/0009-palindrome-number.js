/**
 * @param {number} x
 * @return {boolean}
 */
let isPalindrome = function(x) {
    const arr = x.toString().split('');

    while(arr.length > 1){
        if(arr.shift() !== arr.pop()) return false;
    }
    return true;
};