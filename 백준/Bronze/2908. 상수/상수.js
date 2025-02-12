const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

input[0] = input[0].split('').reverse().join('');
input[1] = input[1].split('').reverse().join('');

console.log(Math.max(input[0], input[1]))