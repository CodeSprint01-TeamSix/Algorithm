/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    let increase = 0;
    let decrease = s.length;

    let result = Array(s.length + 1).fill(0);

    for(let i = 0; i <= s.length; i++) {
        result[i] = s[i] === 'I' ? increase++ : decrease--;
    }

    return result;
};