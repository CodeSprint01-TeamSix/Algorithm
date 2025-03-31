/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    let map = new Map();

    for(const char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    return new Set(map.values()).size === 1;
};