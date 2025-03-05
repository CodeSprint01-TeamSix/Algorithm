const fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.trim());

let [N, nArray, M, mArray] = input;

const nSet = new Set(nArray.split(' '));

const result = mArray.split(' ').map((e) => (nSet.has(e) ? 1 : 0));

console.log(result.join('\n'));