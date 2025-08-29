const fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

let X = Number(input);
let dp = Array(X + 1).fill(0);

for (let i = 2; i <= X; i++) {
  // 1을 빼는 연산
  dp[i] = dp[i - 1] + 1;

  // 2로 나누는 연산
  if (i % 2 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 2] + 1);
  }

  // 3으로 나누는 연산
  if (i % 3 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 3] + 1);
  }
}

console.log(dp[X]);