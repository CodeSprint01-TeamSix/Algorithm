const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim()

const half = Math.floor(input.length / 2);

// 홀수인 경우
if (input.length % 2) {
  for (let i = 1; i <= half; i++) {
    if (input[half - i] !== input[half + i]) return console.log(0);
  }
} else {
  for (let i = 0; i < half; i++) {
    if (input[half - i - 1] !== input[half + i]) return console.log(0);
  }
}

console.log(1);