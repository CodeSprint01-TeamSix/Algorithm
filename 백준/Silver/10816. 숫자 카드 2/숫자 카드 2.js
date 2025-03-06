const fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.trim());

const nArray = input[1].split(' ').map(Number);
const mArray = input[3].split(' ').map(Number);

const countMap = new Map();

for (const num of nArray) {
  countMap.set(num, (countMap.get(num) || 0) + 1);
}

const result = mArray.map((num) => countMap.get(num) || 0);
console.log(result.join(' '));