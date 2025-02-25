const fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((e) => parseInt(e.trim()));

const N = input.shift();
input.sort((a, b) => a - b);

const average = Math.round(input.reduce((sum, num) => sum + num, 0) / N);
const fixedAverage = average === -0 ? 0 : average;
const median = input[Math.floor(N / 2)];
const range = input[N - 1] - input[0];

let map = new Map();

for (let i = 0; i < N; i++) {
  map.set(input[i], (map.get(input[i]) || 0) + 1);
}

map = [...map].sort((a, b) => b[1] - a[1]);
let result = 0;

if (N === 1) {
  result = input[0];
} else if (map[1][1] === map[0][1]) {
  result = map[1][0];
} else {
  result = map[0][0];
}

console.log(fixedAverage);
console.log(median);
console.log(result);
console.log(range);