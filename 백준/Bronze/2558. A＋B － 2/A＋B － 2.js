const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

console.log(parseInt(input[0]) + parseInt(input[1]))