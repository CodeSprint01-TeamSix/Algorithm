/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const AEIOU = 'aeiouAEIOU'
    let vowels = [];
    let result = [...s];
    let cnt = 0;

    for(let i = 0; i < s.length; i++) {
        if(AEIOU.includes(s[i])) {
            vowels.push(s[i]);
        }
    }

    vowels.reverse();

    for(let i = 0; i < s.length; i++) {
        if(AEIOU.includes(s[i])) {
            result[i] = vowels[cnt];
            cnt++;
        }
    }
    return result.join('')
};

// 문자열은 불변(immutable) 이므로 직접적으로 문자열의 특정 위치를 수정할 수 없다