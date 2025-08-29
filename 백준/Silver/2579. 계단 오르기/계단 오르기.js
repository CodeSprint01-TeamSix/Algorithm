const fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const stepsCount = Number(input.shift());
const steps = input.map(Number);
// 인덱스를 1부터 시작하기 위해 0번 인덱스에 더미값 추가
steps.unshift(0);

const dp = Array(stepsCount + 1).fill(0);

// 점화식
// dp[i] = Math.max(steps[i] + dp[i - 2], steps[i] + steps[i - 1] + dp[i - 3]);

// 기본 케이스
dp[1] = steps[1];
dp[2] = steps[1] + steps[2];

for (let i = 3; i <= stepsCount; i++) {
  // 전 계단에서 온 경우
  // dp[i] = steps[i] + steps[i-1] + dp[i-3]

  // 전 계단에서 오지 않은 경우
  // dp[i] = steps[i] + dp[i-2]

  dp[i] = Math.max(steps[i] + dp[i - 2], steps[i] + steps[i - 1] + dp[i - 3]);
}

console.log(dp[stepsCount]);