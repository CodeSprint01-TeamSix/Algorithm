/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function(s) {
    s = [...s]

    for(let i = 0; i < Math.floor(s.length/2); i++) {
        if(s[i].charCodeAt() > s[s.length - (i+1)].charCodeAt()) {
            s[i] = s[s.length - (i+1)];
        } else {
            s[s.length - (i+1)] = s[i];
        }
    }
    return s.join('');
};