const fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString().trim();

let array = [];
let n = 2;

while (input > 1) {
  if (input % n === 0) {
    input = input / n;
    array.push(n);
  } else {
    n++;
  }
}

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}