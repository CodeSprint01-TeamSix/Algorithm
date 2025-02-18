const fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((line) => line.trim());

input.splice(-1, 1);

for (let i = 0; i < input.length; i++) {
  input[i] = input[i]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);

  if (
    Math.pow(input[i][0], 2) + Math.pow(input[i][1], 2) ===
    Math.pow(input[i][2], 2)
  ) {
    console.log('right');
  } else {
    console.log('wrong');
  }
}