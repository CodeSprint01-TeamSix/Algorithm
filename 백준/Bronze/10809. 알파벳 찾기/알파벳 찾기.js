const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim()

let array = Array(26).fill(-1);

for (let i = 0; i < input.length; i++) {
  if (array[input[i].charCodeAt() - 97] === -1) {
    array[input[i].charCodeAt() - 97] = i;
  }
}

console.log(array.join(' '));