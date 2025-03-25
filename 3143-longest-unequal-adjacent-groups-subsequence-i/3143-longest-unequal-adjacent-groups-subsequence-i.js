/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getLongestSubsequence = function(words, groups) {
    let result = [];

    for(let i = 0; i < words.length; i++) {
        if(result.length === 0) {
            result.push(words[i]);
        } else {
            if(groups[words.indexOf(result[result.length - 1])] !== groups[i]) {
                result.push(words[i]);
            }
        }
    }

    return result;
};