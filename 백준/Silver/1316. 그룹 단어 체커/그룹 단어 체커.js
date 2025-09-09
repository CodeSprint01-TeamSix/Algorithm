const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let N = Number(input[0]);
const words = input.slice(1).map((e) => e.trim());

for (const word of words) {
  let result = [];
  for (let i = 0; i < word.length; i++) {
    if (result.includes(word[i])) {
      N -= 1;
      break;
    }

    if (word[i] !== word[i + 1]) {
      result.push(word[i]);
    }
  }
}

console.log(N);