const fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString().trim();

const N = parseInt(input);

function fibonacci(num) {
  let array = [0, 1];

  for (let i = 2; i <= num; i++) {
    array[i] = array[i - 1] + array[i - 2];
  }

  return array[num];
}

console.log(fibonacci(N));