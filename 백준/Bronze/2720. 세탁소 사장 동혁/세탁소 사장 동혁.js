const fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const N = Number(input.shift());

const coins = [1, 5, 10, 25];

for (let i = 0; i < N; i++) {
  price = Number(input[i]);

  const array = [0, 0, 0, 0];
  let index = coins.length - 1;
  let count = 0;

  while (price !== 0) {
    if (price > coins[index]) {
      price -= coins[index];
      count++;
    } else if (price === coins[index]) {
      price -= coins[index];
      count++;
      array[3 - index] = count;
    } else {
      array[3 - index] = count;
      count = 0;
      index--;
    }
  }

  console.log(array.join(' '));
}