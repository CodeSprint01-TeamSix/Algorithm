const fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const T = Number(input.shift());
const num = input.map(Number);

const maxNum = Math.max(...num);
const dp = Array(maxNum + 1).fill(1);

dp[1] = 1;
dp[2] = 2;

for (let i = 3; i <= maxNum; i++) {
  // 점화식
  dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

for (let i = 0; i < T; i++) {
  console.log(dp[num[i]]);
}