const fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, numbers] = input;

const newNumbers = numbers.split(' ').map(Number);

console.log(Math.min(...newNumbers), Math.max(...newNumbers));