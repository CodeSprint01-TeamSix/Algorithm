/**
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = function(strs) {
    let result = '';
    const sortedStrs = strs.sort((a, b) => a.length - b.length);

    if(sortedStrs.length === 1) return sortedStrs[0];

    for(let i = 0; i < sortedStrs[0].length; i++) {
        for(let j = 1; j < sortedStrs.length; j++) {
            if(sortedStrs[j][i] !== sortedStrs[0][i]) return result;
        }
        result += sortedStrs[0][i]
    }
    return result;
};