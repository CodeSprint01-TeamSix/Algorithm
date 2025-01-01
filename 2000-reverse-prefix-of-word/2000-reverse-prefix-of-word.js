/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    let idx = word.indexOf(ch);
    let sliceWord = word.slice(0, idx+1);

    return idx === -1 ? word : [...sliceWord].reverse().join('') + word.slice(idx+1);
};