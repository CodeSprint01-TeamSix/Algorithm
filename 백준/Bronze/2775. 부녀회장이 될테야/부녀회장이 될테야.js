const fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

  const T = Number(input.shift());

  // 점화식
  // dp[i][j] = dp[i-1][0] + dp[i-1][1] + ... + dp[i-1][j]
  // -> dp[i][j] = dp[i][j-1] + dp[i-1][j];
  
  for (let i = 0; i < T * 2; i += 2) {
    const k = Number(input.shift());
    const n = Number(input.shift());
  
    const dp = Array.from({ length: k + 1 }, () => Array(n + 1).fill(0));
  
    for (let j = 1; j <= n; j++) {
      dp[0][j] = j;
    }
  
    for (let l = 1; l <= k; l++) {
      for (let j = 1; j <= n; j++) {
        dp[l][j] = dp[l][j - 1] + dp[l - 1][j];
      }
    }
  
    console.log(dp[k][n]);
  }