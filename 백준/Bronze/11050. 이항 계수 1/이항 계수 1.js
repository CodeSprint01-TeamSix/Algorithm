const fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

function factorial(n) {
  let result = 1;

  while (n > 1) {
    result *= n;
    n--;
  }

  return result;
}

const [N, K] = input;

console.log(factorial(N) / (factorial(K) * factorial(N - K)));