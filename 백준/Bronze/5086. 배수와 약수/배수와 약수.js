const fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.trim());

input.pop();

for (let i = 0; i < input.length; i++) {
  input[i] = input[i].split(' ').map(Number);
  let [num1, num2] = input[i];

  if (num1 < num2 && num2 % num1 === 0) {
    console.log('factor');
  } else if (num1 > num2 && num1 % num2 === 0) {
    console.log('multiple');
  } else {
    console.log('neither');
  }
}