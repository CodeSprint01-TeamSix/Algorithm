const fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.trim());

const num = input.shift();

function GCD(a, b) {
  if (b === 0) return a;

  return GCD(b, a % b);
}

function LCM(a, b) {
  return (a * b) / GCD(a, b);
}

for (let i = 0; i < num; i++) {
  input[i] = input[i].split(' ').map(Number);

  console.log(LCM(input[i][0], input[i][1]));
}