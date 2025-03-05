const fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.trim());

input.shift();

const set = new Set(input);

console.log(
  [...set]
    .sort()
    .sort((a, b) => a.length - b.length)
    .join('\n')
);