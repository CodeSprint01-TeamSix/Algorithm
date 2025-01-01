/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    s = s.split(' ');

    let result = Array(s.length).fill('');

    for(let i = 0; i < s.length; i++) {
        let word = s[i];
        let position = parseInt(word.slice(-1) -1)

        result[position] = word.slice(0, s[i].length - 1)
    }

    return result.join(' ');
};