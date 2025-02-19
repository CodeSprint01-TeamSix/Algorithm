const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

let result = 0;
let isMinus = false;
let temp = '';

for (let i = 0; i < input.length; i++) {
  if (input[i] === '-') {
    if (isMinus) {
      result -= parseInt(temp);
      isMinus = true;
      temp = '';
    } else {
      result += parseInt(temp);
      isMinus = true;
      temp = '';
    }
  } else if (input[i] === '+') {
    if (isMinus) {
      result -= parseInt(temp);
      temp = '';
    } else {
      result += parseInt(temp);
      temp = '';
    }
  } else {
    temp += input[i];
  }

  if (i === input.length - 1 && temp.length !== 0) {
    if (isMinus) {
      result -= parseInt(temp);
    } else {
      result += parseInt(temp);
    }
  }
}

console.log(result);