const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);
const array = input[1].split(' ').map(Number);

let left = 0;
let right = K - 1;
let sum = array.slice(left, right + 1).reduce((prev, cur) => prev + cur, 0);
let result = array.slice(left, right + 1).reduce((prev, cur) => prev + cur, 0);

for (let i = 0; i < N - K + 1; i++) {
  left++;
  right++;

  if (right > N - 1) break;

  sum = sum + array[right] - array[left - 1];
  result = Math.max(result, sum);
}

console.log(result);