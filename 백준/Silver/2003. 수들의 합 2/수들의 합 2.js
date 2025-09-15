const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const array = input[1].split(' ').map(Number);

let left = 0;
let right = 0;
let count = 0;

while (true) {
  const sum = array.slice(left, right + 1).reduce((prev, cur) => prev + cur, 0);

  if (right > N) break;

  if (sum > M) {
    left++;
    right = left;
  } else if (sum < M) {
    right++;
  } else {
    count++;
    left++;
    right = left;
  }
}

console.log(count);