const fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((e) => Number(e.trim()));

const T = input[0];
const testCases = [];

for (let i = 1; i < input.length; i += 2) {
  testCases.push([input[i], input[i + 1]]);
}

const maxK = 14;
const maxN = 14;

const dp = Array.from({ length: maxK + 1 }, () => Array(maxN + 1).fill(0));

for (let i = 1; i <= maxN; i++) {
  dp[0][i] = i;
}

for (let k = 1; k <= maxK; k++) {
  for (let n = 1; n <= maxN; n++) {
    dp[k][n] = dp[k - 1][n] + dp[k][n - 1];
  }
}

for (let [k, n] of testCases) {
  console.log(dp[k][n]);
}