/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.trim().split(/\s+/).reverse().join(' ');
    return s
};

// split(/\s+/)을 사용하면 하나 이상의 공백을 기준으로 문자열을 단어 단위로 분리할 수 있다. 