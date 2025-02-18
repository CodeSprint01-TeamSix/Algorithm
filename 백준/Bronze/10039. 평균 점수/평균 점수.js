const fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((line) => Math.max(40, parseInt(line.trim())));

console.log(input.reduce((prev, cur) => prev + cur, 0) / 5);