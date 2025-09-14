const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, S] = input[0].split(' ').map(Number);
const array = input[1].split(' ').map(Number);

let left = 0;
let right = 0;
let sum = 0;
let answer = Infinity;

while (true) {
  if (sum < S) {
    if (right === N) break;
    sum += array[right];
    right++;
  } else {
    answer = Math.min(answer, right - left);
    sum -= array[left];
    left++;
  }
}

console.log(answer === Infinity ? 0 : answer);