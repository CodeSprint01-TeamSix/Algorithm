const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

input = input.map(Number);

let array = [1, 1, 2, 2, 2, 8];

for(let i = 0; i < array.length; i++) {
    array[i] = array[i] - input[i];
}

console.log(array.join(' '))