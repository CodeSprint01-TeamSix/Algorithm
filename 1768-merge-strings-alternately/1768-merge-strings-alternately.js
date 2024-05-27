/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let merged = '';
    let count1 = 0;
    let count2 = 0;
    const len1 = word1.length;
    const len2 = word2.length;

    while (count1 < len1 || count2 < len2) {
        if (count1 < len1) {
            merged += word1[count1];
            count1++;
        }
        if (count2 < len2) {
            merged += word2[count2];
            count2++;
        }
    }
    
    return merged;
};

// 번갈아가며 문자 조합
//해당 변수에 있는 문자가 추가되면 연관된 count가 추가됨