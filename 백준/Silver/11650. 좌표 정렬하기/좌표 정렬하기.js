const fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.trim())
  .slice(1);

const result = input
  .map((e) => e.split(' '))
  .sort((a, b) => a[0] - b[0] || a[1] - b[1])
  .map((e) => e.join(' '))
  .join('\n');

console.log(result);