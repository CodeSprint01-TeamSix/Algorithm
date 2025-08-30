const fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const a = input.shift().split(' ').map(Number);

let price = a[1];

input = input.map(Number).filter((e) => e <= price);

let count = 0;
let index = input.length - 1;

while (price !== 0) {
  if (price >= input[index]) {
    price -= input[index];
    count++;
  } else {
    index--;
  }
}

console.log(count);