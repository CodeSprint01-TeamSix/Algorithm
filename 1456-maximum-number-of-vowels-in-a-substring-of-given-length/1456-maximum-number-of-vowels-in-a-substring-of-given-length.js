/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 /**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let vowels = 'aeiou'
    let currentCount = 0;
    let maxCount = 0;

    for(let i = 0; i < k; i++) {
        if(vowels.includes(s[i])) {
            currentCount++;
        }
    }
    maxCount = currentCount;

    for(let i = k; i < s.length; i++) {
        if(vowels.includes(s[i])) {
            currentCount++;
        }

        if(vowels.includes(s[i-k])) {
            currentCount--;
        }
        maxCount = Math.max(maxCount, currentCount);
    }
    return maxCount;
};

// 첫 번째 풀이
// var maxVowels = function(s, k) {
//     let vowels = 'aeiou'
//     let cnt = [];
//     let left = 0;
//     let right = 0;

//     for(let i = 0; i <= s.length - 3; i++) {
//         let newS = s.slice(i, k)
//         console.log('newS', newS)
//         console.log('s', s)
//         for(let j = 0; j < vowels.length; j++) {
//             if(newS[left] === vowels[right]) {
//                 left++;
//             }
//             right++;
//         }
//         cnt.push(left);
//         left = 0;
//         right = 0;
//     }
//     return Math.max(...cnt)
// };