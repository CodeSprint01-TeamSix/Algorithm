const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const array = input.slice(1).map((e) => e.split(' ').map(Number));

const dp = Array(N).fill(0);
for (let i = 0; i < dp.length; i++) {
  dp[i] = Array(i + 3).fill(0);
}

dp[0][1] = array[0][0];

for (let i = 1; i < N; i++) {
  for (let j = 1; j < dp[i].length - 1; j++) {
    dp[i][j] = array[i][j - 1] + Math.max(dp[i - 1][j - 1], dp[i - 1][j]);

  }
}

console.log(Math.max(...dp[dp.length - 1]));