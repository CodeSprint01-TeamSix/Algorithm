const fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.trim());

let [count, divisor] = input;

count = parseInt(count);
divisor = divisor
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

if (count === 1) {
  console.log(Math.pow(divisor, 2));
} else {
  console.log(divisor[0] * divisor[count - 1]);
}