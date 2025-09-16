const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const firstArray = input.slice(1, N + 1).map((e) => e.split(' ').map(Number));
// 합을 구할 부분의 개수
const K = Number(input.slice(N + 1, N + 1 + 1));
const secondArray = input
  .slice(N + 1 + 1)
  .map((e) => e.split(' ').map((e) => Number(e - 1)));

const dp = Array.from({ length: N }, () => Array(M).fill(0));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    let top = i > 0 ? dp[i - 1][j] : 0;
    let left = j > 0 ? dp[i][j - 1] : 0;
    let corner = i > 0 && j > 0 ? dp[i - 1][j - 1] : 0;

    dp[i][j] = firstArray[i][j] + top + left - corner;
  }
}

let result = '';

for (const [x1, y1, x2, y2] of secondArray) {
  let sum = dp[x2][y2];

  if (x1 > 0) sum -= dp[x1 - 1][y2];
  if (y1 > 0) sum -= dp[x2][y1 - 1];
  if (x1 > 0 && y1 > 0) sum += dp[x1 - 1][y1 - 1];
  result += sum + '\n';
}

console.log(result);