const fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map((e) => Math.pow(e, 2));

console.log(input.reduce((prev, cur) => prev + cur, 0) % 10);