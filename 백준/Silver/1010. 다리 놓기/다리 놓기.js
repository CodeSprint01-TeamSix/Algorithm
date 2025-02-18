const fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((line) => line.trim());

input.shift();

function factorial(n) {
  let result = 1;

  while (n > 1) {
    result *= n;
    n--;
  }

  return result;
}

for (let i = 0; i < input.length; i++) {
  let [N, M] = input[i].split(' ');

  console.log((factorial(M) / (factorial(N) * factorial(M - N))).toFixed(0));
}