/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    return [...s].sort((a,b) => (b-a)).slice(1, s.length).join('') + '1'
};