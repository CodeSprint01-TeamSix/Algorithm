const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const array = input[1].split(' ').map(Number);

const dp = Array(N).fill(0);

dp[0] = array[0];

let containPrevCount = true;

for (let i = 1; i < N; i++) {
  // array[j]가 마지막인 경우들 중 array[j]가 들어간 연속된 숫자 중 가장 큰 값을 dp[i]에 저장
  dp[i] = Math.max(array[i], dp[i - 1] + array[i]);
}

console.log(Math.max(...dp));