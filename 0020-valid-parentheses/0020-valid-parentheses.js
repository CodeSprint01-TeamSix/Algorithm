/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s.length % 2 !== 0) return false;
    let arr = [];
    let pairs = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    for(let i = 0; i < s.length; i++) {
        if(pairs[s[i]]) {
            arr.push(pairs[s[i]]);
        } else {
            if(s[i] !== arr.pop()) return false;
        }
    }
    return arr.length === 0;
};