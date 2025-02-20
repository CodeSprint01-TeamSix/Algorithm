const fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.trim());

const N = parseInt(input[0]);

const A = [
  ...input[1]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b),
];

const B = [...input[2].split(' ').map(Number)];

const indexOrder = B.map((value, index) => ({ value, index }))
  .sort((a, b) => b.value - a.value);

let result = [];

for (let i = 0; i < N; i++) {
  result[i] = indexOrder[i].value * A[i];
}
  
console.log(result.reduce((prev, cur) => prev + cur));