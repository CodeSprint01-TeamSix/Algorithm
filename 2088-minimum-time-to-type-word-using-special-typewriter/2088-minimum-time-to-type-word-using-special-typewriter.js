/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function(word) {
    const typingSecond = 1;
    let count = 0;
    let currentWord = 'a';
    
    for(let i = 0; i < word.length; i++) {
        if(currentWord === word[i]) {
            count += typingSecond;
            continue;
        }

        let calculate = Math.abs(word[i].charCodeAt() - currentWord.charCodeAt())

        if(calculate >= 13) {
            count += 26 - calculate;
        } else {
            count += calculate;
        }

        count += typingSecond;
        currentWord = word[i];
    }

    return count;
};