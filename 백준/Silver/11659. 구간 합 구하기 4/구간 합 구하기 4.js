const fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.trim())

const n = parseInt(input[0]);
const array = input[1].split(' ').map(Number);
const queries = input.slice(2).map((e) => e.split(' ').map(Number));

const prefixSum = new Array(n + 1).fill(0);

for (let i = 1; i <= n; i++) {
  prefixSum[i] = prefixSum[i - 1] + array[i - 1];
}

const result = [];

for (let i = 0; i < queries.length; i++) {
  const [l, r] = queries[i];
  result.push(prefixSum[r] - prefixSum[l - 1]);
}

console.log(result.join('\n'));