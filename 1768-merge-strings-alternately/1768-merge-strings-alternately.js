/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let result = '';
    let cnt = word1.length + word2.length;
    word1 = [...word1];
    word2 = [...word2];
    
    while(cnt > 0) {
        if(word1.length > 0) {
            result += word1[0];
            word1.shift();
            cnt--;
        }
        if(word2.length > 0) {
            result += word2[0]
            word2.shift();
            cnt--;
        }
    }
    
    return result;
};