const fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.split(' ').map(Number));

const cards = new Set(input[1]);
const SANGGEUN = input[3];

const result = [];

for (let i = 0; i < SANGGEUN.length; i++) {
  if (cards.has(SANGGEUN[i])) result.push(1);
  else result.push(0);
}

console.log(result.join(' '));