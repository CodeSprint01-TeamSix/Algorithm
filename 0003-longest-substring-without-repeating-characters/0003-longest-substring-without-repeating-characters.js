/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let answer = [];
    let maxArr = 0;
    for(let i = 0; i < s.length; i++) {
        answer = []; // Initialize the array for each i
        answer.push(s[i]);
        for(let j = i+1; j < s.length; j++) {
            if(!answer.includes(s[j])) {
                answer.push(s[j]);
            }else {
                break;
            }
        }
        if(maxArr < answer.length) {
            maxArr = answer.length;
        }
    }
    return maxArr;
};
