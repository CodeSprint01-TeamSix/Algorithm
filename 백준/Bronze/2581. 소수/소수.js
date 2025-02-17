const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let primeNumber = [];

for (let i = input[0]; i <= input[1]; i++) {
  if (i === 1) {
    continue;
  }

  let isPrime = true;

  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    primeNumber.push(i);
  }
}

if (primeNumber.length === 0) {
  console.log(-1);
} else {
  console.log(primeNumber.reduce((prev, cur) => prev + cur, 0));
  console.log(primeNumber[0]);
}