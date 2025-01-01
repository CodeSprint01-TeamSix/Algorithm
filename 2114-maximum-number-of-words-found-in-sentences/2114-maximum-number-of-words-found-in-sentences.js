/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let MaxCnt = 0;
    let cnt = 0;

    sentences = sentences.join(',');

    for(let i = 0; i < sentences.length; i++) {
        if(sentences[i] === ' ') {
            cnt++
        } else if(sentences[i] === ',' || i === sentences.length - 1) {
            if(MaxCnt < cnt) MaxCnt = cnt;
            cnt = 0
        }
    }
    return MaxCnt + 1;
};