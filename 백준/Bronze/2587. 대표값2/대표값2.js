const fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((e) => parseInt(e.trim()));

const average = input.reduce((prev, cur) => prev + cur, 0) / 5;
const medianValue = input.sort((a, b) => a - b)[2];

console.log(average);
console.log(medianValue);