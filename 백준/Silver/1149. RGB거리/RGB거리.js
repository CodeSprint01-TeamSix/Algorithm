const fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

  const N = Number(input.shift());

  input = input.map((e) => e.split(' ').map(Number));
  input.unshift(Array(3).fill(0));
  input.map((e) => e.unshift(0));
  
  const dp = Array.from({ length: N + 1 }, () => Array(3 + 1).fill(0));
  
  for (let i = 1; i <= N; i++) {
    dp[i] = input[i];
  }
  
  for (let i = 2; i <= N; i++) {
    dp[i][1] = Math.min(
      input[i][1] + input[i - 1][2],
      input[i][1] + input[i - 1][3]
    );
    dp[i][2] = Math.min(
      input[i][2] + input[i - 1][1],
      input[i][2] + input[i - 1][3]
    );
    dp[i][3] = Math.min(
      input[i][3] + input[i - 1][1],
      input[i][3] + input[i - 1][2]
    );
  }
  
  dp[N].shift();
  
  const result = Math.min(...dp[N]);
  
  console.log(result);