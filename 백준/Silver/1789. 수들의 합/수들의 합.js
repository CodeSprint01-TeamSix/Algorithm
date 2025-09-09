const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const S = Number(input);

let result = 0;
let count = 0;

for (let i = 1; i <= S; i++) {
  count++;
  result += i;

  if (S < result) {
    return console.log(count - 1);
  } else if (S === result) {
    return console.log(count);
  }
}