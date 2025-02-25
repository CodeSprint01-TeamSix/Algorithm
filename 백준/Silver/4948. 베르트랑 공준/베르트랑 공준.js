const fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((e) => parseInt(e.trim()));

input.pop();

function getPrimeNumber(n) {
  let count = 0;

  for (let i = n + 1; i <= n * 2; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) count++;
  }

  return count;
}

for (let i = 0; i < input.length; i++) {
  console.log(getPrimeNumber(input[i]));
}