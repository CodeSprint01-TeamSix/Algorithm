/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function(s) {
    let count = 0;
    let start = 0;
    let end = s.length - 1;

    while(start <= end) {
        if(s[start] === 'O') {
            start++;
        } else {
            start += 3;
            count++;
        }
    }
    
    return count;
};