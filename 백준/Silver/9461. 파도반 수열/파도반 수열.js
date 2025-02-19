const fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((e) => parseInt(e.trim()));

input.shift();

let array = [1, 1, 1, 2, 2, 3, 4, 5, 7, 9];

if (Math.max(...input) > 10) {
  for (let i = 10; i <= Math.max(...input); i++) {
    array[i] = array[i - 2] + array[i - 3];
  }
}

for (let i = 0; i < input.length; i++) {
  console.log(array[input[i] - 1]);
}