const fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const [N, K] = input;
let array = [];

for (let i = 1; i <= N; i++) {
  if (N % i === 0) array.push(i);
  if (array.length >= K) break;
}

const result = array.length < K ? console.log(0) : console.log(array[K - 1]);