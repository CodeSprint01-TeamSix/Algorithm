const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const K = Number(input[0]);
const array = input.slice(1).map(Number);
let result = [];

for (let i = 0; i < K; i++) {
  if (array[i] === 0) {
    result.pop();
  } else {
    result.push(array[i]);
  }
}

console.log(result.reduce((prev, cur) => prev + cur, 0));