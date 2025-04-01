/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    let map = new Map();

    for(const char of arr) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    let result = [...map].filter(e => e[1] === 1);
    
    return result.length >= k ? result[k-1][0] : '';
};