const fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.trim());

const num = parseInt(input[0]);
const array = input[1].split(' ').map(Number);

let maxSum = array.sort((a, b) => a - b).reduce((prev, cur) => prev + cur, 0);
let result = maxSum;

for (let i = num - 1; i > 0; i--) {
  maxSum -= array[i];
  result += maxSum;
}

console.log(result);