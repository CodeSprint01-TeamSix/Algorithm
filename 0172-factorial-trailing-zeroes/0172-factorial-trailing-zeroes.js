// /**
//  * @param {number} n
//  * @return {number}
//  */
// function trailingZeroes(n) {
//     if(n === 1 || n === 0) return n;
    
//     return n * trailingZeroes(n-1)
// };
function trailingZeroes(n) {
    let count = 0;
    
    while (n > 0) {
        n = Math.floor(n / 5);
        count += n;
    }
    
    return count;
}