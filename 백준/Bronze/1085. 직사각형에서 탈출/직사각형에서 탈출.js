const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

console.log(Math.min(input[3] - input[1], input[2] - input[0], input[0], input[1]))