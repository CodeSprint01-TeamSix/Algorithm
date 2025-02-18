const fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((line) => line.trim());

let [col, row] = input.shift().split(' ');
col = parseInt(col);
row = parseInt(row);

input = input.map((e) => e.split(' '));

let array = Array.from({ length: col }, () => Array(row).fill(0));

for (let i = 0; i < col; i++) {
  for (let j = 0; j < row; j++) {
    if (i + col < input.length) {
      array[i][j] = parseInt(input[i][j]) + parseInt(input[i + col][j]);
    }
  }

  console.log(array[i].join(' '));
}