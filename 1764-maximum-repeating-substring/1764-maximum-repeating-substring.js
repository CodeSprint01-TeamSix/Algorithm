/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
    const n = sequence.length;
    const m = word.length;
    const dp = Array(n).fill(0);

    for(let i = m; i <= n; i++) {
        if(sequence.substring(i - m, i) === word) {
            dp[i] = dp[i - m] + 1;
        }
    }

    return Math.max(...dp)
};